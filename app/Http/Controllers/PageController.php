<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Recipe;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    /**
     * Displays a list of all recipes.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $latestRecipe = Recipe::with('media', 'category', 'user')->where('status', 'published')->orderBy('created_at', 'desc')->first();
        $cocktails = Recipe::with('media', 'category', 'user')->inRandomOrder()->where('status', 'published')->where('category_id', 4)->paginate(5);
        $totalRecipeCount = Recipe::where('status', 'published')->count();
        $recipes = Recipe::with('media', 'category', 'user')->inRandomOrder()->where('status', 'published')->where('category_id', '!=', 4)->paginate(5);
        // TODO: FavoritenCheck eventuell in Service auslagern
        if ($user = Auth::user()) {
            $recipes->getCollection()->transform(function ($recipe) use ($user) {
                $recipe->setAttribute(
                    'is_favorite',
                    $recipe->favoritedBy()->where('user_id', $user->id)->exists()
                );
                return $recipe;
            });
        } else {
            // Nicht eingeloggt → alle auf false
            $recipes->getCollection()->transform(function ($recipe) {
                $recipe->setAttribute('is_favorite', false);
                return $recipe;
            });
        }
        return Inertia::render('Frontpage', [
            'latestRecipe' => $latestRecipe,
            'totalRecipeCount' => $totalRecipeCount,
            'recipes' => $recipes,
            'cocktails' => $cocktails
        ]);
    }

    public function appInstallation() {
        return Inertia::render('AppInstallation');
    }

    public function misEnPlace() {
        return Inertia::render('MisEnPlace');
    }

    public function faq() {
        return Inertia::render('Faq');
    }

    public function equipment() {
        return Inertia::render('Equipment');
    }
}