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

            $table->dropForeign(['controller_id']);
            $table->dropForeign(['added_by']);
            $table->dropForeign(['approved_by']);
            $table->dropForeign(['event_id']);

            $table->dropForeign(['division_code']);
            $table->dropForeign(['subdivision_code']);

            $table->foreign("controller_id")
                    ->references("id")
                    ->on("users")
                    ->onDelete('cascade');

            $table->foreign("added_by")
                    ->references("id")
                    ->on("users")
                    ->onDelete('cascade');

            $table->foreign("approved_by")
                    ->references("id")
                    ->on("users")
                    ->onDelete('cascade');

            $table->foreign("event_id")
                    ->references("id")
                    ->on("events")
                    ->onDelete('cascade');

            $table->foreign("division_code")
                    ->references("code")
                    ->on("divisions")
                    ->onDelete('cascade')
                    ->onUpdate('cascade');

            $table->foreign("subdivision_code")
                    ->references("code")
                    ->on("subdivisions")
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
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