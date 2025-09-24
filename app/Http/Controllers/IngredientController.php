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
        $ingredients = Ingredient::orderBy('name')->get();;
        return Inertia::render('Ingredients/Index', [
            'ingredients' => $ingredients,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {   
        return redirect()->route('ingredients.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIngredientRequest $request)
    {

        // Name normalisieren (alles klein, Trim)
        $name = trim(strtolower($request['name']));

        // Prüfen ob Zutat schon existiert
        $ingredient = Ingredient::whereRaw('LOWER(name) = ?', [$name])->first();
        
        if ($ingredient) {
            return redirect()->back()->with('error', 'Zutat ' . $name . ' existiert bereits!');
        }

        Ingredient::create([
            'name' => ucfirst($name),
        ]);

        return redirect()->back()->with('success', 'Zutat angelegt!');
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
        $ingredient = Ingredient::find($ingredient->id);
        return Inertia::render('Ingredients/Edit', [
            'ingredient' => $ingredient,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreIngredientRequest $ingredient)
    {
        // Name normalisieren (alles klein, Trim)
        $ingredient = trim(strtolower($ingredient));

        // Prüfen ob Zutat schon existiert
        $ingredient = Ingredient::whereRaw('LOWER(name) = ?', [$ingredient])->first();
        
        if ($ingredient) {
            return redirect()->back()->with('error', 'Zutat ' . $ingredient . ' existiert bereits!');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ingredient $ingredient)
    {   
        $ingredient->delete();
        return redirect()->route('ingredients.index')->with('success', 'Zutat gelöscht!');
    }
}
