<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Mail\ContactSubmissionMail;

Route::get('/', [PageController::class, 'index'])->name('index');

require __DIR__.'/custom/auth.php';
require __DIR__.'/custom/admin.php';
require __DIR__.'/custom/community.php';
require __DIR__.'/custom/contact.php';
require __DIR__.'/custom/dashboard.php';
require __DIR__.'/custom/profile.php';
require __DIR__.'/custom/favorites.php';
require __DIR__.'/custom/legal-pages.php';
require __DIR__.'/custom/recipes.php';
require __DIR__.'/custom/ingredients.php';
require __DIR__.'/custom/upload.php';

if (config('app.debug')) {
    require __DIR__.'/custom/email.php';



    Route::get('/mailable-test', function () {
        $data = [
            'name' => 'Max Mustermann',
            'email' => 'max@example.com',
            'message' => "Hallo,\ndas ist eine Testnachricht\nmit Zeilenumbruch.",
        ];

        return new ContactSubmissionMail($data);
    });
}

Route::fallback(function () {
    return inertia('NotFound', [
        'title' => 'Fehler 404 - Seite nicht gefunden',
    ]);
});