@component('mail::message')
# Hallo {{ $user->name }} 👋

Willkommen bei **{{ config('app.name') }}**!

Bitte bestätige deine E-Mail-Adresse, indem du auf den Button klickst:

@component('mail::button', ['url' => $verifyUrl])
E-Mail bestätigen
@endcomponent

Falls du dich nicht registriert hast, kannst du diese E-Mail einfach ignorieren.

Danke,<br>
{{ config('app.name') }} Team
@endcomponent
