<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {   
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        // Profilbild hinzufügen
        if($request->hasFile('avatar')) {
            // altes Bild löschen
            if($request->user()->avatar && Storage::disk('public')->exists($request->user()->avatar)) {
                // Wenn in der Tabelle ein Pfad steht
                // und hinter dem Pfad wirklich eine Datei existiert
                Storage::disk('public')->delete($request->user()->avatar); // löschen
            }

            // Bild in public-Ordner speichern:
            $path = $request->file('avatar')->store('uploads/avatars', 'public');
            $request->user()->avatar = $path; // fügt dem Benutzer den Pfad zum Bild zu
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with('success', 'profile-updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
