"use client"

import { useState } from "react"
import { router } from '@inertiajs/react'
import { usePage } from "@inertiajs/react"
import { DataTable } from "@/components/reusables/Tables/DataTable"
import { columns } from "@/components/reusables/Tables/DataTable/Columns"
import Paginated from "@/types/Paginated"
import { Recipe } from "@/types/Recipe"
import { cn } from "@/lib/utils"

interface RecipesPanelProps {
    recipes: Paginated<Recipe>
    title?: string
    icon?: React.ReactNode
}

export default function RecipesPanel({ recipes, title, icon }: RecipesPanelProps) {
    const { filters } = usePage().props as any
    const [search, setSearch] = useState(filters?.search || "")
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value

        router.get(route("recipes.index"), { search: value }, {
            preserveState: true,
            replace: true,
        })
    }


    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            <div className="flex justify-between mb-3">
                <h3 className="text-lg flex gap-2">
                    {icon}
                    {title || "Daten"}
                    {recipes.data?.length >= 1 && (
                        <span className="text-gray-400">({recipes.total})</span>
                    )}
                </h3>

                <input
                    type="text"
                    placeholder="Suche..."
                    value={search}
                    onChange={handleSearch}
                    className="px-3 py-1 rounded border text-sm bg-white dark:bg-gray-800"
                />
            </div>

            <DataTable data={recipes.data} columns={columns} />
        </div>
    )
}
