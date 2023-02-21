<?php

namespace Database\Factories;

use App\Models\Region;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class DivisionFactory extends Factory
{
    public function definition(): array
    {
        // Get random data
        $generator = new VATSIMDataGenerator();
        [$name, $code] = $generator->randomDivision();

        // Get random region
        $region = Region::factory()->create();

        return [
            'name' => $name,
            'code' => $code,
            'website' => fake()->domainName(),
            'region_code' => $region->code,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
