
import { cn } from '@/lib/utils';

interface MegaMenuProps {
    className?: string
}

export default function MegaMenu ({ className }: MegaMenuProps) {
    return (
        <div className={cn(' bg-rose-200', className)}>
            <div className="flex">Menü</div>
            <div className="relative">
                <div className="absolute grid grid-cols-4 bg-rose-200 w-96">
                    <div>21</div>
                    <div>21</div>
                    <div>21</div>
                    <div>21</div>
                </div>
            </div>
        </div>
    )
}