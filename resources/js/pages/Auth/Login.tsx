import Checkbox from '@/components/forms/inputs/Checkbox';
import InputError from '@/components/forms/inputs/InputError';
import InputLabel from '@/components/forms/inputs/InputLabel';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/forms/inputs/TextInput';
import AuthLayout from '@/layouts/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { useState, useEffect } from 'react';
import { TfiEye } from 'react-icons/tfi';
import { GoEyeClosed } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    useEffect(() => {
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (passwordInput) {
            passwordInput.type = isPasswordVisible ? 'text' : 'password';
        }
    }, [isPasswordVisible]);

    
    const togglePasswordVisibility = () => {
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (passwordInput) {
            passwordInput.type = isPasswordVisible ? 'password' : 'text';
            setIsPasswordVisible(!isPasswordVisible);
        }
    };

    return (
        <AuthLayout title="Login" subtitle="Willkommen zurück!">
            <Head title="Login" />

            {status && <div className="mb-4 text-sm font-medium text-emerald-00">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        placeholder="E-Mail Adresse"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <div className="flex w-full rounded border border-gray-200 bg-gray-200 p-0">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="py-0 block w-full bg-transparent border-transparent rounded-none rounded-l-md text-gray-600 dark:bg-gray-200"
                            autoComplete="current-password"
                            placeholder="**********"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <Button variant="flat" type="button" onClick={togglePasswordVisibility} className="bg-[#e8f0fe] h-[2.625rem] flex hover:text-emerald-500 rounded-none rounded-r-md">
                            {isPasswordVisible ? <TfiEye /> : <GoEyeClosed />}
                        </Button>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="my-6 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', (e.target.checked || false) as false)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">Erinnere Dich an mich</span>
                    </label>
                </div>

                <div className="my-4 flex items-center justify-end">
                    <Button variant="primary" size="lg" className="w-full" disabled={processing}>
                        Login
                    </Button>
                </div>

                <div className="flex items-center justify-center space-x-2">
                    <p>
                        Noch kein Account?&nbsp;
                        <Link
                            href={route('register')}
                            className="rounded-md text-emerald-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
                        >
                            Registrieren
                        </Link>
                    </p>
                </div>

                <div className="text-center my-3">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-emerald-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
                        >
                            Passwort vergessen?
                        </Link>
                    )}
                </div>
            </form>
        </AuthLayout>
    );
}
