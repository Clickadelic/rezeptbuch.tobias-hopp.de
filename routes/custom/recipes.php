<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\CommentController;

Route::prefix('/rezepte')->group(function () {
    Route::get('/', [RecipeController::class, 'index'])->name('recipes.index');
    Route::get('/neu', [RecipeController::class, 'create'])->middleware(['auth', 'verified'])->name('recipes.create');
    Route::post('/', [RecipeController::class, 'store'])->middleware(['auth', 'verified'])->name('recipes.store');
    Route::get('/{recipe}/edit', [RecipeController::class, 'edit'])->middleware(['auth', 'verified'])->name('recipes.edit');
    Route::put('/{recipe}', [RecipeController::class, 'update'])->middleware(['auth', 'verified'])->name('recipes.update');
    Route::delete('/{recipe}', [RecipeController::class, 'destroy'])->middleware(['auth', 'verified'])->name('recipes.destroy');
    Route::get('/suche', [RecipeController::class, 'search'])->name('recipes.search');
    Route::get('/{recipe}', [RecipeController::class, 'show'])->name('recipes.show');
    
    // Publish
    Route::post('/{recipe}/toggle-publish', [RecipeController::class, 'togglePublish'])->name('recipes.togglePublish');
    
    // Rate
    Route::post('/{recipe}/rate', [RatingController::class, 'store'])->middleware('auth')->name('recipes.rate');

    // Comments JSON
    Route::get('/{recipe}/comments', [CommentController::class, 'index'])->name('comments.index');
    Route::post('/{recipe}/comments', [CommentController::class, 'store'])->middleware('auth')->name('comments.store');

    
});
