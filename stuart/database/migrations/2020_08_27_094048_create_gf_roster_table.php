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
        Schema::create('gf_roster', function (Blueprint $table) {
            
            $table->foreignId("pilot_id")->constrained("users")->onDelete('cascade');
            $table->foreignId("gf_id")->constrained("group_flights")->onDelete('cascade');
            $table->tinyInteger("status")->default(1);

            $table->primary(['pilot_id', 'gf_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gf_roster');
    }
};