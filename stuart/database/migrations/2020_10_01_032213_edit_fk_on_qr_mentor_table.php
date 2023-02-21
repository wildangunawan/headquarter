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
        Schema::table('qr_mentors', function (Blueprint $table) {
            $table->dropForeign(['cid']);
            $table->dropForeign(['subdivision_code']);

            $table->foreign("cid")
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