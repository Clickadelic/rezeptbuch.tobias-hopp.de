import { PropsWithChildren } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';

import Header from '@/components/appshell/Header';
import RecipeSearch from '@/components/appshell/RecipeSearch';
import BreadcrumbNav from '@/components/appshell/BreadcrumbNav';
import Footer from '@/components/appshell/Footer';
import CircularMenu from '@/components/appshell/CircularMenu';

import { ThemeProvider } from '@/components/appshell/ThemeProvider';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { SharedPageProps } from '@/types';
interface SidebarLeftLayoutProps extends PropsWithChildren {
    title?: string;
    sidebar?: React.ReactNode;
    children: React.ReactNode;
}

/**
 * A layout component that displays a sidebar on the left on desktop devices
 * and on top on mobile devices. It also contains a toaster.
 *
 * @prop {string} [title] - The title of the page.
 * @prop {React.ReactNode} [sidebar] - The sidebar content to render.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <SidebarLeftLayout sidebar={<LeftSidebar />} title="My Page">
 *     <div>My Main Content</div>
 * </SidebarLeftLayout>
 */
export default function SidebarLeftLayout({ title, sidebar, children }: SidebarLeftLayoutProps) {
    const isDesktop = useMediaQuery('(min-width: 768px)');

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
                <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-gray-800 dark:text-gray-200 relative">
                    <div>
                        <Header />
                        <RecipeSearch />
                        <BreadcrumbNav />
                    </div>
                    <div className="mx-auto container grow px-6 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 gap-3 transition-opacity opacity-100 duration-300 lg:grow starting:opacity-0">
                        {isDesktop && sidebar}
                        <main className="pt-4 pb-16 col-span-4">
                            {title && <h2 className="text-xl font-medium font-oswald mb-5">{title}</h2>}
                            {children}
                        </main>
                        {!isDesktop && sidebar}
                    </div>
                    <Footer />
                    <CircularMenu />
                    <Toaster position="bottom-right" />
                </div>
            </ThemeProvider>
        </>
    );
}
