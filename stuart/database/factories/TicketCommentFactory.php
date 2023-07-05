<?php

namespace Database\Factories;

use App\Models\Ticket;
use App\Models\TicketComment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class TicketCommentFactory extends Factory
{
    protected $model = TicketComment::class;

    public function definition(): array
    {
        return [
            'ticket_id' => Ticket::count() > 10 ? Ticket::inRandomOrder()->first()->id : Ticket::factory(),
            'content' => $this->faker->paragraph(),
            'sender_id' => User::count() > 10 ? User::inRandomOrder()->first()->id : User::factory(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
