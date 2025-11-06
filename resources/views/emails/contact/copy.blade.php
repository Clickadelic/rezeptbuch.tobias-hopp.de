@component('mail::message')
# Danke für Deine Nachricht 🎉

Hallo {{ $name }},

ich habe deine Nachricht erhalten und werde mich so bald wie möglich bei Dir melden.

Hier ist eine Kopie deiner Nachricht:

---

**Name:** {{ $name }}  
**E-Mail:** {{ $email }}

**Nachricht:**
> {!! nl2br(e($messageText)) !!}

---

@component('mail::button', ['url' => config('app.url')])
Zurück zur Website
@endcomponent

Viele Grüße,  
Tobias

Eine Nachricht von {{ config('app.name') }}
@endcomponent
