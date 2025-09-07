import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/TextInput';
import AuthLayout from '@/layouts/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout title="Passwort vergessen" subtitle="Passiert jedem von uns?">
            <Head title="Passwort vergessen" />

            <div className="my-6 text-slate-700 text-center">
                <p>Gib' Deine E-Mail Adresse ein, um Dein Passwort zurückzusetzen.</p>
                <p>
                    Du bekommst einen Link per E-Mail mit dem Du ein neues Passwort erstellen
                    kannst.
                </p>
            </div>

            {status && <div className="mb-4 font-medium text-green-600">{status}</div>}

            <form onSubmit={submit} className="space-y-4">
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    placeholder="Deine E-Mail Adresse"
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end">
                    <Button variant="primary" className="w-full" size="lg" disabled={processing}>
                        E-Mail senden
                    </Button>
                </div>
            </form>
            <div className="flex items-center justify-center space-x-2 mt-4">
                <p>
                    <Link
                        href={route('login')}
                        className="text-sm text-slate-800 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                    >
                        zurück zum Login
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
}
