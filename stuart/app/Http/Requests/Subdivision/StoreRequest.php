<?php

namespace App\Http\Requests\Subdivision;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'code' => ['required'],
            'email' => ['nullable', 'email', 'max:255'],
            'welcome_msg' => ['nullable'],
            'website' => ['nullable'],
            'image_link' => ['nullable'],
            'discord_webhook_url' => ['nullable'],
            'region_code' => ['required', 'exists:regions,code'],
            'division_code' => ['required', 'exists:divisions,code'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'image_link' => $this->logo ?? null,
            'region_code' => $this->region,
            'division_code' => $this->division,
        ]);
    }

    public function authorize(): bool
    {
        return true;
    }
}
