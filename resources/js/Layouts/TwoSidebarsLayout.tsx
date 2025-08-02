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
}

export default function TwoSidebarsLayout({ children, title, subtitle }: TwoSidebarsLayoutProps) {
    // TODO: Add media queries to ENV file > global control
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)] md:grid md:grid-cols-5 md:grid-rows-1 md:gap-4">
                {isDesktop && <LeftSidebar />}
                <main className="col-span-3">
                    {title && <h2 className="text-2xl my-3">{title}</h2>}
                    {subtitle && <h2 className="text-slate-600 text-xl my-3">{subtitle}</h2>}
                    {children}
                </main>
                {!isDesktop && <LeftSidebar />}
                <RightSidebar />
            </div>
            <Footer />
        </div>
    );
}
