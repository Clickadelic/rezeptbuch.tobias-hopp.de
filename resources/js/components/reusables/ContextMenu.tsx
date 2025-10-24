import { useState } from 'react';
import { router, usePage, Link } from '@inertiajs/react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { GoPlus, GoTrash } from 'react-icons/go';
import { Recipe } from '@/types/Recipe';
import { usePermissions } from '@/hooks/usePermissions';
import { RxClipboardCopy } from 'react-icons/rx';
import { IoPrintOutline } from 'react-icons/io5';
import { PiCopySimpleLight } from 'react-icons/pi';

import { cn } from '@/lib/utils';

import { SharedPageProps } from '@/types';
import { toast } from 'sonner';
interface ContextMenuProps {
    recipe?: Recipe | null;
    className?: string;
    dotStyle?: 'vertical' | 'horizontal';
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
export default function ContextMenu({
    recipe,
    className,
    dotStyle = 'vertical',
}: ContextMenuProps) {
    const { isOwner } = usePermissions();
    const { props } = usePage<SharedPageProps>();

    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const [isSocialShareOpen, setIsSocialShareOpen] = useState<boolean>(false);

    const toggleDeleteDialog = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAlertOpen((prev) => !prev);
    };

    const toggleSocialShareDialog = (e: React.MouseEvent) => {
        setIsSocialShareOpen((prev) => !prev);
        e.stopPropagation();
    };

    const deleteRecipe = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.delete(route('recipes.destroy', recipe?.slug));
    };

    // Improve copy to clipboard
    // TODO: get current url savely, not twice in HTML and JS
    const copyToClipboard = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(window.location.origin + '/rezepte/' + recipe?.slug);
        toast.success('Link kopiert', {
            duration: 3000,
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={cn(
                    'border border-transparent hover:border-primary focus:text-primary hover:text-primary focus:outline-none focus:ring focus:ring-primary text-gray-600 dark:text-gray-200 p-1 hover:cursor-pointer shadow-transparent z-20 rounded-full hover:bg-white/30 dark:hover:bg-gray-800/30',
                    className,
                )}
                onClick={(e) => e.stopPropagation()}
                aria-label="Rezept Optionen"
            >
                {dotStyle === 'vertical' ? (
                    <HiOutlineDotsVertical className="size-5" />
                ) : (
                    <HiOutlineDotsHorizontal className="size-5" />
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {isOwner(recipe?.user_id) && (
                    <>
                        <DropdownMenuItem>
                            <Link
                                href={route('recipes.edit', recipe?.slug)}
                                className="flex flex-row items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <MdOutlineEdit className="size-5 mr-2" />
                                Bearbeiten
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                            <AlertDialog>
                                <AlertDialogTrigger
                                    className="w-full flex flex-row items-between gap-2 hover:cursor-pointer text-rose-600"
                                    onClick={toggleDeleteDialog}
                                >
                                    <GoTrash className="size-5" />
                                    <span>Löschen</span>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-gray-100 dark:bg-gray-900">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="text-gray-800 dark:text-gray-200">
                                            Bist Du sicher, dass Du das Rezept löschen möchtest?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Dies kann nicht rückgängig gemacht werden.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel
                                            className="dark:text-gray-200"
                                            onClick={toggleDeleteDialog}
                                        >
                                            Abbrechen
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            className="bg-transparent text-rose-600 border border-rose-600 hover:bg-rose-600 hover:text-white"
                                            onClick={deleteRecipe}
                                        >
                                            <GoTrash className="size-5" />
                                            Löschen
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}
                <DropdownMenuItem>
                    <AlertDialog>
                        <AlertDialogTrigger
                            className="w-full flex flex-row items-between gap-2 hover:cursor-pointer"
                            onClick={toggleSocialShareDialog}
                        >
                            <IoShareSocialOutline className="size-5" />
                            <span>Teilen</span>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-gray-100 dark:bg-gray-900">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-gray-800 dark:text-gray-200">
                                    Cool, dass Du das Rezept teilen möchtest, hier der Link:
                                </AlertDialogTitle>
                                <AlertDialogDescription className="mb-3">
                                    <span id="recipe-link">
                                        <a
                                            href="https://rezeptbuch.tobias-hopp.de/rezepte/`${recipe?.slug}`"
                                            className="hover:underline underline-offset-4"
                                            title="Link öffnen"
                                        >
                                            https://rezeptbuch.tobias-hopp.de/rezepte/{recipe?.slug}
                                        </a>
                                    </span>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel
                                    className="dark:text-gray-200"
                                    onClick={toggleSocialShareDialog}
                                >
                                    Abbrechen
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    className="border border-primary text-white bg-primary hover:bg-emerald-700 hover:text-white"
                                    onClick={copyToClipboard}
                                >
                                    <RxClipboardCopy className="size-5" />
                                    Link kopieren
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuItem>
                {/* TODO: Drucken */}

                {/* <DropdownMenuItem>
                    <Link
                        href="/"
                        className="flex flex-row items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IoPrintOutline className="size-5 mr-2" />
                        Drucken
                    </Link>
                </DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
