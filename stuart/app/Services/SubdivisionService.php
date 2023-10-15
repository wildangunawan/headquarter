<?php

namespace App\Services;

use App\Models\Subdivision;

class SubdivisionService {
    public function create(array $params): Subdivision
    {
        return Subdivision::create($params);
    }

    public function update(Subdivision $subdivision, array $params): Subdivision
    {
        $subdivision->update($params);
        return $subdivision;
    }

    public function destroy(Subdivision $region): void
    {
        $region->delete();
    }
}
