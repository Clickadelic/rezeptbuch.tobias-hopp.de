import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';

import { PageProps } from "@/types";

interface CustomPageProps extends PageProps {
  breadcrumbs: {
    label: string;
    url: string | null;
  }[];
}
export default function Dashboard({ props }: { props: CustomPageProps }) {
    return (
        <FullWidthLayout>
            <Head title="Willkommen" />
            <p>Test für die Webseite. Hallo Welt!</p>
        </FullWidthLayout>
    );
}
