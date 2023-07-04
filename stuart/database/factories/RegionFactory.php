<?php

namespace Database\Factories;

use App\Models\Region;
use Illuminate\Database\Eloquent\Factories\Factory;

class RegionFactory extends Factory
{
    protected $model = Region::class;

    public function definition(): array
    {
        // Generator
        $generator = new VATSIMDataGenerator();
        [$name, $code] = $generator->randomRegion(true);

        return [
            'name' => $name,
            'code' => $code,
        ];
    }
}
