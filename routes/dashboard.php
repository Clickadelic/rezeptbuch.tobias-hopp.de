<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\CheckRole;

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware([CheckRole::class . ':writer'])->name('dashboard');