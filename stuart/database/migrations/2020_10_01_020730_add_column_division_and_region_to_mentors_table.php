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
        Schema::table('mentors', function (Blueprint $table) {
            // add column

            $table->string("subdivision_code")->after('subdivision_id');
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");

            $table->string("division_code")->after('subdivision_code');
            $table->foreign("division_code")->references("code")->on("divisions");

            $table->string("region_code")->after('division_code');
            $table->foreign("region_code")->references("code")->on("regions");

            // drop foreign
            $table->dropForeign(['subdivision_id']);

            // drop column
            $table->dropColumn('subdivision_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mentors', function (Blueprint $table) {
            //
        });
    }
};