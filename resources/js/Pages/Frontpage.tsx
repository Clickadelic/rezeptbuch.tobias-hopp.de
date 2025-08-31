import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';


export default function Frontpage({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Startseite" />
            <FullWidthLayout title="Startseite">
                <div className="flex flex-row justify-between items-center gap-3">
                    <h1 className="text-3xl font-oswald">Oswald</h1>
                    <h1 className="text-3xl font-open-sans">Open Sans</h1>
                    <h1 className="text-3xl font-roboto-condensed">Roboto Condensed</h1>
                    <h1 className="text-3xl font-la-belle-aurore">La Belle Aurore</h1>
                    <h1 className="text-3xl font-yellowtail">Yellowtail</h1>
                </div>
                <hr className="my-4 text-slate-400" />
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="p-2 col-span-3 row-span-2 bg-slate-200 rounded-xl">1</div>
                    <div className="p-2 row-span-2 col-start-4 bg-slate-200 rounded-xl">2</div>
                    <div className="p-2 row-span-2 col-start-5 bg-slate-200 rounded-xl">3</div>
                    <div className="p-2 row-span-3 row-start-3 bg-slate-200 rounded-xl">4</div>
                    <div className="p-2 col-span-3 row-span-2 row-start-3 bg-slate-200 rounded-xl">5</div>
                    <div className="p-2 row-span-3 col-start-5 row-start-3 bg-slate-200 rounded-xl">6</div>
                    <div className="p-2 col-span-2 col-start-2 row-start-5 bg-slate-200 rounded-xl">7</div>
                    <div className="p-2 col-start-4 row-start-5 bg-slate-200 rounded-xl">8</div>
                </div>
    
            </FullWidthLayout>
        </>
    );
}
