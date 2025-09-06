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
        $dish->load(['ingredients' => function ($query) {
            $query->withPivot(['quantity', 'unit']);
        }]);
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
        // 1️⃣ Dish anlegen
        $dish = Dish::create([
            'id' => Str::uuid()->toString(),
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

        // 3️⃣ Pivot-Tabelle syncen
        $dish->ingredients()->sync($dishIngredients);

        return redirect()->route('dishes.index')
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
        $dish = Dish::with(['ingredients' => function ($query) {
            $query->select('ingredients.id', 'name', 'dish_ingredient.quantity', 'dish_ingredient.unit');
        }])->find($dish->id);
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

        // Model updaten
        $dish->update($validated);

        // Slug ggf. aktualisieren, wenn sich der Name geändert hat
        $dish->refresh();

        return redirect()->route('dishes.show', $dish->slug)
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