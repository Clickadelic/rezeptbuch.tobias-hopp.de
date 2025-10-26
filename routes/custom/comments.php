<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::prefix('/comments')->group(function () {
    Route::delete('/{comment}', [CommentController::class, 'destroy'])->middleware('auth')->name('comments.destroy');
    Route::patch('/{comment}', [CommentController::class, 'update'])->middleware('auth')->name('comments.update');
});