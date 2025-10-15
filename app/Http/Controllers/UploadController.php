<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use App\Models\Media;
use Illuminate\Support\Str;
use App\Models\Recipe;

class UploadController
{
    /**
     * Handle file upload
     */
    public function __invoke(StoreMediaRequest $request)
    {
        // Gate::authorize('upload-files'); // vorerst auskommentiert
        dd($request->all(), $request->file('file'));

        $file = $request->file('file');

        // Originaldaten vor dem Verschieben auslesen
        $originalName = $file->getClientOriginalName();
        $originalExt = $file->getClientOriginalExtension();
        $originalMime = $file->getClientMimeType() ?? $file->getMimeType() ?? 'application/octet-stream';
        $originalSize = $file->getSize();

        // Eindeutigen Dateinamen generieren (ohne Abhängigkeit zu tmp-Datei)
        $fileName = Str::random(40) . ($originalExt ? ('.' . $originalExt) : '');

        // Zielordner unter public/uploads/recipes sicherstellen
        $destDir = storage_path('uploads/recipes');
        if (!is_dir($destDir)) {
            mkdir($destDir, 0775, true);
        }

        // Datei nach public verschieben
        $file->move($destDir, $fileName);
        $path = 'uploads/recipes/' . $fileName; // Relativ zu public

        // SHA-256 Hash der gespeicherten Datei berechnen (auf Basis der verschobenen Datei)
        $fileHash = hash_file('sha256', storage_path($path));

        // Datenbankeintrag erstellen
        $media = Media::create([
            'name' => $originalName,                                   // Originalname
            'file_name' => $fileName,                                   // gespeicherter Name
            'mime_type' => $originalMime,                               // MIME-Typ
            'path' => $path,                                           // Speicherpfad relativ zu public
            'disk' => 'public',                                        // Logischer Diskname
            'file_hash' => $fileHash,                                  // Datei-Hash
            'collection' => $request->get('collection', 'default'),    // Collection
            'size' => $originalSize ?: filesize(storage_path($path)),    // Größe in Bytes
        ]);

        // Optional: direkt einem Gericht zuordnen
        if ($request->filled('recipe_id')) {
            /** @var \\App\\Models\\recipe|null $recipe */
            $recipe = Recipe::find($request->input('recipe_id'));
            if ($recipe) {
                // Nächste Position innerhalb der Collection bestimmen
                $collection = $request->get('collection', 'default');
                $maxPosition = $recipe->media()->wherePivot('collection', $collection)->max('recipe_media.position');
                $position = is_null($maxPosition) ? 0 : ($maxPosition + 1);

                $recipe->media()->attach($media->id, [
                    'collection' => $collection,
                    'is_primary' => false,
                    'position' => $position,
                ]);
            }
        } elseif ($request->filled('pending_key')) {
            // Kein recipe vorhanden: Media als "pending" markieren
            $media->pending_key = (string) $request->input('pending_key');
            $media->save();
        }

        // Always return JSON to simplify frontend handling
        return response()->json(['media' => $media]);
    }

    public function destroy(Media $media)
    {
        $media->delete();
        return response()->json(['message' => 'Gelöscht']);
    }
}
