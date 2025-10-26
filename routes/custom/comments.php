<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::prefix('/comments')->group(function () {
    Route::get('/{recipe}', [CommentController::class, 'index'])->name('comments.index');
    Route::delete('/{comment}', [CommentController::class, 'destroy'])->middleware('auth')->name('comments.destroy');
    // TODO: Check ob das raus kann
    // Route::put('/comments/{comment}', [CommentController::class, 'update'])->middleware('auth')->name('comments.update');
    Route::patch('/{comment}', [CommentController::class, 'update'])->middleware('auth')->name('comments.update');
});