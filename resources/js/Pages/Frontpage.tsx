import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DishCard from './Dishes/DishCard';

export default function Frontpage({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Startseite" />
            <FullWidthLayout title="Startseite">
                <h1>Hallo Startseite</h1>
            </FullWidthLayout>
        </>
    );
}
