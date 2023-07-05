<?php

namespace App\Rules;

use App\Enums\TeamType;
use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class TeamExistRule implements ValidationRule
{
    /**
     * All the data under validation.
     *
     * @var array<string, mixed>
     */
    protected array $data = [];

    /**
     * Set the data under validation.
     *
     * @param  array<string, mixed>  $data
     */
    public function setData(array $data): static
    {
        $this->data = $data;
        return $this;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $code = $this->data['assigned_to']['team']['code'];

        switch ($this->data['assigned_to']['team']['type']) {
            case TeamType::REGION:
                Region::where('code', $code)->exists() || $fail('The selected region is invalid.');
                break;
            case TeamType::DIVISION:
                Division::where('code', $code)->exists() || $fail('The selected division is invalid.');
                break;
            case TeamType::SUBDIVISION:
                Subdivision::where('code', $code)->exists() || $fail('The selected subdivision is invalid.');
                break;
            default:
                $fail('The selected team type is invalid.');
                break;
        }
    }
}
