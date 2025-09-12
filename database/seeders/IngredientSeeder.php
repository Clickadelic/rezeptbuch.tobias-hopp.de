<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Ingredient;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ingredient::create([
            'name' => 'Ananas',
        ]);
        Ingredient::create([
            'name' => 'Banane',
        ]);
        Ingredient::create([
            'name' => 'Butter',
        ]);
        Ingredient::create([
            'name' => 'Erdbeere',
        ]);
        Ingredient::create([
            'name' => 'Gurke',
        ]);
        Ingredient::create([
            'name' => 'Spinat',
        ]);
        Ingredient::create([
            'name' => 'Käse',
        ]);
        Ingredient::create([
            'name' => 'Gouda',
        ]);
        Ingredient::create([
            'name' => 'Cheddarkäse',
        ]);
        Ingredient::create([
            'name' => 'Salz',
        ]);
        Ingredient::create([
            'name' => 'Pfeffer',
        ]);
        Ingredient::create([
            'name' => 'Paprika',
        ]);
        Ingredient::create([
            'name' => 'Muskat',
        ]);
        Ingredient::create([
            'name' => 'Pinienkerne',
        ]);
        Ingredient::create([
            'name' => 'Ruccola',
        ]);
        Ingredient::create([
            'name' => 'Garnelen',
        ]);
        Ingredient::create([
            'name' => 'Parmesan',
        ]);
        Ingredient::create([
            'name' => 'Zitrone',
        ]);
        Ingredient::create([
            'name' => 'Orange',
        ]);
        Ingredient::create([
            'name' => 'Knoblauch',
        ]);
        Ingredient::create([
            'name' => 'rote Zwiebel',
        ]);
        Ingredient::create([
            'name' => 'Paniermehl',
        ]);
        Ingredient::create([
            'name' => 'Erbsen',
        ]);
        Ingredient::create([
            'name' => 'Möhren',
        ]);
        Ingredient::create([
            'name' => 'Spaghetti',
        ]);
        Ingredient::create([
            'name' => 'Lasagnenudeln',
        ]);
    }
}
