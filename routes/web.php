<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\FavoritesController;
use App\Http\Middleware\CheckRole;

Route::get('/', [PageController::class, 'index'])->name('index');

Route::get('/test', function () {
    return Inertia::render('Test');
});

Route::get('/impressum', function () {
    return Inertia::render('Impressum');
});

Route::get('/favorites', [FavoritesController::class, 'getFavorites'])->middleware([CheckRole::class . ':user'])->name('recipes.favorites');
Route::post('/favorites/toggle/{recipe}', [FavoritesController::class, 'toggle'])->middleware([CheckRole::class . ':user'])->name('favorites.toggle');

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/profile.php';
require __DIR__.'/dashboard.php';
require __DIR__.'/community.php';
require __DIR__.'/recipes.php';
require __DIR__.'/ingredients.php';
require __DIR__.'/upload.php';



if (config('app.debug')) {
    require __DIR__.'/email.php';
}

// 404 Fallback
Route::fallback(function () {
    return inertia('NotFound', [
        'title' => 'Seite nicht gefunden',
    ]);
});