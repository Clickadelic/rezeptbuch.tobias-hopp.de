// types.ts
import { Difficulty } from './Difficulty';
import { Ingredient } from './Ingredient';

export type Recipe = {
    id?: string;
    name: string;
    slug?: string;
    punchline?: string;
    description?: string;
    rating?: number;
    preparation_time?: number;
    preparation_instructions?: string;
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
    user_id?: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
};
