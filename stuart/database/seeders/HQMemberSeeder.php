<?php

namespace Database\Seeders;

use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use Database\Factories\VATSIMDataGenerator;
use Illuminate\Database\Seeder;

class HQMemberSeeder extends Seeder
{
    public function run(): void
    {
        // List all region and division that should use this HQ
        // We're assuming that all subdivision on each division will
        // use this HQ. Check $subdivision variable on VATSIMDataGenerator.php
        // and add your subdivision if it's not listed there.
        $members = [
            'APAC' => [
                'SEA', 'WA'
            ]
        ];

        $generator = new VATSIMDataGenerator();
        foreach ($members as $region_code => $divisions) {
            // 1. Create the region
            Region::firstOrCreate([
                'name' => $generator->region[$region_code],
                'code' => $region_code,
            ]);

            // Loop over each given division
            foreach ($divisions as $division_code) {
                // 2. Create the division
                Division::firstOrCreate([
                    'name' => $generator->division[$region_code][$division_code],
                    'code' => $division_code,
                    'region_code' => $region_code,
                ]);

                // Get all subdivision in that division
                foreach ($generator->subdivision[$division_code] as $subdivision_code => $subdivision_name) {
                    // 3. Create the subdivision
                    Subdivision::firstOrCreate([
                        'name' => $subdivision_name,
                        'code' => $subdivision_code,
                        'division_code' => $division_code,
                        'region_code' => $region_code,
                    ]);
                }
            }
        }
    }
}
