<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Enums\Units;

class Ingredient extends Model
{   
    use HasFactory;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'name',
        'amount',
        'unit',
        'user_id'
    ];

    public function user()
     {
          return $this->belongsTo(User::class);
     }
}
