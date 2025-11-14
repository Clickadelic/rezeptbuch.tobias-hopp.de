import { SharedPageProps } from '@/types';
import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import UpdateAvatarForm from './Partials/UploadAvatarForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
/**
 * Edit page for user profile.
 *
 * @param {SharedPageProps} props - MustVerifyEmail and status
 * @returns {JSX.Element} - Edit page
 */
export default function Edit({ mustVerifyEmail, status }: SharedPageProps) {
    return (
        <NoSidebarsLayout title="Dein Profil">
            <UpdateAvatarForm className="mb-5" />
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="community">Community</TabsTrigger>
                    <TabsTrigger value="account">Account</TabsTrigger>
                </TabsList>
                <TabsContent value="community">
                    <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
                </TabsContent>
                <TabsContent value="account">
                    <UpdatePasswordForm className="w-full" />
                    <DeleteUserForm className="w-full" />
                </TabsContent>
            </Tabs>
        </NoSidebarsLayout>
    );
}
