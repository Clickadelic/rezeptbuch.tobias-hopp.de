import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DishCard from './Dishes/DishCard';

export default function Frontpage({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Startseite" />
            <FullWidthLayout title="Startseite">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                    <DishCard dish={{ id: '95e2f333-0e5d-4b90-9104-b28d3dd3099x', name: 'Spaghetti Bolognese', description: 'Hackfleisch anbraten, Zwiebeln dazu, Knoblauch dazu, Paprika dazu, Tomaten dazu, Tomatensauce und Milch dazu.' }} />
                </div>
            </FullWidthLayout>
        </>
    );
}
