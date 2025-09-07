<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

// use Illuminate\Support\Facades\Storage;
// use Intervention\Image\Laravel\Facades\Image;

// use Intervention\Image\ImageManager;
// use Intervention\Image\Drivers\Gd\Driver;
use App\Models\Ingredient;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

use App\Models\Dish;
use App\Enums\Difficulty;
use App\Http\Requests\StoreDishRequest;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Str;

class DishController extends Controller
{
    /**
     * Displays a list of all dishes.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $dishes = Dish::all();

        return Inertia::render('Dishes/Index', [
            'dishes' => $dishes,
        ]);
    }

    /**
     * Shows a form to create a new dish.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Dishes/Create', [
            'ingredients' => Ingredient::orderBy('name')->get(),
        ]);
    }

    /**
     * Displays a single dish.
     *
     * @param  string  $slug
     * @return \Inertia\Response
     */
    public function show(String $slug)
    {   
        $dish = Dish::where('slug', $slug)->firstOrFail();
        $dish->load([
            'ingredients' => function ($query) {
                $query->withPivot(['quantity', 'unit']);
            },
            'media',
        ]);
        return inertia('Dishes/Show', compact('dish'));
    }

    /**
     * Store a newly created dish in storage.
     *
     * @param  \App\Http\Requests\StoreDishRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    
    public function store(StoreDishRequest $request)
    {
        // 1️⃣ Dish anlegen (verwende optional mitgegebenes id für frühes Medien-Handling)
        $dish = Dish::create([
            'id' => $request->input('id') ?: Str::uuid()->toString(),
            'name' => $request->input('name'),
            'slug' => $request->input('slug') ?? Str::slug($request->input('name')),
            'punchline' => $request->input('punchline'),
            'description' => $request->input('description'),
            'difficulty' => $request->input('difficulty'),
            'rating' => $request->input('rating', 0),
            'preparation_time' => $request->input('preparation_time', 0),
            'user_id' => $request->user()->id,
        ]);

        // 2️⃣ Zutaten aus Request verarbeiten
        $dishIngredients = collect($request->input('dish_ingredients', []))
            ->mapWithKeys(function ($item) {
                $ingredientName = trim($item['ingredient_id']); // wenn es Text ist
                $quantity = $item['quantity'] ?? null;
                $unit = $item['unit'] ?? 'g';

                // 2a️⃣ Prüfen, ob Zutat schon existiert
                if (Str::isUuid($ingredientName)) {
                    // schon bestehende Zutat per UUID
                    $ingredient = Ingredient::find($ingredientName);
                } else {
                    // neue Zutat anlegen
                    $ingredient = Ingredient::firstOrCreate(['name' => $ingredientName]);
                }

                return [$ingredient->id => ['quantity' => $quantity, 'unit' => $unit]];
            })->toArray();

        // 3️⃣ Pivot-Tabelle syncen (Zutaten)
        $dish->ingredients()->sync($dishIngredients);

        // 3️⃣a Pending-Uploads anhand pending_key diesem Dish zuordnen
        if ($request->filled('pending_key')) {
            $pendingKey = (string) $request->input('pending_key');
            $collection = 'dish_images';
            $pendingMedia = \App\Models\Media::where('pending_key', $pendingKey)->get();
            if ($pendingMedia->isNotEmpty()) {
                // Nächste Position bestimmen
                $maxPosition = $dish->media()->wherePivot('collection', $collection)->max('dish_media.position');
                $posStart = is_null($maxPosition) ? 0 : ($maxPosition + 1);

                foreach ($pendingMedia as $offset => $m) {
                    $dish->media()->attach($m->id, [
                        'collection' => $collection,
                        'is_primary' => false,
                        'position' => $posStart + $offset,
                    ]);
                    // Pending-Flag zurücksetzen
                    $m->pending_key = null;
                    $m->save();
                }
            }
        }

        // 3️⃣b Primäres Bild setzen (sofern gesendet)
        if ($request->filled('primary_media_id')) {
            $primaryId = $request->input('primary_media_id');
            $mediaIds = $dish->media()->pluck('media.id')->all();
            if (in_array($primaryId, $mediaIds)) {
                $dish->media()->updateExistingPivot($mediaIds, ['is_primary' => false]);
                $dish->media()->updateExistingPivot($primaryId, ['is_primary' => true]);
            }
        }

        return redirect()->route('dishes.show', $dish->slug)
            ->with('success', 'Gericht erfolgreich erstellt.');
    }

    /**
     * Shows the edit form for a dish.
     *
     * @param  Dish  $dish
     * @return \Inertia\Response
     */
    public function edit(Dish $dish)
    {
        $dish = Dish::with([
            'ingredients' => function ($query) {
                $query->select('ingredients.id', 'ingredients.name')->withPivot(['quantity', 'unit']);
            },
            'media',
        ])->findOrFail($dish->id);

        return Inertia::render('Dishes/Edit', [
            'dish' => $dish,
            'ingredients' => Ingredient::orderBy('name')->get(),
        ]);
    }

    /**
     * Updates a dish in storage.
     *
     * @param  \App\Http\Requests\StoreDishRequest  $request
     * @param  \App\Models\Dish  $dish
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(StoreDishRequest $request, Dish $dish)
    {
        $validated = $request->validated();

        if (config('app.debug')) {
            Log::info('Dish update payload', [
                'dish_id' => $dish->id,
                'payload' => $request->all(),
            ]);
        }

        // Optional: Bild speichern, falls hochgeladen (Spalte aktuell nicht vorhanden)
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('dishes', 'public');
        }

        // Slug nicht direkt überschreiben – wird vom Sluggable-Plugin verwaltet
        unset($validated['slug']);

        // 1️⃣ Dish-Felder aktualisieren
        $dish->update($validated);

        // 2️⃣ Zutaten aus Request verarbeiten (gleiches Format wie beim Store)
        $dishIngredients = collect($request->input('dish_ingredients', []))
            ->mapWithKeys(function ($item) {
                $ingredientValue = trim((string) ($item['ingredient_id'] ?? ''));
                $quantity = $item['quantity'] ?? null;
                $unit = $item['unit'] ?? 'g';

                if (!$ingredientValue) {
                    return [];
                }

                // Existierende Zutat per UUID oder neue Zutat per Name
                if (\Illuminate\Support\Str::isUuid($ingredientValue)) {
                    $ingredient = \App\Models\Ingredient::find($ingredientValue);
                } else {
                    $ingredient = \App\Models\Ingredient::firstOrCreate(['name' => $ingredientValue]);
                }

                if (!$ingredient) {
                    return [];
                }

                return [
                    $ingredient->id => [
                        'quantity' => $quantity,
                        'unit' => $unit,
                    ],
                ];
            })
            ->toArray();

        if (config('app.debug')) {
            Log::info('Parsed dish_ingredients for sync', [
                'dish_id' => $dish->id,
                'parsed' => $dishIngredients,
                'has_key' => $request->has('dish_ingredients'),
            ]);
        }

        // 3️⃣ Pivot-Tabelle syncen
        // Nur synchronisieren, wenn das Feld im Request vorhanden ist.
        if ($request->has('dish_ingredients')) {
            if (!empty($dishIngredients)) {
                $dish->ingredients()->sync($dishIngredients);
            } else {
                // Wenn explizit ein leeres Array gesendet wurde, Pivot leeren
                $dish->ingredients()->sync([]);
            }
        }

        // 3️⃣b Primäres Bild setzen (sofern gesendet)
        if ($request->filled('primary_media_id')) {
            $primaryId = $request->input('primary_media_id');
            $mediaIds = $dish->media()->pluck('media.id')->all();
            // Nur setzen, wenn die Media zum Gericht gehört
            if (in_array($primaryId, $mediaIds)) {
                // Alle auf false
                $dish->media()->updateExistingPivot($mediaIds, ['is_primary' => false]);
                // Ausgewähltes auf true
                $dish->media()->updateExistingPivot($primaryId, ['is_primary' => true]);
            }
        }

        // 4️⃣ Slug ggf. aktualisieren
        $dish->refresh();

        return redirect()
            ->route('dishes.show', $dish->slug)
            ->with('success', 'Gericht erfolgreich aktualisiert.');
    }




    /**
     * Removes the specified dish from storage.
     *
     * Also deletes the associated image (if it exists).
     *
     * @param  \App\Models\Dish  $dish
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Dish $dish)
    {
        // Bild löschen (falls vorhanden)
        if ($dish->image && file_exists(public_path('uploads/dishes/'.$dish->image))) {
            unlink(public_path('uploads/dishes/'.$dish->image));
        }

        Dish::destroy($dish->id);

        return redirect()->route('dishes.index')->with('success', 'Gericht gelöscht!');
    }

}