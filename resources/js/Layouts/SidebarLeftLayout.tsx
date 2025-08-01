import AppLogo from '@/Components/AppLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-100 bg-red-400">
            Sidebar Left Layout
        </div>
    );
}
