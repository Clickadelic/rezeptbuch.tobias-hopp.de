import { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';

import Header from '@/components/appshell/Header';
import RecipeSearch from '@/components/appshell/RecipeSearch';
import BreadcrumbNav from '@/components/appshell/BreadcrumbNav';
import Footer from '@/components/appshell/Footer';
import CircularMenu from '@/components/appshell/CircularMenu';

import { Toaster } from 'sonner';
import { toast } from 'sonner';

import { ThemeProvider } from '@/components/appshell/ThemeProvider';
import { SharedPageProps } from '@/types';

interface FullWidthLayoutProps extends PropsWithChildren {
    title?: string;
    showTitle?: boolean;
    children: React.ReactNode;
}

/**
 * A layout component that occupies the full width of the screen.
 *
 * @prop {string} [title] - The title to display at the top of the content area.
 * @prop {boolean} [showTitle] - Whether to hide the title.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <FullWidthLayout title="My Page">
 *     <div>My Main Content</div>
 * </FullWidthLayout>
 */

export default function FullWidthLayout({ showTitle = true, title, children }: FullWidthLayoutProps) {
    const { props } = usePage<SharedPageProps>();
    const { flash } = props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                duration: 3000,
            });
        }
        if (flash?.error) {
            toast.error(flash.error, {
                duration: 4000,
            });
        }
    }, [flash]);

    return (
        <>
            <Head title={title} />
            <ThemeProvider defaultTheme="light" storageKey="rezeptbuch-ui-theme">
                <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-gray-800 dark:text-gray-200">
                    <div>
                        <Header />
                        <RecipeSearch />
                        <BreadcrumbNav />
                    </div>
                    <div className="mx-auto container grow px-6 transition-opacity opacity-100 duration-300 lg:grow starting:opacity-0">
                        <main className="pt-5 pb-16">
                            {showTitle && <h2 className="text-xl font-medium mb-5">{title}</h2>}
                            {children}
                        </main>
                    </div>
                    <Footer />
                    <CircularMenu />
                    <Toaster position="bottom-right" />
                </div>
            </ThemeProvider>
        </>
    );
}
