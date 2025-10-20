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
        $allUserRecipes = Recipe::all()->where('user_id', Auth::id());

        // Alle Favoriten des Users:
        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();
        $userFavoritesCount = $userFavorites->count();

        return Inertia::render('Dashboard', [
            // 'alert' => 'Wichtige Ankündigung: Neue Rezepte verfügbar!',
            'allUserRecipes'          => $allUserRecipes,
            'latestRecipe'            => $latestRecipe,
            'totalUserRecipeCount'    => $totalUserRecipeCount,
            'totalRecipeCount'        => $totalRecipeCount,
            'totalIngredientCount'    => $totalIngredientCount,
            'userFavorites'           => $userFavorites,
            'userFavoritesCount'      => $userFavoritesCount,
        ]);
    }

}
