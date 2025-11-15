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


interface OverhauledRecipeCardProps {
    className?: string
    recipe?: Recipe
}

export default function OverhauledRecipeCard({ recipe, className }: OverhauledRecipeCardProps) {
    return (
        <Card className={cn('flex flex-col bg-gray-100 dark:bg-gray-900 p-0 rounded-b-xl border-b border-gray-200 dark:border-gray-700', className)}>
            <Link href={route('recipes.show', { recipe: recipe?.slug })}>
                <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                    <div className="relative h-36 w-full overflow-hidden">
                        <img
                            src={recipe?.media?.[0]?.url ?? fallbackImage}
                            alt="Header background"
                            className="size-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                    </div>
                </CardHeader>
            </Link>
            <CardContent>
                <CardDescription className="asd">
                    <h3 className="text-lg font-semibold">{recipe?.name}</h3>
                </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col">
                <CardAction><Button variant="primary" className="w-full"><Link href={route('recipes.show', { recipe: recipe?.slug })}>{recipe?.name}</Link></Button></CardAction>
            </CardFooter>
        </Card>
    )
}