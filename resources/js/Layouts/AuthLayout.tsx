import AppLogo from '@/Components/nutshell/AppLogo';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function AuthLayout({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
            <main className="mx-auto container">
                <div className="m-6 sm:max-w-md lg:max-w-lg sm:mx-auto bg-white rounded-xl shadow">
                    <div className="px-8 py-8 lg:py-12 text-gray-900 border">
                        <div className="flex flex-col items-center justify-center">
                            <AppLogo className="text-4xl" />
                            <div className="my-4 text-center space-y-2">
                                <h2 className="text-3xl font-medium text-slate-700">Login</h2>
                                <h3 className="text-xl font-light text-slate-500">Willkommen zurück!</h3>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
