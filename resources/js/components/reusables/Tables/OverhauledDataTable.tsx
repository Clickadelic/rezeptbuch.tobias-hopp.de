"use client"

import { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./DataTable/Columns";
import { Recipe } from "@/types/Recipe";
import Paginated from "@/types/Paginated";
import { fetchRecipes } from "@/lib/recipes";
import { debounce } from "lodash";

export function RecipeDataTable() {
    const [recipes, setRecipes] = useState<Paginated<Recipe> | null>(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    // Debounced fetch
    const loadRecipes = debounce(async (searchTerm: string, pageNum: number) => {
        setLoading(true);
        try {
            const data = await fetchRecipes({ search: searchTerm, page: pageNum });
            setRecipes(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, 300);

    // Initial load & search/page effect
    useEffect(() => {
        loadRecipes(search, page);
    }, [search, page]);

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            <div className="flex justify-between mb-3">
                <h3 className="text-lg">Rezepte</h3>
                <input
                    type="text"
                    placeholder="Suche..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1); // reset page on new search
                    }}
                    className="px-3 py-1 rounded border text-sm bg-white dark:bg-gray-800"
                />
            </div>

            {loading && <div className="p-4">Lade Rezepte…</div>}
            {recipes && <DataTable data={recipes.data} columns={columns} />}

            {/* Pagination */}
            {recipes && recipes.total > recipes.per_page && (
                <div className="flex justify-center mt-3 gap-2">
                    {Array.from({ length: Math.ceil(recipes.total / recipes.per_page) }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setPage(idx + 1)}
                            className={`px-2 py-1 rounded border ${page === idx + 1 ? 'bg-primary text-white' : ''}`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
