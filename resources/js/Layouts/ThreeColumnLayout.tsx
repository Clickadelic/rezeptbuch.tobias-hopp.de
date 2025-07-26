
import { PropsWithChildren } from 'react';

import Header from '@/components/Header';
import RecipeSearch from '@/components/RecipeSearch';
import Footer from '@/components/Footer';

export default function ThreeColumnLayout({ children }: PropsWithChildren) {

    return (
        <div className="min-h-screen flex flex-col justify-start bg-gray-100">
            <Header />
            <RecipeSearch />
            <section className="container mx-auto min-h-[calc(100vh-830px)] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <aside className="col-span-1">
                    <div className="bg-white rounded p-4 my-4">
                        <h2 className="text-2xl font-medium mb-3">Zutaten</h2>
                        <p>Zutaten Inhalt.</p>
                    </div>
                </aside>
                <main className="col-span-2">
                    {children}
                </main>
                <aside className="col-span-1">
                    <div className="bg-white rounded p-4 my-4">
                        <h2 className="text-2xl font-medium mb-3">Zutaten</h2>
                        <p>Zutaten Inhalt.</p>
                    </div>
                </aside>
            </section>
            <Footer />
        </div>
    );
}
