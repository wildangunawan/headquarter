<?php

namespace App\Services;

use App\Models\Ticket;

class TicketCommentService
{
    public function store(Ticket $ticket, array $params): void
    {
        $ticket->comments()->create($params);
    }
}
