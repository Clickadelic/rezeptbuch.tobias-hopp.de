<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\UploadController;
use App\Models\User;
use App\Http\Middleware\CheckRole;

Route::post('/upload', UploadController::class)->middleware(['auth', 'verified'])->name('upload');
Route::delete('/upload/{media}', [UploadController::class, 'destroy'])->middleware(['auth', 'verified'])->name('upload.destroy');