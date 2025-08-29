<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class Dish extends Model
{
     use HasFactory;
     protected $keyType = 'string';

     
     protected $fillable = [
          'name',
          'punchline',
          'description',
          'preparation_time',
          'rating',
          'difficulty',
          'image'
     ];

     protected $casts = [
          'preparation_time' => 'integer',
          'rating' => 'integer',
     ];

     protected $attributes = [
          'difficulty' => 'einfach',
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

     public function getImageUrlAttribute(): ?string
     {
          return $this->image ? asset($this->image) : null;
     }
}
