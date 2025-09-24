<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailBase;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;

class CustomVerifyEmail extends VerifyEmailBase
{
    /**
     * Erzeuge die Verify-E-Mail mit Branding.
     */
    public function toMail($notifiable)
        
    {
        return (new MailMessage)
            ->subject('Bitte bestätige deine E-Mail-Adresse')
            ->markdown('emails.verify', [
                'user' => $notifiable,
                'verifyUrl' => $this->verificationUrl($notifiable),
            ]);
    }


    /**
     * Custom Verify-URL generieren.
     */
    protected function verificationUrl($notifiable)
    {
        return URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            [
                'id' => $notifiable->getKey(),
                'hash' => sha1($notifiable->getEmailForVerification()),
            ]
        );
    }
}
