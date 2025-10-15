<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class StoreMediaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'file' => 'required|file|mimes:jpg,jpeg,png|max:10240',
            'collection' => 'nullable|string',
            'recipe_id' => 'nullable|exists:recipes,id',
            'pending_key' => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'file.required' => 'Bitte wähle eine Datei aus.',
            'file.file' => 'Die Datei ist ungültig.',
            'file.max' => 'Die Datei darf maximal 5MB groß sein.',
            'file.mimes' => 'Erlaubte Dateiformate: PNG, JPG.',
        ];
    }

}
