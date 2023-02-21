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
        Schema::create('qr_staffs', function (Blueprint $table) {
            $table->id();
            $table->string("subdivision_code");
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");

            $table->string("position");
            $table->string("position_title");
            $table->string("name");

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
        Schema::dropIfExists('qr_staffs');
    }
};