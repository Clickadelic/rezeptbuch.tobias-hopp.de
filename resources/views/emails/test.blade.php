@php
    $username = Auth::user()->name;
@endphp

@component('mail::message')
# Willkommen, {{ $username }} 🎉

Schön, dass du dich registriert hast!

Bitte bestätige deine E-Mail-Adresse, indem du auf den folgenden Button klickst:

@component('mail::button', ['url' => 'https://deinedomain.de/verify'])
E-Mail bestätigen
@endcomponent

Falls du dich nicht registriert hast, kannst du diese E-Mail einfach ignorieren.

Danke,<br>
{{ config('app.name') }}
@endcomponent

