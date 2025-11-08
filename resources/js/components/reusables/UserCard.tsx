import { Link } from '@inertiajs/react';
import Avatar from '@/components/reusables/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChefHat, Heart, MessageCircle, Star } from 'lucide-react';
import { RiHome2Line } from "react-icons/ri";
import AuthUser from '@/types/AuthUser';
import { RiHomeLine } from 'react-icons/ri';

import { LiaHomeSolid } from "react-icons/lia";
import headerImageLight from '../../../images/webp/User-Card-Header-Background-Light.webp';
import headerImageDark from '../../../images/webp/User-Card-Header-Background-Dark.webp';

import { cn } from '@/lib/utils';

import { useDarkMode } from '@/hooks/useDarkMode';


interface UserCardProps {
    user: AuthUser
}

export default function UserCard({ user }: UserCardProps) {
    const isDark = useDarkMode();
    return (
        <Card className="w-full py-0 max-w-md overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            {/* Header Image */}
            <div className="relative h-32 w-full overflow-hidden">
                <img
                    src={isDark ? headerImageDark : headerImageLight}
                    alt="Header background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
            </div>

            {/* Avatar - Centered and overlapping header */}
            <div className="relative -mt-20 flex justify-center px-6">
                <div className="relative">
                    <Avatar
                        className="h-24 w-24 border-2 border-primary shadow-xl"
                        url={user?.avatar}
                        name={user?.name}
                    />
                    {user.website_url && (
                        <div className="absolute -bottom-1 -right-1 rounded-full bg-accent border border-gray-200 dark:border-gray-800 p-1.5 shadow-lg">
                            <a href={user.website_url} className="target-reset text-primary hover:text-emerald-600 dark:hover:text-emerald-600" title="Zur Webseite" target="_blank" aria-label="Zur Webseite">
                                <LiaHomeSolid className="size-4" />
                            </a>
                        </div>
                    )}
                    
                </div>
            </div>

            {/* User Info */}
            <div className="px-6 pb-6 pt-4 text-center">
                <h3 className="text-xl text-gray-800 dark:text-gray-200">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">@{user?.name}</p>
                
                {/* Rating
                <div className="mt-2 flex items-center justify-center gap-1">
                    <span className="text-sm text-card-foreground">4.9</span>
                    <span className="text-sm text-card-foreground">/</span>
                    <span className="text-sm text-muted-foreground">5.0</span>
                </div> */}

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <Badge variant="primary" className="text-xs">
                        {user?.rank}
                    </Badge>
                </div>

                {/* Bio */}
                <div className="h-12 mt-5 flex flex-col items-start justify-start">
                    <p className="text-md leading-relaxed line-clamp-2 font-la-belle-aurore text-gray-800 dark:text-gray-200">{user?.biotext}</p>
                </div>
                

                {/* Stats */}
                <div className="mt-5 flex items-center justify-center gap-6 border-t border-gray-200 dark:border-gray-800 py-4">
                    <div className="text-center">
                        <div className="text-xl text-card-foreground">{user?.recipes_count}</div>
                        <div className="text-xs text-muted-foreground">Rezepte</div>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <div className="text-center">
                        <div className="text-xl text-card-foreground">
                            {user?.comments_count || 0}
                        </div>
                        <div className="text-xs text-muted-foreground">{user?.comments_count === 1 ? 'Kommentar' : 'Kommentare'}</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
