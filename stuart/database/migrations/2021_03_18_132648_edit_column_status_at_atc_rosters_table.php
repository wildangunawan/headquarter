<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use \Illuminate\Support\Facades\DB;

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
            DB::statement("ALTER TABLE atc_rosters CHANGE `status` `status` VARCHAR(191) NOT NULL comment '0 is resident, 1 is visitor, 2 is FSS, 3 is endorsed';");
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
