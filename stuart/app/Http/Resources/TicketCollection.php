<?php

namespace App\Http\Resources;

use App\Enums\TicketStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

/** @see \App\Models\Ticket */
class TicketCollection extends ResourceCollection
{
    public function toArray(Request $request): array
    {
        return [
            'data' => [
                'pending' => $this->collection->where('status', TicketStatus::PENDING),
                'resolved' => $this->collection->where('status', TicketStatus::RESOLVED)
            ],
        ];
    }
}
