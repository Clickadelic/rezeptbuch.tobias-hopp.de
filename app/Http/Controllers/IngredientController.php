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
            'dishes' => $ingredients,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $dishes = Ingredient::all();
        return Inertia::render('Dishes/Index', [
            'dishes' => $dishes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIngredientRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id();
        $data['unit'] = Units::from($data['unit']);
        Ingredient::create($data);
        return redirect()->route('ingredients.index')->with('success', 'Zutat erfolgreich erstellt!');
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
