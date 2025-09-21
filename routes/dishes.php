<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\DishController;
use App\Http\Controllers\CocktailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\IngredientController;
use App\Models\User;
use App\Http\Middleware\CheckRole;


Route::prefix('/gerichte')->group(function () {
    Route::get('/', [DishController::class, 'index'])->name('dishes.index');
    Route::get('/neues-gericht', [DishController::class, 'create'])->middleware(['auth', 'verified'])->name('dishes.create');
    Route::post('/', [DishController::class, 'store'])->middleware(['auth', 'verified'])->name('dishes.store');
    Route::get('/{dish}/edit', [DishController::class, 'edit'])->middleware(['auth', 'verified'])->name('dishes.edit');
    Route::put('/{dish}', [DishController::class, 'update'])->middleware(['auth', 'verified'])->name('dishes.update');
    Route::delete('/{dish}', [DishController::class, 'destroy'])->middleware(['auth', 'verified'])->name('dishes.destroy');
    // Route::get('/{dish}', [DishController::class, 'show'])->name('dishes.show');
    Route::get('/{slug}', [DishController::class, 'show'])->name('dishes.show');
});