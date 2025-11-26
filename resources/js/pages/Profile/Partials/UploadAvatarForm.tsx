import { useForm, usePage, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import InputError from '@/components/forms/inputs/InputError';
import { Plus, Loader2 } from 'lucide-react';
import { SharedPageProps } from '@/types';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { VscTrash } from 'react-icons/vsc';

import { PiUserCirclePlusFill } from 'react-icons/pi';
import { FiUpload } from 'react-icons/fi';
import cameraBro from '@images/svg/Camera-bro.svg';

interface UpdateAvatarFormProps {
    className?: string;
}

/**
 * A form to update the user's avatar.
 *
 * @param {string} [className] - An optional class name to apply to the form.
 *
 * @returns {JSX.Element} - The rendered form component.
 */
export default function UpdateAvatarForm({ className }: UpdateAvatarFormProps) {
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
            headers: { Accept: 'application/json' }, // <-- wichtig
            onSuccess: () => setData('avatar', null),
        });
    };

    const handleDelete = () => {
        router.delete(route('profile.avatar.destroy'), {
            preserveScroll: true,
            headers: { Accept: 'application/json' }, // <-- wichtig
            onSuccess: () => {
                setPreview(null);
                router.reload({ only: ['auth.user'] });
            },
        });
    };

    return (
        <section className={cn('asd', className)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                <div className="order-2 lg:order-1">
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 w-full sm:w-64"
                        encType="multipart/form-data"
                    >
                        <div className="w-full flex justify-evenly items-center gap-4">
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
                                        title="Profilbild löschen"
                                        aria-label="Profilbild löschen"
                                        className="bg-rose-500 text-white absolute -bottom-3 -right-1 px-[10px] rounded-full opacity-100 hover:opacity-80"
                                        onClick={handleDelete}
                                    >
                                        <VscTrash className="w-4 h-4" />
                                    </Button>
                                </div>
                            )}

                            <label
                                htmlFor="avatar"
                                title="Profilbild hochladen"
                                className={cn(
                                    'size-16 flex flex-col items-center justify-center rounded-full p-3 px-6 border-2 border-dashed border-primary dark:border-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition',
                                    data.avatar && 'border-primary',
                                )}
                            >
                                {processing ? (
                                    <Loader2 className="animate-spin text-gray-500" />
                                ) : data.avatar ? (
                                    <PiUserCirclePlusFill className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <div className="asd">
                                        <Plus className="w-5 h-5 text-primary" />
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
                        <div className="h-2 mt-6 mb-3">
                            {progress && (
                                <div className="w-full bg-gray-100 dark:bg-gray-900 rounded-full">
                                    <div
                                        className="bg-primary h-2 rounded-md transition-all"
                                        style={{ width: `${progress.percentage}%` }}
                                    />
                                </div>
                            )}
                        </div>

                        <InputError message={errors.avatar} className="mt-2" />

                        <Button
                            variant="primaryOutline"
                            className="w-full flex gap-2"
                            type="submit"
                            disabled={processing || !data.avatar}
                            title="Profilbild hochladen"
                        >
                            <FiUpload className="size-4" />
                            Hochladen
                        </Button>
                    </form>
                </div>
                <div className="flex justify-center items-center order-1 lg:order-2">
                    <img
                        src={cameraBro}
                        className="size-32 mx-auto lg:size-48 lg:mg-5"
                        alt="Chef Tobias"
                    />
                </div>
            </div>
        </section>
    );
}
