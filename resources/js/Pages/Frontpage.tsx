import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DishCard from './Dishes/DishCard';

export default function Frontpage({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Startseite" />
            <FullWidthLayout title="Startseite">
                <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <DishCard
                        dish={{ id: '123', name: 'Spaghetti Bolognese', subtitle: 'Nudelklassiker', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '234', name: 'Lasagne', subtitle: 'Italienisch gute Lasagne', description: 'Wie bei Oma in Italien, hier das Rezept.' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                    <DishCard
                        dish={{ id: '123', name: 'Test', subtitle: 'Test', description: 'Test' }}
                    />
                </ul>
            </FullWidthLayout>
        </>
    );
}
