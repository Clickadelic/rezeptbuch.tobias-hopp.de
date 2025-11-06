@component('mail::message')
# 📬 Neue Kontaktanfrage

Es ist eine neue Nachricht über das Kontaktformular eingegangen:

---

**Name:** {{ $name }}  
**E-Mail:** {{ $email }}

**Nachricht:**
> {!! nl2br(e($messageText)) !!}

---

@component('mail::button', ['url' => config('app.url') . '/admin/contact-submissions'])
Kontakt öffnen
@endcomponent

Mit freundlichen Grüßen,  
{{ config('app.name') }}
@endcomponent
