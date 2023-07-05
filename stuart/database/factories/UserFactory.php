<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        // Generate fake data from VATSIM Data Gen
        $generator = new VATSIMDataGenerator();
        [
            $atc_rating_id,
            $atc_rating_name,
            $pilot_rating_id,
            $pilot_rating_name,
            $subdivision_name,
            $subdivision_code,
            $division_name,
            $division_code,
            $region_name,
            $region_code
        ] = $generator->randomCompleteData();

        return [
            'id' => fake()->numberBetween(1000001, 1000100),
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'atc_rating_id' => $atc_rating_id,
            'atc_rating_name' => $atc_rating_name,
            'pilot_rating_id' => $pilot_rating_id,
            'pilot_rating_name' => $pilot_rating_name,
            'region_name' => $region_name,
            'region_code' => $region_code,
            'division_name' => $division_name,
            'division_code' => $division_code,
            'subdivision_name' => $subdivision_name,
            'subdivision_code' => $subdivision_code,
            'remember_token' => Str::random(10),
        ];
    }
}
