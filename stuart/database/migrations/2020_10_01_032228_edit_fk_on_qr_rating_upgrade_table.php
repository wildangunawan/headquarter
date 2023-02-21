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
        Schema::table('qr_rating_upgrades', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['subdivision_code']);

            $table->foreign("user_id")
                    ->references("id")
                    ->on("users")
                    ->onDelete('cascade');

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