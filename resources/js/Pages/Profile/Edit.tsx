import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <NoSidebarsLayout title="Profil">
            <div className="mx-auto max-w-lg space-y-4">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="w-full"
                />
                <hr className="my-5 bg-slate-300 dark:bg-slate-700" />
                <UpdatePasswordForm className="w-full" />
                <hr className="my-5 bg-slate-300 dark:bg-slate-700" />
                <DeleteUserForm className="w-full" />
            </div>
        </NoSidebarsLayout>
    );
}
