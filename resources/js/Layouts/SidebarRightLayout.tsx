import { PropsWithChildren } from 'react';


import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import RightSidebar from '@/Components/reusables/sidebars/RightSidebar';
import Footer from '@/Components/nutshell/Footer';

interface SidebarRightLayoutProps extends PropsWithChildren {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export default function SidebarRightLayout({ children, title, subtitle }: SidebarRightLayoutProps) {
    
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
                <RightSidebar />
            </div>
            <Footer />
        </div>
    );
}
