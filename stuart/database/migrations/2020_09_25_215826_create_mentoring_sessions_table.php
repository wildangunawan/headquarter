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
        Schema::create('mentoring_sessions', function (Blueprint $table) {
            $table->id();

            $table->foreignId("instructor_id")->nullable()->constrained("users");
            $table->foreignId("student_id")->nullable()->constrained("users");

            $table->timestamp("start")->nullable();
            $table->timestamp("end")->nullable();

            $table->string("rating_restriction")->nullable();
            $table->tinyInteger("res_vis")->nullable()->comment("0 is both, 1 is resident, 2 is visitor");

            $table->tinyInteger("status")->default(0)->comment("0 is open, 1 is confirmed by user, 2 is completed");
            
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
        Schema::dropIfExists('mentoring_sessions');
    }
};