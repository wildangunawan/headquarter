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
        Schema::create('mentor_student', function (Blueprint $table) {
            $table->id();

            $table->foreignId('mentor_id')
                    ->constrained('users')
                    ->onDelete('cascade');
            
            $table->foreignId("student_id")
                    ->constrained('users')
                    ->onDelete('cascade');

            $table->foreignId("assigner_id")
                    ->constrained('users')
                    ->onDelete('cascade');

            $table->string("region_code");
            $table->foreign("region_code")->references("code")->on("regions")->onDelete('cascade');

            $table->string("division_code");
            $table->foreign("division_code")->references("code")->on("divisions")->onDelete('cascade');

            $table->string("subdivision_code");
            $table->foreign("subdivision_code")->references("code")->on("subdivisions")->onDelete('cascade');

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
        Schema::dropIfExists('mentor_student');
    }
};