import { usePage } from '@inertiajs/react';

import FullWidthLayout from '@/layouts/FullWidthLayout';
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
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {users?.map((user: any) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </FullWidthLayout>
    );
}
