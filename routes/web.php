<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\DishController;

Route::get('/', function () {
    return Inertia::render('Frontpage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::prefix('/gerichte')->group(function () {
    Route::get('/', [DishController::class, 'index'])->name('dishes.index');
    Route::get('/neues-gericht', [DishController::class, 'create'])->middleware(['auth', 'verified'])->name('dishes.create');
    Route::post('/', [DishController::class, 'store'])->middleware(['auth', 'verified'])->name('dishes.store');
    Route::get('/{dish}/edit', [DishController::class, 'edit'])->middleware(['auth', 'verified'])->name('dishes.edit');
    Route::put('/{dish}', [DishController::class, 'update'])->middleware(['auth', 'verified'])->name('dishes.update');
    Route::delete('/{dish}', [DishController::class, 'destroy'])->middleware(['auth', 'verified'])->name('dishes.destroy');
    Route::get('/{dish}', [DishController::class, 'show'])->name('dishes.show');
});

Route::get('/cocktails', function () {
    return Inertia::render('Cocktails/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/zutaten', function () {
    return Inertia::render('Zutaten', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/impressum', function () {
    return Inertia::render('Impressum', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
