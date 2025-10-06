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
        $recipes = Recipe::with('media', 'category', 'user')->inRandomOrder()->paginate(5);
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
            'recipes' => $recipes,
        ]);
    }
}