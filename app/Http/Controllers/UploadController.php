<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use App\Models\Media;
use Illuminate\Support\Facades\Storage;

class UploadController
{
    /**
     * Handle file upload
     */
    public function __invoke(StoreMediaRequest $request)
    {
        // Gate::authorize('upload-files'); // vorerst auskommentiert

        $file = $request->file('file');

        // Eindeutigen Dateinamen generieren
        $fileName = $file->hashName();

        // Datei auf public Disk speichern
        $path = $file->storeAs('avatars', $fileName, 'public');

        // Vollständigen Pfad zur gespeicherten Datei ermitteln
        $storedFilePath = Storage::disk('public')->path($path);

        // SHA-256 Hash der gespeicherten Datei berechnen
        $fileHash = hash_file('sha256', $storedFilePath);

        // Datenbankeintrag erstellen
        Media::create([
            'name' => $file->getClientOriginalName(),                  // Originalname
            'file_name' => $fileName,                                   // gespeicherter Name
            'mime_type' => $file->getMimeType() ?? 'application/octet-stream', // MIME-Typ
            'path' => $path,                                           // Speicherpfad
            'disk' => 'public',                                        // Disk
            'file_hash' => $fileHash,                                  // Datei-Hash
            'collection' => $request->get('collection', 'default'),    // Collection
            'size' => $file->getSize(),                                 // Größe in Bytes
        ]);

        return redirect()->back()->with('success', 'Datei erfolgreich hochgeladen.');
    }
}
