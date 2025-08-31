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
        return [
            'name' => ['required', 'string', 'max:255'],
            'punchline' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'preparation_time' => ['nullable', 'integer', 'min:0'],
            'rating' => ['nullable', 'integer', 'min:0', 'max:5'],
            'difficulty' => ['required', new Enum(Difficulty::class)],
            
            'image' => $this->isMethod('post')
                ? ['required','image','mimes:jpg,jpeg,png,webp,gif','max:2048']
                : ['nullable','image','mimes:jpg,jpeg,png,webp,gif','max:2048'],

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
