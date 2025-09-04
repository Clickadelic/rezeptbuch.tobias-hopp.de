<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

use App\Models\Ingredient;
use App\Enums\Units;
use App\Http\Requests\StoreIngredientRequest;

class IngredientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ingredients = Ingredient::all();
        return Inertia::render('Ingredients/Index', [
            'ingredients' => $ingredients,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $ingredients = Ingredient::all();
        return Inertia::render('Ingredients/Create', [
            'ingredients' => $ingredients,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIngredientRequest $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Name normalisieren (alles klein, Trim)
        $name = trim(strtolower($validated['name']));

        // Prüfen ob Zutat schon existiert
        $ingredient = Ingredient::whereRaw('LOWER(name) = ?', [$name])->first();

        if ($ingredient) {
            return redirect()->back()->with('error', 'Zutat ' . $name . ' existiert bereits!');
        }

        Ingredient::create([
            'name' => ucfirst($name),
        ]);

        return redirect()->route('ingredients.index')->with('success', 'Zutat angelegt!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ingredient $ingredient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ingredient $ingredient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreIngredientRequest $ingredient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ingredient $ingredient)
    {
        //
    }
}
