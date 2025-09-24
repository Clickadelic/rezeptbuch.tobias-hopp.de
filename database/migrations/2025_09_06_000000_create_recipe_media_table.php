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
        Schema::create('recipe_media', function (Blueprint $table) {
            $table->id();

            // Relations
            $table->uuid('recipe_id');
            $table->unsignedBigInteger('media_id');

            // Optional metadata for collections and ordering
            $table->string('collection')->nullable();
            $table->boolean('is_primary')->default(false);
            $table->unsignedInteger('position')->default(0);
            
            $table->timestamps();

            // Foreign keys
            $table->foreign('recipe_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreign('media_id')->references('id')->on('media')->onDelete('cascade');

            $table->unique(['recipe_id', 'media_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_media');
    }
};
