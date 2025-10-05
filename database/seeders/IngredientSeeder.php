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
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Apfel',
            'user_id' => 1
        ]);

        // B
        Ingredient::create([
            'name' => 'Banane',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Butter',
            'user_id' => 1
        ]);

        // C
        Ingredient::create([
            'name' => 'Cheddarkäse',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Champignons',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Camembert',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Cashewkerne',
            'user_id' => 1
        ]);
        
        // D
        Ingredient::create([
            'name' => 'Dill',
            'user_id' => 1
        ]);

        // E
        Ingredient::create([
            'name' => 'Erdbeere',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Erbsen',
            'user_id' => 1
        ]);

        // F
        Ingredient::create([
            'name' => 'Feta',
            'user_id' => 1
        ]);

        // G
        Ingredient::create([
            'name' => 'Gurke',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Garnelen',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Gouda',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Gratinkäse',
            'user_id' => 1
        ]);

        // H
        Ingredient::create([
            'name' => 'Honig',
            'user_id' => 1
        ]);

        // K
        Ingredient::create([
            'name' => 'Käse',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Knoblauch',
            'user_id' => 1
        ]);

        // L
        Ingredient::create([
            'name' => 'Lasagnenudeln',
            'user_id' => 1
        ]);

        // M
        Ingredient::create([
            'name' => 'Muskat',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Möhren',
            'user_id' => 1
        ]);

        // N
        Ingredient::create([
            'name' => 'Nudeln',
            'user_id' => 1
        ]);
        
        // O
        Ingredient::create([
            'name' => 'Oliven',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Orange',
            'user_id' => 1
        ]);
        
        // P
        Ingredient::create([
            'name' => 'Paprika',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Pfeffer',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Petersilie',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Pommes',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Paniermehl',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Pinienkerne',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Parmesan',
            'user_id' => 1
        ]);

        // Q
        
        // R    
        Ingredient::create([
            'name' => 'Ruccola',
            'user_id' => 1
        ]);
        
        // S
        Ingredient::create([
            'name' => 'Schinken',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Salz',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Spinat',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'Spaghetti',
            'user_id' => 1
        ]);

        // T
        Ingredient::create([
            'name' => 'Tomaten',
            'user_id' => 1
        ]);
        // U
        // V
        
        // W
        // X
        // Y
        // Z
        Ingredient::create([
            'name' => 'Zitrone',
            'user_id' => 1
        ]);

        // Mehrsilbrige Zutaten
        Ingredient::create([
            'name' => 'rote Zwiebel',
            'user_id' => 1
        ]);
        Ingredient::create([
            'name' => 'rote Beete',
            'user_id' => 1
        ]);
    }
}
