import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import chefkoch from '@images/svg/Chef-Tobias.svg';
import { Link } from '@inertiajs/react';

import { RiHomeLine } from 'react-icons/ri';
export default function NotFound() {
    return (
        <NoSidebarsLayout title="404 - Seite nicht gefunden">
            <div className="grid grid-cols-5">
                <div className="col-span-2">
                    <img src={chefkoch} alt="Chef Tobias"/>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h2 className="text-xl text-gray-400">Tadaa, Fehler 404 - Seite nicht gefunden.</h2>
                        <h2 className="text-3xl italic">Is' mir wohl von der Pfanne gerutscht.</h2>
                        <p className="text-lg">Die Seite, die du suchst, existiert nicht.</p>
                        <Link href="/" className="bg-primary rounded px-4 py-2 flex gap-2 text-lg text-white hover:text-gray-600"><RiHomeLine className="mt-[5px]" /> Zur Startseite</Link>
                    </div>
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
