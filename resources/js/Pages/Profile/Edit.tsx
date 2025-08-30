import NoSidebarsLayout from '@/Layouts/NoSidebarsLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import LeftSidebar from '@/Components/sidebars/LeftSidebar';
import RightSidebar from '@/Components/sidebars/RightSidebar';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <NoSidebarsLayout
            title="Profil"
        >
            <Head title="Profil" />

            <div className="space-y-4">
                <div className="bg-white rounded p-4 sm:rounded-lg sm:p-8">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="bg-white rounded p-4 sm:rounded-lg sm:p-8">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className="bg-white rounded p-4 sm:rounded-lg sm:p-8">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </NoSidebarsLayout>
    );
}
