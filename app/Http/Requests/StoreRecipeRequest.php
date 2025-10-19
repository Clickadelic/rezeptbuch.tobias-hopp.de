<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $recipe = $this->route('recipe'); // <-- für unique:recipes,slug,...

        return [
            // Oder einfacher:
            'name' => [
                $this->isMethod('post') ? 'required' : 'sometimes', 
                'string', 
                'max:255',
                'required_with:name' // Stellt sicher, dass das Feld nicht leer ist, wenn es gesendet wird (für PATCH/PUT)
            ],
            'status' => ['nullable', 'string'],

            // Slug optional, aber eindeutig, wenn vorhanden
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('recipes', 'slug')->ignore($recipe?->id),
            ],

            'punchline' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'preparation_time' => ['nullable', 'integer', 'min:0'],
            'preparation_instructions' => ['nullable', 'string'],
            'rating' => ['nullable', 'integer', 'min:0', 'max:5'],
            'difficulty' => ['nullable', 'string'],
            'is_veggy' => ['nullable', 'boolean'],
            // Zutaten
            'recipe_ingredients' => ['sometimes', 'array'],
            'recipe_ingredients.*.ingredient_id' => ['nullable', 'string'],
            'recipe_ingredients.*.quantity' => ['nullable', 'string'],
            'recipe_ingredients.*.unit' => ['nullable', 'string'],

            // Bilder & Zuordnung
            'pending_key' => ['nullable', 'string', 'max:255'],
            'primary_media_id' => ['nullable', 'string'],

            // Referenzen
            'id' => ['nullable', 'string'],
            'category_id' => ['nullable', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Ein Name ist erforderlich.',
            'slug.unique' => 'Diese URL wird bereits verwendet.',
        ];
    }
}
