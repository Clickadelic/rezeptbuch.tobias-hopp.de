import { cn } from '@/lib/utils';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import AuthUser from '@/types/AuthUser';
import Avatar from '@/components/reusables/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';

import headerImgSrc from '../../../images/Spaghetti-Ingredients.jpg';

interface UserCardProps {
    name: string;
    avatarUrl?: string;

    bio?: string;
    recipesCount?: number;
    followersCount?: number;
    rating?: number;
    specialties?: string[];
    isFollowing?: boolean;
}

interface OverhauledUserCardProps {
    className?: string
    user?: AuthUser
}

export default function OverhauledUserCard({ user, className }: OverhauledUserCardProps) {
    return (
        <Card className={cn('flex flex-col gap-2 bg-gray-100 dark:bg-gray-900 p-0', className)}>
            <CardHeader className="p-0 overflow-hidden rounded-t-lg">
                <div className="relative h-24 w-full overflow-hidden">
                    <img
                        src={headerImgSrc}
                        alt="Header background"
                        className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                </div>
                <div className="relative -mt-16 flex justify-center px-6">
                    <div className="relative">
                        <Avatar
                            className="h-24 w-24 border-2 border-primary"
                            url={user?.avatar}
                            name={user?.name}
                        />
    
                        <div className="absolute -bottom-1 -right-1 rounded-full bg-accent p-1.5 shadow-lg">
                            <ChefHat className="h-5 w-5 text-accent-foreground" />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="flex flex-col gap-1 items-center justify-center my-3">
                    <h4 className="text-xl text-gray-800 dark:text-gray-200">{user?.name}</h4>
                    <h5 className="text-md text-gray-800 dark:text-gray-200">@{user?.name}</h5>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <CardAction>Commis de Cuisine</CardAction>
            </CardFooter>
        </Card>
    )
}