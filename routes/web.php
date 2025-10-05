<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\FavoritesController;

Route::get('/', [PageController::class, 'index'])->name('index');

Route::get('/impressum', function () {
    return Inertia::render('Impressum');
});

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/profile.php';
require __DIR__.'/dashboard.php';
require __DIR__.'/community.php';
require __DIR__.'/recipes.php';
require __DIR__.'/ingredients.php';
require __DIR__.'/upload.php';

Route::middleware(['auth'])->group(function () {
    Route::post('/favorites/toggle/{recipe}', [FavoritesController::class, 'toggle'])
        ->name('favorites.toggle');
});

if (config('app.debug')) {
    require __DIR__.'/email.php';
}

// 404 Fallback
Route::fallback(function () {
    return inertia('NotFound', [
        'title' => 'Seite nicht gefunden 🤯',
    ]);
});