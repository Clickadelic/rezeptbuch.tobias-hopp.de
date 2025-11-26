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
    availableRoles: string[];
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
    cocktails?: Paginated<Recipe>;
    drafts?: number; // Header alert
    users?: Paginated<AuthUser>;
    // Dashboard Data Types
    latestRecipes?: Paginated<Recipe>;
    totalRecipeCount: number; // Frontpage
    totalIngredientCount: number; // Frontpage
    totalCommentCount: number; // Frontpage
    totalUserRecipes?: Paginated<Recipe>;
    totalUserRecipeCount: number;
    totalUserIngredients: Ingredient[];
    totalUserIngredientCount: number;
    totalUserFavorites: Recipe[];
    userFavoritesCount: number;
    totalUserCount: number;

    recipesUserCountByCategory: {
        [categoryName: string]: number;
    };
    recipesCountByCategory: {
        [categoryName: string]: number;
    };
    [key: string]: unknown;
}
