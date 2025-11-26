<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Http\Resources\RecipeResource;
use App\Http\Resources\MediaResource;
use App\Http\Resources\UserPublicResource;

class PageController extends Controller
{

    /**
     * Displays a list of all recipes.
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        // Latest Recipe
        $latestRecipe = Recipe::with(['media','category','user:id,name,avatar'])
            ->where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->first();

        // Cocktails
        $cocktails = Recipe::with(['media','category','user:id,name,avatar'])
            ->inRandomOrder()
            ->where('status', 'published')
            ->where('category_id', 4)
            ->paginate(5);

        // Other Recipes
        $recipes = Recipe::with(['media','category','user:id,name,avatar'])
            ->inRandomOrder()
            ->where('status', 'published')
            ->where('category_id', '!=', 4)
            ->paginate(5);

        $totalRecipeCount = Recipe::where('status', 'published')->count();
        $totalIngredientCount = Ingredient::all()->count();
        return Inertia::render('Frontpage', [
            'latestRecipe'    => $latestRecipe ? new RecipeResource($latestRecipe) : null,
            'totalRecipeCount'=> $totalRecipeCount,
            'totalIngredientCount' => $totalIngredientCount,
            'recipes'         => RecipeResource::collection($recipes)->response()->getData(true),
            'cocktails'       => RecipeResource::collection($cocktails)->response()->getData(true),
        ]);
    }

    /**
     * Displays the app installation page
     *
     * @return \Inertia\Response
     */
    public function appInstallation() {
        return Inertia::render('AppInstallation');
    }

    /**
     * MisEnPlace Page (French for "everything in place")
     *
     * This page is the root route of the application and displays
     * content blocks or seperators.
     *
     * @return \Inertia\Response
     */
    public function misEnPlace() {
        return Inertia::render('MisEnPlace');
    }

    /**
     * Faq Page
     *
     * This page shows some frequent questions and answers. It includes an accordeon.
     *
     * @return \Inertia\Response
     */
    public function faq() {
        return Inertia::render('Faq');
    }

    /**
     * Displays the equipment page
     *
     * This page shows information about the equipment used in the kitchen.
     *
     * @return \Inertia\Response
     */
    public function equipment() {
        return Inertia::render('Equipment');
    }

    public function myRecipes () {
        return Inertia::render('My/Recipes');
    }

    public function myIngredients () {
        return Inertia::render('My/Ingredients');
    }

    public function myFavorites () {
        return Inertia::render('My/Favorites');
    }
}