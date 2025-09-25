import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/AuthLayout';
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

            <div className="mb-4 text-gray-800 dark:text-gray-200">
                <p>
                    Danke für Deine Registrierung. Bitte bestätige zuerst Deine E-Mail Adresse bevor
                    Du weiter machst. Danke.
                </p>
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-primary border border-primary rounded-md p-3 bg-emerald-200">
                    <p>Ein neuer Bestätigungslink wurde an Deine E-Mail Adresse gesendet.</p>
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button
                        variant="primaryOutline"
                        disabled={processing}
                        aria-label="E-Mail erneut senden"
                    >
                        E-Mai erneut senden
                    </Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        title="Logout"
                        aria-label="Logout"
                        className="rounded text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer"
                    >
                        Logout
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
