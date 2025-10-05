<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

class FavoritesController extends Controller
{
    public function toggle(Request $request, string $recipeId)
    {
        $user = $request->user();

        $recipe = Recipe::findOrFail($recipeId);

        $exists = $user->favorites()->where('recipe_id', $recipe->id)->exists();

        if ($exists) {
            $user->favorites()->detach($recipe->id);
        } else {
            $user->favorites()->attach($recipe->id);
        }

        return back()->with('success', $exists ? 'Favorit entfernt' : 'Favorit hinzugefügt');
    }

    public function getFavorites(Request $request)
    {
        $user = Auth::user();

        $recipes = Recipe::with(['media', 'category', 'user'])
            ->whereHas('favoritedBy', fn ($q) => $q->where('user_id', $user->id))
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        // Favoritenstatus markieren (optional – zur UI-Kompatibilität)
        $recipes->getCollection()->transform(function ($recipe) use ($user) {
            $recipe->setAttribute(
                'is_favorite',
                $recipe->favoritedBy()->where('user_id', $user->id)->exists()
            );
            return $recipe;
        });

        return Inertia::render('Recipes/Favorites', [
            'recipes' => $recipes,
        ]);
    }
}