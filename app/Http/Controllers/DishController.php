<?php

namespace App\Http\Controllers;

use App\Models\Dish;
use App\Http\Requests\StoreDishRequest;
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

    public function store(StoreDishRequest $request)
    {
        Dish::create($request->validated());

        return redirect()
            ->route('dishes.index')
            ->with('success', 'Gericht erstellt!');
    }

    public function edit(Dish $dish)
    {
        return Inertia::render('Dishes/Edit', [
            'dish' => $dish
        ]);
    }

    public function update(StoreDishRequest $request, Dish $dish)
    {
        $dish->update($request->validated());

        return redirect()
            ->route('dishes.index')
            ->with('toast', 'Gericht aktualisiert!');
    }

    public function destroy(Dish $dish)
    {
        $dish->delete();

        return redirect()
            ->route('dishes.index')
            ->with('success', 'Gericht gelöscht!');
    }
}
