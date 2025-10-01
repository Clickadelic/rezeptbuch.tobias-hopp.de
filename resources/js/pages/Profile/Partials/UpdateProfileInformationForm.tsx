import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Plus } from 'lucide-react';
import { SharedPageProps } from '@/types';

/**
 * A form component for updating user profile information.
 *
 * @param {Object} props
 * @param {boolean} props.mustVerifyEmail
 * @param {string} props.status
 * @param {string} props.className
 *
 * @returns {JSX.Element}
 */
export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage<SharedPageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        avatar: null as File | null,
    });

    // TODO: Avatar hinzufügen
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Profil Informationen
                </h2>

                <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">
                    Aktualisiere Deinen Namen, Deine E-Mail Adresse und Dein Profilbild hier.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6" encType="multipart/form-data">
                {/* Name */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value="E-Mail" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {/* Avatar Upload */}
                <div>
                    <InputLabel htmlFor="avatar" value="Profilbild" />

                    <label
                        htmlFor="avatar"
                        className="mt-2 flex flex-col items-center justify-center w-full py-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {data.avatar ? (
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                {data.avatar.name}
                            </p>
                        ) : (
                            <>
                                <Plus className="w-6 h-6 text-gray-500" />
                                <span className="text-xs text-gray-500 mt-1">Upload</span>
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
                            if (e.target.files && e.target.files.length > 0) {
                                setData('avatar', e.target.files[0]);
                            }
                        }}
                    />

                    <InputError className="mt-2" message={errors.avatar} />
                </div>

                {/* Email Verification */}
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Deine E-Mail Adresse ist nicht verifiziert.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="ml-1 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Klicke hier um die E-Mail-Bestätigung erneut zu senden.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Ein neuer Bestätigungslink wurde an Deine E-Mail Adresse gesendet.
                            </div>
                        )}
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex items-center gap-4">
                    <Button disabled={processing} variant="primary" type="submit">
                        Speichern
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-primary bg-emerald-200 border border-primary rounded px-2 py-1">
                            Gespeichert.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
