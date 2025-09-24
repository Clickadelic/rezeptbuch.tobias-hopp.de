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

            <div className="mb-4 text-gray-800">
                <p>
                    Danke für Deine Registrierung. Bitte bestätige zuerst Deine E-Mail Adresse bevor
                    Du weiter machst. Danke.
                </p>
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-primary border border-primary rounded-md p-4 text-center bg-emerald-200">
                    <p>Ein neuer Bestätigungslink wurde an Deine E-Mail Adresse gesendet.</p>
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button variant="primaryOutline" disabled={processing}>E-Mai erneut senden</Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                        Logout
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
