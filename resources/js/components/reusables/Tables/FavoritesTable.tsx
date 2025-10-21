import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import ContextMenu from '@/components/reusables/ContextMenu';
import FavoriteButton from '@/components/reusables/FavoriteButton';

interface FavoritesListProps {
    title?: string;
    className?: string;
    favorites?: Recipe[];
}

export default function FavoritesTable({ title, className, favorites }: FavoritesListProps) {
    
    return (
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 p-2 xl:p-4 rounded-xl ', className)}>
            <h2 className="text-lg mb-3">{title || 'Deine Daten'}</h2>
            {favorites?.length === 0 && (
                <div className="p-3 rounded-xl">
                    <h2 className="text-lg text-center">Keine Daten</h2>
                </div>
            )}
            <Table className="overflow-y-auto">
                <TableCaption>Eine Liste Deiner Favoriten.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[88px]">Favorisiert</TableHead>
                        <TableHead className="asd">Name</TableHead>
                        <TableHead className="asd">Kategorie</TableHead>
                        <TableHead className="asd">Schwierigkeit</TableHead>
                        <TableHead className="asd">Bewertung</TableHead>
                        <TableHead className="asd">Benutzer</TableHead>
                        <TableHead className="text-right">Aktion</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="asd">
                    {favorites?.map((recipe: Recipe) => (
                        <TableRow key={recipe.id}>
                            <TableCell className="cursor-default"><FavoriteButton recipeId={recipe.id} isFavorite={true} /></TableCell>
                            <TableCell className="cursor-default">{recipe.name}</TableCell>
                            <TableCell className="cursor-default">{recipe.category?.name}</TableCell>
                            <TableCell className="cursor-default">{recipe.difficulty}</TableCell>
                            <TableCell className="cursor-default">{recipe.rating}</TableCell>
                            <TableCell className="cursor-default">{recipe.user?.name}</TableCell>
                            <TableCell className="text-right">
                                <ContextMenu recipe={recipe} dotStyle="horizontal" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
