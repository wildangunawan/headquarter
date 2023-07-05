<?php

namespace App\Policies;

use App\Models\Ticket;
use App\Models\TicketComment;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TicketCommentPolicy
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

    public function create(User $user, Ticket $ticket): bool
    {
        // TODO: Allow staff from whatever level to do this action
        return $user->id === $ticket->author_id;
    }
}
