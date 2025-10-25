
import { cn } from '@/lib/utils';
import AuthUser from '@/types/AuthUser';

interface UserCardProps {
    user: AuthUser;
    className?: string
}

export default function UserCard({ className }: UserCardProps) {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            UserCard
        </div>
    );
}