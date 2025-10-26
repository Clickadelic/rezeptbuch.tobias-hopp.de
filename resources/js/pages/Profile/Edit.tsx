import { SharedPageProps } from '@/types';
import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import UpdateAvatarForm from './Partials/UploadAvatarForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

/**
 * Edit page for user profile.
 *
 * @param {SharedPageProps} props - MustVerifyEmail and status
 * @returns {JSX.Element} - Edit page
 */
export default function Edit({ mustVerifyEmail, status }: SharedPageProps) {
    return (
        <NoSidebarsLayout title="Profil">
            <div className="mx-auto max-w-lg space-y-4">
                <UpdateAvatarForm />
                <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
                <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
                <UpdatePasswordForm className="w-full" />
                <hr className="my-5 bg-gray-300 dark:bg-gray-700" />
                <DeleteUserForm className="w-full" />
            </div>
        </NoSidebarsLayout>
    );
}
