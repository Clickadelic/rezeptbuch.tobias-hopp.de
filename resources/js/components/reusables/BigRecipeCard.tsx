import { cn } from '@/lib/utils';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

import { ChevronDown, ArrowRight } from 'lucide-react';
import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';
import { LuUtensilsCrossed } from 'react-icons/lu';
import { PiCookingPot } from 'react-icons/pi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { RiCake3Line } from 'react-icons/ri';
import { GiCakeSlice, GiCrystalBars } from 'react-icons/gi';
import { TbSalad } from 'react-icons/tb';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoHeart } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import { VscSymbolEvent } from 'react-icons/vsc';

import CategoryCardBlock from '@/components/reusables/CategoryCardBlock';
import ContextMenu from '@/components/reusables/ContextMenu';
import FavoriteButton from '@/components/reusables/FavoriteButton';
import RecipeImageBlock from '@/components/reusables/Blocks/RecipeImageBlock';
import RecipeStarRating from '@/components/reusables/RecipeStarRating';
import Avatar from '@/components/reusables/Avatar';
import AvatarBlock from '@/components/reusables/Blocks/AvatarBlock';
import CommentPreviewBlock from '@/components/reusables/Blocks/CommentPreviewBlock';

import AuthUser from '@/types/AuthUser';
import { IconMap } from '@/lib/icon-map';
import { Recipe } from '@/types/Recipe';

interface BigRecipeCardProps {
    className?: string;
    recipe: Recipe;
}

/**
 * Displays an overhauled recipe card with a larger image and more details.
 * @param {BigRecipeCardProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 */
export default function BigRecipeCard({ recipe, className }: BigRecipeCardProps) {
    return (
        <Card
            className={cn(
                'shadow-xs hover:shadow-md animate ease-in-out duration-300 flex flex-col bg-gray-100 dark:bg-gray-900 p-0 rounded-b-xl border-b border-gray-200 dark:border-gray-700',
                className,
            )}
        >
            <Link
                href={route('recipes.show', { recipe: recipe?.slug })}
                className="border border-transparent hover:border-primary animate ease-in-out duration-300 rounded-lg"
            >
                <CardHeader className="relative w-full h-auto p-0 overflow-hidden rounded-lg">
                    <FavoriteButton recipeId={recipe?.id} className="absolute top-1 left-1 z-50" />
                    <RecipeImageBlock recipe={recipe as Recipe} />
                </CardHeader>
            </Link>
            <CardContent className="relative">
                <CardDescription className="relative mt-2">
                    <ContextMenu
                        recipe={recipe as Recipe}
                        className="absolute top-1 -right-1 z-50"
                    />
                    <h3 className=" text-gray-600 dark:text-gray-400 font-yellowtail min-h-5 line-clamp-1 mr-8">
                        {recipe?.punchline}
                    </h3>
                    <h4 className="text-base text-gray-800 dark:text-gray-200 line-clamp-2 min-h-12 leading-snug mt-1">
                        {recipe?.name}
                    </h4>
                </CardDescription>
                <div className="flex gap-2 justify-between text-sm">
                    <CategoryCardBlock recipe={recipe as Recipe} />
                    <div className="flex justify-center items-center gap-1 text-sm">
                        <Star className="inline-flex size-4 mr-1 -mt-.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-gray-800 dark:text-gray-200">
                            {recipe?.community_rating}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">/</span>
                        <span className="text-gray-800 dark:text-gray-200">
                            {recipe?.community_votes}
                        </span>
                    </div>
                </div>
                <div className="w-full flex justify-between gap-2 mt-3">
                    <div className="text-gray-800 dark:text-gray-200 text-sm">
                        <GoClock className="inline-flex size-4 mr-1 -mt-1 text-primary" />
                        {recipe?.preparation_time} Minuten
                    </div>
                    <div className="text-gray-800 dark:text-gray-200 text-sm">
                        {/* <span>{recipe?.comments?.total || 0} Kommentare</span> */}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-1 justify-between p-4">
                <Button variant="primary" className="w-full group" asChild>
                    {recipe?.slug && (
                        <Link href={route('recipes.show', { recipe: recipe.slug })}>
                            Zum Rezept
                            <ArrowRight className="-mt-[1px] size-4 transition-all group-hover:translate-x-1" />
                        </Link>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
