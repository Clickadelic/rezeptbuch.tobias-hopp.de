import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-100">
            Sidebar Right Layout
        </div>
    );
}
