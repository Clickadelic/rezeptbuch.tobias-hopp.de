<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Shows the dashboard for the current user.
     * 
     * @return \Inertia\Response
     */
    public function index() {
        $totalRecipeCount = Recipe::all()->count();
        $userRecipes = Recipe::where('user_id', Auth::id())->get();
        $latestRecipe = Recipe::latest()->first();
        $ingredientCount = Ingredient::all()->count();
        return Inertia::render('Dashboard', [
            'totalRecipeCount' => $totalRecipeCount,
            'userRecipes' => $userRecipes,
            'latestRecipe' => $latestRecipe,
            'ingredientCount' => $ingredientCount
        ]);
    }
}
