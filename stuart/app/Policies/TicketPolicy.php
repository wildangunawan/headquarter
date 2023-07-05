<?php

namespace App\Policies;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TicketPolicy
{
    // TODO: Implement policy by owner/staff in ticket's department
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
        return $user->id === $ticket->author_id;
    }

    public function update(User $user, Ticket $ticket): bool
    {
        return $user->id === $ticket->author_id;
    }

    public function staffOnly(User $user, Ticket $ticket): bool
    {
        // TODO: Only allow staff from whatever level to do this action
        return true;
    }
}
