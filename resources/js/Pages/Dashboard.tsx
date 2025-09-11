import FullWidthLayout from '@/layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

import { TbSalt } from 'react-icons/tb';
import { FiPlus } from 'react-icons/fi';
import { BsJournalBookmark } from 'react-icons/bs';
import { LiaCocktailSolid } from 'react-icons/lia';

export default function Dashboard() {
    const { auth } = usePage().props;
    const { ingredientCount } = usePage().props;
    const { dishCount } = usePage().props;
    return (
        <>
            <Head title="Dashboard" />
            <FullWidthLayout title="Dashboard">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:galg:gap-4">
                    <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl ">
                        <h2 className="text-lg font-medium mb-3">
                            Willkommen zurück, {auth.user.name}
                        </h2>

                        <p>
                            Aktuell gibt es hier noch nicht allzu viel zu sehen, das wird sich aber
                            mit der Zeit hoffentlich ändern.
                        </p>
                        <p>
                            Mehr Funktionen sind in der Zukunft geplant, mal sehen, was sich so
                            ergibt.
                        </p>
                    </div>
                    <div className="md:col-span-2 md:col-start-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 rounded-xl ">
                        <h2 className="text-lg font-medium flex flex-row gap-2">
                            <BsJournalBookmark className="size-4 mt-1" />
                            Gerichte {dishCount as number}
                        </h2>
                        <p className="text-sm text-slate-500">
                            Es gibt insgesamt {dishCount as number} Gericht
                            {(dishCount as number) > 1 ? 'e' : ''}.
                        </p>
                    </div>
                    <div className="md:col-span-2 md:col-start-3 lg:col-span-1 lg:row-span-2 lg:col-start-5 rounded-xl ">
                        <h2 className="text-lg font-medium flex flex-row gap-2">
                            <LiaCocktailSolid className="size-5 mt-.5" />
                            Cocktails {dishCount as number}
                        </h2>
                        <p className="text-sm text-slate-500">Du hast insgesamt X Rezepte</p>
                    </div>
                    <div className="md:col-start-1 md:col-span-2 lg:row-span-3 lg:col-span-1 lg:row-start-3 rounded-xl ">
                        <h2 className="text-lg font-medium">4</h2>
                    </div>
                    <div className="md:col-start-3 md:col-span-2 lg:row-span-2 lg:row-start-3 lg:col-start-2 lg:col-span-3 rounded-xl ">
                        <h2 className="text-lg font-medium">5</h2>
                    </div>
                    <div className="md:col-start-1 md:col-span-2 lg:row-span-3 lg:col-start-5 lg:col-span-1 rounded-xl ">
                        <h2 className="text-lg font-medium">6</h2>
                    </div>
                    <div className="p-2 lg:col-span-2 lg:col-start-2 lg:row-start-5 rounded-xl ">
                        <h2 className="text-lg font-medium">7</h2>
                    </div>
                    <div className="p-2 lg:col-start-4 lg:row-start-5 rounded-xl ">
                        <h2 className="text-lg font-medium">8</h2>
                    </div>
                </div>
            </FullWidthLayout>
        </>
    );
}
