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
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { SharedPageProps } from '@/types';

interface TwoSidebarsLayoutProps extends PropsWithChildren {
    showTitle?: boolean;
    title?: string;
    leftSidebar?: React.ReactNode;
    rightSidebar?: React.ReactNode;
    children: React.ReactNode;
}

/**
 * A layout component that renders a page with two sidebars, one on the left and one on the right.
 * The left sidebar appears on the left side of the main content on desktop and below it on mobile screens.
 * The right sidebar is consistently displayed to the right of the main content on desktop and below on mobile screen.
 *
 * @prop {boolean} [showTitle] - Whether to display the title above the main content.
 * @prop {string} [title] - The title of the page, displayed above the main content.
 * @prop {React.ReactNode} [leftSidebar] - The sidebar you can pass in to be rendered in the left sidebar.
 * @prop {React.ReactNode} [rightSidebar] - The sidebar you can pass in to be rendered in the right sidebar.
 * @prop {React.ReactNode} children - The main content to render in the layout.
 *
 * @example
 * <TwoSidebarsLayout
 *   title="Dashboard"
 *   leftSidebar={<LeftSidebar />}
 *   rightSidebar={<RightSidebar />}
 * >
 *   <div>Main content goes here</div>
 * </TwoSidebarsLayout>
 */

export default function TwoSidebarsLayout({
    showTitle = true,
    title,
    leftSidebar,
    rightSidebar,
    children,
}: TwoSidebarsLayoutProps) {
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
                <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-gray-800 dark:text-gray-200">
                    <div>
                        <Header />
                        <RecipeSearch />
                        <BreadcrumbNav />
                    </div>
                    <div className="mx-auto container grow px-6 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 md:gap-4 transition-opacity opacity-100 duration-300 lg:grow starting:opacity-0">
                        {isDesktop && leftSidebar}
                        <main className="pt-5 pb-24 col-span-3">
                            {showTitle && <h2 className="text-xl font-medium mb-5">{title}</h2>}
                            {children}
                        </main>
                        {!isDesktop && leftSidebar}
                        {rightSidebar}
                    </div>
                    <Footer />
                    <CircularMenu />
                    <Toaster position="bottom-right" />
                </div>
            </ThemeProvider>
        </>
    );
}
