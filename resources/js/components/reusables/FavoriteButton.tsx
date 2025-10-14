import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { FaRegHeart } from 'react-icons/fa';
import { FaHeart, FaSpinner } from 'react-icons/fa6';

import { SharedPageProps } from '@/types';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
    recipeId?: string;
    isFavorite?: boolean;
    className?: string;
}

export default function FavoriteButton({
    recipeId,
    isFavorite = false,
    className,
}: FavoriteButtonProps) {
    const [active, setActive] = useState<boolean>(isFavorite);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { user } = usePage<SharedPageProps>().props.auth;

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // 👇 verhindert Navigation oder bubbling in Link/Card
        e.preventDefault();
        e.stopPropagation();

        // Doppelklick verhindern, solange loading
        if (loading) return;

        const next = !active;
        setActive(next);

        try {
            setLoading(true);
            await axios.post(route('favorites.toggle', recipeId), { favorite: next });
            toast.success(next ? 'Zu Favoriten hinzugefügt!' : 'Favorit entfernt!');
        } catch (error) {
            console.error('Favorite toggle failed:', error);
            setActive(!next);
            toast.error('Fehler beim Aktualisieren des Favoriten!');
        } finally {
            setLoading(false);
        }
    };

    if (!user) return null;

    return (
        <Button
            onClick={handleClick}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={loading}
            variant="flat"
            className={cn(
                'shadow-none text-gray-400 rounded-full transition-colors',
                'hover:text-rose-600 hover:fill-rose-600',
                active && 'text-rose-600 fill-rose-600', // Favorit aktiv → grün
                'focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                className,
            )}
            title={active ? 'Favorit entfernen' : 'Zu Favoriten hinzufügen'}
            type="button" // 👈 wichtig, sonst submit in Formularen
        >
            {!loading && (isHovered || active) ? <FaHeart /> : <FaRegHeart />}
            {loading && <FaSpinner className="animate-spin" />}
        </Button>
    );
}
