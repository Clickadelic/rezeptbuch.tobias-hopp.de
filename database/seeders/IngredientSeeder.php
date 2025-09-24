<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Ingredient;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // A
        Ingredient::create([
            'name' => 'Ananas',
        ]);
        Ingredient::create([
            'name' => 'Apfel',
        ]);

        // B
        Ingredient::create([
            'name' => 'Banane',
        ]);
        Ingredient::create([
            'name' => 'Butter',
        ]);

        // C
        Ingredient::create([
            'name' => 'Cheddarkäse',
        ]);
        Ingredient::create([
            'name' => 'Champignons',
        ]);
        Ingredient::create([
            'name' => 'Camembert',
        ]);
        Ingredient::create([
            'name' => 'Cashewkerne',
        ]);
        
        // D
        Ingredient::create([
            'name' => 'Dill',
        ]);

        // E
        Ingredient::create([
            'name' => 'Erdbeere',
        ]);
        Ingredient::create([
            'name' => 'Erbsen',
        ]);

        // F
        Ingredient::create([
            'name' => 'Feta',
        ]);

        // G
        Ingredient::create([
            'name' => 'Gurke',
        ]);
        Ingredient::create([
            'name' => 'Garnelen',
        ]);
        Ingredient::create([
            'name' => 'Gouda',
        ]);
        Ingredient::create([
            'name' => 'Gratinkäse',
        ]);

        // H
        Ingredient::create([
            'name' => 'Honig',
        ]);

        // K
        Ingredient::create([
            'name' => 'Käse',
        ]);
        Ingredient::create([
            'name' => 'Knoblauch',
        ]);

        // L
        Ingredient::create([
            'name' => 'Lasagnenudeln',
        ]);

        // M
        Ingredient::create([
            'name' => 'Muskat',
        ]);
        Ingredient::create([
            'name' => 'Möhren',
        ]);

        // N
        Ingredient::create([
            'name' => 'Nudeln',
        ]);
        
        // O
        Ingredient::create([
            'name' => 'Oliven',
        ]);
        Ingredient::create([
            'name' => 'Orange',
        ]);
        
        // P
        Ingredient::create([
            'name' => 'Paprika',
        ]);
        Ingredient::create([
            'name' => 'Pfeffer',
        ]);
        Ingredient::create([
            'name' => 'Petersilie',
        ]);
        Ingredient::create([
            'name' => 'Pommes',
        ]);
        Ingredient::create([
            'name' => 'Paniermehl',
        ]);
        Ingredient::create([
            'name' => 'Pinienkerne',
        ]);
        Ingredient::create([
            'name' => 'Parmesan',
        ]);

        // Q
        
        // R    
        Ingredient::create([
            'name' => 'Ruccola',
        ]);
        
        // S
        Ingredient::create([
            'name' => 'Schinken',
        ]);
        Ingredient::create([
            'name' => 'Salz',
        ]);
        Ingredient::create([
            'name' => 'Spinat',
        ]);
        Ingredient::create([
            'name' => 'Spaghetti',
        ]);

        // T
        Ingredient::create([
            'name' => 'Tomate',
        ]);
        // U
        // V
        
        // W
        // X
        // Y
        // Z
        Ingredient::create([
            'name' => 'Zitrone',
        ]);

        // Mehrsilbrige Zutaten
        Ingredient::create([
            'name' => 'rote Zwiebel',
        ]);
        Ingredient::create([
            'name' => 'rote Beete',
        ]);
    }
}
