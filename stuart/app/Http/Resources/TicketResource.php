<?php

namespace App\Http\Resources;

use App\Enums\TicketStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Ticket */
class TicketResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'status' => TicketStatus::getKey($this->status),

            'subject' => $this->subject,
            'content' => $this->content,
            'comments' => TicketCommentResource::collection($this->whenLoaded('comments')),

            'author' => new UserResource($this->whenLoaded('author')),
            'assigned_to' => [
                'staff' => new UserResource($this->whenLoaded('assignedToStaff')),
                'team' => new TeamResource($this->whenLoaded('assignedToTeam')),
            ],
            'closed_by' => new UserResource($this->whenLoaded('closedBy')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
