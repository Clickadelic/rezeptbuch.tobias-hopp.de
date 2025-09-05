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
        Schema::create('dishes', function (Blueprint $table) {
            $table->uuid('id')->primary(); // Dish PK als UUID
            $table->string('name');
            $table->string('slug')->default('')->unique();
            $table->string('punchline')->nullable();
            $table->text('description')->nullable();
            // $table->string('image')->nullable();
            $table->enum('difficulty', ['EASY', 'MEDIUM', 'HARD'])->default('EASY'); // <-- enum statt string
            $table->unsignedInteger('rating')->default(0);
            $table->unsignedInteger('preparation_time')->default(0);

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
