<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Dish extends Model
{
     use HasFactory;
     protected $keyType = 'string';

     protected $fillable = ['name', 'description'];

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
}
