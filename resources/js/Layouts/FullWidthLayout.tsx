import { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

import Header from '@/components/nutshell/Header';
import RecipeSearch from '@/components/nutshell/RecipeSearch';
import BreadcrumbNav from '@/components/nutshell/BreadcrumbNav';
import Footer from '@/components/nutshell/Footer';
import CircularMenu from '@/components/nutshell/CircularMenu';

import { Toaster } from 'sonner';
import { toast } from 'sonner';

import { ThemeProvider } from '@/components/nutshell/ThemeProvider';

interface FullWidthLayoutProps extends PropsWithChildren {
    title?: string;
    children: React.ReactNode;
}

/**
 * A layout component that occupies the full width of the screen.
 *
 * @prop {string} [title] - The title to display at the top of the content area.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <FullWidthLayout title="My Page">
 *     <div>My Main Content</div>
 * </FullWidthLayout>
 */

export default function FullWidthLayout({ title, children }: FullWidthLayoutProps) {
    const { props } = usePage();
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
        <ThemeProvider defaultTheme="light" storageKey="rezeptbuch-ui-theme">
            <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-800 dark:text-slate-200">
                <div>
                    <Header />
                    <RecipeSearch />
                    <BreadcrumbNav />
                </div>
                <div className="mx-auto container grow px-6 min-h-[calc(100vh-705px)] transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0">
                    <main className="pt-4 pb-10">
                        {title && <h2 className="text-lg font-medium mb-5">{title}</h2>}
                        {children}
                    </main>
                </div>
                <Footer />
                <CircularMenu />
                <Toaster position="bottom-right" />
            </div>
        </ThemeProvider>
    );
}
