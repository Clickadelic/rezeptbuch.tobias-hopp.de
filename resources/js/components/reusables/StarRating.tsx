import { useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";
import { SharedPageProps } from "@/types";
import { usePermissions } from "@/hooks/usePermissions";
import { toast } from "sonner";

interface StarRatingProps {
  recipeId: string | number;
  initialRating?: number;
  communityRating?: number;
  communityVotes?: number;
  userHasVoted?: boolean;
  readOnly?: boolean;
}

/**
 * StarRating component for rating recipes.
 *
 * @param {number} recipeId - Id of the recipe to rate.
 * @param {number} [initialRating=0] - Initial rating of the recipe.
 * @param {number} [communityRating=0] - Average rating of the recipe from the community.
 * @param {number} [communityVotes=0] - Number of votes from the community.
 * @param {boolean} [userHasVoted=false] - Whether the user has voted for the recipe.
 * @param {boolean} [readOnly=false] - Whether the rating is read-only.
 *
 * @returns {JSX.Element} StarRating component.
 */
export default function StarRating({ recipeId, initialRating = 0, communityRating = 0, communityVotes = 0, userHasVoted = false, readOnly = false }: StarRatingProps) {
  const { user } = usePage<SharedPageProps>().props.auth;
  const { hasRole } = usePermissions();

  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const [community, setCommunity] = useState({
    rating: communityRating,
    votes: communityVotes,
  });
  const [voted, setVoted] = useState(userHasVoted);

  const canVote = hasRole("user") && !readOnly && !voted;

  const submitRating = async (value: number) => {
    if (!canVote) return;

    setRating(value);

    try {
      const response = await axios.post(`/rezepte/${recipeId}/rate`, {
        rating: value,
      });

      const { community_rating, community_votes } = response.data;

      setCommunity({
        rating: community_rating,
        votes: community_votes,
      });

      setVoted(true);

      toast.success("Vielen Dank für Deine Bewertung!");
    } catch (error) {
      console.error("Fehler beim Absenden der Bewertung", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => submitRating(star)}
            onMouseEnter={() => canVote && setHover(star)}
            onMouseLeave={() => canVote && setHover(0)}
            disabled={!canVote}
            className={cn(
              "focus:outline-none",
              canVote && "hover:cursor-pointer"
            )}
          >
            <Star
              className={cn(
                "size-5 transition-colors",
                star <= (hover || rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400"
              )}
            />
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-800 dark:text-gray-200">
        {community.votes > 0
          ? `Sterne: ${community.rating} / 5`
          : "Noch keine Bewertungen"}
      </div>
      <div className="text-sm text-gray-800 dark:text-gray-200">
        {community.votes > 0 ? `Bewertungen: ${community.votes}` : ""}
      </div>
    </div>
  );
}
