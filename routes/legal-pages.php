<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/impressum', function () {
    return Inertia::render('Impressum');
});
Route::get('/datenschutz', function () {
    return Inertia::render('Datenschutz');
});
Route::get('/cookies', function () {
    return Inertia::render('Cookies');
});
Route::get('/nutzungsbedingungen', function () {
    return Inertia::render('Nutzungsbedingungen');
});