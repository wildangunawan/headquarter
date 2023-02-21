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
        Schema::create('event_atc_positions', function (Blueprint $table) {
            $table->id();

            $table->string("position");
            $table->foreignId("event_id")
            		->constrained("events")
            		->onDelete('cascade');

            $table->foreignId("added_by")
            		->constrained('users')
            		->onDelete('cascade');

            $table->string("region_code")->nullable();
            $table->foreign("region_code")->references("code")
            								->on("regions")
            								->onDelete('cascade');

            $table->string("division_code")->nullable();
            $table->foreign("division_code")->references("code")
            								->on("divisions")
            								->onDelete('cascade');

            $table->string("subdivision_code")->nullable();
            $table->foreign("subdivision_code")->references("code")
            									->on("subdivisions")
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
        Schema::dropIfExists('event_atc_positions');
    }
};