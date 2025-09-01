import { Head, usePage } from '@inertiajs/react';
import NoSidebarsLayout from '@/Layouts/NoSidebarsLayout';

export default function Ingredients() {
    const { props } = usePage();
    const { ingredients } = props;

    return (
        <>
            <Head title="Details" />
            <NoSidebarsLayout title="Details">Show Zutat</NoSidebarsLayout>
        </>
    );
}
