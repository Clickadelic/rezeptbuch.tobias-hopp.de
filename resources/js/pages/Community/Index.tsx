import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
import OverhauledUserCard from '@/components/reusables/OverhauledUserCard';
import UserCard from '@/components/reusables/UserCard';

import { SharedPageProps } from '@/types';

/**
 * Displays a list of all users.
 *
 * @return {JSX.Element} The rendered list of users.
 */
export default function Community() {
    const { users } = usePage<SharedPageProps>().props;
    return (
        <FullWidthLayout title="Community">
            <div className="grid grid-cols-5 gap-3">
                {users?.map((user: any) => (
                    <UserCard key={user.id} name={user.name} avatarUrl={user.avatar} />
                ))}
                {users?.map((user: any) => (
                    <OverhauledUserCard key={user.id} user={user} />
                ))}
            </div>
        </FullWidthLayout>
    );
}