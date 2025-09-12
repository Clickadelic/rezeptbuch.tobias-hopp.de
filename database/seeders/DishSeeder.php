<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Dish;

class DishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dish::create([
            'name' => 'Spaghetti Carbonara',
            'punchline' => 'mit Speck, Ei und Parmesan',
            'description' => 'Klassisches italienisches Pasta-Gericht mit Speck, Ei und Parmesan.',
            'difficulty' => 'einfach',
            'rating' => 3,
            'preparation_time' => 20,
            'user_id' => 1,
        ]);

        Dish::create([
            'name' => 'Rinderbraten',
            'punchline' => 'Wie bei Mutti',
            'description' => 'Saftiger Braten mit kräftiger Sauce, perfekt für Sonntage.',
            'difficulty' => 'schwer',
            'rating' => 4,
            'preparation_time' => 180,
            'user_id' => 1,
        ]);

        Dish::create([
            'name' => 'Caesar Salad',
            'punchline' => 'mit Huhn, Croutons und Caesar-Dressing',
            'description' => 'Frischer Salat mit Huhn, Croutons und Caesar-Dressing.',
            'difficulty' => 'mittel',
            'rating' => 4,
            'preparation_time' => 15,
            'user_id' => 1,
        ]);
    }
}
