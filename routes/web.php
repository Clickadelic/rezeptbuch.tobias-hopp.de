<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

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

if (config('app.debug')) {
    require __DIR__.'/email.php';
}