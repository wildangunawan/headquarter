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
        Schema::table('atc_rosters', function (Blueprint $table) {
            $table->string("region_code")->nullable()->after("division_code");
            $table->foreign("region_code")->references("code")->on("regions");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('atc_rosters', function (Blueprint $table) {
            //
        });
    }
};