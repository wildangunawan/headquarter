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
        $this->call(HQBotSeeder::class);

        if (config('app.env') !== 'production') {
            $this->call(HQMemberSeeder::class);
            $this->call(UserSeeder::class);
            $this->call(TicketSeeder::class);
        }
    }
}
