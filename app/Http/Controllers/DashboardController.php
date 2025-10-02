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
    public function index()
    {
        // Neueste Rezept
        $latestRecipe = Recipe::latest()->with(['media', 'category'])->first();

        // Globale Counts
        $totalRecipeCount = Recipe::count();
        $totalIngredientCount = Ingredient::count();

        // Benutzerbezogene Counts
        $totalUserRecipeCount = Recipe::where('user_id', Auth::id())->count();


        return Inertia::render('Dashboard', [
            'latestRecipe'            => $latestRecipe,
            'totalUserRecipeCount'    => $totalUserRecipeCount,

            'totalRecipeCount'        => $totalRecipeCount,
            'totalIngredientCount'    => $totalIngredientCount,
        ]);
    }

}
