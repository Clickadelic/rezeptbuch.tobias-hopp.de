<?php

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use App\Models\User;

// Test-Mail verschicken
Route::get('/mail-test', function () {
    Mail::to('toby.hopp@gmail.com')->send(new TestMail("Test-Mail"));
    return 'Test-Mail wurde gesendet!';
});

// Nur Vorschau der Mail anzeigen (Browser)
Route::get('/mail-preview', function () {
    return new TestMail();
});

Route::get('/mail-debug', function () {
    // 1) Aktuelle Mail-Config auslesen
    $mailConfig = [
        'MAIL_MAILER'   => config('mail.mailer'),
        'MAIL_HOST'     => config('mail.host'),
        'MAIL_PORT'     => config('mail.port'),
        'MAIL_USERNAME' => config('mail.username'),
        'MAIL_FROM'     => config('mail.from.address'),
        'MAIL_ENCRYPTION' => config('mail.encryption'),
    ];

    // 2) Versuchen, eine Test-Mail zu senden
    try {
        Mail::raw('Das ist ein Mail-Debug-Test.', function ($message) {
            $message->to('toby.hopp@gmail.com')
                    ->subject('Mail Debug Test');
        });
        $mailStatus = '✅ Mail wurde erfolgreich versendet (oder in log geschrieben, falls MAIL_MAILER=log)';
    } catch (\Exception $e) {
        $mailStatus = '❌ Fehler beim Versand: ' . $e->getMessage();
    }

    return response()->json([
        'smtp_config' => $mailConfig,
        'mail_status' => $mailStatus,
    ]);
});

Route::get('/verify-debug', function () {
    $user = User::first(); // Oder eine bestimmte ID
    $url = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        [
            'id' => $user->id,
            'hash' => sha1($user->email),
        ]
    );

    return $url;
});