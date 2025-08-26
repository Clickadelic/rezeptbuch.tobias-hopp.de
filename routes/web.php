<?php

use App\Http\Controllers\ProfileController;
// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\DishController;

Route::get('/', function () {
    return Inertia::render('Frontpage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

// Reihenfolge beachten, wird von oben nach unten abgearbeitet
Route::middleware(['auth', 'verified'])->group(function () {
    Route::group(['prefix' => 'gerichte'], function () {
        
    });
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
