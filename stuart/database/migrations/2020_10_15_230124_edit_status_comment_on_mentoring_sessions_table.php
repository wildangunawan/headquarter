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
        Schema::table('mentoring_sessions', function (Blueprint $table) {
            DB::statement("ALTER TABLE mentoring_sessions CHANGE `status` `status` VARCHAR(191) NOT NULL comment '0 is open, 1 is time negotiation, 2 is pending, 3 is completed';");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mentoring_sessions', function (Blueprint $table) {
            DB::statement("ALTER TABLE mentoring_sessions CHANGE `status` `status` VARCHAR(191) NOT NULL comment '0 is open, 1 is confirmed by user, 2 is completed	';");
        });
    }
};
