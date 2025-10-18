// resources/js/types/index.ts
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Recipe } from './Recipe';
import { Category } from './Category';
import { Ingredient } from './Ingredient';
import { Paginated } from './Paginated';
import { AuthUser } from './AuthUser';

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
        alert?: string;
    };

    errors?: {
        [key: string]: string[];
    };

    favorites?: {
        recipe: Recipe[];
    };

    categories: Category[];
    ingredients?: Ingredient[];
    recipes?: Paginated<Recipe>;
    users?: Paginated<AuthUser>;
    latestRecipes?: Paginated<Recipe>;
    allUserRecipes?: Paginated<Recipe>;
    
    totalUserRecipeCount: number;
    totalIngredientCount: number;
    totalRecipeCount: number;

    [key: string]: unknown; // Fallback
}
