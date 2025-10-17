<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\Ingredient;
use Laravel\Scout\Searchable;
use Cviebrock\EloquentSluggable\Sluggable;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class Recipe extends Model
{
     use HasFactory;

     use Sluggable;

     use Searchable;

     public $incrementing = false;

     protected $primaryKey = 'id';
     protected $keyType = 'string';

     protected $fillable = [
          'id',
          'name',
          'status',
          'slug',
          'punchline',
          'description',
          'preparation_time',
          'preparation_instructions',
          'difficulty',
          'is_veggy',
          'rating',
          'community_rating',
          'community_votes',
          'user_id',
          'category_id'
     ];

     protected $casts = [
          'preparation_time' => 'integer',
          'status' => 'string',
          'rating' => 'integer',
          'community_rating' => 'integer',
          'community_votes' => 'integer',
          'category_id' => 'integer',
          'is_veggy' => 'boolean',
     ];

    /**
     * Boot the model.
     *
     * @return void
     */
     protected static function booted()
     {
          static::creating(function ($model) {
               if (empty($model->id)) {
                    $model->id = (string) Str::uuid();
               }
          });
     }

     public function sluggable(): array
     {
          return [
               'slug' => [
                    'source' => 'name'
               ]
          ];
     }

     public function getRouteKeyName()
     {
          return 'slug';
     }

     /**
      * Use a Mutator to always set the slug attribute.
      *
      * @param  string  $value
      * @return void
      */
     public function setSlugAttribute($value)
     {
          // Wenn leer: aus Name generieren
          if (empty($value) && !empty($this->attributes['name'])) {
               $this->attributes['slug'] = Str::slug($this->attributes['name'], '-', 'de');
          } else {
               $this->attributes['slug'] = Str::slug($value, '-', 'de');
          }
     }

     public function user()
     {
          return $this->belongsTo(User::class);
     }

     public function category()
     {
          return $this->belongsTo(Category::class);
     }

     public function ingredients()
     {
     return $this->belongsToMany(Ingredient::class, 'recipe_ingredient')
          ->using(RecipeIngredient::class) // Pivot Model
          ->withPivot('quantity', 'unit')
          ->withTimestamps();
     }

     public function media()
     {
          return $this->belongsToMany(Media::class, 'recipe_media')
               ->withPivot('collection', 'is_primary', 'position')
               ->withTimestamps()
               ->orderBy('recipe_media.position');
     }

     public function toSearchableArray(): array
     {
          return [
               'name' => $this->name,
               'punchline' => $this->punchline,
               'slug' => $this->slug,
               'difficulty' => $this->difficulty,
               'description' => $this->description,
          ];
     }

     public function favoritedBy()
     {
          return $this->belongsToMany(User::class, 'favorites')->withTimestamps();
     }

     public function getIsFavoriteAttribute(): bool
     {
          $userId = Auth::id();
          if (!$userId) return false;
          return $this->favoritedBy()->where('user_id', $userId)->exists();
     }

     public function ratings()
     {
          return $this->hasMany(Rating::class);
     }

    public function updateCommunityRating(): void
    {
        $avg = $this->ratings()->avg('rating') ?? 0;
        $count = $this->ratings()->count();

        $this->update([
            'community_rating' => round($avg),
            'community_votes' => $count,
        ]);
    }
}
