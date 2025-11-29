import { useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { SharedPageProps } from '@/types';
import { usePermissions } from '@/hooks/usePermissions';
import { toast } from 'sonner';
import { LuBookmarkCheck } from "react-icons/lu";
import { FaHeart, FaSpinner } from 'react-icons/fa6';
import { FaRankingStar } from "react-icons/fa6";
import { PiShootingStarLight } from "react-icons/pi";
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
export default function StarRating({
    recipeId,
    initialRating = 0,
    communityRating = 0,
    communityVotes = 0,
    userHasVoted = false,
    readOnly = false,
}: StarRatingProps) {
    const { user } = usePage<SharedPageProps>().props.auth;
    const { hasRole } = usePermissions();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(initialRating);
    const [hover, setHover] = useState<number>(0);
    const [community, setCommunity] = useState({
        rating: communityRating,
        votes: communityVotes,
    });

    const [voted, setVoted] = useState(userHasVoted);

    const canVote = hasRole('user') && !readOnly && !voted;

    const submitRating = async (value: number) => {
        if (!canVote) return;

        setRating(value);

        try {
            setIsLoading(true);
            const response = await axios.post(`/rezepte/${recipeId}/rate`, {
                rating: value,
            });

            const { community_rating, community_votes } = response.data;

            setCommunity({
                rating: community_rating,
                votes: community_votes,
            });

            setVoted(true);
            toast.success('Vielen Dank für Deine Bewertung!');
        } catch (error) {
            console.error('Fehler beim Absenden der Bewertung', error);
        } finally {
            setIsLoading(false);
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
                            'focus:outline-none',
                            canVote ? 'hover:cursor-pointer' : 'cursor-not-allowed',
                        )}
                    >
                        <Star
                            className={cn(
                                'size-5 transition-colors',
                                star <= (hover || rating)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-400',
                            )}
                        />
                    </button>
                ))}
                
            </div>
            {isLoading && (
                <div className="text-sm text-gray-800 dark:text-gray-200">
                    <p className="flex gap-2"><FaSpinner className="animate-spin size-4 text-primary" />sende Bewertung</p>
                </div>
            )}
            {/* Nachricht, wenn User bereits gevotet hat */}
            {community.votes > 0 && (
                <div className="text-sm text-gray-800 dark:text-gray-200">
                    <p>
                        {community.rating} / {community.votes} Bewertungen.
                    </p>
                </div>
            )}

            {community.votes > 0 && (
                <div className="text-sm text-gray-800 dark:text-gray-200">
                    {community.votes === 1 && <p>{`${community.votes} Bewertung`}</p>}
                    {community.votes > 1 && <p>{`${community.votes} Bewertungen`}</p>}
                </div>
            )}
            {!voted && (
                <div className="text-sm text-gray-800 dark:text-gray-200">
                    <p className="flex gap-2"><PiShootingStarLight className="size-5 text-primary" />Gib' Deine Bewertung ab.</p>
                </div>
            )}
            {voted && (
                <div className="text-sm text-gray-800 dark:text-gray-200">
                    <p className="flex gap-2"><LuBookmarkCheck className="size-5 text-primary" />{voted && <>Du hast mit {rating} Sternen bewertet.</>}</p>
                </div>
            )}
            
        </div>
    );
}
