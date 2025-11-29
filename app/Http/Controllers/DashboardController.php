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
        $recipesCountByCategory = Recipe::where('status', 'published')
            ->with('category')
            ->groupBy('category_id')
            ->select('category_id')
            ->selectRaw('COUNT(*) as total')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->category->name => $item->total];
            });

        // Nur aktueller User (und nur published)
        $recipesUserCountByCategory = Recipe::join('categories', 'categories.id', '=', 'recipes.category_id')
            ->where('recipes.user_id', auth()->id())
            ->where('recipes.status', 'published')
            ->groupBy('recipes.category_id', 'categories.name')
            ->select('categories.name', DB::raw('COUNT(*) as total'))
            ->pluck('total', 'name');
        
        // Benutzerbezogene Favoriten
        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user:id,name'])->where('status', 'published')->get();
        
        // Globale Counts
        $totalRecipeCount = Recipe::count();
        $totalIngredientCount = Ingredient::count();
        $totalUserIngredientCount = Ingredient::where('user_id', Auth::id())->count();

        // Benutzerbezogene Counts
        $totalUserRecipes = Recipe::where('user_id', Auth::id())->with(['category', 'user:id,name'])->orderBy('created_at', 'desc')->paginate(10)->withQueryString();
        $totalUserRecipeCount = Recipe::where('user_id', Auth::id())->count();
        
        // Benutzerbezogene Zutaten
        $totalUserIngredients = Ingredient::where('user_id', Auth::id())->with(['recipes' => fn($q) => $q->where('status', 'published')])->get();
        $totalUserIngredientCount = Ingredient::where('user_id', Auth::id())->count();

        // Alle Favoriten des Users:
        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();
        $userFavoritesCount = $userFavorites->count();

        return Inertia::render('Dashboard/Index', [
            'alert' => 'Wichtige Ankündigung: Neue Rezepte verfügbar!',
            'comments'            => $comments,
            'totalRecipeCount'        => $totalRecipeCount,
            'totalIngredientCount'    => $totalIngredientCount,
            'totalUserRecipes'        => $totalUserRecipes,
            'totalUserRecipeCount'    => $totalUserRecipeCount,
            'totalUserIngredients'    => $totalUserIngredients,
            'totalUserIngredientCount' => $totalUserIngredientCount,
            'userFavorites'           => $userFavorites,
            'userFavoritesCount'      => $userFavoritesCount,
            'recipesCountByCategory'  => $recipesCountByCategory,
            'recipesUserCountByCategory' => $recipesUserCountByCategory
        ]);
    }

    public function myRecipes () {
        $userRecipes = Recipe::where('user_id', Auth::id())->with(['category', 'media', 'comments'])->orderBy('created_at', 'desc')->paginate(10)->withQueryString();
        $userFavorites = Auth::user()->favorites()->with(['media', 'category', 'user'])->where('status', 'published')->get();
        return Inertia::render('Dashboard/Recipes', [
            'userRecipes' => $userRecipes,
            'userFavorites' => $userFavorites
        ]);
    }

    public function myIngredients () {
        return Inertia::render('Dashboard/Ingredients');
    }

    public function myFavorites () {
        return Inertia::render('Dashboard/Favorites');
    }
}
