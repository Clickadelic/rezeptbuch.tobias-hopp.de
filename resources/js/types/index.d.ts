// resources/js/types/index.ts

import { Recipe } from './Recipe';
import { Category } from './types';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

// Alle globalen Props, die auf jeder Seite verfügbar sind
export interface SharedPageProps {
  auth: { user: User | null };
  current_page: number;
  first_page_url: string;
  recipes: {
    data: Recipe[];
    current_page: number;
    last_page: number;
    per_page: number;
    links: { url: string | null; label: string; active: boolean }[];
  };
  ingredients: Ingredient[];
  categories: Category[];
  canLogin?: boolean;
  canRegister?: boolean;
  flash?: { success?: string; error?: string };
  [key: string]: any;
}

// 🔁 Jetzt: generische PageProps
export type PageProps<T extends Record<string, unknown> = {}> = SharedPageProps & T;
