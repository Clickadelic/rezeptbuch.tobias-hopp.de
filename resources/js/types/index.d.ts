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
    avatar: string | null;
    roles: string[];
    permissions: string[];
    email_verified_at: string | null;
}

/**
 * Globale Props, die Laravel/Inertia immer mitsendet
 */
export interface SharedPageProps extends InertiaPageProps {
    auth: {
        user: AuthUser;
    };

    // Im Auge behalten, warum hier und ob nicht besser im User-Objekt
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

    errors?: {
        [key: string]: string[];
    };

    latestRecipes?: {
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

    totalUserRecipeCount: number;
    totalIngredientCount: number;
    totalRecipeCount: number;


    [key: string]: unknown; // Fallback
}
