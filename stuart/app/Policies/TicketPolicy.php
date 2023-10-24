<?php

namespace App\Policies;

use App\Enums\TicketStatus;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TicketPolicy
{
    use HandlesAuthorization;

    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): bool|null
    {
        if ($user->is_admin) return true;
        return null;
    }

    public function view(User $user, Ticket $ticket): bool
    {
        // Check whether user is the author of the ticket
        // or is a staff that is assigned to the ticket
        return $user->id === $ticket->author_id || canStaffDo($user, $ticket);
    }

    public function update(User $user, Ticket $ticket): bool
    {
        // Check whether user is the author of the ticket
        // or is a staff that is assigned to the ticket
        return $user->id === $ticket->author_id || canStaffDo($user, $ticket);
    }

    public function reopen(User $user, Ticket $ticket): bool
    {
        return canStaffDo($user, $ticket, 3);
    }

    public function transfer(User $user, Ticket $ticket): bool
    {
        return $ticket->status != TicketStatus::RESOLVED && canStaffDo($user, $ticket);
    }

    public function assignStaff(User $user, Ticket $ticket): bool
    {
        return $ticket->status != TicketStatus::RESOLVED && canStaffDo($user, $ticket);
    }
}
