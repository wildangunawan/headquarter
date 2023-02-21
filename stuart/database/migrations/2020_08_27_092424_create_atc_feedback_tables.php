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
        Schema::create('atc_feedbacks', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId("controller_id")->constrained('users');
            $table->tinyInteger("rating");
            $table->string("position");
            $table->text("comment");

            $table->foreignId("commentator_id")->constrained('users');
            
            $table->string("subdivision_code");
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
        Schema::dropIfExists('atc_feedback');
    }
};