<?php

namespace App\Http\Requests\Ticket;

use App\Enums\TeamType;
use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use App\Rules\TeamExistRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        $teamType = implode(',', TeamType::getValues());

        return [
            'subject' => ['required'],
            'content' => ['required'],

            /**
             * assigned_team => [
             *   type => 2,
             *   code => 'SEA'
             * ]
             */
            'assigned_team' => ['required', 'array'],
            'assigned_team.type' => ['required', 'integer', 'in:' . $teamType],
            'assigned_team.code' => ['required', 'string', new TeamExistRule($this->input('assigned_team.type'))],

            // Will be filled by `prepareForValidation` method
            'region_code' => ['nullable', 'exists:regions,code'],
            'division_code' => ['nullable', 'exists:divisions,code'],
            'subdivision_code' => ['nullable', 'exists:subdivisions,code'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function prepareForValidation(): void
    {
        // Add `region_code`, `division_code`, `subdivision_code` based on `assigned_team.type`
        $this->merge(
            getTeamCodes(
                $this->input('assigned_team.type'),
                $this->input('assigned_team.code')
            )
        );
    }
}
