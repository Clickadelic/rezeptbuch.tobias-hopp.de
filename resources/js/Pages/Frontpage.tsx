import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DishCard from './Dishes/DishCard';

export default function Frontpage({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Startseite" />
            <FullWidthLayout title="Startseite">
                <div className="flex flex-row flex-wrap">
                    <DishCard
                        dish={{
                            id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x',
                            name: 'Spaghetti Bolognese',
                            description: 'Hackfleisch anbraten.',
                        }}
                    />
                </div>
            </FullWidthLayout>
        </>
    );
}
