<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\Ingredient;


use Cviebrock\EloquentSluggable\Sluggable;


class Recipe extends Model
{
     use HasFactory;

     use Sluggable;

     public $incrementing = false;

     protected $primaryKey = 'id';
     protected $keyType = 'string';

     protected $fillable = [
          'id',
          'name',
          'slug',
          'punchline',
          'description',
          'preparation_time',
          'preparation_instructions',
          'rating',
          'difficulty',
          'user_id',
          'category_id'
     ];

     protected $casts = [
          'preparation_time' => 'integer',
          'rating' => 'integer',
          'category_id' => 'integer',
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
}
