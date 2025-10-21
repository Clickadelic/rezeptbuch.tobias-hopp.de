"use client";

import { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ContextMenu from '@/components/reusables/ContextMenu';
import Pagination from '@/components/reusables/Pagination';
import { cn } from '@/lib/utils';
import axios from 'axios';
import PublishSwitch from '@/components/reusables/PublishSwitch';

import { Recipe } from '@/types/Recipe';
import Paginated from '@/types/Paginated';
import { Switch } from "@/components/ui/switch"
interface RecipesTableProps {
    initialRecipes: Paginated<Recipe>;
    title?: string;
    className?: string;
    tableClasses?: string;
}

export default function RecipesTable({ title, initialRecipes, className, tableClasses }: RecipesTableProps) {
    const [recipes, setRecipes] = useState<Paginated<Recipe>>(initialRecipes);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchPage = async (url?: string | null) => {
        if (!url) return; // ❌ filtert null & undefined
        setLoading(true);
        try {
            const response = await axios.get(url);
            setRecipes(response.data.recipes);
        } catch (error) {
            console.error("Fehler beim Laden der Seite:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={cn('w-full bg-gray-100 dark:bg-gray-900 p-2 xl:p-4 rounded-xl ', className)}>
            <h2 className="text-lg mb-3">{title || 'Deine Daten'}</h2>
            <Table className={cn('w-full', tableClasses)}>
                <TableCaption>
                    <Pagination 
                        links={recipes.links} 
                        
                        loading={loading} 
                    />
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[48px]">Status</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Kategorie</TableHead>
                        <TableHead>Schwierigkeit</TableHead>
                        <TableHead>Bewertung</TableHead>
                        <TableHead>Benutzer</TableHead>
                        <TableHead className="text-right">Aktion</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {recipes.data.map((recipe: Recipe) => (
                        <TableRow key={recipe.id}>
                            <TableCell><PublishSwitch recipe={recipe} status={recipe.status as "draft" | "published"} /></TableCell>
                            <TableCell>{recipe.name}</TableCell>
                            <TableCell>{recipe.category?.name}</TableCell>
                            <TableCell>{recipe.difficulty}</TableCell>
                            <TableCell>{recipe.rating}</TableCell>
                            <TableCell>{recipe.user?.name}</TableCell>
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
        </div>
    );
}
