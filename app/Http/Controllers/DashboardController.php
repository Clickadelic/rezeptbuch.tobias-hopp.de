<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Recipe;
use App\Models\Ingredient;

class DashboardController extends Controller
{
    public function index() {
        $recipeCount = Recipe::all()->count();
        $ingredientCount = Ingredient::all()->count();
        return Inertia::render('Dashboard', [
            'recipeCount' => $recipeCount,
            'ingredientCount' => $ingredientCount
        ]);
    }
}
