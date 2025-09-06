<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Enums\Difficulty;
use Illuminate\Validation\Rules\Enum;
class StoreDishRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /** @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string> */
    public function rules(): array
    {
        $nameRule = $this->isMethod('post') ? ['required', 'string', 'max:255'] : ['sometimes', 'string', 'max:255'];

        return [
            'name' => $nameRule,
            'slug' => ['nullable', 'string', 'max:255'],
            'punchline' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'preparation_time' => ['nullable', 'integer', 'min:0'],
            'rating' => ['nullable', 'integer', 'min:0', 'max:5'],
            'difficulty' => ['nullable', 'string'],

            // Nested ingredients from the form
            'dish_ingredients' => ['sometimes', 'array'],
            'dish_ingredients.*.ingredient_id' => ['nullable', 'string'],
            'dish_ingredients.*.quantity' => ['nullable', 'string'],
            'dish_ingredients.*.unit' => ['nullable', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Ein Name ist erforderlich.',
            'image.required' => 'Bitte lade ein Bild hoch.',
            'image.image' => 'Die Datei muss ein Bild sein.',
            'image.mimes' => 'Erlaubt sind nur JPG, PNG, WEBP oder GIF.',
            'image.max' => 'Das Bild darf maximal 2MB groß sein.',
        ];
    }
}
