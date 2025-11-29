<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\RecipeRatingController;
use App\Http\Controllers\CommentController;

Route::prefix('/rezepte')->group(function () {
    Route::get('/', [RecipeController::class, 'index'])->name('recipes.index');
    Route::get('/neu', [RecipeController::class, 'create'])->middleware(['auth', 'verified'])->name('recipes.create');
    Route::post('/', [RecipeController::class, 'store'])->middleware(['auth', 'verified'])->name('recipes.store');
    Route::get('/{recipe}/edit', [RecipeController::class, 'edit'])->middleware(['auth', 'verified'])->name('recipes.edit');
    Route::put('/{recipe}', [RecipeController::class, 'update'])->middleware(['auth', 'verified'])->name('recipes.update');
    Route::delete('/{recipe}', [RecipeController::class, 'destroy'])->middleware(['auth', 'verified'])->name('recipes.destroy');
    Route::get('/suche', [RecipeController::class, 'search'])->name('recipes.search');

    // Kategorie-Ansicht, z.B. /rezepte/kategorie/cocktail
    Route::get('/kategorie', [RecipeController::class, 'showByCategoryRoot'])->name('recipes.CategoryRoot');
    Route::get('/kategorie/{category:slug}', [RecipeController::class, 'showByCategory'])->name('recipes.byCategory');

    // Single recipe
    Route::get('/{recipe}', [RecipeController::class, 'show'])->name('recipes.show');

    // Publish toggle
    Route::post('/{recipe}/toggle-publish', [RecipeController::class, 'togglePublish'])->name('recipes.togglePublish');

    // Rate recipe
    Route::post('/{recipe:id}/rate', [RecipeRatingController::class, 'store'])->middleware('auth')->name('recipes.rate');

    // Comments (JSON + Create)
    Route::get('/{recipe}/comments', [CommentController::class, 'index'])->name('comments.index');
    Route::post('/{recipe}/comments', [CommentController::class, 'store'])->middleware('auth')->name('comments.store');
    Route::patch('/comments/{comment}', [CommentController::class, 'update'])->middleware('auth')->name('comments.update');
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->middleware('auth')->name('comments.destroy');

    // Duplicate Post
    Route::post('/{recipe:slug}/duplicate', [RecipeController::class, 'duplicate'])->name('recipes.duplicate');
});

