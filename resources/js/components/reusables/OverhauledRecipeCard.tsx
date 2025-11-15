import { cn } from '@/lib/utils';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from '@inertiajs/react';
import AuthUser from '@/types/AuthUser';
import Avatar from '@/components/reusables/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Recipe } from '@/types/Recipe';
import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';
import AvatarBlock from '@/components/reusables/Blocks/AvatarBlock';
import fallbackImage from '@images/webp/annie-spratt-R3LcfTvcGWY-unsplash.webp';
import FavoriteButton from '@/components/reusables/FavoriteButton';

import IconCategorySwitcher from '@/components/reusables/IconCategorySwitcher';


interface OverhauledRecipeCardProps {
    className?: string
    recipe?: Recipe
}

export default function OverhauledRecipeCard({ recipe, className }: OverhauledRecipeCardProps) {
    return (
        <Card className={cn('flex flex-col bg-gray-100 dark:bg-gray-900 p-0 rounded-b-xl border-b border-gray-200 dark:border-gray-700', className)}>
            <Link href={route('recipes.show', { recipe: recipe?.slug })} className="border border-transparent hover:border-primary animate ease-in-out duration-300 rounded-t-lg">
                <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                    <div className="relative h-36 w-full overflow-hidden">
                        
                        <IconCategorySwitcher recipe={recipe as Recipe} />
                        
                        <img
                            src={recipe?.media?.[0]?.url ?? fallbackImage}
                            alt="Header background"
                            className="size-full relative z-30 aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                        <div className="bg-primary z-40 relative">
                            <FavoriteButton recipeId={recipe?.id} className="absolute bottom-1 left-2 z-50" />
                        </div>
                    </div>
                </CardHeader>
            </Link>
            <CardContent>
                <CardDescription className="asd">
                    <h3 className="text-md text-gray-600 dark:text-gray-400 font-la-belle-aurore line-clamp-1">{recipe?.punchline}</h3>
                    <h4 className="text-lg text-gray-800 dark:text-gray-200 line-clamp-2 min-h-[3.5rem] leading-snug">{recipe?.name}</h4>
                    <p className="min-h-9">{recipe?.description}</p>
                </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-1 justify-between p-4">
                    <Button variant="primary" asChild>
                        <Link href={route('recipes.show', { recipe: recipe?.slug })} className="w-full shadow-lg">Zum Rezept</Link>
                    </Button>
            </CardFooter>
        </Card>
    )
}