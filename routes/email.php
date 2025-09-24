<?php

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

// Test-Mail verschicken
Route::get('/mail-test', function () {
    Mail::to('toby.hopp@gmail.com')->send(new TestMail("Test-Mail"));
    return 'Test-Mail wurde gesendet!';
});

// Nur Vorschau der Mail anzeigen (Browser)
Route::get('/mail-preview', function () {
    return new TestMail();
});