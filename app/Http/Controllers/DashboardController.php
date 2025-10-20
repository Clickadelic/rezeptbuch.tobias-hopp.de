<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\User;
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
        $totalUserCount = User::all()->count();
        $recipesCountByCategory = Recipe::groupBy('category_id')
            ->with('category')
            ->select('category_id')
            ->selectRaw('COUNT(*) as total')
            ->get()
            ->pluck('total', 'category.name');

        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();

        // Globale Counts
        $totalRecipeCount = Recipe::count();
        $totalIngredientCount = Ingredient::count();

        // Benutzerbezogene Counts
        $totalUserRecipeCount = Recipe::where('user_id', Auth::id())->count();
        $totalUserRecipes = Recipe::where('user_id', Auth::id())->with(['category', 'user'])->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        // Alle Favoriten des Users:
        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();
        $userFavoritesCount = $userFavorites->count();

        return Inertia::render('Dashboard', [
            // 'alert' => 'Wichtige Ankündigung: Neue Rezepte verfügbar!',
            'latestRecipe'            => $latestRecipe,
            'totalUserRecipeCount'    => $totalUserRecipeCount,
            'totalUserRecipes'        => $totalUserRecipes,
            'totalRecipeCount'        => $totalRecipeCount,
            'totalIngredientCount'    => $totalIngredientCount,
            'userFavorites'           => $userFavorites,
            'userFavoritesCount'      => $userFavoritesCount,
            'recipesCountByCategory'  => $recipesCountByCategory,
            'totalUserCount'          => $totalUserCount
        ]);
    }
}
