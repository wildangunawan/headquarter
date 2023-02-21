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
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string("subject");
            $table->text("content");
            $table->foreignId("author_id")->constrained("users");

            $table->string("region_code")->nullable();
            $table->foreign("region_code")->references("code")->on("regions");

            $table->string("division_code")->nullable();
            $table->foreign("division_code")->references("code")->on("divisions");

            $table->string("subdivision_code")->nullable();
            $table->foreign("subdivision_code")->references("code")->on("subdivisions");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
};