<?php

namespace App\Services;

use App\Enums\TicketStatus;
use App\Models\Ticket;

class TicketService
{
    public function store(array $params): Ticket
    {
        return auth()->user()->tickets()->create($params);
    }

    public function update(Ticket $ticket, array $params): Ticket
    {
        if (isset($params['status'])) {
            // Close
            if ($params['status'] === TicketStatus::RESOLVED) {
                // TODO: Add comment by HQ bot regarding the ticket's resolution
                $ticket->update([
                    'status' => TicketStatus::RESOLVED,
                    'closed_by' => auth()->id()
                ]);
            }

            // Reopen
            if ($params['status'] === TicketStatus::PENDING && $ticket->status !== TicketStatus::PENDING) {
                // Check if user is allowed to reopen ticket
                if (auth()->user()->cannot('staffOnly', $ticket))
                    throw new \Exception('You are not allowed to reopen this ticket.', 400);

                // TODO: Add comment by HQ bot regarding the ticket's resolution
                // If allowed then we reopen the ticket
                $ticket->update([
                    'status' => TicketStatus::PENDING,
                    'closed_by' => null
                ]);
            }
        }

        if (isset($params['transfer_to'])) {
            // Reject if user is not the respective staff
            if (auth()->user()->cannot('staffOnly', $ticket))
                throw new \Exception('You are not allowed to transfer this ticket.', 400);

            $ticket->update($params['transfer_to']);
        }

        if (isset($params['assigned_to'])) {
            // Reject if user is not the respective staff
            if (auth()->user()->cannot('staffOnly', $ticket))
                throw new \Exception('You are not allowed to assign someone to this ticket.', 400);

            $ticket->update([
                'assigned_to' => $params['assign_to'],
            ]);
        }

        return $ticket;
    }
}
