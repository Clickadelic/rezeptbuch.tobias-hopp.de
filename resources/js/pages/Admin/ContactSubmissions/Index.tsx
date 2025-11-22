import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import UsersTable from '@/components/reusables/Tables/UsersTable';
import AdminSidebar from '@/components/sidebars/AdminSidebar';

import { FiUsers } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { ContactSubmission } from '@/types/ContactSubmission';
import { SharedPageProps } from '@/types';

/**
 * The ContactSubmissions page displays a list of incoming contact requests.
 */
export default function ContactSubmissions() {

    const { contactSubmissions } = usePage<SharedPageProps>().props;

    console.log(contactSubmissions);

    return (
        <SidebarLeftLayout title="Kontaktanfragen" sidebar={<AdminSidebar />}>
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                {contactSubmissions?.map((submission:ContactSubmission) => (
                    <div>{submission.name}</div>
                ))}
            </div>
        </SidebarLeftLayout>
    );
}
