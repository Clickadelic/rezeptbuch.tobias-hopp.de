import Header from '@/Components/nutshell/Header';
import Footer from '@/Components/nutshell/Footer';
import { PropsWithChildren } from 'react';

export default function FullWidthLayout({ children }: PropsWithChildren) {
    return (

        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <Header />
            <main className="container mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}