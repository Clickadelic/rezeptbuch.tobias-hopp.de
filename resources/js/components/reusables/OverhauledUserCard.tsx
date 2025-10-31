import Avatar from '@/components/reusables/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';

import AuthUser from '@/types/AuthUser';


import headerImgSrc from '../../../images/webp/User-Card-Header-Background.webp';

interface OverhauledUserCardProps {
    user: AuthUser
}

export default function OverhauledUserCard({ user }: OverhauledUserCardProps) {
    return (
        <Card className="w-full py-0 max-w-md overflow-hidden bg-gray-100 dark:bg-gray-900">
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
                        className="h-24 w-24 border-2 border-primary shadow-xl"
                        url={user?.avatar}
                        name={user?.name}
                    />

                    <div className="absolute -bottom-1 -right-1 rounded-full bg-accent p-1.5 shadow-lg">
                        <ChefHat className="h-5 w-5 text-accent-foreground" />
                    </div>
                </div>
            </div>

            {/* User Info */}
            <div className="px-6 pb-6 pt-4 text-center">
                <h3 className="text-xl text-gray-800 dark:text-gray-200">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">@{user?.name}</p>

                {/* Rating */}
                <div className="mt-2 flex items-center justify-center gap-1">
                    
                    <span className="text-sm text-card-foreground">4.9</span>
                    <span className="text-sm text-card-foreground">/</span>
                    <span className="text-sm text-muted-foreground">5.0</span>
                </div>

                {/* Bio */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{user?.biotext}</p>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                   
                        <Badge variant="primary" className="text-xs">
                            {user?.rank}
                        </Badge>
                    
                </div>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-center gap-6 border-y border-border py-4">
                    <div className="text-center">
                        <div className="text-xl text-card-foreground">{user?.recipes_count}</div>
                        <div className="text-xs text-muted-foreground">Rezepte</div>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div className="text-center">
                        <div className="text-xl font-bold text-card-foreground">
                            {user?.comments_count}
                        </div>
                        <div className="text-xs text-muted-foreground">Kommentare</div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex gap-2">
                    <Button className="flex-1" variant="outline">
                        <Heart className={`mr-2 h-4 w-4`} />
                        Following
                    </Button>
                    <Button variant="outline" size="icon">
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
