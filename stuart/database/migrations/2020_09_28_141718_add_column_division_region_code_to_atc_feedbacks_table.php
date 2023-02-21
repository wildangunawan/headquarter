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
        Schema::table('atc_feedbacks', function (Blueprint $table) {
            $table->string("region_code")->after("commentator_id");
            $table->foreign("region_code")->references("code")->on("regions");

            $table->string("division_code")->after("region_code");
            $table->foreign("division_code")->references("code")->on("divisions");

            $table->string("subdivision_code")->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('atc_feedbacks', function (Blueprint $table) {
            //
        });
    }
};