import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';

interface FavoritesListProps {
    className?: string;
    favorites?: Recipe[];
}

export default function FavoritesList({ className, favorites }: FavoritesListProps) {
    return (
        <div className={cn('w-full', className)}>
            {favorites?.length === 0 && (
                <div className="p-3 rounded-xl">
                    <h2 className="text-lg text-center font-medium">Keine Favoriten</h2>
                </div>
            )}
            <ul className="w-full flex flex-col gap-2">
                {favorites?.map((recipe: Recipe) => (
                    <li key={recipe.id} className="flex items-center gap-2">

                        <span>{recipe.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
