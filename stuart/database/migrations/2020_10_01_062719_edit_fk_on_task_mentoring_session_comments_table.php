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
        Schema::table('mentoring_sessions_comments', function (Blueprint $table) {
            $table->dropForeign(['mentoring_session_id']);

            $table->unsignedBigInteger("sender_id")->change();

            $table->foreign("mentoring_session_id")
                    ->references("id")
                    ->on("mentoring_sessions")
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