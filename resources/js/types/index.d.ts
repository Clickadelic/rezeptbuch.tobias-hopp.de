// resources/js/types/index.ts

import { Recipe } from './Recipe';
import { Category } from './types';

// Alle globalen Props, die auf jeder Seite verfügbar sind
export interface SharedPageProps {
    auth: { user: User };
    recipes: {
        data: Recipe[];
        current_page: number;
        last_page: number;
        per_page: number;
        links: { url: string | null; label: string; active: boolean }[];
    };
    ingredients: Ingredient[];
    categories: { data: Category[] } | Category[];
    flash?: { success?: string; error?: string };
    [key: string]: any;
}

export type PageProps<T extends Record<string, unknown> = {}> = SharedPageProps & T;
