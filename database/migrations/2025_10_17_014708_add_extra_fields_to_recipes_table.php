<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->enum('status', ['draft', 'published'])->default('draft')->after('name');
            $table->boolean('is_veggy')->default(false)->after('difficulty');
            $table->integer('community_rating')->default(0)->after('rating');
            $table->integer('community_votes')->default(0)->after('community_rating');
        });
    }

    public function down(): void
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->dropColumn(['isVeggy', 'community_rating', 'community_votes', 'status']);
        });
    }
};
