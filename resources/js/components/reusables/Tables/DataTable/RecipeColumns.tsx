"use client"

import PublishSwitch from "@/components/reusables/PublishSwitch"

import { ColumnDef } from "@tanstack/react-table"
import { Recipe } from "@/types/Recipe"

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
    accessorKey: "category",
    header: "Kategorie",
  },
  {
    accessorKey: "difficulty",
    header: "Schwierigkeit",
  },
  {
    accessorKey: "is_veggy",
    header: "Vegetarisch",
  },
  {
    accessorKey: "preparation_time",
    header: "Vorbereitungszeit",
  },
  {
    accessorKey: "community_rating",
    header: "Community Rating",
  },

    // 🔥 Beispiel: Actions column
    {
        id: "actions",
        header: "Aktionen",
        cell: ({ row }) => {
            const recipe = row.original;

            return (
                <div className="flex gap-2">
                    <button
                        className="px-2 py-1 text-xs bg-blue-600 text-white rounded"
                        onClick={() => console.log("Edit", recipe.id)}
                    >
                        Edit
                    </button>

                    <button
                        className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                        onClick={() => console.log("Delete", recipe.id)}
                    >
                        Delete
                    </button>
                </div>
            );
        },
    },
]