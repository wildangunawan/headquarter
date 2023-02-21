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
        Schema::create('group_flights', function (Blueprint $table) {
            $table->id();

            $table->foreignId("creator_id")->constrained('users');
            $table->string("dep_arpt", 4);
            $table->string("arr_arpt", 4);
            $table->timestamp("dep_time")->useCurrent();
            $table->text("flight_info");

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
        Schema::dropIfExists('group_flight');
    }
};