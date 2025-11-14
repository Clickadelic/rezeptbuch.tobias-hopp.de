<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/app-installation', [PageController::class, 'appInstallation'])->name('appInstallation');

