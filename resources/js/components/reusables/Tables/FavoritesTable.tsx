import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ContextMenu from '@/components/reusables/ContextMenu';
import FavoriteButton from '@/components/reusables/FavoriteButton';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { GoPlus } from 'react-icons/go';
import { HiOutlineEye } from "react-icons/hi2";

interface FavoritesListProps {
  title?: string;
  className?: string;
  favorites?: Recipe[];
}

export default function FavoritesTable({ title, className, favorites }: FavoritesListProps) {
  return (
    <div className={cn('w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl', className)}>
      <h2 className={cn("text-lg", favorites && favorites?.length >= 1 && "mb-3")}>{title || 'Deine Favoriten'}</h2>

      {/* Wenn keine Favoriten vorhanden */}
      {(!favorites || favorites.length === 0) && (
        <div className="h-[calc(100%-25px)] flex flex-col gap-2 items-center justify-center">
            <h3 className="text-gray-600 dark:text-gray-400 text-center mb-2">Du hast noch keine Rezepte favorisiert.</h3>
            <Button asChild variant="primary" className="hover:bg-emerald-700">
                <Link href={route('recipes.index')} title="Erstelle ein Rezept">
                    <HiOutlineEye /> Rezepte ansehen
                </Link>
            </Button>
        </div>
      )}

      {favorites && favorites.length > 0 && (
        <Table className="border-collapse table-auto caption-bottom">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[88px]">Favorisiert</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Kategorie</TableHead>
              <TableHead className="hidden sm:table-cell">Schwierigkeit</TableHead>
              <TableHead className="hidden sm:table-cell">Bewertung</TableHead>
              <TableHead className="hidden sm:table-cell">Benutzer</TableHead>
              <TableHead className="text-right">Aktion</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {favorites.map((recipe: Recipe) => (
              <TableRow key={recipe.id}>
                <TableCell className="cursor-default">
                  <FavoriteButton recipeId={recipe.id} isFavorite={true} />
                </TableCell>
                <TableCell className="cursor-default truncate max-w-[150px]">{recipe.name}</TableCell>
                <TableCell className="cursor-default">{recipe.category?.name}</TableCell>
                <TableCell className="hidden sm:table-cell cursor-default">{recipe.difficulty}</TableCell>
                <TableCell className="hidden sm:table-cell cursor-default">{recipe.rating}</TableCell>
                <TableCell className="hidden sm:table-cell cursor-default">{recipe.user?.name}</TableCell>
                <TableCell className="text-right">
                  <ContextMenu recipe={recipe} dotStyle="horizontal" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
