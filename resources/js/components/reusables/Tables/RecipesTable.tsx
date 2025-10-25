'use client';

import { useState } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import ContextMenu from '@/components/reusables/ContextMenu';
import Paginated from '@/types/Paginated';
import Pagination from '@/components/reusables/Pagination';
import PublishSwitch from '@/components/reusables/PublishSwitch';
import { GoPlus } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';

import { Recipe } from '@/types/Recipe';

import { cn } from '@/lib/utils';

interface RecipesTableProps {
    initialRecipes: Paginated<Recipe>;
    title?: string;
    icon?: React.ReactNode;
    className?: string;
    tableClasses?: string;
}

export default function RecipesTable({
    title,
    icon,
    initialRecipes,
    className,
    tableClasses,
}: RecipesTableProps) {
    const [recipes, setRecipes] = useState<Paginated<Recipe>>(initialRecipes);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchPage = async (url?: string | null) => {
        if (!url) return;
        setLoading(true);
        try {
            const response = await axios.get(url);
            setRecipes(response.data.recipes);
        } catch (error) {
            console.error('Fehler beim Laden der Seite:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className={cn(
                'w-full overflow-hidden min-h-44 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl',
                className,
            )}
        >
            <h3
                className={cn(
                    'text-lg flex gap-2',
                    recipes && recipes?.data?.length >= 1 && 'mb-3',
                )}
            >
                {icon}
                {title || 'Deine Daten'}
                {recipes && recipes?.data?.length >= 1 && (
                    <span className="text-gray-400 dark:text-gray-400">({recipes.total})</span>
                )}
            </h3>
            {/* Wenn keine Rezepte vorhanden */}
            {(!recipes || recipes.data.length === 0) && (
                <div className="h-[calc(100%-25px)] flex flex-col gap-2 items-center justify-center">
                    <h4 className="text-gray-600 dark:text-gray-400 text-center mb-2">
                        Du hast noch keine eigenen Rezepte angelegt.
                    </h4>
                    <Button asChild variant="primary" className="hover:bg-emerald-700">
                        <Link href={route('recipes.create')} title="Erstelle ein Rezept">
                            <GoPlus /> Rezept erstellen
                        </Link>
                    </Button>
                </div>
            )}
            {/* Tabelle */}
            {recipes && recipes?.data?.length >= 1 && (
                <Table
                    className={cn(
                        'min-w-full border-collapse table-auto caption-bottom',
                        tableClasses,
                    )}
                >
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[48px]">Status</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="text-center">Ansehen</TableHead>
                            <TableHead className="hidden sm:table-cell">Kategorie</TableHead>
                            <TableHead className="hidden sm:table-cell">Schwierigkeit</TableHead>
                            <TableHead className="hidden sm:table-cell">Bewertung</TableHead>
                            <TableHead className="hidden sm:table-cell">Benutzer</TableHead>
                            <TableHead className="text-right">Aktion</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {recipes.data.map((recipe: Recipe) => (
                            <TableRow
                                key={recipe.id}
                                className="hover:bg-white dark:hover:bg-gray-700"
                            >
                                <TableCell>
                                    <PublishSwitch
                                        recipe={recipe}
                                        status={recipe.status as 'draft' | 'published'}
                                    />
                                </TableCell>
                                <TableCell className="cursor-default">{recipe.name}</TableCell>
                                <TableCell className="text-center">
                                    <Link
                                        href={route('recipes.show', recipe.slug)}
                                        className="asd"
                                        title="ansehen"
                                    >
                                        <IoEyeOutline />
                                    </Link>
                                </TableCell>
                                <TableCell className="cursor-default">
                                    {recipe.category?.name}
                                </TableCell>
                                <TableCell className="cursor-default hidden sm:table-cell">
                                    {recipe.difficulty}
                                </TableCell>
                                <TableCell className="cursor-default hidden sm:table-cell">
                                    {recipe.rating}
                                </TableCell>
                                <TableCell className="cursor-default hidden sm:table-cell">
                                    {recipe.user?.name}
                                </TableCell>
                                <TableCell className="text-right">
                                    <ContextMenu recipe={recipe} dotStyle="horizontal" />
                                </TableCell>
                            </TableRow>
                        ))}

                        {loading && (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-4">
                                    Lade Rezepte...
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
            {/* Pagination unten außerhalb der Tabelle */}
            {recipes && recipes?.data?.length >= 1 && (
                <div className="mt-4">
                    <Pagination links={recipes.links} loading={loading} />
                </div>
            )}
        </div>
    );
}
