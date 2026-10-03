<?php

namespace Tests\Unit;

use App\Http\Requests\StoreRecipeRequest;
use Tests\TestCase;

class RecipeIngredientRequestRulesTest extends TestCase
{
    public function test_recipe_can_be_submitted_without_ingredients(): void
    {
        $request = StoreRecipeRequest::create('/rezepte', 'POST', [
            'name' => 'Test recipe',
            'recipe_ingredients' => [],
        ]);

        $validator = validator($request->all(), $request->rules());

        $this->assertTrue($validator->passes());
    }
}
