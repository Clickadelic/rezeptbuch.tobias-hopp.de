import { Head, usePage } from '@inertiajs/react';

import SidebarRightLayout from '@/layouts/SidebarRightLayout';
import DishesSidebar from '@/components/sidebars/MainSidebar';
import DishCard from '@/components/reusables/cards/DishCard';
import { Dish } from '@/types/Dish';
import FullWidthLayout from '@/layouts/FullWidthLayout';

/**
 * Displays a list of all dishes.
 *
 * The list is rendered as a grid of 1 column on small screens,
 * 3 columns on medium screens, and 4 columns on large screens.
 *
 * Each dish is rendered as a DishCard component.
 *
 * The component expects a prop called `dishes` to be defined on the page.
 * This prop should contain an array of Dish objects.
 */
export default function Gerichte() {
    const { props } = usePage();
    const { dishes } = props;

    return (
        <>
            <Head title="Gerichte" />
            <FullWidthLayout title="Gerichte">
                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {dishes.map((dish: Dish) => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                    {dishes.length === 0 && (
                        <p className="text-xl my-12 col-span-5 text-center text-slate-600">
                            Lege das erste Gericht an.
                        </p>
                    )}
                </ul>
            </FullWidthLayout>
        </>
    );
}
