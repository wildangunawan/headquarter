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
             * assigned_to => [
             *   type => 2,
             *   code => 'SEA'
             * ]
             */
            'assigned_to' => ['required', 'array'],
            'assigned_to.type' => ['required', 'in:' . $teamType],
            'assigned_to.code' => ['required', new TeamExistRule()],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function passedValidation(): void
    {
        /// Replace `assigned_to` to `region_code`, `division_code`, `subdivision_code` based on `assigned_to.type`
        $this->merge([
            'assigned_to' => getTeamCodes(
                $this->input('assigned_to.type'),
                $this->input('assigned_to.code')
            )
        ]);
    }
}
