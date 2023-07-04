<?php

namespace Database\Factories;

use App\Models\Division;
use App\Models\Subdivision;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubdivisionFactory extends Factory
{
    protected $model = Subdivision::class;

    public function definition(): array
    {
        // Get random data
        $generator = new VATSIMDataGenerator();
        $division = Division::inRandomOrder()->first();

        // Generate random subdivision in that division
        [$name, $code] = $generator->getRandomSubdivisionIn($division->code);

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
