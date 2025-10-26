import Avatar from '@/components/reusables/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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

export default function UserCard({
    name,
    avatarUrl,
    bio = 'Passionate home chef sharing delicious recipes and cooking tips',
    recipesCount = 42,
    followersCount = 1234,
    rating = 4.8,
    specialties = ['Italian', 'Baking', 'Vegan'],
    isFollowing = false,
}: UserCardProps) {
    return (
        <Card className="w-full max-w-md overflow-hidden">
            {/* Header Image */}
            <div className="relative h-24 w-full overflow-hidden">
                <img
                    src={headerImgSrc}
                    alt="Header background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
            </div>

            {/* Avatar - Centered and overlapping header */}
            <div className="relative -mt-16 flex justify-center px-6">
                <div className="relative">
                    <Avatar
                        className="h-28 w-28 border-4 border-card shadow-xl"
                        url={avatarUrl}
                        name={name}
                    />

                    <div className="absolute -bottom-1 -right-1 rounded-full bg-accent p-1.5 shadow-lg">
                        <ChefHat className="h-5 w-5 text-accent-foreground" />
                    </div>
                </div>
            </div>

            {/* User Info */}
            <div className="px-6 pb-6 pt-4 text-center">
                <h3 className="text-2xl font-bold text-card-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">@USERNAMe</p>

                {/* Rating */}
                <div className="mt-2 flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-card-foreground">{rating}</span>
                    <span className="text-sm text-muted-foreground">/5.0</span>
                </div>

                {/* Bio */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bio}</p>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                        </Badge>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-center gap-6 border-y border-border py-4">
                    <div className="text-center">
                        <div className="text-xl font-bold text-card-foreground">{recipesCount}</div>
                        <div className="text-xs text-muted-foreground">Recipes</div>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div className="text-center">
                        <div className="text-xl font-bold text-card-foreground">
                            {followersCount.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex gap-2">
                    <Button className="flex-1" variant={isFollowing ? 'outline' : 'default'}>
                        <Heart className={`mr-2 h-4 w-4 ${isFollowing ? 'fill-current' : ''}`} />
                        {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                    <Button variant="outline" size="icon">
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
