<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

use App\Notifications\CustomVerifyEmail;

/**
 * @property \Illuminate\Database\Eloquent\Collection<int, \App\Models\Recipe> $favorites
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

    /**
     * Hook to execute after a user is created.
     *
     * Assigns the user the 'user' role.
     */
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

    /**
     * Get all recipes favorited by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function favorites()
    {
        return $this->belongsToMany(Recipe::class, 'favorites')->withTimestamps();
    }

    /**
     * Checks if the user has favorited the given recipe.
     *
     * @param \App\Models\Recipe $recipe
     * @return bool
     */
    public function hasFavorite(Recipe $recipe): bool
    {
        return $this->favorites()->where('recipe_id', $recipe->id)->exists();
    }

    
    /**
     * Returns a relation to all comments written by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments() {
        return $this->hasMany(Comment::class);
    }

}
