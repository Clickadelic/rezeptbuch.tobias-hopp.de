<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Http\Controllers\CocktailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\IngredientController;
use App\Models\User;
use App\Http\Middleware\CheckRole;

Route::prefix('/cocktails')->group(function () {
    Route::get('/', [CocktailController::class, 'index'])->name('cocktails.index');
    Route::get('/neuer-cocktail', [CocktailController::class, 'create'])->middleware(['auth', 'verified'])->name('cocktails.create');
    Route::post('/', [CocktailController::class, 'store'])->middleware(['auth', 'verified'])->name('cocktails.store');
    Route::get('/{ingredient}/edit', [CocktailController::class, 'edit'])->middleware(['auth', 'verified'])->name('cocktails.edit');
    Route::put('/{ingredient}', [CocktailController::class, 'update'])->middleware(['auth', 'verified'])->name('cocktails.update');
    Route::delete('/{ingredient}', [CocktailController::class, 'destroy'])->middleware(['auth', 'verified'])->name('cocktails.destroy');
    Route::get('/{ingredient}', [CocktailController::class, 'show'])->name('cocktails.show');
});