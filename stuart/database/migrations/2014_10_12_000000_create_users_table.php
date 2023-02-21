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
        Schema::create('users', function (Blueprint $table) {
            # identity
            $table->unsignedBigInteger("id")->comment("ID is actually a CID");
            $table->string("name", 256);
            $table->string("email", 256);

            # rating
            $table->tinyInteger("atc_rating_id");
            $table->string("atc_rating_name");

            $table->tinyInteger("pilot_rating_id");
            $table->string("pilot_rating_name");

            # region
            $table->string("region_name");
            $table->string("region_code");

            # division
            $table->string("division_name");
            $table->string("division_code");

            # subdivision
            $table->string("subdivision_name")->nullable();
            $table->string("subdivision_code")->nullable();

            # misc
            $table->tinyInteger("email_subscription")->default(0);
            $table->rememberToken();
            $table->timestamps();

            # set
            $table->primary(['id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
