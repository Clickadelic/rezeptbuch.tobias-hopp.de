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
        $ingredients = [
            'Ananas', 'Apfel', 'Banane', 'Butter', 'Cheddarkäse',
            'Champignons', 'Camembert', 'Cashewkerne', 'Dill',
            'Erdbeere', 'Erbsen', 'Feta', 'Gurke', 'Garnelen', 'Gouda',
            'Gratinkäse', 'Honig', 'Käse', 'Knoblauch', 'Lasagnenudeln',
            'Muskat', 'Möhren', 'Nudeln', 'Oliven', 'Orange', 'Paprika',
            'Pfeffer', 'Petersilie', 'Pommes', 'Paniermehl', 'Pinienkerne',
            'Parmesan', 'Ruccola', 'Schinken', 'Salz', 'Spinat',
            'Spaghetti', 'Tomaten', 'Zitrone', 'rote Zwiebel', 'rote Beete',
        ];

        foreach ($ingredients as $name) {
            Ingredient::firstOrCreate(
                ['name' => $name],
                ['user_id' => 1],
            );
        }
    }
}
