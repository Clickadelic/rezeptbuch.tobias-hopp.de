import { usePage } from '@inertiajs/react';
import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import AdminSidebar from '@/components/sidebars/AdminSidebar';
import { Button } from '@/components/ui/button';
import UsersTable from '@/components/reusables/UsersTable';
import { SharedPageProps } from '@/types';
export default function Index() {
    const { props }:any = usePage<SharedPageProps>();
    const user = props.user;
    const users = props.users;

    return (
        <SidebarLeftLayout title="Admin" sidebar={<AdminSidebar />}>
            <h1>Willkommen {user.name}</h1>
            <p>
                Deine Rollen: <strong>{user.roles?.join(', ')}</strong>
            </p>
            <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
            {/* TODO: Add User Management */}
            <UsersTable users={users} />
        </SidebarLeftLayout>
    );
}
