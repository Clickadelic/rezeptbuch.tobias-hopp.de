import { SharedPageProps } from '@/types';
import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import UpdateAvatarForm from './Partials/UploadAvatarForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateCommunityInformationForm from './Partials/UpdateCommunityInformationForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Edit page for user profile.
 *
 * @param {SharedPageProps} props - MustVerifyEmail and status
 * @returns {JSX.Element} - Edit page
 */
export default function Edit({ mustVerifyEmail, status }: SharedPageProps) {
    return (
        <NoSidebarsLayout title="Dein Profil">
            <UpdateAvatarForm className="w-full mb-5" />
            <UpdateCommunityInformationForm className="w-full mb-5" mustVerifyEmail={mustVerifyEmail} status={status} />
            <UpdateProfileInformationForm className="w-full mb-5" mustVerifyEmail={mustVerifyEmail} status={status} />
            <UpdatePasswordForm className="w-full mb-5" />
            <DeleteUserForm className="w-full" />
        </NoSidebarsLayout>
    );
}
