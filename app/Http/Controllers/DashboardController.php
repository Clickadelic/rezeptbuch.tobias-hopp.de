<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Support\Facades\Auth;
use App\Models\Comment;

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


        $recipesCountByCategory = Recipe::where('user_id', auth()->id())
            ->where('status', 'published') // falls du nur veröffentlichte willst
            ->with('category')
            ->groupBy('category_id')
            ->select('category_id')
            ->selectRaw('COUNT(*) as total')
            ->get()
            ->mapWithKeys(function ($item) {
                return [$item->category->name => $item->total];
            });

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
            'totalUserIngredientCount'=> $totalUserIngredientCount,
            'userFavorites'           => $userFavorites,
            'userFavoritesCount'      => $userFavoritesCount,
            'recipesCountByCategory'  => $recipesCountByCategory,
            'recipesUserCountByCategory' => $recipesUserCountByCategory
        ]);
    }
}
