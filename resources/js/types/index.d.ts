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
    comments?: Paginated<Comment>;
    replies?: Comment[];
    categories: Category[];
    ingredients?: Ingredient[];
    recipes?: Paginated<Recipe>;
    users?: Paginated<AuthUser>;
    // Dashboard Data Types
    latestRecipes?: Paginated<Recipe>;
    totalUserRecipes?: Paginated<Recipe>;
    totalUserRecipeCount: number;
    totalIngredientCount: number;
    totalRecipeCount: number;
    totalUserFavorites: Recipe[];
    userFavoritesCount: number;
    totalUserCount: number;
    recipesCountByCategory: {
        [categoryName: string]: number
    }
    [key: string]: unknown;
}
