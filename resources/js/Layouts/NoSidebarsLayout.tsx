import { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/components/appshell/Header';
import RecipeSearch from '@/components/appshell/RecipeSearch';
import BreadcrumbNav from '@/components/appshell/BreadcrumbNav';
import Footer from '@/components/appshell/Footer';
import CircularMenu from '@/components/appshell/CircularMenu';

import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { ThemeProvider } from '@/components/appshell/ThemeProvider';
import { SharedPageProps } from '@/types';
interface NoSidebarsLayoutProps extends PropsWithChildren {
    children: React.ReactNode;
    title?: string;
}

/**
 * A layout component that renders a page with two sidebars, one on the left and one on the right.
 * The left sidebar appears on the left side of the main content on desktop and below it on mobile screens.
 * The right sidebar is consistently displayed to the right of the main content on desktop and below on mobile screen.
 *
 * @prop {string} [title] - The title of the page, displayed above the main content.
 * @prop {React.ReactNode} children - The main content to render in the layout.
 *
 * @example
 * <NoSidebarsLayout
 *   title="No Sidebars"
 * >
 *   Main content goes here
 * </NoSidebarsLayout>
 */

export default function NoSidebarsLayout({ title, children }: NoSidebarsLayoutProps) {
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
                    <div className="mx-auto container grow px-6 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 md:gap-4 transition-opacity opacity-100 duration-300 lg:grow starting:opacity-0">
                        <main className="pt-4 pb-16 col-start-2 col-span-3">
                            {title && <h2 className="text-xl font-medium font-oswald mb-5">{title}</h2>}
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
