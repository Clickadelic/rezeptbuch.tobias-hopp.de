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
        <>
            <h2 className="text-xl font-medium mb-5 line-clamp-1">{title || "Daten"}</h2>
            <DataTable columns={recipeColumns} endpoint="/dashboard/rezepte/data" />
        </>
    )
}
