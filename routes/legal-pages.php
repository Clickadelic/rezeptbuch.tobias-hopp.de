<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/impressum', function () {
    return Inertia::render('Impressum');
});
Route::get('/datenschutz', function () {
    return Inertia::render('Datenschutz');
});
Route::get('/cookie-hinweis', function () {
    return Inertia::render('CookieHinweis');
});
Route::get('/nutzungsbedingungen', function () {
    return Inertia::render('Nutzungsbedingungen');
});