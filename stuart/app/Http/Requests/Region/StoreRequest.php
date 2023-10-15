<?php

namespace App\Http\Requests\Region;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'code' => ['required'],
            'website' => ['nullable', 'url'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
