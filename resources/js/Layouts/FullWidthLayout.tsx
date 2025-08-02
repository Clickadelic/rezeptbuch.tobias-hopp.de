import { PropsWithChildren } from 'react';
import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';

interface FullWidthLayoutProps extends PropsWithChildren {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

/**
 * A layout component that occupies the full width of the screen.
 *
 * @prop {React.ReactNode} children - The content to render in the main area.
 * @prop {string} [title] - The title to display at the top of the content area.
 * @prop {string} [subtitle] - The subtitle to display below the title.
 *
 * @example
 * <FullWidthLayout title="My Page" subtitle="Page Subtitle">
 *     <div>My Main Content</div>
 * </FullWidthLayout>
 */

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
