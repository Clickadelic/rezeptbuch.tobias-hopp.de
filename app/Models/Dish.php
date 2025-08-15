<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
     use HasFactory;
     protected $fillable = ['name', 'description', 'rating', 'image_url'];

     // Mit protected $table = "dishes"; kann man quasi den bestehenden Tabellennamen überschreiben und z.B. von Singular auf Plural setzen.
     // Dieser wird dann von Laravel automatisch erkannt und verwendet.
     // protected $table = "dishes";
     // protected $table = "dish";
}
