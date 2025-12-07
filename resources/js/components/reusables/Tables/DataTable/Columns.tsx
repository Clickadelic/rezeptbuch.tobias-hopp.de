"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Recipe } from "@/types/Recipe"

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