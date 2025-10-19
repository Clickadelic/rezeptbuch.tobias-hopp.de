<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\FavoritesController;
use App\Http\Middleware\CheckRole;

Route::get('/favorites', [FavoritesController::class, 'getFavorites'])->middleware([CheckRole::class . ':user'])->name('recipes.favorites');
Route::post('/favorites/toggle/{recipe}', [FavoritesController::class, 'toggle'])->middleware([CheckRole::class . ':user'])->name('favorites.toggle');
