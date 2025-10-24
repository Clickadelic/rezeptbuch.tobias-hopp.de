<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCommentRequest extends FormRequest
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
            'parent_id' => ['nullable'],
            'content' => ['required', 'string', 'max:255'],
        ];
    }

    /**
     * Returns the validation error messages for the request.
     *
     * @return array<string, string> The validation error messages.
     */
    public function messages()
    {
        return [
            'parent_id.exists' => 'Der Kommentar darf nicht leer sein.',
            'content.required' => 'Der Kommentar darf nicht leer sein.',
        ];
    }
}
