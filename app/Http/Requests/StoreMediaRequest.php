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
            'file' => [
                'required',
                File::types(['png', 'jpg'])
                    ->max(10 * 1024),
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'file.required' => 'Bitte wähle eine Datei aus.',
            'file.file' => 'Die Datei ist ungültig.',
            'file.max' => 'Die Datei darf maximal 10MB groß sein.',
            'file.mimes' => 'Erlaubte Dateiformate: PNG, JPG.',
        ];
    }

}
