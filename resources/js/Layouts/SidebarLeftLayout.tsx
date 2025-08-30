import { PropsWithChildren } from 'react';
import { useMediaQuery } from '@/Hooks/use-media-query';
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';

import { Toaster } from 'sonner';
import { toast } from "sonner";

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
            </div>
            <div className="mx-auto container grow px-4 sm:px-3 lg:px-6 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 gap-3">
                {isDesktop && sidebar}
                <main className="py-4 col-span-4">
                    {title && <h2 className="text-lg font-medium leading-snug">{title}</h2>}
                    {title && <hr className="my-3 border-slate-300" />}
                    {children}
                </main>
                {!isDesktop && sidebar}
            </div>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
}
