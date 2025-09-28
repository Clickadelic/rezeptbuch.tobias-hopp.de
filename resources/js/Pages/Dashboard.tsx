import FullWidthLayout from '@/layouts/FullWidthLayout';
import { usePage } from '@inertiajs/react';

import { BsJournalBookmark } from 'react-icons/bs';

export default function Dashboard() {
    const { auth } = usePage().props;
    const { ingredientCount } = usePage().props;
    const { recipeCount } = usePage().props;
    return (
        <FullWidthLayout title="Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-5 gap-2 md:galg:gap-4">
                <div className="md:col-span-4 lg:col-span-3 lg:row-span-2 rounded-xl ">
                    <h2 className="text-lg font-medium mb-3">
                        Willkommen zurück, Username
                    </h2>

                    <p>
                        Aktuell gibt es hier noch nicht allzu viel zu sehen, das wird sich aber mit
                        der Zeit hoffentlich ändern.
                    </p>
                    <p>
                        Mehr Funktionen sind in der Zukunft geplant, mal sehen, was sich so ergibt.
                    </p>
                </div>
                <div className="md:col-span-2 md:col-start-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 rounded-xl ">
                    <h2 className="text-lg font-medium flex flex-row gap-2">
                        <BsJournalBookmark className="size-4 mt-1" />
                        Rezepte {recipeCount as number}
                    </h2>
                    <p className="text-sm text-gray-500">
                        Es gibt insgesamt {recipeCount as number}&nbsp;
                        {(recipeCount as number) > 1 ? 'Rezepte' : 'Rezept'}.
                    </p>
                </div>
                <div className="md:col-start-1 md:col-span-2 lg:row-span-3 lg:col-span-1 lg:row-start-3 rounded-xl ">
                    <h2 className="text-lg font-medium">Zutaten</h2>
                    <p className="text-sm text-gray-500">
                        Es gibt insgesamt {ingredientCount as number} Zutaten im Rezeptbuch.
                    </p>
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
    );
}
