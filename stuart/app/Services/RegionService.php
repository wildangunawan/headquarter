<?php

namespace App\Services;

use App\Models\Region;

class RegionService {
    public function create(array $params): Region
    {
        return Region::create($params);
    }

    public function update(Region $region, array $params): Region
    {
        $region->update($params);
        return $region;
    }

    public function destroy(Region $region): void
    {
        $region->delete();
    }
}
