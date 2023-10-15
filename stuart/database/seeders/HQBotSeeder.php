<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class HQBotSeeder extends Seeder
{
    public function run(): void
    {
        // Create HQ bot as a user
        User::firstOrCreate([
            'id' => 1000000,
            'name' => "HQ Bot",
            'email' => "hq@bot.com",
            'atc_rating_id' => 0,
            'atc_rating_name' => "Suspended",
            'pilot_rating_id' => 0,
            'pilot_rating_name' => "New Member (NEW)",
            'region_name' => "HQ System",
            'region_code' => "HQ",
            'division_name' => "HQ System",
            'division_code' => "HQ",
            'subdivision_name' => "HQ System",
            'subdivision_code' => "HQ",
            'remember_token' => \Str::random(10),
        ]);
    }
}
