<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Cocktail;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

use App\Models\Dish;
use App\Http\Requests\StoreCocktailRequest;

class CocktailController extends Controller
{
    /**
     * Displays a list of all cocktails.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $cocktails = Cocktail::all();

        return Inertia::render('Cocktails/Index', [
            'cocktails' => $cocktails,
        ]);
    }

    public function create()
    {
        return Inertia::render('Cocktails/Create');
    }

    public function show(String $slug)
    {
        $cocktail = Cocktail::where('slug', $slug)->firstOrFail();
        return Inertia::render('Cocktails/Show', compact('cocktail'));
    }

    public function store(StoreCocktailRequest $request)
    {
        $validated = $request->validated();

        // Model anlegen
        $cocktail = Cocktail::create($validated);

        return redirect()->route('dishes.index')
            ->with('success', 'Gericht erfolgreich erstellt.');
    }

    public function edit(Dish $dish)
    {
        return Inertia::render('Dishes/Edit', [
            'dish' => $dish
        ]);
    }

    public function update(StoreCocktailRequest $request, Cocktail $cocktail)
    {
        $validated = $request->validated();

        // Model updaten
        $cocktail->update($validated);

        // Slug ggf. aktualisieren, wenn sich der Name geändert hat
        $cocktail->refresh();

        return redirect()->route('cocktails.show', $cocktail->slug)
                        ->with('success', 'Gericht erfolgreich aktualisiert.');
    }

    public function destroy(Cocktail $cocktail)
    {
        Cocktail::destroy($cocktail->id);
        return redirect()->route('cocktails.index')->with('success', 'Cocktail gelöscht!');
    }

}