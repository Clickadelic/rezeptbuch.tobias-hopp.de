// resources/js/types/index.ts

import { Recipe } from './Recipe';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

// Alle globalen Props, die auf jeder Seite verfügbar sind
export interface SharedPageProps {
    auth: {
        user: User;
    };
    recipes: Recipe[];
    ingredients: Ingredient[];
    canLogin?: boolean;
    canRegister?: boolean;
    flash?: {
        success?: string;
        error?: string;
    };
    // Weitere globale Props
    [key: string]: any;
}

// 🔁 Jetzt: generische PageProps
export type PageProps<T extends Record<string, unknown> = {}> = SharedPageProps & T;
