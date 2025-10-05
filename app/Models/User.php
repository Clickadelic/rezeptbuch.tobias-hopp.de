<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

use App\Notifications\CustomVerifyEmail;

/**
 * @method \Illuminate\Support\Collection getRoleNames()
 * @method \Illuminate\Support\Collection getAllPermissions()
 */
class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'avatar' => 'string',
        ];
    }

    protected static function booted()
    {
        static::created(function ($user) {
            $user->assignRole('user');
        });
    }

    /**
     * Relation: Ein User kann viele Gerichte haben
     */
    public function recipes()
    {
        return $this->hasMany(Recipe::class);
    }

    /**
     * Relation: Ein User kann viele Zutaten haben
     */
    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    /**
     * Override der Standard-Verify-Mail.
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new CustomVerifyEmail);
    }

    public function favorites()
    {
        return $this->belongsToMany(Recipe::class, 'favorites')->withTimestamps();
    }

    public function hasFavorite(Recipe $recipe): bool
    {
        return $this->favorites()->where('recipe_id', $recipe->id)->exists();
    }

}
