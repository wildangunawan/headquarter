<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Subdivision */
class SubdivisionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'code' => $this->code,
            'email' => $this->email,
            'welcome_msg' => $this->welcome_msg,
            'website' => $this->website,
            'logo' => $this->image_link,
            'discord_webhook' => $this->when(auth()->user()->is_admin, $this->discord_webhook_url),

            'division' => new DivisionResource($this->whenLoaded('division')),
            'region' => new RegionResource($this->whenLoaded('region')),
        ];
    }
}
