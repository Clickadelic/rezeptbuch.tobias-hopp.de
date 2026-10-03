<?php

namespace Tests\Feature;

use App\Http\Requests\StoreRecipeRequest;
use App\Models\User;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class RecipeIngredientValidationTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $user = (new User)->forceFill([
            'id' => 1,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);
    }

    #[DataProvider('missingQuantities')]
    public function test_selected_recipe_ingredients_require_a_quantity(?string $quantity, bool $includeQuantity): void
    {
        $ingredient = [
            'ingredient_id' => '7a313d7a-7430-473a-89de-941ddc753dd6',
            'unit' => 'g',
        ];

        if ($includeQuantity) {
            $ingredient['quantity'] = $quantity;
        }

        $response = $this->post(route('recipes.store'), [
            'name' => 'Test recipe',
            'recipe_ingredients' => [$ingredient],
        ]);

        $response->assertSessionHasErrors('recipe_ingredients.0.quantity');
    }

    public static function missingQuantities(): array
    {
        return [
            'null quantity' => [null, true],
            'empty quantity' => ['', true],
            'omitted quantity' => [null, false],
        ];
    }

    public function test_recipe_ingredient_with_a_quantity_passes_validation(): void
    {
        $request = StoreRecipeRequest::create('/rezepte', 'POST', [
            'name' => 'Test recipe',
            'recipe_ingredients' => [
                [
                    'ingredient_id' => '7a313d7a-7430-473a-89de-941ddc753dd6',
                    'quantity' => '2',
                    'unit' => 'g',
                ],
            ],
        ]);

        $validator = validator($request->all(), $request->rules());

        $this->assertTrue($validator->passes());
    }
}
