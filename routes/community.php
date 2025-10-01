<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommunityController;

Route::get('/community', [CommunityController::class, 'index'])->name('Community/Index');