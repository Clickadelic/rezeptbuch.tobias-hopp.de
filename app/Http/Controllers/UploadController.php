<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use App\Models\Media;
use Illuminate\Support\Str;
use App\Models\Dish;
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

        // Originaldaten vor dem Verschieben auslesen
        $originalName = $file->getClientOriginalName();
        $originalExt = $file->getClientOriginalExtension();
        $originalMime = $file->getClientMimeType() ?? $file->getMimeType() ?? 'application/octet-stream';
        $originalSize = $file->getSize();

        // Eindeutigen Dateinamen generieren (ohne Abhängigkeit zu tmp-Datei)
        $fileName = Str::random(40) . ($originalExt ? ('.' . $originalExt) : '');

        // Zielordner unter public/uploads/dishes sicherstellen
        $destDir = public_path('uploads/dishes');
        if (!is_dir($destDir)) {
            mkdir($destDir, 0775, true);
        }

        // Datei nach public verschieben
        $file->move($destDir, $fileName);
        $path = 'uploads/dishes/' . $fileName; // Relativ zu public

        // SHA-256 Hash der gespeicherten Datei berechnen (auf Basis der verschobenen Datei)
        $fileHash = hash_file('sha256', public_path($path));

        // Datenbankeintrag erstellen
        $media = Media::create([
            'name' => $originalName,                                   // Originalname
            'file_name' => $fileName,                                   // gespeicherter Name
            'mime_type' => $originalMime,                               // MIME-Typ
            'path' => $path,                                           // Speicherpfad relativ zu public
            'disk' => 'public',                                        // Logischer Diskname
            'file_hash' => $fileHash,                                  // Datei-Hash
            'collection' => $request->get('collection', 'default'),    // Collection
            'size' => $originalSize ?: filesize(public_path($path)),    // Größe in Bytes
        ]);

        // Optional: direkt einem Gericht zuordnen
        if ($request->filled('dish_id')) {
            /** @var \\App\\Models\\Dish|null $dish */
            $dish = Dish::find($request->input('dish_id'));
            if ($dish) {
                // Nächste Position innerhalb der Collection bestimmen
                $collection = $request->get('collection', 'default');
                $maxPosition = $dish->media()->wherePivot('collection', $collection)->max('dish_media.position');
                $position = is_null($maxPosition) ? 0 : ($maxPosition + 1);

                $dish->media()->attach($media->id, [
                    'collection' => $collection,
                    'is_primary' => false,
                    'position' => $position,
                ]);
            }
        } elseif ($request->filled('pending_key')) {
            // Kein Dish vorhanden: Media als "pending" markieren
            $media->pending_key = (string) $request->input('pending_key');
            $media->save();
        }

        // Always return JSON to simplify frontend handling
        return response()->json(['media' => $media]);
    }
}
