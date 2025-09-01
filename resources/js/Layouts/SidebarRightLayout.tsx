import { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import BreadcrumbNav from '@/Components/nutshell/BreadcrumbNav';
import Footer from '@/Components/nutshell/Footer';
import CircularMenu from '@/Components/nutshell/CircularMenu';

import { Toaster } from 'sonner';
import { toast } from 'sonner';

interface SidebarRightLayoutProps extends PropsWithChildren {
    title?: string;
    sidebar?: React.ReactNode;
    children: React.ReactNode;
}

/**
 * A layout component that displays a sidebar on the right on desktop devices
 * and on top on mobile devices.
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
export default function SidebarRightLayout({ title, sidebar, children }: SidebarRightLayoutProps) {
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
        <div className="min-h-screen flex flex-col justify-between bg-white">
            <div>
                <Header />
                <RecipeSearch />
                <BreadcrumbNav />
            </div>
            <div className="mx-auto container grow px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)] grid grid-cols-5 grid-rows-1 gap-4">
                <main className="pt-4 pb-10 col-span-4">
                    {title && <h2 className="text-lg font-medium mb-5">{title}</h2>}
                    {children}
                </main>
                {sidebar}
            </div>
            <Footer />
            <CircularMenu />
            <Toaster position="bottom-right" />
        </div>
    );
}
