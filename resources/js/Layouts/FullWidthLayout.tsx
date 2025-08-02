import { PropsWithChildren } from 'react';
import Header from '@/Components/nutshell/Header';
import Footer from '@/Components/nutshell/Footer';

import { Head } from '@inertiajs/react';

export default function FullWidthLayout({ children }: PropsWithChildren) {
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <Header />
            <main className="mx-auto container px-4 sm:px-6 lg:px-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}
