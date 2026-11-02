"use client"

import { DataTable } from "@/components/reusables/Tables/DataTable"
import { ingredientColumns } from "@/components/reusables/Tables/DataTable/IngredientColumns"

interface IngredientsPanelProps {
    title?: string
    icon?: React.ReactNode
}

/**
 * A panel component that displays a list of recipes.
 *
 * @param {Paginated<Recipe>} ingredients - A paginated list of ingredients.
 * @param {string} [title] - The title of the panel. Defaults to "Daten".
 * @param {React.ReactNode} [icon] - The icon to display next to the title. Defaults to null.
 * @returns {JSX.Element} - A JSX element representing the panel.
 */
export default function IngredientsPanel({ title, icon }: IngredientsPanelProps) {

    return (
        <>
            <h2 className="text-xl font-medium mb-5 line-clamp-1">{title || "Daten"}</h2>
            <DataTable columns={ingredientColumns} endpoint="/dashboard/rezepte/data" />
        </>
    )
}
