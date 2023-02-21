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
        Schema::table('charscector', function (Blueprint $table) {
            DB::statement("ALTER TABLE charscector MODIFY type ENUM('Chart', 'Scenery', 'Sector Files', 'SOP', 'Miscellaneous')");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('charscector', function (Blueprint $table) {
            DB::statement("ALTER TABLE charscector MODIFY type ENUM('Chart', 'Scenery', 'Sector Files', 'Miscellaneous')");
        });
    }
};
