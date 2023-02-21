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
        Schema::create('event_region', function (Blueprint $table) {
            $table->foreignId("event_id")
                ->constrained("events")
                ->onDelete('cascade');
                
            $table->foreignId("region_id")
                ->constrained("regions")
                ->onDelete('cascade');

            $table->primary(['event_id', 'region_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_region');
    }
};