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
}




