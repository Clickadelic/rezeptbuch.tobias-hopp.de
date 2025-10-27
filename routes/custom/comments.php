<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::middleware('auth')->prefix('comments')->group(function () {
    Route::patch('/{comment}', [CommentController::class, 'update'])->name('comments.update');
    Route::delete('/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');
});