import { PropsWithChildren } from 'react';
import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';

interface FullWidthLayoutProps extends PropsWithChildren {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export default function FullWidthLayout({ children, title, subtitle }: FullWidthLayoutProps) {
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)]">
                <main>
                    {title && <h2 className="text-2xl my-3">{title}</h2>}
                    {subtitle && <h2 className="text-slate-600 text-xl my-3">{subtitle}</h2>}
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
