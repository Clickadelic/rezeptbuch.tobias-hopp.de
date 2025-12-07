<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\CheckRole;

Route::prefix('/dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->middleware([CheckRole::class . ':user,admin'])->name('dashboard');
    Route::get('/rezepte', [DashboardController::class, 'MyRecipes'])->middleware([CheckRole::class . ':user,admin'])->name('dashboard.recipes');
    Route::get('/rezepte/data', [DashboardController::class, 'userRecipeData'])->middleware([CheckRole::class . ':user,admin'])->name('dashboard.recipes.data');
    Route::get('/zutaten', [DashboardController::class, 'MyIngredients'])->middleware([CheckRole::class . ':user,admin'])->name('dashboard.ingredients');
    Route::get('/favoriten', [DashboardController::class, 'MyFavorites'])->middleware([CheckRole::class . ':user,admin'])->name('dashboard.favorites');
});
