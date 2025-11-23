<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactSubmissionController;

// Contact form
Route::prefix('/kontakt')->group(function () {
    Route::get('/', [ContactSubmissionController::class, 'index'])->name('contact-submissions.index');
    Route::post('/', [ContactSubmissionController::class, 'store'])->name('contact-submissions.store');
});
