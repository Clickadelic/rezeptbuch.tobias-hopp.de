import { useForm, usePage, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import InputError from '@/components/forms/inputs/InputError';
import { Plus, Loader2 } from 'lucide-react';
import { SharedPageProps } from '@/types';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { VscTrash } from 'react-icons/vsc';

export default function UpdateAvatarForm() {
    const user = usePage<SharedPageProps>().props.auth.user;

    const { data, setData, post, errors, processing, progress } = useForm({
        avatar: null as File | null,
    });

    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (data.avatar) setPreview(URL.createObjectURL(data.avatar));
    }, [data.avatar]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.avatar) return;

        post(route('profile.avatar'), {
            forceFormData: true,
            preserveScroll: true,
            headers: { 'Accept': 'application/json' }, // <-- wichtig
            onSuccess: () => setData('avatar', null),
        });
    };

    const handleDelete = () => {
        router.delete(route('profile.avatar.destroy'), {
            preserveScroll: true,
            headers: { 'Accept': 'application/json' }, // <-- wichtig
            onSuccess: () => {
                setPreview(null);
                router.reload({ only: ['auth.user'] });
            },
        });
    };

    return (
        <section>
            <header className="mb-2">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Profilbild ändern
                </h2>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <div className="flex items-center gap-4">
                    {(preview || user.avatar) && (
                        <div className="relative">
                            <img
                                src={preview || '/storage/' + user.avatar}
                                className="w-16 h-16 rounded-full object-cover"
                                alt={user.name}
                            />
                            <Button
                                type="button"
                                variant="destructive"
                                className="absolute top-0 right-0 p-1 rounded-full opacity-70 hover:opacity-100"
                                onClick={handleDelete}
                            >
                                <VscTrash className="w-4 h-4" />
                            </Button>
                        </div>
                    )}

                    <label
                        htmlFor="avatar"
                        className={cn(
                            'flex flex-col items-center justify-center rounded-full p-3 px-4 border-2 border-dashed cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition',
                            data.avatar && 'border-primary'
                        )}
                    >
                        {processing ? (
                            <Loader2 className="animate-spin text-gray-500" />
                        ) : data.avatar ? (
                            <p className="text-xs text-gray-500">{data.avatar.name}</p>
                        ) : (
                            <div className="mt-2">
                                <Plus className="w-5 h-5 text-gray-500" />
                                <span className="text-xs text-gray-500 mt-1">Wählen</span>
                            </div>
                        )}
                        <input
                            id="avatar"
                            type="file"
                            name="avatar"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setData('avatar', file);
                            }}
                        />
                    </label>
                </div>

                {progress && (
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${progress.percentage}%` }}
                        />
                    </div>
                )}

                <InputError message={errors.avatar} className="mt-2" />

                <Button type="submit" disabled={processing || !data.avatar}>
                    Hochladen
                </Button>
            </form>
        </section>
    );
}
