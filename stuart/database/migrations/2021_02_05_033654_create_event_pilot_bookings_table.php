<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_pilot_bookings', function (Blueprint $table) {
            $table->id();
            $table->text("flight");
            $table->text("dep_arpt");
            $table->text("arr_arpt");

            $table->time("time")
                    ->comment("Time when the flight will be arriving or departing");

            $table->tinyInteger("type")
                    ->comment("0 is departing flight and 1 is arriving flight");

            $table->text("aircraft")
                    ->nullable();

            $table->foreignId("pilot_id")
                    ->nullable()
                    ->constrained("users")
                    ->onDelete('cascade');

            $table->foreignId("event_id")
                    ->constrained("events")
                    ->onDelete('cascade');

            $table->foreignId("added_by")
                    ->constrained("users")
                    ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_pilot_bookings');
    }
};