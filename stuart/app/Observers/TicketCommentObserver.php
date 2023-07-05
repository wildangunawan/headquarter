<?php

namespace App\Observers;

use App\Models\TicketComment;

class TicketCommentObserver
{
    public function creating(TicketComment $ticketComment): void
    {
        $ticketComment->sender_id = $ticketComment->sender_id ?? auth()->id();
    }
}
