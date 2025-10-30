import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ recipeId, initialRating = 0 }) {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const submitRating = (value: number) => {
        setRating(value);
        router.post(`/rezepte/${recipeId}/rate`, { rating: value }, { preserveScroll: true });
    };

    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => submitRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none"
                >
                    <Star
                        className={cn(
                            'w-6 h-6 transition-colors',
                            star <= (hover || rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-400'
                        )}
                    />
                </button>
            ))}
        </div>
    );
}
