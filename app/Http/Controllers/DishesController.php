<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dishes;
use Inertia\Inertia;

class DishesController extends Controller
{
    
    public function index()
    {
        $dishes = Dishes::all();
        
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
        // $input = $request->all();
        // Dishes::create($input);
        // return redirect()->route('dishes.index');
        $dish = new Dishes();
        $dish->name = $request->name;
        $dish->description = $request->description;
        $dish->rating = $request->rating;
        $dish->image_url = $request->image_url;
        $dish->save();
    }
}




