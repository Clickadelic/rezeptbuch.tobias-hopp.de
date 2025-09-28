<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Ingredient;

use Illuminate\Support\Facades\Log;

use App\Models\Recipe;
use App\Http\Requests\StoreRecipeRequest;
use App\Models\Category;
use Illuminate\Support\Str;

class PageController extends Controller
{
    /**
     * Displays a list of all recipes.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $recipes = Recipe::with('media', 'category', 'user')->paginate(3);
        return Inertia::render('Frontpage', [
            'recipes' => $recipes,
        ]);
    }


}