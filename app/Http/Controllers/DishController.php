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

    public function create()
    {
        return Inertia::render('Dishes/Create');
    }

    public function show(String $slug)
    {
        $dish = Dish::where('slug', $slug)->firstOrFail();
        return Inertia::render('Dishes/Show', compact('dish'));
    }

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
                $amount = $item['amount'] ?? null;
                $unit = $item['unit'] ?? 'g';

                // 2a️⃣ Prüfen, ob Zutat schon existiert
                if (Str::isUuid($ingredientName)) {
                    // schon bestehende Zutat per UUID
                    $ingredient = Ingredient::find($ingredientName);
                } else {
                    // neue Zutat anlegen
                    $ingredient = Ingredient::firstOrCreate(['name' => $ingredientName]);
                }

                return [$ingredient->id => ['amount' => $amount, 'unit' => $unit]];
            })->toArray();

        // 3️⃣ Pivot-Tabelle syncen
        $dish->ingredients()->sync($dishIngredients);

        return redirect()->route('dishes.index')
            ->with('success', 'Gericht erfolgreich erstellt.');
    }

    public function edit(Dish $dish)
    {
        return Inertia::render('Dishes/Edit', [
            'dish' => $dish
        ]);
    }

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