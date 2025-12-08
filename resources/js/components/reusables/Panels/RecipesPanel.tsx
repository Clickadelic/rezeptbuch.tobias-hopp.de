"use client"


import { DataTable } from "@/components/reusables/Tables/DataTable"
import { recipeColumns } from "@/components/reusables/Tables/DataTable/RecipeColumns"

interface RecipesPanelProps {
    title?: string
    icon?: React.ReactNode
}

/**
 * A panel component that displays a list of recipes.
 *
 * @param {Paginated<Recipe>} recipes - A paginated list of recipes.
 * @param {string} [title] - The title of the panel. Defaults to "Daten".
 * @param {React.ReactNode} [icon] - The icon to display next to the title. Defaults to null.
 * @returns {JSX.Element} - A JSX element representing the panel.
 */
export default function RecipesPanel({ title, icon }: RecipesPanelProps) {

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            <div className="flex justify-between mb-3">
                <h3 className="text-lg flex gap-2">
                    {icon}
                    {title || "Daten"}
                </h3>
            </div>
            <DataTable columns={recipeColumns} endpoint="/dashboard/rezepte/data" />
        </div>
    )
}
