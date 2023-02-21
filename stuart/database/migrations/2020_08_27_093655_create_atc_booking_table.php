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
        Schema::create('atc_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId("controller_id")->nullable()->constrained('users');
            
            $table->string("position");
            $table->timestamp("start")->useCurrent();
            $table->timestamp("end")->useCurrent();

            $table->foreignId("event_id")->nullable()->constrained("events");
            $table->foreignId("added_by")->nullable()->constrained('users');

            $table->string("division_code")->nullable();
            $table->foreign("division_code")->references("code")->on("divisions");

            $table->string("subdivision_code")->nullable();
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");

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
        Schema::dropIfExists('atc_booking');
    }
};