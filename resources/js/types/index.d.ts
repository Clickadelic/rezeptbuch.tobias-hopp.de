// resources/js/types/index.ts
import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { Recipe } from "./Recipe";
import { Category } from "./Category";
import { Ingredient } from "./Ingredient";

/**
 * Basis-Benutzerobjekt für Auth
 */
export interface AuthUser {
    id: number;
    name: string;
    email: string;
    roles: string[];
    permissions: string[];
    email_verified_at: string | null;
    mustVerifyEmail: boolean;
    status?: string;
}

/**
 * Globale Props, die Laravel/Inertia immer mitsendet
 */
export interface SharedPageProps extends InertiaPageProps {
    auth: {
        user: AuthUser;
    };
    
    mustVerifyEmail: boolean;
    status?: string;

    flash?: {
        success?: string;
        error?: string;
    };

    categories: Category[];

    recipes?: {
        data: Recipe[];
        current_page: number;
        last_page: number;
        per_page: number;
        links: {
        url: string | null;
        label: string;
        active: boolean;
        }[];
    };

    ingredients?: Ingredient[];

    [key: string]: unknown; // Fallback für weitere dynamische Props
}
