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
        Schema::create('staff_removed_reason', function (Blueprint $table) {
            $table->id();

            $table->foreignId("old_holder")->constrained("users");
            $table->string("old_position");
            $table->text("reason");

            $table->string("region_code")->nullable();
            $table->foreign("region_code")->references("code")->on("regions");

            $table->string("division_code")->nullable();
            $table->foreign("division_code")->references("code")->on("divisions");

            $table->string("subdivision_code")->nullable();
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
        Schema::dropIfExists('staff_removed_reason');
    }
};