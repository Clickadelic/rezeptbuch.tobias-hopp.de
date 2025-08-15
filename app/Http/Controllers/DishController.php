<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dish;
use Inertia\Inertia;

class DishController extends Controller
{
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

    public function show(Dish $dish)
    {
        return Inertia::render('Dishes/Show', [
            'dish' => $dish,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048', // max 2MB
            'description' => 'nullable|string',
            'rating' => 'nullable|numeric',
        ]);

        // $path = $request->file('image')->store('uploads', 'public');
        // $validated['image'] = $path;

        Dish::create($validated);

        return redirect()
            ->route('dishes.index')
            ->with('toast', 'Gericht erfolgreich erstellt!');
    }

    public function edit(Dish $dish)
    {
        return Inertia::render('Dishes/Edit', [
            'dish' => $dish
        ]);
    }

    public function update(Request $request, Dish $dish)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image'=> 'nullable|image|max:2048',
            'description' => 'nullable|string',
        ]);

        $dish->update($validated);

        return redirect()->route('dishes.index')->with('success', 'Gericht aktualisiert!');
    }

}
