"use client"

import { useState } from "react"
import { usePage } from "@inertiajs/react"
import { Star } from "lucide-react"
import { SharedPageProps } from "@/types"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  onRatingChange?: (rating: number) => void
  maxRating?: number
  size?: "sm" | "md" | "lg"
  readonly?: boolean
  showLabel?: boolean
  className?: string
}

export function StarRating({
  rating,
  onRatingChange,
  maxRating = 5,
  size = "md",
  readonly = false,
  showLabel = false,
  className,
}: StarRatingProps) {
  
  const { user } = usePage<SharedPageProps>().props.auth
  const [hoverRating, setHoverRating] = useState(0)

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const handleClick = (value: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(value)
    }
  }

  const handleMouseEnter = (value: number) => {
    if (!readonly) {
      setHoverRating(value)
    }
  }

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0)
    }
  }

  const displayRating = hoverRating || rating

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1
          const isFilled = starValue <= displayRating

          return (
            <button
              key={starValue}
              type="button"
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              disabled={readonly}
              className={cn(
                "transition-all duration-150",
                !readonly && "hover:scale-110 cursor-pointer",
                readonly && "cursor-default",
              )}
              aria-label={`Rate ${starValue} out of ${maxRating} stars`}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  "transition-colors duration-150",
                  isFilled ? "fill-yellow-400 text-yellow-400" : "fill-transparent text-muted-foreground",
                )}
              />
            </button>
          )
        })}
      </div>
      {showLabel && (
        <span className="text-sm text-muted-foreground">
          {displayRating > 0 ? `${displayRating}/${maxRating}` : "No rating"}
        </span>
      )}
    </div>
  )
}
