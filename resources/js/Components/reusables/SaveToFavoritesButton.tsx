import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { Button } from '@/Components/ui/button';

import { useState, useEffect } from 'react';

interface SaveToFavoritesButtonProps {
    className: string;
}

function SaveToFavoritesButton({ className }: SaveToFavoritesButtonProps) {
    let isFavorite = false;

    const toggleFavorite = () => {
        isFavorite = !isFavorite;
    };

    useEffect(() => {
        toggleFavorite();
    }, [isFavorite]);

    return (
        <Button
            variant="ghost"
            aria-label="In Favoriten speichern"
            className={cn(
                'absolute flex justify-center items-center text-slate-400 hover:text-red-500 focus:text-red-500',
                className,
            )}
            onClick={toggleFavorite}
        >
            {isFavorite ? (
                <IoMdHeart className="size-6 text-red-500" />
            ) : (
                <IoIosHeartEmpty className="size-6" />
            )}
        </Button>
    );
}

export default SaveToFavoritesButton;
