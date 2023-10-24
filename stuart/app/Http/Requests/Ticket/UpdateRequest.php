<?php

namespace App\Http\Requests\Ticket;

use App\Enums\TeamType;
use App\Enums\TicketStatus;
use App\Rules\TeamExistRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        $status = implode(',', TicketStatus::getValues());

        return [
            'status' => ['nullable', 'integer', 'in:' . $status],
            'assigned_to' => ['missing_if:transfer_to,any', 'exists:users,id'],

            // Will be filled by `prepareForValidation` method
            'transfer_to.region_code' => ['nullable', 'exists:regions,code'],
            'transfer_to.division_code' => ['nullable', 'exists:divisions,code'],
            'transfer_to.subdivision_code' => ['nullable', 'exists:subdivisions,code'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function prepareForValidation(): void
    {
        /**
         * `transfer_to` from request are formulated below:
         * transfer_to => [
         *   type => 2,
         *   code => 'SEA'
         * ]
         */
        if ($this->has('transfer_to')) {
            // Check if team is valid
            $teamType = implode(',', TeamType::getValues());
            $this->validate([
                'transfer_to.type' => ['required', 'integer', 'in:'.$teamType],
                'transfer_to.code' => ['required', 'string', new TeamExistRule($this->input('transfer_to.type'))],
            ]);

            // Add `region_code`, `division_code`, `subdivision_code`
            // based on `transfer_to.type` only if `transfer_to` is passed
            $this->merge([
                'transfer_to' => getTeamCodes(
                    $this->input('transfer_to.type'),
                    $this->input('transfer_to.code')
                )
            ]);
        }
    }
}
