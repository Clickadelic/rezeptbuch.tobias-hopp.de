import { useRef, useState } from 'react';
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

/**
 * FavoriteButton - toggles favorite status of a recipe
 */
export default function FavoriteButton({
    recipeId,
    isFavorite = false,
    className,
}: FavoriteButtonProps) {
    const [active, setActive] = useState<boolean>(isFavorite);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [pulse, setPulse] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const { user } = usePage<SharedPageProps>().props.auth;

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (loading) return;

        const next = !active;
        setActive(next);
        setPulse(true); // Animation starten

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
            // Fokus sicher entfernen (auch auf Mobile)
            setTimeout(() => {
                buttonRef.current?.blur();
            }, 100);
            // Animation beenden nach 300ms
            setTimeout(() => setPulse(false), 300);
        }
    };

    if (!user) return null;

    return (
        <Button
            ref={buttonRef}
            onClick={handleClick}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={loading}
            variant="flat"
            className={cn(
                'shadow-none text-gray-400 rounded-full transition-all',
                'hover:text-rose-600 hover:fill-rose-600',
                active && 'text-rose-600 fill-rose-600',
                pulse && 'scale-110 animate-[pulse_0.3s_ease-in-out]',
                'focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                className,
            )}
            title={active ? 'Favorit entfernen' : 'Zu Favoriten hinzufügen'}
            type="button"
        >
            {!loading && (isHovered || active) ? <FaHeart /> : <FaRegHeart />}
            {loading && <FaSpinner className="animate-spin" />}
        </Button>
    );
}
