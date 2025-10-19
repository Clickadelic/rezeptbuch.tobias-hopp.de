<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IngredientController;

Route::prefix('/zutaten')->group(function () {
    Route::get('/', [IngredientController::class, 'index'])->name('ingredients.index');
    Route::get('/neue-zutat', [IngredientController::class, 'create'])->middleware(['auth', 'verified'])->name('ingredients.create');
    Route::post('/', [IngredientController::class, 'store'])->middleware(['auth', 'verified'])->name('ingredients.store');
    Route::get('/{ingredient}/edit', [IngredientController::class, 'edit'])->middleware(['auth', 'verified'])->name('ingredients.edit');
    Route::put('/{ingredient}', [IngredientController::class, 'update'])->middleware(['auth', 'verified'])->name('ingredients.update');
    Route::delete('/{ingredient}', [IngredientController::class, 'destroy'])->middleware(['auth', 'verified'])->name('ingredients.destroy');
    Route::get('/{ingredient}', [IngredientController::class, 'show'])->name('ingredients.show');
});