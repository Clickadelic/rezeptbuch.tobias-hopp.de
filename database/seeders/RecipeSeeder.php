<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Falls Kategorien noch nicht existieren
        if (Category::count() === 0) {
            $this->call(CategorySeeder::class);
        }

        // Kategorien abrufen als Name→ID Mapping
        $categories = Category::all()->keyBy('slug');

        // Rezepte nach Kategorie gruppiert
        $recipesByCategory = [
            'vorspeise' => [
                [
                    'name' => 'Bruschetta mit Tomaten und Feta',
                    'punchline' => 'Italienischer Klassiker',
                    'description' => 'Geröstetes Brot mit Tomaten, Knoblauch und Basilikum und Petersilie.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'portion_count' => 2,
                    'preparation_time' => 15,
                    'preparation_instructions' => 'Brot rösten, Tomaten schneiden, alles anrichten.',
                ],
                [
                    'name' => 'Tomatensuppe',
                    'punchline' => 'Ein wärmender Start in den Abend',
                    'description' => 'Cremige Suppe mit frischen Tomaten und Kräutern.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'portion_count' => 3,
                    'preparation_time' => 25,
                    'preparation_instructions' => 'Zwiebeln anschwitzen, Tomaten pürieren, würzen.',
                ],
            ],

            'hauptgericht' => [
                [
                    'name' => 'Ramen Suppe',
                    'punchline' => 'Wärmend und herzhaft',
                    'description' => 'Japanische Nudelsuppe mit Brühe, Fleisch und Gemüse.',
                    'difficulty' => 'schwer',
                    'rating' => 5,
                    'portion_count' => 2,
                    'preparation_time' => 90,
                    'preparation_instructions' => 'Brühe lange köcheln lassen, Nudeln und Toppings hinzufügen.',
                ],
                [
                    'name' => 'Spaghetti Carbonara',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Pasta mit Speck, Ei und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'portion_count' => 2,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Pasta kochen, Speck anbraten, Eier-Parmesan-Mix hinzufügen.',
                ],
            ],

            'nachtisch' => [
                [
                    'name' => 'Pancakes',
                    'punchline' => 'Fluffig und süß',
                    'description' => 'Amerikanische Pfannkuchen mit Ahornsirup.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'portion_count' => 3,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Teig anrühren, ausbacken und servieren.',
                ],
                [
                    'name' => 'Tiramisu',
                    'punchline' => 'Italienisches Dessert',
                    'description' => 'Schichtdessert mit Mascarpone und Espresso.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'portion_count' => 4,
                    'preparation_time' => 30,
                    'preparation_instructions' => 'Biskuits tränken, Schichten aufbauen, kühlen.',
                ],
            ],

            'snack' => [
                [
                    'name' => 'Avocado Toast',
                    'punchline' => 'Schnell und lecker',
                    'description' => 'Geröstetes Brot mit Avocado, Zitrone und Chili.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'portion_count' => 1,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Brot toasten, Avocado zerdrücken, anrichten.',
                ],
            ],

            'cocktail' => [
                [
                    'name' => 'Iced Coffee',
                    'punchline' => 'Erfrischender Koffein-Kick',
                    'description' => 'Kalter Kaffee mit Milch und Eiswürfeln.',
                    'difficulty' => 'leicht',
                    'rating' => 3,
                    'portion_count' => 1,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Kaffee brühen, abkühlen lassen, mit Milch servieren.',
                ],
                [
                    'name' => 'Mojito',
                    'punchline' => 'Kubanischer Klassiker',
                    'description' => 'Rum, Limette, Minze und Soda – perfekt für den Sommer.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'portion_count' => 2,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Minze zerdrücken, Limette auspressen, alles mischen.',
                ],
            ],
        ];

        foreach ($recipesByCategory as $slug => $recipes) {
            $category = $categories[$slug] ?? null;

            if (!$category) {
                continue;
            }

            foreach ($recipes as $data) {
                Recipe::create(array_merge($data, [
                    'category_id' => $category->id,
                    'user_id' => rand(1, 5),
                ]));
            }
        }
    }
}
