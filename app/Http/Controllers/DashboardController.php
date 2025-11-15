<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Comment;
use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Support\Facades\DB;
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
        
        $comments = Comment::where('user_id', Auth::id())
            ->with(['recipe', 'user'])
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();


        // Global
        $recipesCountByCategory = Recipe::join('categories', 'categories.id', '=', 'recipes.category_id')
            ->groupBy('recipes.category_id', 'categories.name')
            ->select('categories.name', DB::raw('COUNT(*) as total'))
            ->pluck('total', 'name');

        // Nur aktueller User (und nur published)
        $recipesUserCountByCategory = Recipe::join('categories', 'categories.id', '=', 'recipes.category_id')
            ->where('recipes.user_id', auth()->id())
            ->where('recipes.status', 'published')
            ->groupBy('recipes.category_id', 'categories.name')
            ->select('categories.name', DB::raw('COUNT(*) as total'))
            ->pluck('total', 'name');

        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();

        // Globale Counts
        $totalRecipeCount = Recipe::count();
        $totalIngredientCount = Ingredient::count();
        $totalUserIngredientCount = Ingredient::where('user_id', Auth::id())->count();

        // Benutzerbezogene Counts
        $totalUserRecipeCount = Recipe::where('user_id', Auth::id())->count();
        $totalUserRecipes = Recipe::where('user_id', Auth::id())->with(['category', 'user'])->orderBy('created_at', 'desc')->paginate(10)->withQueryString();

        $totalUserIngredientCount = Ingredient::where('user_id', Auth::id())->count();

        // Alle Favoriten des Users:
        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();
        $userFavoritesCount = $userFavorites->count();

        return Inertia::render('Dashboard/Index', [
            'alert' => 'Wichtige Ankündigung: Neue Rezepte verfügbar!',
            'comments'            => $comments,
            'totalUserRecipeCount'    => $totalUserRecipeCount,
            'totalUserRecipes'        => $totalUserRecipes,
            'totalRecipeCount'        => $totalRecipeCount,
            'totalIngredientCount'    => $totalIngredientCount,
            'totalUserIngredientCount' => $totalUserIngredientCount,
            'userFavorites'           => $userFavorites,
            'userFavoritesCount'      => $userFavoritesCount,
            'recipesCountByCategory'  => $recipesCountByCategory,
            'recipesUserCountByCategory' => $recipesUserCountByCategory
        ]);
    }
}
