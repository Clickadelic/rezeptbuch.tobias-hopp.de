import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DishCard from './Dishes/DishCard';
import fakeDishes from '@/dummy/dishes.json';

export default function Frontpage({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Startseite" />
            <FullWidthLayout title="Startseite">
                <h1>Hallo Startseite</h1>
                <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>

                {fakeDishes.map((dish: any) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
                </ul>
            </FullWidthLayout>
        </>
    );
}
