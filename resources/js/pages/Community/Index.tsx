import FullWidthLayout from '@/layouts/FullWidthLayout';

import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import UserCard from '@/components/reusables/UserCard';

import Avatar from '@/components/reusables/Avatar';
/**
 * Displays a list of all users.
 *
 * @return {JSX.Element} The rendered list of users.
 */
export default function Community() {
    const { auth } = usePage<SharedPageProps>().props;
    const { users } = usePage<SharedPageProps>().props;

    return (
        <FullWidthLayout title="Community">
            <div className="grid grid-cols-5 gap-3">
                {users?.map((user: any) => (
                    <UserCard key={user.id} name={user.name}  avatarUrl={user.avatar}  />
                ))}
            </div>
        </FullWidthLayout>
    );
}
