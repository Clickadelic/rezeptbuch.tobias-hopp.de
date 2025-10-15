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
            <ul className="list-decimal">
                {favorites?.map((recipe: Recipe) => (
                    <li key={recipe.id}>
                        <h2 className="text-lg font-medium">{recipe.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}
