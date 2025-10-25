import { useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import InputError from '@/components/forms/inputs/InputError';
import { Plus, Loader2 } from 'lucide-react';
import { SharedPageProps } from '@/types';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function UpdateAvatarForm() {
    const user = usePage<SharedPageProps>().props.auth.user;
    const { data, setData, post, errors, processing, progress } = useForm({
        avatar: null as File | null,
    });
    const [preview, setPreview] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.avatar) return;
        post(route('profile.avatar'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => setPreview(null),
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
                    <img
                        src={preview || (user.avatar ? `/storage/${user.avatar}` : '/img/default-avatar.png')}
                        className="w-16 h-16 rounded-full object-cover border"
                        alt={user.name}
                    />

                    <label
                        htmlFor="avatar"
                        className={cn(
                            'flex flex-col items-center justify-center w-32 h-16 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition',
                            data.avatar && 'border-primary'
                        )}
                    >
                        {processing ? (
                            <Loader2 className="animate-spin text-gray-500" />
                        ) : data.avatar ? (
                            <p className="text-xs text-gray-500">{data.avatar.name}</p>
                        ) : (
                            <>
                                <Plus className="w-5 h-5 text-gray-500" />
                                <span className="text-xs text-gray-500 mt-1">Wählen</span>
                            </>
                        )}
                    </label>

                    <input
                        id="avatar"
                        type="file"
                        name="avatar"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setData('avatar', file);
                                setPreview(URL.createObjectURL(file));
                            }
                        }}
                    />
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

                <Button type="submit" disabled={processing}>
                    Hochladen
                </Button>
            </form>
        </section>
    );
}
