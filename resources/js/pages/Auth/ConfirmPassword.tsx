import InputError from '@/components/reusables/InputError';
import InputLabel from '@/components/reusables/InputLabel';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/reusables/TextInput';
import AuthLayout from '@/layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Passwort bestätigen" />

            <div className="mb-4 text-gray-800">
                <p>
                    Dies ist ein geschützer Bereich des Rezeptbuches. Bitte bestätige zuerst Deine
                    E-Mail Adresse bevor Du weiter machst. Danke.
                </p>
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center">
                    <Button disabled={processing}>Bestätigen</Button>
                </div>
            </form>
        </AuthLayout>
    );
}
