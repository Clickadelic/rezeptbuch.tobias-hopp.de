// types.ts
export type RecipeIngredientPivot = {
    ingredient_id?: string;
    recipe_id?: string;
    quantity?: string | number;
    unit?: string;
};

export interface Ingredient {
    id: string;
    name: string;
    pivot?: {
        quantity: string;
        unit: string;
    };
}
