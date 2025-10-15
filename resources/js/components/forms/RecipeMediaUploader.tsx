import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { Button } from '@/components/ui/button';
import imageCompression from 'browser-image-compression';

export function RecipeMediaUploader({ recipeId, pendingKey, onUploadedJSON }: {
    recipeId?: string;
    pendingKey?: string;
    onUploadedJSON?: (m: {
        id: number;
        path: string;
        name: string;
        url?: string;
        pivot?: any;
    }) => void;
}) {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Bild nach Auswahl direkt clientseitig komprimieren
     */
    const handleFileChange = async (rawFile: File | null) => {
        if (!rawFile) return;
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(rawFile, options);

            console.log(
                `Original: ${(rawFile.size / 1024 / 1024).toFixed(2)} MB → Komprimiert: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`,
            );

            setFile(compressedFile);
        } catch (err) {
            console.error('Fehler bei der Bildkompression:', err);
            setError('Bild konnte nicht komprimiert werden.');
        }
    };

    /**
     * Bild an Server senden
     */
    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('collection', 'recipe_images');

            if (recipeId) formData.append('recipe_id', recipeId);
            if (pendingKey) formData.append('pending_key', pendingKey);

            // Axios bevorzugt, ansonsten fetch
            const res = await (window.axios?.post?.('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' },
                withCredentials: true,
            }) ?? fetch('/upload', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
                credentials: 'include',
            }));

            // Response normalisieren
            if (res && 'data' in (res as any)) {
                onUploadedJSON?.((res as any).data.media);
            } else if (res instanceof Response) {
                const json = await res.json();
                onUploadedJSON?.(json.media);
            }

            setFile(null);
        } catch (e: any) {
            console.error('Upload-Fehler:', e);
            setError(e?.response?.data?.message || 'Upload fehlgeschlagen (Recipe Media Uploader).');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-3">
            {/* Drag & Drop / File Picker */}
            <label className="relative w-full flex flex-col items-center justify-center py-6 text-center border-2 border-dashed border-primary rounded-md hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <GoPlus className="text-primary text-4xl" />
                <span className="mt-2 text-sm text-gray-500">Bild auswählen</span>

                <input
                    type="file"
                    name="file" // <- unbedingt setzen
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                />
            </label>

            {/* Info zur ausgewählten Datei */}
            {file && (
                <div className="text-sm text-gray-600">
                    Datei bereit: <strong>{file.name}</strong> ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </div>
            )}

            {/* Upload Button */}
            <Button
                type="button"
                onClick={handleUpload}
                disabled={loading || !file}
                variant="primary"
                className="w-full hover:cursor-pointer"
            >
                {loading ? 'Lädt…' : 'Bild hochladen'}
            </Button>

            {/* Fehlermeldung */}
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}
