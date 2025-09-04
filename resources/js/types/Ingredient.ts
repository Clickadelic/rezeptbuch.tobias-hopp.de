// types.ts
export type DishIngredientPivot = {
    amount?: string | number;
    unit?: string;
    ingredient_id?: string;
    dish_id?: string;
};

export type Ingredient = {
    id?: string;
    name: string;
    pivot?: DishIngredientPivot; // <-- pivot optional hinzufügen
};