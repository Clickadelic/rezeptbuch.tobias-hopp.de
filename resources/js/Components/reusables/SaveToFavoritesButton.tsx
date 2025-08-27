
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { Button } from '@/Components/ui/button';
interface SaveToFavoritesButtonProps {
    className: string;
}

function SaveToFavoritesButton({ className }: SaveToFavoritesButtonProps) {
    let isFavorite = false;

    return (
        <Button variant="ghostPrimary"
            aria-label="In Favoriten speichern"
            className={cn('absolute flex justify-center items-center z-50', className)}
        >
            {isFavorite ? (
                <IoMdHeart className="text-white size-6" />
            ) : (
                <IoIosHeartEmpty className="text-white size-6" />
            )}
        </Button>
    );
}

export default SaveToFavoritesButton;
