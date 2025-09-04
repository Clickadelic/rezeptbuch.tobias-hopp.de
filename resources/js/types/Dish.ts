// types.ts
import { Difficulty } from './Difficulty';
import { Ingredient } from './Ingredient';

export type Dish = {
    id?: string;
    name: string;
    slug?: string;
    punchline?: string;
    description?: string;
    rating?: number;
    preparation_time?: number;
    difficulty?: Difficulty;
    ingredients?: Ingredient[]; // jetzt mit optionalem pivot
    user_id?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};