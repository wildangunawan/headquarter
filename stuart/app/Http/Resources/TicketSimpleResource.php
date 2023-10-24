<?php

namespace App\Http\Resources;

use App\Enums\TicketStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Ticket */
class TicketSimpleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'status' => TicketStatus::getKey($this->status),

            'subject' => $this->subject,

            'author' => new UserSimpleResource($this->whenLoaded('author')),
            'assigned_to' => [
                'team' => new TeamResource($this),
            ],

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
