// types.ts
import type { Media } from './Media';

import { Difficulty } from './Difficulty';
import { Ingredient } from './Ingredient';
import { Category } from './Category';
import AuthUser from './User';

export type Recipe = {
    id?: string;
    name: string;
    status: string;
    slug?: string;
    punchline?: string;
    description?: string;
    preparation_time?: number;
    preparation_instructions?: string;
    rating?: number;
    difficulty?: Difficulty;
    is_veggy: boolean;
    ingredients?: Ingredient[];
    media?: Media[];
    user_id?: number;
    user?: AuthUser;
    is_favorite?: boolean;
    category_id?: number;
    category?: Category;
    created_at: string;
    updated_at: string;
};
