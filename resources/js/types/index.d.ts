// resources/js/types/index.ts
import { PageProps as InertiaPageProps } from '@inertiajs/core';
import { Recipe } from './Recipe';
import { Category } from './Category';
import { Ingredient } from './Ingredient';
import { Pagination } from './Pagination';
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
    };

    errors?: {
        [key: string]: string[];
    };

    favorites?: {
        recipe: Recipe[];
    };

    categories: Category[];
    ingredients?: Ingredient[];
    recipes?: Pagination<Recipe>;
    latestRecipes?: Pagination<Recipe>;
    allUserRecipes?: Pagination<Recipe>;
    
    totalUserRecipeCount: number;
    totalIngredientCount: number;
    totalRecipeCount: number;

    [key: string]: unknown; // Fallback
}
