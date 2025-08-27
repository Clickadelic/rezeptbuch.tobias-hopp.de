import { PropsWithChildren } from 'react';

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';
import { Toaster } from 'sonner';
// TODO: Read state sharing Inertia Documentation

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
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container grow px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)] grid grid-cols-5 grid-rows-1 gap-4">
                <main className="col-span-4">
                    {title && <h2 className="text-2xl my-3">{title}</h2>}
                    {title && <hr className="my-3 border-slate-300" />}
                    {children}
                </main>
                {sidebar}
            </div>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
}
