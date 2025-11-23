<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminpageController;
use App\Http\Controllers\UploadController;
use App\Models\User;
use App\Http\Middleware\CheckRole;

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::prefix('/admin')->group(function () {
        Route::get('/', [AdminpageController::class, 'index'])->name('admin.index');
        Route::delete('/users/{user}', [AdminpageController::class, 'destroy'])->name('admin.users.destroy');
        Route::post('/users/{user}/role', [AdminpageController::class, 'updateRole'])->name('admin.users.updateRole');
        Route::get('/kontaktanfragen', [AdminpageController::class, 'contactSubmissions'])->name('admin.contactSubmissions.index');
        Route::delete('/kontaktanfragen/{contactSubmission}', [AdminpageController::class, 'destroyContactSubmission'])->name('admin.contactSubmissions.destroy');
    });
});