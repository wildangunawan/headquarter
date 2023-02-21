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
        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign(['ticket_id']);

            $table->unsignedBigInteger("sender_id")->change();

            $table->foreign("ticket_id")
                    ->references("id")
                    ->on("tickets")
                    ->onDelete('cascade');

            $table->foreign("sender_id")
                    ->references("id")
                    ->on("users")
                    ->onDelete('cascade');
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