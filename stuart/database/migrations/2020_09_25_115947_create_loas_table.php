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
        Schema::create('loas', function (Blueprint $table) {
            $table->id();

            $table->foreignId("user_id")->constrained("users");

            $table->date('start');
            $table->date('end');
            $table->string('reason');

            $table->string("region_code");
            $table->foreign("region_code")->references("code")->on("regions");

            $table->string("division_code");
            $table->foreign("division_code")->references("code")->on("divisions");

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
        Schema::dropIfExists('loas');
    }
};