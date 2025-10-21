"use client";

import { Link } from "@inertiajs/react";
import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import ContextMenu from "@/components/reusables/ContextMenu";
import Paginated from "@/types/Paginated";
import Pagination from "@/components/reusables/Pagination";
import PublishSwitch from "@/components/reusables/PublishSwitch";
import { GoPlus } from "react-icons/go";
import { Recipe } from "@/types/Recipe";


import { cn } from "@/lib/utils";

interface RecipesTableProps {
  initialRecipes: Paginated<Recipe>;
  title?: string;
  className?: string;
  tableClasses?: string;
}

export default function RecipesTable({
  title,
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
      console.error("Fehler beim Laden der Seite:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden min-h-44 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl",
        className
      )}
    >
      <h2 className={cn("text-lg", recipes && recipes?.data?.length >= 1 && "mb-3")}>{title || "Deine Daten"}</h2>
      {/* Wenn keine Rezepte vorhanden */}
      {(!recipes || recipes.data.length === 0) && (
        <div className="h-[calc(100%-25px)] flex flex-col gap-2 items-center justify-center">
            <h3 className="text-gray-600 dark:text-gray-400 text-center mb-2">Du hast noch keine eigenen Rezepte angelegt.</h3>
            <Button asChild variant="primary" className="hover:bg-emerald-700">
                <Link href={route('recipes.create')} title="Erstelle ein Rezept"><GoPlus /> Rezept erstellen</Link>
            </Button>
        </div>
      )}
      {/* Tabelle */}
      {(recipes && recipes?.data?.length >= 1) && (
        <Table
            className={cn(
            "min-w-full border-collapse table-auto caption-bottom",
            tableClasses
            )}
        >
            <TableHeader>
            <TableRow>
                <TableHead className="w-[48px]">Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Kategorie</TableHead>
                <TableHead className="hidden sm:table-cell">Schwierigkeit</TableHead>
                <TableHead className="hidden sm:table-cell">Bewertung</TableHead>
                <TableHead className="hidden sm:table-cell">Benutzer</TableHead>
                <TableHead className="text-right">Aktion</TableHead>
            </TableRow>
            </TableHeader>

            <TableBody>
            {recipes.data.map((recipe: Recipe) => (
                <TableRow key={recipe.id}>
                <TableCell>
                    <PublishSwitch recipe={recipe} status={recipe.status as "draft" | "published"} />
                </TableCell>
                <TableCell>{recipe.name}</TableCell>
                <TableCell>{recipe.category?.name}</TableCell>
                <TableCell className="hidden sm:table-cell">{recipe.difficulty}</TableCell>
                <TableCell className="hidden sm:table-cell">{recipe.rating}</TableCell>
                <TableCell className="hidden sm:table-cell">{recipe.user?.name}</TableCell>
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
      {(recipes && recipes?.data?.length >= 1) && (
        <div className="mt-4">
            <Pagination links={recipes.links} loading={loading} />
        </div>
      )}
      
    </div>
  );
}
