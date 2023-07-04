<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Only run this seeder if we're in a local environment
        // or if you're sure it's safe to do so
        $this->call(HQMemberSeeder::class);
        $this->call(UserSeeder::class);
    }
}
