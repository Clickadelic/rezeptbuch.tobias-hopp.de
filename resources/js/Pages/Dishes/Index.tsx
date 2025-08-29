import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components//sidebars/DishesSidebar';
import DishCard from './DishCard';
import Dish from '@/types/Dish';
export default function Gerichte() {
    const { dishes } = usePage<PageProps>().props;
    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" sidebar={<DishesSidebar />}>
                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {dishes.map((dish: Dish) => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                </ul>
            </SidebarLeftLayout>
        </>
    );
}
