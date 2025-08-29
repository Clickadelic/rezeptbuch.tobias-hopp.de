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
        Schema::create('dishes', function (Blueprint $table) {
            $table->uuid('id')->primary(); // Dish PK als UUID
            $table->string('name');
            $table->string('punchline')->nullable();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->string('difficulty')->default('einfach');
            $table->integer('rating')->nullable();
            $table->integer('preparation_time')->nullable();

            $table->foreignId('user_id')->constrained('users');
            
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dishes');
    }
};
