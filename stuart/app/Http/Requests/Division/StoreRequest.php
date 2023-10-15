<?php

namespace App\Http\Requests\Division;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'code' => ['required'],
            'website' => ['nullable', 'url'],
            'region_code' => ['required', 'exists:regions,code'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'region_code' => $this->region,
        ]);
    }

    public function authorize(): bool
    {
        return true;
    }
}
