<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactSubmissionController;

Route::prefix('/contact-submissions')->group(function () {
    Route::get('/', [ContactSubmissionController::class, 'index'])->name('contact-submissions.index');
    Route::post('/', [ContactSubmissionController::class, 'store'])->name('contact-submissions.store');
    // Route::get('/{recipe}/edit', [ContactSubmissionController::class, 'edit'])->middleware(['auth', 'verified'])->name('contactSubmission.edit');
    // Route::put('/{recipe}', [ContactSubmissionController::class, 'update'])->middleware(['auth', 'verified'])->name('contactSubmission.update');
    // Route::delete('/{recipe}', [ContactSubmissionController::class, 'destroy'])->middleware(['auth', 'verified'])->name('contactSubmission.destroy');
    // Route::get('/suche', [ContactSubmissionController::class, 'search'])->name('contactSubmission.search');
    // Route::get('/{recipe}', [ContactSubmissionController::class, 'show'])->name('contactSubmission.show');
});
