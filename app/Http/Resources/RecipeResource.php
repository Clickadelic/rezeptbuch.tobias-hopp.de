<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\MediaResource;

use Illuminate\Support\Facades\Log;

class RecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'status' => $this->status,
            'slug' => $this->slug,
            'punchline' => $this->punchline,
            'description' => $this->description,
            'difficulty' => $this->difficulty,
            'is_veggy' => $this->is_veggy,
            'preparation_time' => $this->preparation_time,
            'preparation_instructions' => $this->preparation_instructions,
            'community_rating' => $this->community_rating,
            'community_votes' => $this->community_votes,
            'created_at' => optional($this->created_at)->toDateTimeString(),
            'updated_at' => optional($this->updated_at)->toDateTimeString(),

            // Anzahl der Kommentare (Top-Level)
            'comments_count' => $this->comments_count ?? $this->comments()->count(),

            // Zutaten mit Pivot-Daten
            'ingredients' => $this->ingredients->map(function ($ingredient) {
                return [
                    'id'       => $ingredient->id,
                    'name'     => $ingredient->name,
                    'quantity' => $ingredient->pivot->quantity,
                    'unit'     => $ingredient->pivot->unit,
                ];
            }),

            // Media wie bisher über Resource
            'media' => $this->whenLoaded('media', fn() =>
                $this->media->map(fn($m) => (new MediaResource($m))->toArray($request))
            ),

            // Kategorie
            'category' => $this->whenLoaded('category', fn() => [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug,
            ]),

            // User
            'user' => $this->whenLoaded('user', fn() => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'avatar' => $this->user->avatar_url,
            ]),

            'user_id' => $this->user_id,

            // Favoriten-Status
            'is_favorite' => Auth::check()
                ? $this->favoritedBy()->where('user_id', Auth::id())->exists()
                : false,

            // User-Vote, falls vorhanden
            'user_vote' => optional(
                $this->votes()->where('user_id', Auth::id())->first()
            )->rating,
        ];
    }
}
