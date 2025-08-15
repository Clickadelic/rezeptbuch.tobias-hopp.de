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

        return Inertia::render('Gerichte/Index', [
            'dishes' => $dishes,
        ]);
    }

    public function create()
    {
        return Inertia::render('Gerichte/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'rating'      => 'nullable|integer|min:1|max:5',
            'image_url'   => 'nullable|url'
        ]);

        Dish::create($validated);

        return redirect()->route('dishes.index')
            ->with('success', 'Gericht erfolgreich erstellt ✅');
    }

}
