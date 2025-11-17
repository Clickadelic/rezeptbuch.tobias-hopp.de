<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Falls die Tabelle existiert → löschen
        if (Schema::hasTable('ratings')) {
            Schema::drop('ratings');
        }
    }

    public function down(): void
    {
        // Falls du mal rollback machen musst → Tabelle wiederherstellen
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->uuid('recipe_id');
            $table->foreign('recipe_id')
                ->references('id')
                ->on('recipes')
                ->cascadeOnDelete();

            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnDelete();

            $table->unsignedTinyInteger('rating');
            $table->timestamps();
        });
    }
};
