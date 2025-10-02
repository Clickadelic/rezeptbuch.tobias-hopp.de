import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import chefkoch from '@images/svg/Chef-Tobias.svg';
import { Link } from '@inertiajs/react';

import { RiHomeLine } from 'react-icons/ri';
export default function NotFound() {
    return (
        <NoSidebarsLayout title="404 - Seite nicht gefunden">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
                <div className="col-span-2">
                    <img src={chefkoch} alt="Chef Tobias"/>
                </div>
                <div className="cols-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center">
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h2 className="text-xl text-gray-400 leading-4">Tadaa, Fehler 404 - Seite nicht gefunden.</h2>
                        <h2 className="text-2xl font-la-belle-aurore">..is' mir wohl von der Pfanne gerutscht...</h2>
                        <p className="text-lg mb-5">Die Seite, die du suchst, existiert nicht.</p>
                        <Link href="/" className="bg-primary rounded px-3 py-1 text-sm flex gap-2 text-white hover:text-white hover:bg-emerald-700">
                            <RiHomeLine className="mt-[3px]" /> Zur Startseite
                        </Link>
                    </div>
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
