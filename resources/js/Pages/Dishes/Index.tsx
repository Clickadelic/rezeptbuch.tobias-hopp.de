import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components//sidebars/DishesSidebar';
import DishCard from './DishCard';

export default function Gerichte() {
    const { dishes } = usePage<PageProps>().props;
    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" sidebar={<DishesSidebar />}>
                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {dishes.map((dish) => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                </ul>
            </SidebarLeftLayout>
        </>
    );
}
