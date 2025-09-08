import AppLogo from '@/components/nutshell/AppLogo';

import { PropsWithChildren, ReactNode } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/nutshell/ThemeProvider';

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
export default function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
    return (
        <ThemeProvider defaultTheme="light" storageKey="rezeptbuch-ui-theme">
            <div className="min-h-screen flex flex-col justify-center items-center bg-white bg-[url('/resources/images/brooke-lark-kXQ3J7_2fpc-unsplash.jpg')] dark:bg-[url('/resources/images/annie-spratt-R3LcfTvcGWY-unsplash.jpg')] bg-cover bg-no-repeat bg-center transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0">
                <main className="mx-auto container">
                    <div className="m-6 sm:max-w-md lg:max-w-lg sm:mx-auto bg-white/30 dark:bg-slate-800/30 p-2 rounded-xl shadow backdrop-blur">
                        <div className="bg-white dark:bg-slate-800 rounded-lg">
                            <div className="px-8 py-8 lg:py-12 text-gray-900 dark:text-slate-200">
                                <div className="flex flex-col items-center justify-center">
                                    <AppLogo className="font-secondary" />
                                    <div className="my-6 text-center space-y-2">
                                        <h2 className="text-2xl font-medium text-slate-700 dark:text-slate-200 font-secondary">
                                            {title}
                                        </h2>
                                        <h3 className="text-xl font-light text-slate-500 dark:text-slate-400 font-secondary">
                                            {subtitle}
                                        </h3>
                                    </div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
                <p className="dark:invisible absolute bottom-1 md:bottom-4 mx-auto text-sm text-slate-900 bg-white/30 backdrop-blur rounded px-4 py-2">
                    Foto von{' '}
                    <a
                        href="https://unsplash.com/de/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        className="hover:underline"
                        title="Author des Fotos"
                        target="_blank"
                    >
                        Brooke Lark
                    </a>{' '}
                    auf{' '}
                    <a
                        href="https://unsplash.com/de/fotos/green-vegetable-beside-ceramic-bowl-kXQ3J7_2fpc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        className="hover:underline"
                        title="Unsplash"
                        target="_blank"
                    >
                        Unsplash
                    </a>
                </p>
                <p className="invisible dark:visible absolute bottom-1 md:bottom-4 mx-auto text-sm text-slate-900 dark:text-slate-200 bg-white/30 backdrop-blur rounded px-4 py-2">
                    Foto von{' '}
                    <a
                        href="https://unsplash.com/de/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        className="hover:underline"
                        title="Author des Fotos"
                        target="_blank"
                    >
                        Annie Spratt
                    </a>{' '}
                    auf{' '}
                    <a
                        href="https://unsplash.com/de/fotos/weisses-und-braunes-gericht-auf-braunem-teller-R3LcfTvcGWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                        className="hover:underline"
                        title="Unsplash"
                        target="_blank"
                    >
                        Unsplash
                    </a>
                </p>
            </div>
            <Toaster position="bottom-right" />
        </ThemeProvider>
    );
}
