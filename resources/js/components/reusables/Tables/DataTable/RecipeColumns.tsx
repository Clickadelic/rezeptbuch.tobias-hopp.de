"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Recipe } from "@/types/Recipe"
import { GiBroccoli } from 'react-icons/gi';
import { GoDash } from "react-icons/go";
import { Star } from "lucide-react";
import RecipeContextMenu from "@/components/reusables/RecipeContextMenu";

// Cell definitons and actions
export const recipeColumns: ColumnDef<Recipe>[] = [
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		id: "category",
		accessorFn: (recipe) => recipe.category?.name ?? "–",
		header: "Kategorie",
	},
	{
		accessorKey: "difficulty",
		header: "Schwierigkeit",
	},
	{
		accessorKey: "is_veggy",
		header: "Vegetarisch",
		cell: ({ getValue }) =>
			getValue<boolean>() ? (
				<GiBroccoli className="size-5 text-emerald-800" title="Vegetarisch" />
			) : (
				<GoDash className="size-5 text-rose-800" title="Nicht Vegetarisch" />
			),
	},
	{
		accessorKey: "preparation_time",
		header: "Vorbereitungszeit",
		cell: ({ getValue }) => {
			const minutes = getValue<number | undefined>()
			return minutes != null ? `${minutes} Minuten` : "–"
		},
	},
	{
		accessorKey: "community_rating",
		header: "Community Rating",
		cell: ({ row }) => {
			const { community_rating, community_votes } = row.original
			if (!community_votes) return <span className="text-gray-500">Noch keine Bewertung</span>
			return (
				<span className="flex items-center gap-1">
					<Star className="size-4 text-yellow-500 fill-yellow-500" />
					{Number(community_rating).toFixed(1)}
					<span className="text-gray-500">({community_votes})</span>
				</span>
			)
		},
	},
    {
        id: "actions",
        header: "Aktionen",
        cell: ({ row }) => {
            const recipe = row.original;

            return (
                <div className="flex gap-2">
                    <RecipeContextMenu recipe={recipe} dotStyle="horizontal" />
                </div>
            );
        },
    },
]