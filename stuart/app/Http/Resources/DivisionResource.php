<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Division */
class DivisionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'code' => $this->code,
            'website' => $this->website,

            'region' => new RegionResource($this->whenLoaded('region')),
            'counts' => [
                'subdivisions' => $this->subdivisions_count,
                'tickets' => $this->tickets_count,
            ]
        ];
    }
}
