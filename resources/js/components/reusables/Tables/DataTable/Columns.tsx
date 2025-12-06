"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Recipe } from "@/types/Recipe"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type RecipeDataColumn = {
  status: string
  name: string
  category: string
  difficulty: string
  is_veggy: string
  preparation_time: string
}

export const columns: ColumnDef<Recipe>[] = [
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
]