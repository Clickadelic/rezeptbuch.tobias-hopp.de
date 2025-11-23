import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { cn } from '@/lib/utils';

interface PopoverInfoProps {
    className?: string;
    description?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
}

export default function PopoverInfo({ className, description, side = 'right' }: PopoverInfoProps) {
    return (
        <span className={cn('flex', className)}>
            <Popover>
                <PopoverTrigger>
                    <IoIosInformationCircleOutline className="size-5 text-gray-600 dark:text-gray-400" />
                </PopoverTrigger>
                <PopoverContent side={side}>{description}</PopoverContent>
            </Popover>
        </span>
    );
}
