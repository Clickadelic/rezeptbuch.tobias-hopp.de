import AuthLayout from '@/layouts/AuthLayout';

import { Button } from '@/components/ui/button';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                <p>Danke für die Registrierung. Bevor Du loslegen kannst, bestätige bitte kurz Deine E-Mail Adresse mit einem Klick auf den Link in der E-Mail.</p>
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                   <p>Ein neuer Verifizierungslink wurde Dir zugeschickt.</p>
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button disabled={processing}>
                        E-Mail erneut senden
                    </Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Logout
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
