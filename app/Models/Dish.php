<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Enums\Difficulty;

use Cviebrock\EloquentSluggable\Sluggable;


class Dish extends Model
{
     use HasFactory;
     protected $keyType = 'string';

     
     protected $fillable = [
          'id',
          'name',
          'slug',
          'punchline',
          'description',
          'preparation_time',
          'rating',
          'difficulty',
          'image',
          'user_id'
     ];

     protected $casts = [
          'preparation_time' => 'integer',
          'rating' => 'integer',
          'difficulty' => Difficulty::class
     ];


     public $incrementing = false;


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

     public function getImageUrlAttribute(): ?string
     {
          return $this->image ? asset('uploads/dishes' . $this->image) : null;
     }

     public function user()
     {
          return $this->belongsTo(User::class);
     }
}
