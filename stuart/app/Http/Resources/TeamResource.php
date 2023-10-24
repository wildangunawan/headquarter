<?php

namespace App\Http\Resources;

use App\Enums\TeamType;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        if ($this->subdivision_code !== null) $type = TeamType::SUBDIVISION;
        else if ($this->division_code !== null) $type = TeamType::DIVISION;
        else $type = TeamType::REGION;

        switch ($type) {
            case TeamType::REGION:
                return [
                    'name' => $this->region->name,
                    'code' => $this->region->code,
                    'type' => TeamType::getKey($type),
                ];
            case TeamType::DIVISION:
                return [
                    'name' => $this->division->name,
                    'code' => $this->division->code,
                    'type' => TeamType::getKey($type),
                ];
            case TeamType::SUBDIVISION:
                return [
                    'name' => $this->subdivision->name,
                    'code' => $this->subdivision->code,
                    'type' => TeamType::getKey($type),
                ];
        }
    }
}
