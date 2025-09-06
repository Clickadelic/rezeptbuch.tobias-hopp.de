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
            'description' => 'Klassisches italienisches Pasta-Gericht mit Speck, Ei und Parmesan.',
            'difficulty' => 'einfach',
            'preparation_time' => 20,
        ]);

        Dish::create([
            'name' => 'Rinderbraten',
            'description' => 'Saftiger Braten mit kräftiger Sauce, perfekt für Sonntage.',
            'difficulty' => 'schwer',
            'preparation_time' => 180,
        ]);

        Dish::create([
            'name' => 'Caesar Salad',
            'description' => 'Frischer Salat mit Huhn, Croutons und Caesar-Dressing.',
            'difficulty' => 'mittel',
            'preparation_time' => 15,
        ]);
    }
}
