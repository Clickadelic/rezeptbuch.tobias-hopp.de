
import { PropsWithChildren } from 'react';

import Header from '@/components/Header';
import RecipeSearch from '@/components/RecipeSearch';
import Footer from '@/components/Footer';

export default function FullWidthLayout({ children }: PropsWithChildren) {

    return (
        <div className="min-h-screen flex flex-col justify-start bg-gray-100">
            <Header />
            <RecipeSearch />
            <main className="container mx-auto min-h-[calc(100vh-830px)]">
                {children}
            </main>
            <Footer />
        </div>
    );
}
