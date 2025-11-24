import { useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';

import { SharedPageProps } from '@/types';
import { usePermissions } from '@/hooks/usePermissions';

interface StarRatingProps {
  recipeId: string;
  initialRating?: number;      // Bewertung des aktuellen Users
  communityRating?: number;    // Durchschnitt der Community
  communityVotes?: number;     // Anzahl Votes
  userHasVoted?: boolean;      // True, wenn User bereits gevotet hat
}

export default function StarRating({recipeId,initialRating = 0,communityRating = 0,communityVotes = 0,userHasVoted = false }: StarRatingProps) {
    const { user } = usePage<SharedPageProps>().props.auth;
    const { hasRole } = usePermissions();

    const [rating, setRating] = useState<number>(initialRating);
    const [hover, setHover] = useState<number>(0);
    const [community, setCommunity] = useState({
        rating: communityRating,
        votes: communityVotes,
    });
    const [voted, setVoted] = useState(userHasVoted);

    const submitRating = async (value: number) => {
      if (voted) return; // optional: nur einmal voten
      setRating(value);

      try {
        const response = await axios.post(`/rezepte/${recipeId}/rate`, { rating: value });
        // Response sollte neue Community-Daten enthalten
        const { community_rating, community_votes } = response.data;
        setCommunity({ rating: community_rating, votes: community_votes });
        setVoted(true);
      } catch (error) {
        console.error('Fehler beim Absenden der Bewertung', error);
      }
    };
    
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => submitRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            disabled={!hasRole('user')}
            className={cn("focus:outline-none", hasRole('user') && ' hover:cursor-pointer')}
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

      <div className="text-sm text-gray-600 dark:text-gray-400">
        {community.votes > 0
          ? `Community: ${community.rating} / 5 (${community.votes} Stimmen)`
          : 'Noch keine Bewertungen'}
      </div>
    </div>
  );
}
