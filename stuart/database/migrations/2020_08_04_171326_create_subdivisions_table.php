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
        Schema::create('subdivisions', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("code");
            $table->string("email")->nullable();
            $table->string("welcome_msg")->nullable();
            $table->string("website")->nullable();

            $table->string("region_code");
            $table->foreign("region_code")->references("code")->on("regions");

            $table->string("division_code");
            $table->foreign("division_code")->references("code")->on("divisions");

            $table->timestamps();

            $table->unique("code");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subdivisions');
    }
};