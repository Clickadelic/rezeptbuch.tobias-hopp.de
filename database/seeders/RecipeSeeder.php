<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipe::create([
            'name' => 'Spaghetti Carbonara',
            'punchline' => 'mit Speck, Ei und Parmesan',
            'description' => 'Klassisches italienisches Pasta-Gericht mit Speck, Ei und Parmesan.',
            'difficulty' => 'einfach',
            'rating' => 3,
            'preparation_time' => 20,
            'preparation_instructions' => 'Nudeln al dente kochen und abtropfen lassen. Eier zusammen mit dem geriebenen Parmesan und Sahne in einer Schüssel mischen. Das Eiweiß vorher natürlich trennen. Den angebratenen Speck vorher abtupfen und mit in die Schüssel geben. Anschließend die Nudeln darin vermengen und danach auf den Teller drehen.',
            'user_id' => 1,
            
        ]);

        Recipe::create([
            'name' => 'Rinderbraten',
            'punchline' => 'Wie bei Mutti',
            'description' => 'Saftiger Braten mit kräftiger Sauce, perfekt für Sonntage.',
            'difficulty' => 'schwer',
            'rating' => 4,
            'preparation_time' => 180,
            'preparation_instructions' => '',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Caesar Salad',
            'punchline' => 'mit Huhn, Croutons und Caesar-Dressing',
            'description' => 'Frischer Salat mit Huhn, Croutons und Caesar-Dressing.',
            'difficulty' => 'mittel',
            'rating' => 4,
            'preparation_time' => 15,
            'preparation_instructions' => 'Salat waschen und in einem Sieb abtropfen lassen. Huhn schneiden und in kleine Stücke schneiden. Croutons in kleinen Stücken in der Pfanne anbraten. Caesar-Dressing mit Salz, Pfeffer und Knoblauch mischen.',
            'user_id' => 1,
        ]);
    }
}
