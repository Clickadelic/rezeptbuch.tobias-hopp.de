<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CocktailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\IngredientController;
use App\Models\User;
use App\Http\Middleware\CheckRole;

Route::prefix('/zutaten')->group(function () {
    Route::get('/', [IngredientController::class, 'index'])->name('ingredients.index');
    Route::get('/neue-zutat', [IngredientController::class, 'create'])->middleware(['auth', 'verified'])->name('ingredients.create');
    Route::post('/', [IngredientController::class, 'store'])->middleware(['auth', 'verified'])->name('ingredients.store');
    Route::get('/{ingredient}/edit', [IngredientController::class, 'edit'])->middleware(['auth', 'verified'])->name('ingredients.edit');
    Route::put('/{ingredient}', [IngredientController::class, 'update'])->middleware(['auth', 'verified'])->name('ingredients.update');
    Route::delete('/{ingredient}', [IngredientController::class, 'destroy'])->middleware(['auth', 'verified'])->name('ingredients.destroy');
    Route::get('/{ingredient}', [IngredientController::class, 'show'])->name('ingredients.show');
});