<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RatingController extends Controller
{
    public function store(Request $request, Recipe $recipe)
    {
        $data = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
        ]);

        // Nutzerbewertung speichern oder aktualisieren
        Rating::updateOrCreate(
            ['user_id' => Auth::id(), 'recipe_id' => $recipe->id],
            ['rating' => $data['rating']]
        );

        // Durchschnitt aktualisieren
        $recipe->updateCommunityRating();

        // Wenn du Inertia nutzt, kannst du direkt ein JSON-Response zurückgeben:
        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'Bewertung gespeichert!',
                'community_rating' => $recipe->community_rating,
                'community_votes' => $recipe->community_votes,
            ]);
        }

        return back()->with('success', 'Bewertung gespeichert!');
    }
}
