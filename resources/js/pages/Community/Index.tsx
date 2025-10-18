import FullWidthLayout from '@/layouts/FullWidthLayout';

import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { SharedPageProps } from '@/types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                {users?.map((user : any) => (
                    <Avatar key={user.id}>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                ))}
            </div>
        </FullWidthLayout>
    );
}
