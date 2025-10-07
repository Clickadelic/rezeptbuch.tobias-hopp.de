// types.ts
import { Difficulty } from './Difficulty';
import { Ingredient } from './Ingredient';
import { Category } from './Category';
import { AuthUser } from '.';

export type Recipe = {
    id?: string;
    name: string;
    slug?: string;
    punchline?: string;
    description?: string;
    portion_count?: number;
    preparation_time?: number;
    preparation_instructions?: string;
    rating?: number;
    difficulty?: Difficulty;
    ingredients?: Ingredient[]; // jetzt mit optionalem pivot
    media?: Array<{
        id: number;
        name: string;
        file_name: string;
        mime_type: string;
        path: string;
        url?: string;
        disk: string;
        collection?: string;
        size?: number;
        pivot?: {
            collection?: string;
            is_primary?: boolean;
            position?: number;
        };
    }>;
    user_id?: number;
    // Tempwise  user data
    user?: AuthUser;
    // noch Check auf Richtigkeit machen...
    category_id?: number; // Für DB-Relation
    category?: Category;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
};
