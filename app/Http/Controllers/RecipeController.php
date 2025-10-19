<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

use App\Models\User;
use App\Models\Recipe;
use App\Models\Category;
use App\Models\Ingredient;
use App\Models\Media;

use App\Http\Requests\StoreRecipeRequest;

class RecipeController extends Controller
{
    /**
     * Displays a list of all recipes.
     */
    public function index()
    {
        $recipes = Recipe::with('media', 'category', 'user')
            ->orderBy('created_at', 'desc')->where('status', 'published')
            ->paginate(15);

        $recipes = $this->addFavoriteFlags($recipes);

        return Inertia::render('Recipes/Index', [
            'recipes' => $recipes,
        ]);
    }

    /**
     * Shows the creation form.
     */
    public function create()
    {
        return Inertia::render('Recipes/Create', [
            'ingredients' => Ingredient::orderBy('name')->select('id', 'name')->get(),
            'categories'  => Category::orderBy('id')->select('id', 'name')->get(),
        ]);
    }

    /**
     * Displays a single recipe.
     */
    public function show(Recipe $recipe)
    {
        $recipe->load([
            'ingredients' => fn($q) => $q->withPivot(['quantity', 'unit']),
            'category',
            'media',
            'user'
        ])->where('status', 'published');

        $related = Recipe::with(['category', 'user', 'media'])
            ->where('category_id', $recipe->category_id)
            ->where('id', '!=', $recipe->id)
            ->inRandomOrder()
            ->take(5)
            ->get();

        return Inertia::render('Recipes/Show', compact('recipe', 'related'));
    }

    /**
     * Store a newly created recipe in storage.
     */
    public function store(StoreRecipeRequest $request)
    {   
        $userId = Auth::id();
        // 1️⃣ Rezept anlegen
        $recipe = Recipe::create([
            'id'                       => Str::uuid()->toString(),
            'name'                     => $request->input('name'),
            'status'                   => $request->input('status'),
            'slug'                     => $request->input('slug') ?? Str::slug($request->input('name'), '-', 'de'),
            'punchline'                => $request->input('punchline'),
            'description'              => $request->input('description'),
            'difficulty'               => $request->input('difficulty'),
            'rating'                   => $request->input('rating', 0),
            'preparation_time'         => $request->input('preparation_time', 0),
            'preparation_instructions' => $request->input('preparation_instructions'),
            'user_id'                  => $userId,
            'category_id'              => $request->input('category_id'),
            'is_veggy'                 => $request->input('is_veggy'),
        ]);

        // 2️⃣ Zutaten verarbeiten
        $recipeIngredients = collect($request->input('recipe_ingredients', []))
            ->mapWithKeys(function ($item) {
                $ingredientValue = trim((string) ($item['ingredient_id'] ?? ''));
                if ($ingredientValue === '') {
                    return [];
                }

                $quantity = $item['quantity'] ?? null;
                $unit = $item['unit'] ?? 'g';

                if (Str::isUuid($ingredientValue)) {
                    $ingredient = Ingredient::find($ingredientValue);
                } else {
                    $ingredient = Ingredient::firstOrCreate([
                        'name' => ucfirst(strtolower($ingredientValue)),
                        'user_id' => Auth::id()
                    ]);
                }

                return $ingredient
                    ? [$ingredient->id => ['quantity' => $quantity, 'unit' => $unit]]
                    : [];
            })
            ->toArray();

        $recipe->ingredients()->sync($recipeIngredients);

        // 3️⃣ Pending-Uploads zuordnen
        if ($request->filled('pending_key')) {
            $pendingKey = (string) $request->input('pending_key');
            $collection = 'recipe_images';
            $pendingMedia = Media::where('pending_key', $pendingKey)->get();

            if ($pendingMedia->isNotEmpty()) {
                $maxPosition = $recipe->media()
                    ->wherePivot('collection', $collection)
                    ->max('position');

                $posStart = is_null($maxPosition) ? 0 : $maxPosition + 1;

                foreach ($pendingMedia as $offset => $m) {
                    $recipe->media()->attach($m->id, [
                        'collection' => $collection,
                        'is_primary' => false,
                        'position'   => $posStart + $offset,
                    ]);
                    $m->update(['pending_key' => null]);
                }
            }
        }

        // 4️⃣ Primäres Bild setzen
        $this->setPrimaryMedia($recipe, $request->input('primary_media_id'));

        return redirect()
            ->route('recipes.show', $recipe->slug)
            ->with('success', 'Rezept erfolgreich erstellt.');
    }

    /**
     * Shows the edit form.
     */
    public function edit(Recipe $recipe)
    {
        if ($recipe->user_id !== Auth::id()) {
            return Inertia::render('Recipes/NoEditAllowed');
        }

        $recipe->load([
            'ingredients' => fn($q) => $q
                ->select('ingredients.id', 'ingredients.name')
                ->withPivot(['quantity', 'unit']),
            'media',
            'category',
        ]);

        return Inertia::render('Recipes/Edit', [
            'recipe'      => $recipe,
            'ingredients' => Ingredient::orderBy('name')->select('id', 'name')->get(),
        ]);
    }

    /**
     * Update the specified recipe.
     */
    public function update(StoreRecipeRequest $request, Recipe $recipe)
    {
        $validated = $request->validated();

        if (config('app.debug')) {
            Log::info('Recipe update payload', [
                'recipe_id' => $recipe->id,
                'payload'   => $request->all(),
            ]);
        }

        if ($request->has('slug')) {
            $validated['slug'] = Str::slug($request->input('slug'), '-', 'de');
        }

        $recipe->update($validated);

        // Zutaten synchronisieren
        if ($request->has('recipe_ingredients')) {
            $recipeIngredients = collect($request->input('recipe_ingredients', []))
                ->mapWithKeys(function ($item) {
                    $ingredientValue = trim((string) ($item['ingredient_id'] ?? ''));
                    if ($ingredientValue === '') {
                        return [];
                    }

                    $quantity = $item['quantity'] ?? null;
                    $unit = $item['unit'] ?? 'g';

                    if (Str::isUuid($ingredientValue)) {
                        $ingredient = Ingredient::find($ingredientValue);
                    } else {
                        $ingredient = Ingredient::firstOrCreate([
                            'name' => ucfirst(strtolower($ingredientValue)),
                            'user_id' => Auth::id()
                        ]);
                    }

                    return $ingredient
                        ? [$ingredient->id => ['quantity' => $quantity, 'unit' => $unit]]
                        : [];
                })
                ->toArray();

            $recipe->ingredients()->sync($recipeIngredients);
        }

        // Primäres Bild
        $this->setPrimaryMedia($recipe, $request->input('primary_media_id'));

        $recipe->refresh();

        return redirect()
            ->route('recipes.index', $recipe->slug)
            ->with('success', 'Rezept erfolgreich aktualisiert.');
    }

    /**
     * Delete the specified recipe.
     */
    public function destroy(Recipe $recipe)
    {
        if ($recipe->user_id !== Auth::id()) {
            abort(403, 'Nicht autorisiert.');
        }

        if ($recipe->image) {
            Storage::disk('public')->delete($recipe->image);
        }

        $recipe->delete();

        return redirect()->route('recipes.index')->with('success', 'Rezept gelöscht!');
    }

    /**
     * Search recipes by text or category.
     */
    public function search(Request $request)
    {
        $query = trim($request->input('search', ''));

        $category = Category::where('name', 'LIKE', "%{$query}%")->first();

        if ($category) {
            $recipes = Recipe::with(['media', 'category', 'user'])
                ->where('category_id', $category->id)
                ->orderBy('created_at', 'desc')
                ->paginate(15);
        } else {
            if (!method_exists(Recipe::class, 'search')) {
                $ids = Recipe::query()
                    ->where('name', 'LIKE', "%{$query}%")
                    ->orWhere('description', 'LIKE', "%{$query}%")
                    ->pluck('id');
            } else {
                $ids = Recipe::search($query)->get()->pluck('id');
            }

            $recipes = Recipe::with(['media', 'category', 'user'])
                ->whereIn('id', $ids)
                ->orderBy('created_at', 'desc')
                ->paginate(15);
        }

        $recipes = $this->addFavoriteFlags($recipes);

        return Inertia::render('Recipes/Search', [
            'recipes' => $recipes,
            'filters' => ['search' => $query],
        ]);
    }

    /* ---------------------------------------------- */
    /* 🧩 Helper Methods */
    /* ---------------------------------------------- */

    /**
     * Adds 'is_favorite' flags to recipe collections.
     */
    private function addFavoriteFlags($recipes)
    {
        $user = Auth::user();

        $recipes->getCollection()->transform(function ($recipe) use ($user) {
            $recipe->setAttribute(
                'is_favorite',
                $user ? $recipe->favoritedBy()->where('user_id', $user->id)->exists() : false
            );
            return $recipe;
        });

        return $recipes;
    }

    /**
     * Sets primary media pivot correctly.
     */
    private function setPrimaryMedia(Recipe $recipe, ?string $primaryId): void
    {
        if (!$primaryId) {
            return;
        }

        $mediaIds = $recipe->media()->pluck('media.id')->all();

        if (in_array($primaryId, $mediaIds)) {
            foreach ($mediaIds as $id) {
                $recipe->media()->updateExistingPivot($id, ['is_primary' => $id == $primaryId]);
            }
        }
    }
}
