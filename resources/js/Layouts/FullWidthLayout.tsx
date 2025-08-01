import AppLogo from '@/Components/AppLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            <header className="asd">
                Header
            </header>
            <main className="container mx-auto">
                {children}
            </main>
            <footer className="asd">
                Footer
            </footer>
        </div>
    );
}
