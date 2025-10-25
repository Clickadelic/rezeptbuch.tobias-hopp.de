<?php

namespace App\Http\Controllers;

use App\Http\Middleware\CheckRole;
use Inertia\Inertia;

use App\Models\Ingredient;
use App\Http\Requests\StoreIngredientRequest;

use Illuminate\Support\Facades\Auth;

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
        $userId = Auth::id();
        $originalName = trim($request->input('name'));

        // Prüfen, ob Zutat (case-insensitive) schon existiert
        $ingredient = Ingredient::whereRaw('LOWER(name) = ?', [strtolower($originalName)])->first();

        if ($ingredient) {
            // Flash-Nachricht für Inertia (z. B. Toast im Frontend)
            return back()->with('flash', [
                'error' => $originalName . '" existiert bereits.',
            ]);
        }

        // Neue Zutat mit Originalschreibweise speichern
        Ingredient::create([
            'name' => $originalName,
            'user_id' => $userId
        ]);

        // Erfolgsmeldung als Flash für Inertia
        return back()->with('flash', [
            'success' => $originalName . '" wurde erfolgreich angelegt!',
        ]);
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
        return Inertia::render('Ingredients/Index', [
            'ingredient' => $ingredient,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreIngredientRequest $request, Ingredient $ingredient)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $ingredient->update($validated);

        return back();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ingredient $ingredient)
    {   
        $name = $ingredient->name;

        // Prüfen, ob die Zutat in einem Rezept verwendet wird
        if ($ingredient->recipes()->exists()) {
            return redirect()
                ->route('ingredients.index')
                ->with('error', "Die Zutat {$ingredient->name} kann nicht gelöscht werden, da sie noch verwendet wird.");
        }

        $ingredient->delete();

        return redirect()
            ->route('ingredients.index')
            ->with('success', 'Zutat wurde erfolgreich gelöscht.');
    }

}
