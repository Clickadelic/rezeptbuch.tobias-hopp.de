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
            <ShadCnAvatar className={cn('asd', className)}>
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="bg-gray-200 dark:bg-gray-900 text-gray-400 dark:text-gray-200">
                    <GiCook className="" />
                </AvatarFallback>
            </ShadCnAvatar>
        </>
    );
}
