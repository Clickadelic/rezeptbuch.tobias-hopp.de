<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserPublicResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\MediaResource;

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
            'user_id' => new UserPublicResource($this->whenLoaded('user_id')),
            'category_id' => new CategoryResource($this->whenLoaded('category_id')),
            'name' => $this->name,
            'status' => $this->status,
            'slug' => $this->slug,
            'punchline' => $this->when(isset($this->punchline), $this->punchline),
            'description' => $this->when(isset($this->description), $this->description),
            'difficulty' => $this->when(isset($this->difficulty), $this->difficulty),
            'community_rating' => $this->community_rating,
            'community_votes' => $this->community_votes,
            'is_veggy' => $this->is_veggy,
            'preparation_time' => $this->preparation_time,
            'preparation_instructions' => $this->preparation_instructions,
            'created_at' => optional($this->created_at)->toDateTimeString(),
            'updated_at' => optional($this->updated_at)->toDateTimeString(),
            // Relations: use whenLoaded or wrap in Resource to control fields
            'media' => MediaResource::collection($this->whenLoaded('media')),
            'is_favorite'=> $this->when(Auth::check(), function () {
                return $this->favoritedBy()->where('user_id', Auth::id())->exists();
            }, false),
            'category' => $this->whenLoaded('category', function () {
                return [
                    'id' => $this->category->id,
                    'name' => $this->category->name,
                    'slug' => $this->category->slug,
                ];
            }),
        ];
    }
}
