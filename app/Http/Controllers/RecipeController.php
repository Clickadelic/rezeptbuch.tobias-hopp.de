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

use App\Models\Recipe;
use App\Enums\Difficulty;
use App\Http\Requests\StoreRecipeRequest;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Str;

class RecipeController extends Controller
{
    /**
     * Displays a list of all recipes.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $recipes = Recipe::with('media')->get();

        return Inertia::render('Recipes/Index', [
            'recipes' => $recipes,
        ]);
    }

    /**
     * Shows a form to create a new recipe.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Recipes/Create', [
            'ingredients' => Ingredient::orderBy('name')->get(),
        ]);
    }

    /**
     * Displays a single recipe.
     *
     * @param  string  $slug
     * @return \Inertia\Response
     */
    public function show(String $slug)
    {   
        $recipe = Recipe::where('slug', $slug)->firstOrFail();
        $recipe->load([
            'ingredients' => function ($query) {
                $query->withPivot(['quantity', 'unit']);
            },
            'media',
        ]);
        return inertia('Recipes/Show', compact('recipe'));
    }

    /**
     * Store a newly created recipe in storage.
     *
     * @param  \App\Http\Requests\StoreRecipeRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    
    public function store(StoreRecipeRequest $request)
    {
        // 1️⃣ recipe anlegen (verwende optional mitgegebenes id für frühes Medien-Handling)
        $recipe = Recipe::create([
            'id' => $request->input('id') ?: Str::uuid()->toString(),
            'name' => $request->input('name'),
            // Slug mit deutscher Sprachunterstützung
            'slug' => $request->input('slug') ?? Str::slug($request->input('name'), '-', 'de'),
            'punchline' => $request->input('punchline'),
            'description' => $request->input('description'),
            'difficulty' => $request->input('difficulty'),
            'rating' => $request->input('rating', 0),
            'preparation_time' => $request->input('preparation_time', 0),
            'user_id' => $request->user()->id,
        ]);

        // 2️⃣ Zutaten aus Request verarbeiten
        $recipeIngredients = collect($request->input('recipe_ingredients', []))
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
        $recipe->ingredients()->sync($recipeIngredients);

        // 3️⃣a Pending-Uploads anhand pending_key diesem Recipe zuordnen
        if ($request->filled('pending_key')) {
            $pendingKey = (string) $request->input('pending_key');
            $collection = 'recipe_images';
            $pendingMedia = \App\Models\Media::where('pending_key', $pendingKey)->get();
            if ($pendingMedia->isNotEmpty()) {
                // Nächste Position bestimmen
                $maxPosition = $recipe->media()->wherePivot('collection', $collection)->max('recipe_media.position');
                $posStart = is_null($maxPosition) ? 0 : ($maxPosition + 1);

                foreach ($pendingMedia as $offset => $m) {
                    $recipe->media()->attach($m->id, [
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
            $mediaIds = $recipe->media()->pluck('media.id')->all();
            if (in_array($primaryId, $mediaIds)) {
                $recipe->media()->updateExistingPivot($mediaIds, ['is_primary' => false]);
                $recipe->media()->updateExistingPivot($primaryId, ['is_primary' => true]);
            }
        }

        return redirect()->route('recipes.show', $recipe->slug)
            ->with('success', 'Gericht erfolgreich erstellt.');
    }

    /**
     * Shows the edit form for a recipe.
     *
     * @param  \App\Models\Recipe  $recipe
     * @return \Inertia\Response
     */
    public function edit(Recipe $recipe)
    {
        $recipe = Recipe::with([
            'ingredients' => function ($query) {
                $query->select('ingredients.id', 'ingredients.name')->withPivot(['quantity', 'unit']);
            },
            'media',
        ])->findOrFail($recipe->id);

        return Inertia::render('Recipes/Edit', [
            'recipe' => $recipe,
            'ingredients' => Ingredient::orderBy('name')->get(),
        ]);
    }

    /**
     * Updates a recipe in storage.
     *
     * @param  \App\Http\Requests\StoreRecipeRequest  $request
     * @param  \App\Models\Recipe  $recipe
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(StoreRecipeRequest $request, Recipe $recipe)
    {
        $validated = $request->validated();

        // Debug Logging..
        if (config('app.debug')) {
            Log::info('Recipe update payload', [
                'recipe_id' => $recipe->id,
                'payload' => $request->all(),
            ]);
        }

        // Optional: Bild speichern, falls hochgeladen (Spalte aktuell nicht vorhanden)
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('recipes', 'public');
        }

        // Slug nicht direkt überschreiben – wird vom Sluggable-Plugin verwaltet
        unset($validated['slug']);

        // 1️⃣ Recipe-Felder aktualisieren
        $recipe->update($validated);

        // 2️⃣ Zutaten aus Request verarbeiten (gleiches Format wie beim Store)
        $recipeIngredients = collect($request->input('recipe_ingredients', []))
            ->mapWithKeys(function ($item) {
                $ingredientValue = trim((string) ($item['ingredient_id'] ?? ''));
                $quantity = $item['quantity'] ?? null;
                $unit = $item['unit'] ?? 'g';

                if (!$ingredientValue) {
                    return [];
                }

                // Existierende Zutat per UUID oder neue Zutat per Name
                if (Str::isUuid($ingredientValue)) {
                    $ingredient = Ingredient::find($ingredientValue);
                } else {
                    $ingredient = Ingredient::firstOrCreate(['name' => $ingredientValue]);
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
            Log::info('Parsed recipe_ingredients for sync', [
                'recipe_id' => $recipe->id,
                'parsed' => $recipeIngredients,
                'has_key' => $request->has('recipe_ingredients'),
            ]);
        }

        // 3️⃣ Pivot-Tabelle syncen
        // Nur synchronisieren, wenn das Feld im Request vorhanden ist.
        if ($request->has('recipe_ingredients')) {
            if (!empty($recipeIngredients)) {
                $recipe->ingredients()->sync($recipeIngredients);
            } else {
                // Wenn explizit ein leeres Array gesendet wurde, Pivot leeren
                $recipe->ingredients()->sync([]);
            }
        }

        // 3️⃣b Primäres Bild setzen (sofern gesendet)
        if ($request->filled('primary_media_id')) {
            $primaryId = $request->input('primary_media_id');
            $mediaIds = $recipe->media()->pluck('media.id')->all();
            // Nur setzen, wenn die Media zum Gericht gehört
            if (in_array($primaryId, $mediaIds)) {
                // Alle auf false
                $recipe->media()->updateExistingPivot($mediaIds, ['is_primary' => false]);
                // Ausgewähltes auf true
                $recipe->media()->updateExistingPivot($primaryId, ['is_primary' => true]);
            }
        }

        // 4️⃣ Slug ggf. aktualisieren
        $recipe->refresh();

        return redirect()
            ->route('recipes.show', $recipe->slug)
            ->with('success', 'Rezept erfolgreich aktualisiert.');
    }

    /**
     * Removes the specified recipe from storage.
     *
     * Also deletes the associated image (if it exists).
     *
     * @param  \App\Models\Recipe  $recipe
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Recipe $recipe)
    {
        // Bild löschen (falls vorhanden)
        if ($recipe->image && file_exists(public_path('uploads/recipes/'.$recipe->image))) {
            unlink(public_path('uploads/recipes/'.$recipe->image));
        }

        Recipe::destroy($recipe->id);

        return redirect()->route('recipes.index')->with('success', 'Rezept gelöscht!');
    }

}