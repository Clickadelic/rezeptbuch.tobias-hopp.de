import { cn } from '@/lib/utils';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from '@inertiajs/react';
import AuthUser from '@/types/AuthUser';
import Avatar from '@/components/reusables/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Recipe } from '@/types/Recipe';
import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';

import fallbackImage from '@images/webp/annie-spratt-R3LcfTvcGWY-unsplash.webp';

interface OverhauledRecipeCardProps {
    className?: string
    recipe?: Recipe
}

export default function OverhauledRecipeCard({ recipe, className }: OverhauledRecipeCardProps) {
    return (
        <Card className={cn('flex flex-col gap-2 bg-gray-100 dark:bg-gray-900 p-0', className)}>
            <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                <div className="relative h-24 w-full overflow-hidden">
                    <img
                        src={recipe?.media?.[0]?.url ?? fallbackImage}
                        alt="Header background"
                        className="size-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                </div>
                {/* <div className="relative -mt-16 flex justify-center px-6">
                    <div className="relative">
                        <Avatar
                            className="h-24 w-24 border-2 border-primary"
                            url="#"
                            
                        />
                        <div className="absolute -bottom-1 -right-1 rounded-full bg-accent p-1.5 shadow-lg">
                            <ChefHat className="h-5 w-5 text-accent-foreground" />
                        </div>
                    </div>
                </div> */}
            </CardHeader>
            <CardContent>
                <CardDescription className="flex flex-col gap-1 items-center justify-center my-3">
                    <h4 className="text-xl text-gray-800 dark:text-gray-200">Tobias</h4>
                    <h5 className="text-md text-gray-800 dark:text-gray-200">@Tobias</h5>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <CardAction><Link href={route('recipes.show', { recipe: recipe?.slug })}>{recipe?.name}</Link></CardAction>
            </CardFooter>
        </Card>
    )
}