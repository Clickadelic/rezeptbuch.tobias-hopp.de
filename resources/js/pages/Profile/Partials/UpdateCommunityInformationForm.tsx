import InputError from '@/components/forms/inputs/InputError';
import InputLabel from '@/components/forms/inputs/InputLabel';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/forms/inputs/TextInput';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { SharedPageProps } from '@/types';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const user = usePage<SharedPageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<{

        biotext: string;
        website_url: string;
    }>({

        biotext: user.biotext ?? '',
        website_url: user.website_url ?? '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Informationen über Dich</h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Diese Dinge werden über Dich gezeigt.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <div className="mt-4 flex flex-wrap justify-start gap-2">
                        <h3>Dein Küchenrang</h3>
                        <Badge variant="primary" className="text-xs">
                            {user?.rank}
                        </Badge>
                    </div>
                </div>
                <div>
                    <InputLabel htmlFor="biotext" value="Bio" />
                    <Textarea
                        id="name"
                        className="mt-1 py-3 bg-gray-100 dark:bg-gray-900 block w-full"
                        value={data.biotext}
                        rows={4}
                        placeholder="Ein paar nette Worte über Dich und Deine Kochkünste..."
                        onChange={(e) => setData('biotext', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.biotext} />
                </div>
                <div>
                    <InputLabel htmlFor="website_url" value="Webseite" />
                    <TextInput
                        id="website_url"
                        className="mt-1 block w-full"
                        value={data.website_url}
                        placeholder="https://deine-webseite.de"
                        onChange={(e) => setData('website_url', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.website_url} />
                </div>
                
                <div className="flex items-center gap-4">
                    <Button variant="primary" disabled={processing}>
                        Speichern
                    </Button>
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
