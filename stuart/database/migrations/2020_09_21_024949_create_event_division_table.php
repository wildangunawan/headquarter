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
        Schema::create('event_division', function (Blueprint $table) {
            $table->foreignId("event_id")
                ->constrained("events")
                ->onDelete('cascade');
                
            $table->foreignId("division_id")
                ->constrained("divisions")
                ->onDelete('cascade');

            $table->primary(['event_id', 'division_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_division');
    }
};