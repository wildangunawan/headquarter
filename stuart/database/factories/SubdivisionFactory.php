<?php

namespace Database\Factories;

use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubdivisionFactory extends Factory
{
    protected $model = Subdivision::class;

    public function definition(): array
    {
        // Generator
        $generator = new VATSIMDataGenerator();
        [$name, $code] = $generator->randomSubdivision();

        // Get random division, region automatically created
        $division = Division::factory()->create();

        return [
            'name' => $name,
            'code' => $code,
            'welcome_msg' => fake()->paragraphs(),
            'website' => fake()->domainName(),
            'email' => fake()->email(),
            'region_code' => $division->region_code,
            'division_code' => $division->code,
        ];
    }
}
