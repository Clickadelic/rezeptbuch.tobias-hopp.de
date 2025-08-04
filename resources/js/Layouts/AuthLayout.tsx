import AppLogo from '@/Components/nutshell/AppLogo';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

interface AuthLayoutProps extends PropsWithChildren {
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

/**
 * A layout component for pages that are part of the authentication flow.
 *
 * @prop {string} [title] - The title of the page.
 * @prop {string} [subtitle] - The subtitle of the page.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <AuthLayout title="Login" subtitle="Welcome back">
 *     <div>My Login Content</div>
 * </AuthLayout>
 */
export default function AuthLayout({
    title,
    subtitle,
    children,
}: AuthLayoutProps) {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 bg-[url('/resources/images/brooke-lark-kXQ3J7_2fpc-unsplash.jpg')] bg-cover bg-no-repeat bg-center">
            <main className="mx-auto container">
                <div className="m-6 sm:max-w-md lg:max-w-lg sm:mx-auto bg-white/30 p-2 rounded-xl shadow backdrop-blur">
                    <div className="bg-white rounded-lg">
                        <div className="px-8 py-8 lg:py-12 text-gray-900">
                            <div className="flex flex-col items-center justify-center">
                                <AppLogo />
                                <div className="my-6 text-center space-y-2">
                                    <h2 className="text-2xl font-medium text-slate-700">{title}</h2>
                                    <h3 className="text-xl font-light text-slate-500">{subtitle}</h3>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <p className="absolute bottom-4 mx-auto text-sm text-slate-900 bg-white/30 backdrop-blur px-4 py-2">
                Foto von <a href="https://unsplash.com/de/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="hover:underline" title="Author des Fotos">Brooke Lark</a> auf <a href="https://unsplash.com/de/fotos/green-vegetable-beside-ceramic-bowl-kXQ3J7_2fpc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="hover:underline" title="Unsplash">Unsplash</a>
            </p>
        </div>
    );
}
