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
        Schema::table('atc_bookings', function (Blueprint $table) {
            $table->foreignId("position_id")->nullable()
                                            ->after("event_id")
                                            ->constrained("event_atc_positions")
                                            ->onDelete('cascade');

            $table->string("region_code")->nullable()->after('added_by');
            $table->foreign("region_code")->references("code")
                                            ->on("regions")
                                            ->onDelete('cascade');

            $table->dropForeign(['added_by']);
            $table->dropColumn(['added_by']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};