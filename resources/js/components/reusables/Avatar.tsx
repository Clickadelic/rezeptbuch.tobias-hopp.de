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
            <ShadCnAvatar className={cn('size-5', className)}>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className=" bg-gray-200 dark:bg-gray-200 text-gray-400 dark:text-gray-200">
                    <GiCook className="text-gray-800 dark:text-gray-400" />
                </AvatarFallback>
            </ShadCnAvatar>
        </>
    );
}
