import { PropsWithChildren } from 'react';

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';

interface SidebarRightLayoutProps extends PropsWithChildren {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    sidebar?: React.ReactNode;
}

/**
 * A layout component that displays a sidebar on the right on desktop devices
 * and on top on mobile devices.
 *
 * @prop {React.ReactNode} [sidebar] - The sidebar content to render.
 * @prop {string} [title] - The title of the page.
 * @prop {string} [subtitle] - The subtitle of the page.
 * @prop {React.ReactNode} children - The content to render in the main area.
 *
 * @example
 * <SidebarLeftLayout sidebar={<LeftSidebar />} title="My Page" subtitle="My Subtitle">
 *     <div>My Main Content</div>
 * </SidebarLeftLayout>
 */
export default function SidebarRightLayout({ children, title, subtitle, sidebar }: SidebarRightLayoutProps) {
    
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)] grid grid-cols-5 grid-rows-1 gap-4">
                <main className="col-span-4">
                    {title && <h2 className="text-2xl my-3">{title}</h2>}
                    {subtitle && <h2 className="text-slate-600 text-xl my-3">{subtitle}</h2>}
                    {children}
                </main>
                {sidebar}
            </div>
            <Footer />
        </div>
    );
}
