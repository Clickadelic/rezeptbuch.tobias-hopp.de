
import { cn } from '@/lib/utils';

interface MegaMenuProps {
    className?: string
}

export default function MegaMenu ({ className }: MegaMenuProps) {
    return (
        <div className={cn('asd', className)}>MegaMenu</div>
    )
}