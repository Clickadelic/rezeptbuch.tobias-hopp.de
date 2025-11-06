'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserStarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  showLabel?: boolean;
  className?: string;
}

export default function UserStarRating({
  rating: initialRating,
  onRatingChange,
  maxRating = 5,
  size = 'md',
  readonly = false,
  showLabel = true,
  className,
}: UserStarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(initialRating);

  const handleClick = (newRating: number) => {
    if (readonly) return;
    setRating(newRating);
    onRatingChange?.(newRating);
  };

  const sizeClasses = {
    sm: 'size-4',
    md: 'size-6',
    lg: 'size-8',
  }[size];

  return (
    <div className={cn('flex flex-col items-center justify-center gap-1', className)}>
      <div className="flex gap-1">
        {Array.from({ length: maxRating }).map((_, i) => {
          const starValue = i + 1;
          const isFilled = hovered
            ? starValue <= hovered
            : starValue <= rating;

          return (
            <Star
              key={starValue}
              className={cn(
                sizeClasses,
                'cursor-pointer transition-colors duration-150',
                isFilled
                  ? 'fill-yellow-400 stroke-yellow-400'
                  : 'stroke-gray-400 dark:stroke-gray-600',
                readonly ? 'cursor-default opacity-80' : 'hover:scale-110'
              )}
              onMouseEnter={() => !readonly && setHovered(starValue)}
              onMouseLeave={() => !readonly && setHovered(null)}
              onClick={() => handleClick(starValue)}
            />
          );
        })}
      </div>
      {showLabel && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          {rating} / {maxRating} Sterne
        </p>
      )}
    </div>
  );
}
