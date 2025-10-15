import { cn } from '@/lib/utils';

interface VerifidedBadgeProps {
    verified: boolean;
}

export default function VerifiedBadge({ verified }: VerifidedBadgeProps) {
    return (
        <div className="flex items-center gap-2">
            <span
                className={cn('size-3 rounded-full', verified ? 'bg-emerald-300' : 'bg-rose-400')}
            ></span>
            {verified ? 'verifiziert' : 'unverifiziert'}
        </div>
    );
}
