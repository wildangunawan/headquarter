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
            $table->tinyInteger("status")->after("approved_for")->default(0)->comment("0 is resident, 1 is visitor, 2 is FSS.");
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