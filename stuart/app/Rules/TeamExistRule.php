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
    protected int $type;

    /**
     * @param int $type
     */
    public function __construct(int $type)
    {
        $this->type = $type;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        switch ($this->type) {
            case TeamType::REGION:
                Region::where('code', $value)->exists() || $fail('The selected region is invalid.');
                break;
            case TeamType::DIVISION:
                Division::where('code', $value)->exists() || $fail('The selected division is invalid.');
                break;
            case TeamType::SUBDIVISION:
                Subdivision::where('code', $value)->exists() || $fail('The selected subdivision is invalid.');
                break;
            default:
                $fail('The selected team type is invalid.');
                break;
        }
    }
}
