<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\TicketComment */
class TicketCommentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'content' => $this->content,
            'posted_at' => $this->created_at,

            'ticket' => new TicketResource($this->whenLoaded('ticket')),
            'sender' => new UserResource($this->whenLoaded('sender')),
        ];
    }
}
