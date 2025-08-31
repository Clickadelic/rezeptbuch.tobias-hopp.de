import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <FullWidthLayout title="Dashboard">
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="col-span-3 row-span-2 rounded-xl">
                        <h2 className="text-lg font-medium">Übersicht Account</h2>
                    </div>
                    <div className="row-span-2 col-start-4 rounded-xl">
                        <h2 className="text-lg font-medium">Gerichte 6</h2>
                        <p className="text-sm text-slate-500">Du hast insgesamt 23 Rezepte</p>
                    </div>
                    <div className="row-span-2 col-start-5 rounded-xl">
                        <h2 className="text-lg font-medium">Cocktails 17</h2>
                        <p className="text-sm text-slate-500">Du hast insgesamt 23 Rezepte</p>
                    </div>
                    <div className="row-span-3 row-start-3 bg-slate-200 rounded-xl">
                        4
                    </div>
                    <div className="p-2 col-span-3 row-span-2 row-start-3 bg-slate-200 rounded-xl">
                        5
                    </div>
                    <div className="p-2 row-span-3 col-start-5 row-start-3 bg-slate-200 rounded-xl">
                        6
                    </div>
                    <div className="p-2 col-span-2 col-start-2 row-start-5 bg-slate-200 rounded-xl">
                        7
                    </div>
                    <div className="p-2 col-start-4 row-start-5 bg-slate-200 rounded-xl">
                        8
                    </div>
                </div>
            </FullWidthLayout>
        </>
    );
}
