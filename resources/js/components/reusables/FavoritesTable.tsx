import { cn } from '@/lib/utils';
import { Recipe } from '@/types/Recipe';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from 'react';
import { router, usePage, Link } from '@inertiajs/react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator,} from '@/components/ui/dropdown-menu';
import ContextMenu from '@/components/reusables/ContextMenu';

import { MdOutlineEdit } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { GoPlus, GoTrash } from 'react-icons/go';

import { usePermissions } from '@/hooks/usePermissions';
import { RxClipboardCopy } from 'react-icons/rx';
import { IoPrintOutline } from 'react-icons/io5';
import FavoriteButton from '@/components/reusables/FavoriteButton';

import { SharedPageProps } from '@/types';
import { toast } from 'sonner';

interface FavoritesListProps {
    title?: string;
    className?: string;
    favorites?: Recipe[];
}

export default function FavoritesTable({ title, className, favorites }: FavoritesListProps) {
    
    return (
        <div className={cn('w-full', className)}>
            <h2 className="text-lg mb-3">{title || 'Deine Daten'}</h2>
            {favorites?.length === 0 && (
                <div className="p-3 rounded-xl">
                    <h2 className="text-lg text-center">Keine Daten</h2>
                </div>
            )}
            <Table>
                <TableCaption>Eine Liste Deiner Favoriten.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">Favorisiert</TableHead>
                        <TableHead className="asd">Name</TableHead>
                        <TableHead className="asd">Kategorie</TableHead>
                        <TableHead className="asd">Schwierigkeit</TableHead>
                        <TableHead className="asd">Bewertung</TableHead>
                        <TableHead className="asd">Benutzer</TableHead>
                        <TableHead className="text-right">Aktion</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
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
