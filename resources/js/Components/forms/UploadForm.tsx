'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';

export default function UploadForm() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            setError('Bitte wähle eine Datei aus.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('collection', 'avatars'); // optional, passt zu deinem Controller

        try {
            await axios.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true, // falls Laravel sessionbasiert (web Middleware)
            });

            setSuccess('Datei erfolgreich hochgeladen!');
            setFile(null);
        } catch (err: any) {
            // Laravel Validation Errors
            if (err.response?.data?.errors?.file?.[0]) {
                setError(err.response.data.errors.file[0]);
            } else {
                setError(err.response?.data?.message || 'Upload fehlgeschlagen.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <Label htmlFor="file">Datei auswählen</Label>
                <div className="asd">
                    <Input
                        id="file"
                        type="file"
                        accept="image/png,image/jpg,image/jpeg"
                        className="invisible p-12 border-dashed border-2 border-gray-400 hover:border-primary w-full rounded-xl"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                </div>

            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}

            <Button type="submit" disabled={loading}>
                {loading ? 'Lädt...' : 'Hochladen'}
            </Button>
        </form>
    );
}
