<?php

namespace App\Services;

use App\Enums\TicketStatus;
use App\Models\Ticket;

class TicketService
{
    public function store(array $params): Ticket
    {
        return auth()->user()->tickets()->create($params)->refresh();
    }

    public function update(Ticket $ticket, array $params): Ticket
    {
        $to_update = [];

        if (isset($params['status'])) {
            // Close
            if ($params['status'] === TicketStatus::RESOLVED) {
                // TODO: Add comment by HQ bot regarding the ticket's resolution
                $to_update += [
                    'status' => TicketStatus::RESOLVED,
                    'closed_by' => auth()->id()
                ];
            }

            // Reopen
            if ($params['status'] === TicketStatus::PENDING && $ticket->status !== TicketStatus::PENDING) {
                // Check if user is allowed to reopen ticket
                if (auth()->user()->cannot('reopen', $ticket))
                    throw new \Exception('You are not allowed to reopen this ticket.', 400);

                // TODO: Add comment by HQ bot regarding the ticket's resolution
                // If allowed then we reopen the ticket
                $to_update += [
                    'status' => TicketStatus::PENDING,
                    'closed_by' => null
                ];
            }
        }

        if (isset($params['transfer_to'])) {
            // Reject if user is not the respective staff
            if (auth()->user()->cannot('transfer', $ticket))
                throw new \Exception('You are not allowed to transfer this ticket.', 400);

            $to_update += $params['transfer_to'];
        }

        // TODO: Need to check whether the assigned staff is in the same team as
        // the ticket assigned team
        if (isset($params['assigned_to'])) {
            // Reject if user is not the respective staff
            if (auth()->user()->cannot('assignStaff', $ticket))
                throw new \Exception('You are not allowed to assign someone to this ticket.', 400);

            $to_update += [
                'assigned_to' => $params['assigned_to'],
            ];
        }

        $ticket->update($to_update);
        return $ticket;
    }
}
