import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import FullWidthLayout from '@/layouts/FullWidthLayout';

export default function CocktailsIndex({ auth }: PageProps<{ auth: { user: any } }>) {
    return (
        <>
            <Head title="Cocktails" />
            <FullWidthLayout title="Cocktails">
                <div>Cocktails Content</div>
            </FullWidthLayout>
        </>
    );
}
