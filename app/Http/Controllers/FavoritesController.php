<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

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
}