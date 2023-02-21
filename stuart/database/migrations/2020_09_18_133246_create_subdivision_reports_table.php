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
        Schema::create('subdivision_reports', function (Blueprint $table) {
            $table->id();
            $table->string("subdivision_code");
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");
            $table->string("quarter")->nullable()->comment("[YEAR]_[QUARTER]");

            $table->text("overall")->nullable();
            $table->text("atc_training")->nullable();
            $table->text("event_remarks")->nullable();
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
        Schema::dropIfExists('subdivision_reports');
    }
};