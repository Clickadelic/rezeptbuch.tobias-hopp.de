import { Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';

import { Button } from '@/Components/ui/button';

export default function Show({ dish }: any) {
    const deleteDish = () => {
        if (confirm('Wirklich löschen?')) {
            // @ts-ignore
            Inertia.delete(route('dishes.destroy', dish.id));
        }
    };
    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title={dish.name} sidebar={<DishesSidebar />}>
                <div className="space-y-4 mb-3">
                    <div className="bg-white rounded p-4 shadow sm:rounded-lg sm:p-8">
                        <h2 className="text-2xl">{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p>{dish.rating}</p>
                    </div>
                </div>
                <div className="flex justify-between gap-3">
                    <Button asChild variant="ghost" className="w-full">
                        <Link href={route('dishes.index')}>← Zurück zur Übersicht</Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full">
                        <Link href={route('dishes.edit', dish.id)}>Bearbeiten</Link>
                    </Button>
                    <Button onClick={deleteDish} variant="destructive" className="w-full">
                        Gericht löschen
                    </Button>
                </div>
            </SidebarLeftLayout>
        </>
    );
}
