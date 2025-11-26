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
    user_id?: number; // optional: RecipeResource ingredients do not include user_id

    // For RecipeResource-mapped ingredients on the frontend
    quantity?: string | number;
    unit?: string;

    // For Eloquent-loaded ingredients with pivot data (e.g. in edit forms)
    pivot?: {
        quantity: string;
        unit: string;
    };
}
