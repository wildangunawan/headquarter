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
        Schema::create('qr_mentors', function (Blueprint $table) {
            $table->id();
            $table->string("subdivision_code");
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");

            $table->unsignedBigInteger("cid");
            $table->foreign("cid")->references("id")->on("users");
            $table->tinyInteger("status")->comment("0 is removed, and 1 is added.");

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
        Schema::dropIfExists('qr_mentors');
    }
};