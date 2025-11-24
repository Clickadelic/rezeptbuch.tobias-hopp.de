<?php

namespace App\Http\Controllers;

use App\Models\Recipe;

use Illuminate\Http\Request;

class RecipeRatingController extends Controller
{
    public function store(Request $request, Recipe $recipe)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $user = $request->user();
        if (!$user) {
            abort(403);
        }

        // User-Rating updaten oder neu erstellen
        $recipe->ratings()->updateOrCreate(
            ['user_id' => $user->id],
            ['rating' => $request->rating]
        );

        // Community-Rating und Votes aktualisieren
        $recipe->community_votes = $recipe->ratings()->count();
        $recipe->community_rating = round($recipe->ratings()->avg('rating'), 2);
        $recipe->save();

        return response()->json([
            'community_rating' => $recipe->community_rating,
            'community_votes' => $recipe->community_votes,
        ]);
    }
}

