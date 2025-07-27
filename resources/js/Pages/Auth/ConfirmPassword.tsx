import AuthLayout from '@/layouts/AuthLayout';

import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import TextInput from '@/components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';

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
            <Head title="Confirm Password" />

            <div className="mb-4 text-gray-600">
               <p>Dies ist ein geschützer Teil des Rezeptbuches. Bitte schließe zuerst Deine Registrierung ab in dem Du Deinen Account bestätigt.</p>
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
                
                <div className="mt-4 flex items-center justify-end">
                    <Button variant="destructive" disabled={processing}>
                        Bestätigen
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
