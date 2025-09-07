import FullWidthLayout from '@/layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <FullWidthLayout title="Dashboard">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:gap-3 lg:gap-4">
                    <div className="p-3 md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">Übersicht Account</h2>
                    </div>
                    <div className="p-3 md:col-span-2 md:col-start-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">Gerichte 6</h2>
                        <p className="text-sm text-slate-500">Du hast insgesamt 23 Rezepte</p>
                    </div>
                    <div className="p-3 md:col-span-2 md:col-start-3 lg:col-span-1 lg:row-span-2 lg:col-start-5 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">Cocktails 17</h2>
                        <p className="text-sm text-slate-500">Du hast insgesamt 23 Rezepte</p>
                    </div>
                    <div className="p-3 md:col-start-1 md:col-span-2 lg:row-span-3 lg:col-span-1 lg:row-start-3 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">4</h2>
                    </div>
                    <div className="p-3 md:col-start-3 md:col-span-2 lg:row-span-2 lg:row-start-3 lg:col-start-2 lg:col-span-3 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">5</h2>
                    </div>
                    <div className="p-3 md:col-start-1 md:col-span-2 lg:row-span-3 lg:col-start-5 lg:col-span-1 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">6</h2>
                    </div>
                    <div className="p-2 lg:col-span-2 lg:col-start-2 lg:row-start-5 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">7</h2>
                    </div>
                    <div className="p-2 lg:col-start-4 lg:row-start-5 rounded-xl bg-rose-200 sm:bg-sky-200 md:bg-amber-200 lg:bg-emerald-200">
                        <h2 className="text-lg font-medium">8</h2>
                    </div>
                </div>
            </FullWidthLayout>
        </>
    );
}
