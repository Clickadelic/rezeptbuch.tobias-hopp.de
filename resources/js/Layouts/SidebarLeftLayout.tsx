import { PropsWithChildren } from 'react';
import { useMediaQuery } from '@/Hooks/use-media-query';

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';

// TODO: Read state sharing Inertia Documentation

interface SidebarLeftLayoutProps extends PropsWithChildren {
    sidebar?: React.ReactNode;
    title?: string;
    children: React.ReactNode;
}

/**
 * A layout component that displays a sidebar on the left on desktop devices
 * and on the bottom on mobile devices.
 *
 * @prop {React.ReactNode} [sidebar] - The sidebar you can pass in to render.
 * @prop {string} [title] - The title of the page.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <SidebarLeftLayout sidebar={<LeftSidebar />} title="My Page">
 *     <div>My Main Content</div>
 * </SidebarLeftLayout>
 */
export default function SidebarLeftLayout({ children, title, sidebar }: SidebarLeftLayoutProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto bg-white rounded-lg shadow my-6 container px-4 sm:px-3 lg:px-6 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 gap-3">
                {isDesktop && sidebar}
                <main className="col-span-4">
                    {title && <h2 className="text-2xl my-3">{title}</h2>}
                    {title && <hr className="my-3 border-slate-300" />}
                    {children}
                </main>
                {!isDesktop && sidebar}
            </div>
            <Footer />
        </div>
    );
}
