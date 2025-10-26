import InputError from '@/components/forms/inputs/InputError';
import InputLabel from '@/components/forms/inputs/InputLabel';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/forms/inputs/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { SharedPageProps } from '@/types';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const user = usePage<SharedPageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name ?? '',
        email: user.email ?? '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Profil</h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Name und E-Mail Adresse ändern.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="E-Mail" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <p className="text-sm text-gray-500">
                        Deine E-Mail ist nicht verifiziert.{' '}
                        <Link
                            href={route('verification.send')}
                            method="post"
                            as="button"
                            className="underline text-indigo-500"
                        >
                            Erneut senden
                        </Link>
                    </p>
                )}

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Speichern</Button>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-emerald-600">Gespeichert.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
