import { PropsWithChildren } from 'react';
import { useMediaQuery } from '@/Hooks/use-media-query';

import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';
import RightSidebar from '@/Components/reusables/sidebars/RightSidebar';
import LeftSidebar from '@/Components/reusables/sidebars/LeftSidebar';

interface TwoSidebarsLayoutProps extends PropsWithChildren {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    leftSidebar?: React.ReactNode;
    rightSidebar?: React.ReactNode;
}

/**
 * A layout component that renders a page with two sidebars, one on the left and one on the right.
 * The left sidebar appears on the left side of the main content on desktop and below it on mobile screens.
 * The right sidebar is consistently displayed to the right of the main content on desktop and below on mobile screen.
 *
 * @prop {React.ReactNode} children - The main content to render in the layout.
 * @prop {string} [title] - The title of the page, displayed above the main content.
 * @prop {string} [subtitle] - The subtitle of the page, displayed below the title.
 * @prop {React.ReactNode} [leftSidebar] - The sidebar you can pass in to be rendered in the left sidebar.
 * @prop {React.ReactNode} [rightSidebar] - The sidebar you can pass in to be rendered in the right sidebar.
 *
 * @example
 * <TwoSidebarsLayout
 *   title="Dashboard"
 *   subtitle="Welcome to your dashboard"
 *   leftSidebar={<LeftSidebar />}
 *   rightSidebar={<RightSidebar />}
 * >
 *   <div>Main content goes here</div>
 * </TwoSidebarsLayout>
 */

export default function TwoSidebarsLayout({ children, title, subtitle, leftSidebar, rightSidebar }: TwoSidebarsLayoutProps) {
    // TODO: Add media queries to ENV file > global control
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 md:gap-4">
                {isDesktop && leftSidebar}
                <main className="col-span-3">
                    {title && <h2 className="text-2xl my-3">{title}</h2>}
                    {subtitle && <h2 className="text-slate-600 text-xl my-3">{subtitle}</h2>}
                    {children}
                </main>
                {!isDesktop && leftSidebar}
                {rightSidebar}
            </div>
            <Footer />
        </div>
    );
}
