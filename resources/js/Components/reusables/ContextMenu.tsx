import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger, } from '@/components/ui/dropdown-menu';

import { GoTrash } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';

import { Recipe } from '@/types/Recipe';

interface ContextMenuProps {
    recipe: Recipe;
}

/**
 * A context menu for recipes, allowing users to edit or delete the recipe.
 * The menu is displayed when the user clicks on the three vertical dots in the top right corner of the recipe card.
 * If the user clicks on the "Löschen" button, a confirmation dialog is displayed, asking the user if they are sure they want to delete the recipe.
 * If the user clicks on the "Bearbeiten" button, the edit recipe page is opened.
 * @param {ContextMenuProps} props - The props for the context menu.
 * @param {Recipe} props.recipe - The recipe to be edited or deleted.
 * @returns {JSX.Element} - The JSX element for the context menu.
 */
export default function ContextMenu ({ recipe }: ContextMenuProps) {
    const user = usePage().props.auth?.user;
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const toggleDeleteDialog = (e: React.MouseEvent) => {
        e.stopPropagation();
        isAlertOpen ? setIsAlertOpen(false) : setIsAlertOpen(true);
    }
    const deleteRecipe = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.delete(route('recipes.destroy', recipe.id));
    }
    return(
        <DropdownMenu>
            <DropdownMenuTrigger
                className="absolute top-2 right-2 text-gray-400 dark:text-gray-200 p-1 hover:text-gray-300 hover:cursor-pointer shadow-transparent z-20 rounded-full hover:bg-white/30 dark:hover:bg-gray-800/30"
                onClick={(e) => e.stopPropagation()}
            >
                <HiOutlineDotsVertical className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Link
                        href={route('recipes.edit', recipe.id)}
                        className="flex flex-row items-center"
                        onClick={(e) => e.stopPropagation()} // Link soll nur Edit öffnen
                    >
                        <MdOutlineEdit className="size-5 mr-2" />
                        Bearbeiten
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={(e) => e.stopPropagation()}
                >
                    <AlertDialog>
                        <AlertDialogTrigger className="w-full flex flex-row items-between gap-2 hover:cursor-pointer text-rose-600" onClick={toggleDeleteDialog}>
                            <GoTrash className="size-5" />
                            <span>Löschen</span>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-100 dark:bg-gray-900">
                            <AlertDialogHeader>
                            <AlertDialogTitle className="text-gray-800 dark:text-gray-200">Bist Du sicher, dass Du das Rezept löschen möchtest?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Dies kann nicht rückgängig gemacht werden.
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel className="dark:text-gray-200" onClick={toggleDeleteDialog}>Abbrechen</AlertDialogCancel>
                            <AlertDialogAction className="bg-transparent text-rose-600 border border-rose-600 hover:bg-rose-600 hover:text-white" onClick={deleteRecipe}>
                                <GoTrash className="size-5" />
                                Löschen
                            </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}