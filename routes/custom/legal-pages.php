<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/impressum', function () {
    return Inertia::render('Disclaimer');
});
Route::get('/datenschutz', function () {
    return Inertia::render('TermsOfPrivacy');
});
Route::get('/cookie-hinweis', function () {
    return Inertia::render('CookieNotice');
});
Route::get('/nutzungsbedingungen', function () {
    return Inertia::render('TermsOfUse');
});