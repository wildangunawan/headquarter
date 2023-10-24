<?php

namespace App\Repositories;

use App\Enums\TicketStatus;
use App\Models\Ticket;

class TicketRepository
{
    public function get(array $params): \Illuminate\Pagination\LengthAwarePaginator
    {
        return Ticket::with('author')
            ->where('status', $params['status'] ?? TicketStatus::PENDING)
            ->orderBy('created_at', 'desc')
            ->paginate($params['per_page'] ?? 10);
    }
}
