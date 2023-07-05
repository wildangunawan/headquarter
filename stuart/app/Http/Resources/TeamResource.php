<?php

namespace App\Http\Resources;

use App\Enums\TeamType;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Region | \App\Models\Division | \App\Models\Subdivision  */
class TeamResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        if ($this->division_code !== null) $type = TeamType::SUBDIVISION;
        else if ($this->region_code !== null) $type = TeamType::DIVISION;
        else $type = TeamType::REGION;

        return [
            'name' => $this->name,
            'code' => $this->code,
            'type' => TeamType::getKey($type),
        ];
    }
}
