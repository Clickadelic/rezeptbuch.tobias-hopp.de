<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/app-installation', [PageController::class, 'appInstallation'])->name('appInstallation');
Route::get('/mis-en-place', [PageController::class, 'misEnPlace'])->name('mis-en-place');
Route::get('/ausstattung', [PageController::class, 'equipment'])->name('equipment');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');