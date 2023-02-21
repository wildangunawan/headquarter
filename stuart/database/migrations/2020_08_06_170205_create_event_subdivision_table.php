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
        Schema::create('event_subdivision', function (Blueprint $table) {
            $table->foreignId("event_id")
                ->constrained("events")
                ->onDelete('cascade');
                
            $table->foreignId("subdivision_id")
                ->constrained("subdivisions")
                ->onDelete('cascade');

            $table->primary(['event_id', 'subdivision_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_subdivisions');
    }
};