import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';


import BentoGrid from '@/Components/reusables/BentoGrid';


/**
 * The frontpage of the application.
 *
 * This page is the root route of the application and displays
 * a simple welcome message.
 *
 * @return {JSX.Element} The frontpage component.
 */
export default function Frontpage() {
    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout title="Willkommen">
                <BentoGrid />
            </FullWidthLayout>
        </>
    );
}
