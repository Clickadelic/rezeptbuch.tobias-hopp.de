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
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-705px)] grid grid-cols-5 grid-rows-5 gap-4">

                <aside className="row-span-5">1</aside>
                <main className="col-span-3 row-span-5">{children}</main>
                <aside className="row-span-5 col-start-5">3</aside>

            </div>
            <Footer />
        </div>
    );
}
