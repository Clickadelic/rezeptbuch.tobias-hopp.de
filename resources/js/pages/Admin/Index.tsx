import { usePage } from '@inertiajs/react';

import SidebarLeftLayout from '@/layouts/SidebarLeftLayout';
import AdminUsersTable from '@/components/reusables/Tables/AdminUsersTable';
import AdminSidebar from '@/components/sidebars/AdminSidebar';

import { FiUsers } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

import { SharedPageProps } from '@/types';

/**
 * The Dashboard page displays a variety of information about the user's recipes.
 * It includes a bar chart that shows the number of recipes, a donut chart that shows the distribution of recipes between the user and other users, and two tables that show the user's recipes and favorites.
 */
export default function AdminPage() {
    const { user } = usePage<SharedPageProps>().props.auth;
    const { users } = usePage<SharedPageProps>().props;

    return (
        <SidebarLeftLayout title="Admin" sidebar={<AdminSidebar />}>
            <div className="grid grid-cols-1 xl:grid-cols-12 grid-rows-2 xl:grid-rows-1 gap-2 xl:gap-5 mb-2 xl:mb-5">
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <TfiCommentsSmiley className="size-4 mt-1 text-primary rotate-y-180" />{' '}
                                Hi {user?.name}
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <FiUsers className="size-4 mt-1 text-primary" /> Benutzer
                            </span>
                            {users.length}
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <FiUser className="size-4 mt-1 text-primary rotate-y-180" /> User
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="col-span-1 xl:col-span-3">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg flex justify-between items-center cursor-default">
                            <span className="flex gap-2">
                                <MdOutlineAdminPanelSettings className="size-4 mt-1 text-primary rotate-y-180" />{' '}
                                Admin
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <AdminUsersTable
                users={users}
                icon={<FiUsers className="size-4 mt-1 text-primary" />}
            />
        </SidebarLeftLayout>
    );
}
