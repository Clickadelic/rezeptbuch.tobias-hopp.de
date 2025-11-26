'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommunityRatingProps {
    averageRating: number; // community_rating
    votes?: number; // community_votes
    className?: string;
}

export default function CommunityRating({
    averageRating,
    votes = 0,
    className,
}: CommunityRatingProps) {
    const rounded = Math.round(averageRating); // volle Sterne für Anzeige
    return (
        <div className={cn('flex items-center gap-1', className)}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={cn(
                        'w-6 h-6',
                        star <= rounded
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300 dark:text-gray-600',
                    )}
                />
            ))}
            <span className="ml-2 text-sm text-gray-500">
                {averageRating.toFixed(1)} / 5 ({votes} Stimme{votes !== 1 ? 'n' : ''})
            </span>
        </div>
    );
}
