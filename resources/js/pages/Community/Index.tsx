import FullWidthLayout from '@/layouts/FullWidthLayout';
import { AuthUser } from '@/types';

import { usePage } from '@inertiajs/react';
/**
 * Displays a list of all users.
 * 
 * @return {JSX.Element} The rendered list of users.
 */
export default function Community() {
    const { auth } = usePage().props;
    const { users } = usePage().props;

    return (
        <FullWidthLayout title="Community">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
                
                    <li>user</li>
                
            </ul>
        </FullWidthLayout>
    );
}
