import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

interface PaginationProps {
    className?: string;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    onPageClick?: (link: string) => void;
    loading?: boolean;
}

export default function Pagination({ className, links }: PaginationProps) {
    return (
        <div className={cn('flex items-center justify-center space-x-2', className)}>
            {links.map((link, i) => (
                <Link
                    key={i}
                    href={link.url || '#'}
                    className={`px-3 py-1 text-sm rounded transition-colors duration-200
            ${link.active ? 'bg-primary dark:primary text-white' : 'bg-gray-100 dark:bg-gray-900 dark:text-gray-200 text-gray-800 hover:bg-primary hover:text-white'}
            ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
