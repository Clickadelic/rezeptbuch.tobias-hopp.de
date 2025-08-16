import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Link } from '@inertiajs/react';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import DishesSidebar from '@/Components//sidebars/DishesSidebar';

export default function Gerichte() {
    const { dishes, auth } = usePage<PageProps>().props;
    const { toast: toastMessage } = usePage().props as { toast?: string };

    useEffect(() => {
        if (toastMessage) {
            toast.success(toastMessage);
        }
    }, [toastMessage]);
    return (
        <>
            <Head title="Gerichte" />
            <SidebarLeftLayout title="Gerichte" sidebar={<DishesSidebar />}>
                <ul className="grid grid-cols-5 gap-4">
                    {dishes.map((dish) => (
                        <li key={dish.id} className="bg-white rounded shadow p-4">
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <p>{dish.rating}</p>
                            <Link href={route('dishes.show', dish.id)}>
                                {dish.name}
                            </Link>
                            <Link href={route('dishes.edit', dish.id)}>
                                edit
                            </Link>
                            <Link href={route('dishes.destroy', dish.id)}>delete</Link>
                        </li>
                    ))}
                </ul>
            </SidebarLeftLayout>
        </>
    );
}
