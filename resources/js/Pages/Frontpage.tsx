import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Frontpage({
    auth
}: PageProps<{ auth: { user: any } }>) {

    return (
        <>
            <Head title="Willkommen" />
            <FullWidthLayout title="Willkommen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="test py-5">
                        <h1 className="text-oswald text-5xl">Willkommen</h1>
                        <h2 className="text-oswald text-4xl">Willkommen</h2>
                        <h3 className="text-oswald text-3xl">Willkommen</h3>
                        <h4 className="text-oswald text-2xl">Willkommen</h4>
                        <h5 className="text-oswald text-xl">Willkommen</h5>
                        <h6 className="text-oswald text-lg">Willkommen</h6>
                    </div>
                    <div className="test py-5 space-y-3">
                        <h1 className="text-oswald text-3xl ">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                        <h1 className="text-oswald text-3xl">Willkommen</h1>
                    </div>
                </div>
                
            </FullWidthLayout>
        </>
    );
}
