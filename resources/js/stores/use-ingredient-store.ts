import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Ingredient } from '@/types/Ingredient';

interface IngredientState {
    ingredients: Ingredient[];
    editingIngredient: Ingredient | null;
    addIngredient: (ingredient: Ingredient) => void;
    updateIngredient: (ingredient: Ingredient) => void;
    deleteIngredient: (id: string) => void;
    setEditingIngredient: (ingredient: Ingredient | null) => void;
    resetIngredients: () => void;
}

export const useIngredientStore = create(
    persist<IngredientState>(
        (set, get) => ({
            ingredients: [],
            editingIngredient: null,

            addIngredient: (ingredient) =>
                set({ ingredients: [...get().ingredients, ingredient] }),

            updateIngredient: (ingredient) =>
                set({
                    ingredients: get().ingredients.map((i) =>
                        i.id === ingredient.id ? ingredient : i
                    ),
                    editingIngredient: null, // nach Update zurücksetzen
                }),

            deleteIngredient: (id) =>
                set({ ingredients: get().ingredients.filter((i) => i.id !== id) }),

            setEditingIngredient: (ingredient) => set({ editingIngredient: ingredient }),

            resetIngredients: () => set({ ingredients: [], editingIngredient: null }),
        }),
        { name: 'ingredient-store' }
    )
);