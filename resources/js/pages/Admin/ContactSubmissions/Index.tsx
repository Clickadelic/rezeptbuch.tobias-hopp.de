import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import AdminSidebar from '@/components/sidebars/AdminSidebar';
import ContactSubmissionsTable from '@/components/reusables/Tables/ContactSubmissionsTable';

import { ContactSubmission } from '@/types/ContactSubmission';
import { SharedPageProps } from '@/types';

/**
 * The ContactSubmissions page displays a list of incoming contact requests.
 */
export default function ContactSubmissions() {
    const { contactSubmissions } = usePage<SharedPageProps>().props;
    return (
        <SidebarLeftLayout
            title="Kontaktanfragen"
            sidebar={<AdminSidebar />}
        >
            <ContactSubmissionsTable
                contactSubmissions={contactSubmissions as ContactSubmission[]}
                className="mt-5"
                tableClasses="table-auto"
            />
        </SidebarLeftLayout>
    );
}

