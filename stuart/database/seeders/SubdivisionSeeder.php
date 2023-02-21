<?php

namespace Database\Seeders;

use App\Models\Subdivision;
use Illuminate\Database\Seeder;

class SubdivisionSeeder extends Seeder
{
    public function run()
    {
        Subdivision::factory()->count(10)->create();
    }
}
