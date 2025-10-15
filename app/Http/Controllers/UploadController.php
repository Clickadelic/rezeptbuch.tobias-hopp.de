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
        $file = $request->file('file');

        // Originaldaten vor dem Verschieben auslesen
        $originalName = $file->getClientOriginalName();
        $originalExt = $file->getClientOriginalExtension();
        $originalMime = $file->getClientMimeType() ?? $file->getMimeType() ?? 'application/octet-stream';
        $originalSize = $file->getSize();

        // Eindeutigen Dateinamen generieren
        $fileName = Str::random(40) . ($originalExt ? ('.' . $originalExt) : '');

        // Zielordner unter storage/app/public/uploads/recipes sicherstellen
        $destDir = storage_path('app/public/uploads/recipes');

        if (!is_dir($destDir)) {
            mkdir($destDir, 0775, true);
        }

        // Datei verschieben
        $file->move($destDir, $fileName);
        
        // Pfad relativ zu storage/app/public (für die Datenbank)
        $path = 'uploads/recipes/' . $fileName;
        
        // Vollständiger Pfad zur Datei für Hash-Berechnung
        $fullPath = storage_path('app/public/' . $path);

        // SHA-256 Hash der gespeicherten Datei berechnen
        $fileHash = hash_file('sha256', $fullPath);

        // Datenbankeintrag erstellen
        $media = Media::create([
            'name' => $originalName,
            'file_name' => $fileName,
            'mime_type' => $originalMime,
            'path' => $path,
            'disk' => 'public',
            'file_hash' => $fileHash,
            'collection' => $request->get('collection', 'default'),
            'size' => $originalSize ?: filesize($fullPath),
        ]);

        // Optional: direkt einem Gericht zuordnen
        if ($request->filled('recipe_id')) {
            $recipe = Recipe::find($request->input('recipe_id'));
            if ($recipe) {
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
            $media->pending_key = (string) $request->input('pending_key');
            $media->save();
        }

        return response()->json(['media' => $media]);
    }

    public function destroy(Media $media)
    {
        $media->delete();
        return response()->json(['message' => 'Gelöscht']);
    }
}