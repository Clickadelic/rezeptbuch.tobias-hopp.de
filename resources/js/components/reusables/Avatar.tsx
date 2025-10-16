import { Avatar as ShadCnAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GiCook } from 'react-icons/gi';
import { cn } from '@/lib/utils';

interface AvatarProps {
    url?: string;
    className?: string;
}

export default function Avatar({ url, className }: AvatarProps) {
    const avatarUrl = url;
    return (
        <>
            <ShadCnAvatar className={cn("border border-gray-200 dark:border-gray-700", className)}>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>
                    <GiCook className="text-gray-400" />
                </AvatarFallback>
            </ShadCnAvatar>
        </>
    );
}
