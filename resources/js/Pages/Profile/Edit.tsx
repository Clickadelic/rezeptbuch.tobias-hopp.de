import TwoSidebarsLayout from '@/Layouts/TwoSidebarsLayout';
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
        <TwoSidebarsLayout title="Profil" leftSidebar={<LeftSidebar />} rightSidebar={<RightSidebar />}>
            <Head title="Profil" />

            <div className="space-y-4">
                <div className="bg-white rounded p-4 shadow sm:rounded-lg sm:p-8">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="bg-white rounded p-4 shadow sm:rounded-lg sm:p-8">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className="bg-white rounded p-4 shadow sm:rounded-lg sm:p-8">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>

        </TwoSidebarsLayout>
    );
}
