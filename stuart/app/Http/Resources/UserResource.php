<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\User */
class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,

            $this->mergeWhen(
                auth()->user()->is_admin || auth()->user()->id == $this->id,
                [
                    'is_banned' => (bool) $this->is_banned,
                    'is_admin' => (bool) $this->is_admin,
                ]
            ),

            // TODO: Check if user accessing this resource has permission to view email
            'email' => $this->email,

            'rating' => [
                'atc' => [
                    'id' => $this->atc_rating_id,
                    'name' => $this->atc_rating_name,
                ],
                'pilot' => [
                    'id' => $this->pilot_rating_id,
                    'name' => $this->pilot_rating_name,
                ],
            ],
            'region' => [
                'name' => $this->region_name,
                'code' => $this->region_code,
            ],
            'division' => [
                'name' => $this->division_name,
                'code' => $this->division_code,
            ],
            'subdivision' => [
                'name' => $this->subdivision_name,
                'code' => $this->subdivision_code,
            ],

            'email_subscription' => (bool) $this->email_subscription,
            'last_updated_at' => $this->updated_at,
        ];
    }
}
