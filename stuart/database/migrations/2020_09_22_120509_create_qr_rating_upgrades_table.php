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
        Schema::create('qr_rating_upgrades', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained('users');
            
            $table->string("subdivision_code");
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");

            $table->tinyInteger("old_rating");
            $table->tinyInteger("new_rating");
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
        Schema::dropIfExists('qr_rating_upgrades');
    }
};