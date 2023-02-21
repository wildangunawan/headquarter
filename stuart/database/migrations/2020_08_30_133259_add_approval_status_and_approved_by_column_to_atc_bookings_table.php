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
            $table->string("approval_status")->nullable()->after("event_id");
            $table->foreignId("approved_by")->nullable()->after("approval_status")->constrained("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('atc_bookings', function (Blueprint $table) {
            //
        });
    }
};