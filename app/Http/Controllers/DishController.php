<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

use App\Models\Dish;
use App\Enums\Difficulty;
use App\Http\Requests\StoreDishRequest;

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
        $data = $request->validated();

        // Bild speichern
        if ($request->hasFile('image')) {
            $filename = uniqid() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('uploads/dishes'), $filename);
            $data['image'] = $filename; // nur Dateiname speichern
        }

        $data['slug'] = str($data['name'])->slug('-', 'de', $dictionary = ['@' => 'de']);

        // Aktuellen User automatisch zuweisen
        $data['user_id'] = Auth::id();

        // Difficulty in Enum konvertieren
        if (isset($data['difficulty'])) {
            $data['difficulty'] = Difficulty::from($data['difficulty']);
        }

        // Gericht erstellen
        Dish::create($data);

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
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $filename = uniqid() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('uploads/dishes'), $filename);
            $data['image'] = $filename;

            if ($dish->image && file_exists(public_path('uploads/dishes/'.$dish->image))) {
                unlink(public_path('uploads/dishes/'.$dish->image));
            }
        }

        $dish->update($data);

        return redirect()
            ->route('dishes.index')
            ->with('success', 'Gericht aktualisiert!');
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
