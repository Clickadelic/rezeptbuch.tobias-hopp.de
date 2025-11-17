import { cn } from '@/lib/utils';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Recipe } from '@/types/Recipe';

import { ChevronDown, ArrowRight } from 'lucide-react';
import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';

import CategoryCardBlock from '@/components/reusables/CategoryCardBlock';
import ContextMenu from '@/components/reusables/ContextMenu';
import FavoriteButton from '@/components/reusables/FavoriteButton';
import RecipeImageBlock from '@/components/reusables/Blocks/RecipeImageBlock';

import Avatar from '@/components/reusables/Avatar';
import AvatarBlock from '@/components/reusables/Blocks/AvatarBlock';

import AuthUser from '@/types/AuthUser';
import { IconMap } from '@/lib/icon-map';

interface BigRecipeCardProps {
    className?: string
    recipe?: Recipe
}

/**
 * Displays an overhauled recipe card with a larger image and more details.
 * @param {BigRecipeCardProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 */
export default function BigRecipeCard({ recipe, className }: BigRecipeCardProps) {
    return (
        <Card className={cn('shadow-xs flex flex-col bg-gray-100 dark:bg-gray-900 p-0 rounded-b-xl border-b border-gray-200 dark:border-gray-700', className)}>
            <Link href={route('recipes.show', { recipe: recipe?.slug })} className="border border-transparent hover:border-primary animate ease-in-out duration-300 rounded-lg">
                <CardHeader className="p-0 overflow-hidden rounded-lg">
                    <div className="relative h-36 w-full overflow-hidden">
                        <FavoriteButton recipeId={recipe?.id} className="absolute top-1 left-1 z-50" />
                        <RecipeImageBlock recipe={recipe as Recipe} />
                    </div>
                </CardHeader>
            </Link>
            <CardContent>
                <CardDescription className="relative mt-2">
                    <ContextMenu recipe={recipe as Recipe} className="absolute top-1 -right-1 z-50" />
                    <h3 className="text-base text-gray-600 dark:text-gray-400 font-oooh-baby line-clamp-1">{recipe?.punchline}</h3>
                    <h4 className="text-base text-gray-800 dark:text-gray-200 line-clamp-2 min-h-12 leading-snug mt-1">{recipe?.name}</h4>
                    {/* <AvatarBlock recipe={recipe as Recipe} /> */}
                </CardDescription>
                <CategoryCardBlock recipe={recipe as Recipe} />
            </CardContent>
            <CardFooter className="flex gap-1 justify-between p-4">
                    <Button variant="primary" className="group" asChild>
                        <Link href={route('recipes.show', { recipe: recipe?.slug })} className="w-full shadow-lg" title="Zum Rezept">
                            Zum Rezept
                            <ArrowRight className="-mt-[3px] size-4 transition-all group-hover:translate-x-1" />
                        </Link>
                    </Button>
            </CardFooter>
        </Card>
    )
}