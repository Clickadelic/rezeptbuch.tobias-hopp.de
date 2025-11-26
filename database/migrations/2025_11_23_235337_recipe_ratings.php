<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('recipe_ratings', function (Blueprint $table) {
            $table->id();
            $table->uuid('recipe_id'); // UUID des Rezepts
            $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // User-ID als FK
            $table->unsignedTinyInteger('rating'); // 1-5
            $table->timestamps();

            $table->unique(['recipe_id', 'user_id']); // kein doppeltes Voting
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('recipe_ratings');
    }
};
