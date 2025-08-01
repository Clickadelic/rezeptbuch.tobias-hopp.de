import PublicLayout from '@/layouts/PublicLayout';
import { Head } from '@inertiajs/react';

import CustomCarousel from '@/components/CustomCarousel';

export default function Dashboard() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            <h2 className="text-2xl my-4">Willkommen</h2>
            <CustomCarousel />
        </PublicLayout>
    );
}
