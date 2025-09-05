// types.ts
export type DishIngredientPivot = {
    ingredient_id?: string;
    dish_id?: string;
    quantity?: string | number;
    unit?: string;
};

export type Ingredient = {
    id: string;
    name: string;
    pivot?: {
        quantity: string;
        unit: string;
    };
};
