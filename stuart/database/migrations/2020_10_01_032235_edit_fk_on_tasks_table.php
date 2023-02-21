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
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropForeign(['region_code']);
            $table->dropForeign(['division_code']);
            $table->dropForeign(['subdivision_code']);

            $table->foreign("region_code")
                    ->references("code")
                    ->on("regions")
                    ->onDelete('cascade')
                    ->onUpdate('cascade');

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