<?php

namespace App\Http\Requests\Ticket;

use App\Enums\TeamType;
use App\Enums\TicketStatus;
use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use App\Rules\TeamExistRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        $status = implode(',', TicketStatus::getValues());
        $teamType = implode(',', TeamType::getValues());

        return [
            'status' => ['nullable', 'integer', 'in:' . $status],
            'assigned_to' => ['prohibited_if:transfer_to', 'exists:users'],

            /**
             * transfer_to => [
             *   type => 2,
             *   code => 'SEA'
             * ]
             */
            'transfer_to' => ['prohibited_if:assigned_to', 'array'],
            'transfer_to.type' => ['nullable', 'in:' . $teamType],
            'transfer_to.code' => ['nullable', new TeamExistRule()],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function passedValidation(): void
    {
        // Replace `assigned_to` to `region_code`, `division_code`, `subdivision_code` based on `assigned_to.type`
        $this->merge([
            'transfer_to' => getTeamCodes(
                $this->input('transfer_to.type'),
                $this->input('transfer_to.code')
            )
        ]);
    }
}
