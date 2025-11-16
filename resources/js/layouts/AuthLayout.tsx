import AppLogo from '@/components/appshell/AppLogo';
import CookieNotice from '@/components/appshell/CookieNotice';

import { PropsWithChildren, ReactNode } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/appshell/ThemeProvider';
import { Head } from '@inertiajs/react';

import { Link } from '@inertiajs/react';
import { BsArrowLeft } from 'react-icons/bs';


interface AuthLayoutProps extends PropsWithChildren {
    showTitle?: boolean;
    title?: string;
    description?: string;
    subtitle?: string;
    children: ReactNode;
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
    showTitle = true,
    title,
    subtitle,
    description,
    children,
}: AuthLayoutProps) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>
            <ThemeProvider defaultTheme="light" storageKey="rezeptbuch-ui-theme">
                <div className="min-h-screen flex flex-col justify-center items-center bg-white bg-[url('/resources/images/brooke-lark-kXQ3J7_2fpc-unsplash-compressed.jpg')] dark:bg-[url('/resources/images/webp/annie-spratt-R3LcfTvcGWY-unsplash.webp')] bg-cover bg-no-repeat bg-center transition-opacity opacity-100 duration-300 lg:grow starting:opacity-0">
                    <main className="mx-auto container">
                        <div className="m-6 sm:max-w-md lg:max-w-lg sm:mx-auto bg-white/30 dark:bg-gray-800/30 p-2 rounded-xl shadow backdrop-blur">
                            <div className="bg-white dark:bg-gray-800 rounded-lg">
                                <div className="px-8 py-8 lg:py-12 text-gray-900 dark:text-gray-200">
                                    <div className="flex flex-col items-center justify-center">
                                        <AppLogo className="font-secondary" />
                                        <div className="my-6 text-center space-y-2">
                                            {showTitle && (
                                                <>
                                                    <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-200 font-secondary">
                                                        {title}
                                                    </h2>
                                                    <h3 className="text-xl font-light text-gray-500 dark:text-gray-400 font-secondary">
                                                        {subtitle}
                                                    </h3>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {children}
                                    <div className="w-full my-3 sm:my-5 flex justify-center items-center">
                                        <ul className="flex flex-col sm:flex-row text-center gap-2 text-xs">
                                            <li><Link href="/nutzungsbedingungen" className="text-sm text-emerald-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2" title="Nutzungsbedingungen" aria-label="Nutzungsbedingungen">Nutzungsbedingungen</Link></li>
                                            <li><Link href="/datenschutz" className="text-sm text-emerald-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2" title="Datenschutz" aria-label="Datenschutz">Datenschutz</Link></li>
                                            <li><Link href="/cookie-hinweis" className="text-sm text-emerald-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2" title="Cookie-Hinweis" aria-label="Cookie-Hinweis">Cookie-Hinweis</Link></li>
                                            <li><Link href="/impressum" className="text-sm text-emerald-700 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2" title="Impressum" aria-label="Impressum">Impressum</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <CookieNotice />
                <Toaster position="bottom-right" />
            </ThemeProvider>
        </>
    );
}
