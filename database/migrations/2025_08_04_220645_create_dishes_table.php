<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Dish Table
        Schema::create("dishes", function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string("name");
            $table->string("punchline")->default(null)->nullable();
            $table->string("description")->default(null)->nullable();
            $table->string("image")->default(null)->nullable();
            $table->string("difficulty")->default(null)->nullable();
            $table->string("rating")->default(null)->nullable();
            $table->string("preparation_time")->default(null)->nullable();
            $table->timestamps();
            $table->dateTime("deleted_at")->default(null)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
