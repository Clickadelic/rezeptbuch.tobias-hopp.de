<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminpageController;
use App\Http\Controllers\UploadController;
use App\Models\User;
use App\Http\Middleware\CheckRole;

// TODO: Create AdminController
Route::get('/admin', [AdminpageController::class, 'index'])->middleware([CheckRole::class . ':admin'])->name('admin.index');