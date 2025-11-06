<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactSubmissionCopyMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->subject('Kopie deiner Kontaktanfrage')
            ->markdown('emails.contact.copy')
            ->with([
                'name' => $this->data['name'],
                'email' => $this->data['email'],
                'messageText' => $this->data['message'],
            ]);
    }
}
