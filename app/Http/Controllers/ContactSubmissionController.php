<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactSubmissionRequest;
use App\Models\ContactSubmission;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactSubmissionMail;
use App\Mail\ContactSubmissionCopyMail;
use Inertia\Inertia;

class ContactSubmissionController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function store(ContactSubmissionRequest $request)
    {
        $data = $request->validated();
        $submission = ContactSubmission::create($data);

        // 🔹 1. Mail an Admin
        Mail::to('admin@example.com')
            ->send(new ContactSubmissionMail($data));

        // 🔹 2. Optionale Kopie an Absender (z. B. Checkbox im Formular)
        if ($request->boolean('send_copy')) {
            Mail::to($data['email'])
                ->send(new ContactSubmissionCopyMail($data));
        }

        return redirect()->back()->with('success', 'Vielen Dank für deine Nachricht!');
    }
}
