import { PropsWithChildren } from 'react';
import Header from '@/Components/nutshell/Header';
import RecipeSearch from '@/Components/nutshell/RecipeSearch';
import Footer from '@/Components/nutshell/Footer';
export default function FullWidthLayout({ children }: PropsWithChildren) {
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <div>
                <Header />
                <RecipeSearch />
            </div>
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)]">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
