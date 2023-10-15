<?php

namespace App\Services;

use App\Models\Division;

class DivisionService {
    public function create(array $params): Division
    {
        return Division::create($params);
    }

    public function update(Division $division, array $params): Division
    {
        $division->update($params);
        return $division;
    }

    public function destroy(Division $region): void
    {
        $region->delete();
    }
}
