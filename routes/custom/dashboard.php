<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\CheckRole;

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware([CheckRole::class . ':user,admin'])->name('dashboard');
Route::get('/dashboard/meine-rezepte', [DashboardController::class, 'myRecipes'])->middleware([CheckRole::class . ':user,admin'])->name('my-recipes');
Route::get('/dashboard/meine-zutaten', [DashboardController::class, 'myIngredients'])->middleware([CheckRole::class . ':user,admin'])->name('my-ingredients');
Route::get('/dashboard/meine-favoriten', [DashboardController::class, 'myFavorites'])->middleware([CheckRole::class . ':user,admin'])->name('my-favorites');