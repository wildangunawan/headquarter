<?php

namespace Database\Factories;

use App\Enums\TicketStatus;
use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class TicketFactory extends Factory
{
    protected $model = Ticket::class;

    public function definition(): array
    {
        return [
            'subject' => fake()->sentence(),
            'content' => fake()->paragraphs(3, true),
            'status' => TicketStatus::PENDING,
            'author_id' => User::count() > 10 ? User::inRandomOrder()->first()->id : User::factory(),
            'assigned_to' => User::count() > 10 ? User::inRandomOrder()->first()->id : User::factory(),
            'closed_by' => User::count() > 10 ? User::inRandomOrder()->first()->id : User::factory(),
            'region_code' => Region::inRandomOrder()->first()->code,
            'division_code' => Division::inRandomOrder()->first()->code,
            'subdivision_code' => Subdivision::inRandomOrder()->first()->code,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
