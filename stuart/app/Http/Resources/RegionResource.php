<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Region */
class RegionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'code' => $this->code,
            'website' => $this->website,

            // Count
            'counts' => [
                'divisions' => $this->whenCounted('divisions'),
                'subdivisions' => $this->whenCounted('subdivisions'),
            ]
        ];
    }
}
