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
                    'status' => 'published',
                    'punchline' => 'Italienischer Klassiker',
                    'description' => 'Geröstetes Brot mit Tomaten, Knoblauch und Basilikum und Petersilie.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 15,
                    'preparation_instructions' => 'Brot rösten, Tomaten schneiden, alles anrichten.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Tomatensuppe',
                    'status' => 'published',
                    'punchline' => 'Ein wärmender Start in den Abend',
                    'description' => 'Cremige Suppe mit frischen Tomaten und Kräutern.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'preparation_time' => 25,
                    'preparation_instructions' => 'Zwiebeln anschwitzen, Tomaten pürieren, würzen.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Grüner Spargel mit Speck',
                    'status' => 'published',
                    'punchline' => 'Nur im Frühling',
                    'description' => 'Super leckerer Spargel mit Speck.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'preparation_time' => 25,
                    'preparation_instructions' => 'Grünen Spargel kurz blanchieren, anschließend in kaltem Wasser kurz abschrecken. Dadurch behält der Spargel seine schöne, grüne Farbe und bleibt knackig.',
                    'is_veggy' => false,
                ],
            ],

            'hauptgericht' => [
                [
                    'name' => 'Ramen Suppe',
                    'status' => 'published',
                    'punchline' => 'Wärmend und herzhaft',
                    'description' => 'Japanische Nudelsuppe mit Brühe, Fleisch und Gemüse.',
                    'difficulty' => 'schwer',
                    'rating' => 5,
                    'preparation_time' => 90,
                    'preparation_instructions' => 'Brühe lange köcheln lassen, Nudeln und Toppings hinzufügen.',
                    'is_veggy' => false,
                ],
                [
                    'name' => 'Fischstäbchen mit Kartoffeln, Spinat und Ei',
                    'status' => 'published',
                    'punchline' => 'Hausmannskost',
                    'description' => 'Kartoffeln und Spinat, Fischstäbchen und Eier.',
                    'difficulty' => 'einfach',
                    'rating' => 4,
                    'preparation_time' => 30,
                    'preparation_instructions' => 'Kartoffeln kochen, Spinat schneiden, Fischstäbchen kochen, Ei dazu - fertig.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Spaghetti Carbonara',
                    'status' => 'published',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Pasta mit Speck, Ei und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Pasta kochen, Speck anbraten, Eier-Parmesan-Mix hinzufügen.',
                    'is_veggy' => false,
                ],
                [
                    'name' => 'Spaghetti Bolognese',
                    'status' => 'published',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Pasta mit Bolognese-Sauce und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 45,
                    'preparation_instructions' => 'Hackfleisch scharf anbraten, mit Rotwein ablöschen und weiter köcheln lassen. Dann Milch dazu geben und einkochen.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Lasagne',
                    'status' => 'published',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Flache Nudeln mit Bolognese-Sauce, Bechamel und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 45,
                    'preparation_instructions' => 'Hackfleisch scharf anbraten, mit Rotwein ablöschen und weiter köcheln lassen. Dann Milch dazu geben und einkochen.',
                    'is_veggy' => true,
                ],
            ],

            'nachtisch' => [
                [
                    'name' => 'Pancakes',
                    'status' => 'published',
                    'punchline' => 'Fluffig und süß',
                    'description' => 'Amerikanische Pfannkuchen mit Ahornsirup.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Teig anrühren, ausbacken und servieren.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Kaiserschmarrn',
                    'status' => 'published',
                    'punchline' => 'Fluffig und süß',
                    'description' => 'Fluffiger Kaiserschmarrn, mit Ahornsirup.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Teig anrühren, ausbacken und servieren.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Tiramisu',
                    'status' => 'published',
                    'punchline' => 'Italienisches Dessert',
                    'description' => 'Schichtdessert mit Mascarpone und Espresso.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 30,
                    'preparation_instructions' => 'Biskuits tränken, Schichten aufbauen, kühlen.',
                    'is_veggy' => true,
                ],
            ],

            'snack' => [
                [
                    'name' => 'Avocado Toast',
                    'status' => 'published',
                    'punchline' => 'Schnell und lecker',
                    'description' => 'Geröstetes Brot mit Avocado, Zitrone und Chili.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Brot toasten, Avocado zerdrücken, anrichten.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Feigen im Speckmantel',
                    'status' => 'published',
                    'punchline' => 'Leckere Vorspeise',
                    'description' => 'Schnell vorbereitet, einfach angerichtet.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Feigen mit Speck einrollen und im Backofen oder Heißluftofen für 10-15 Minuten backen.',
                    'is_veggy' => true,
                ],
            ],

            'cocktail' => [
                [
                    'name' => 'Iced Coffee',
                    'status' => 'published',
                    'punchline' => 'Erfrischender Koffein-Kick',
                    'description' => 'Kalter Kaffee mit Milch und Eiswürfeln.',
                    'difficulty' => 'leicht',
                    'rating' => 3,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Kaffee brühen, abkühlen lassen, mit Milch servieren.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Mojito',
                    'status' => 'published',
                    'punchline' => 'Kubanischer Klassiker',
                    'description' => 'Rum, Limette, Minze und Soda – perfekt für den Sommer.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Minze zerdrücken, Limette auspressen, alles mischen.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Coconut Kiss',
                    'status' => 'published',
                    'punchline' => 'Alkoholfrei und lecker',
                    'description' => 'Ananassaft, Kokossirup und Sahne, getopped mit einem Schuss Grenadine.',
                    'difficulty' => 'einfach',
                    'rating' => 3,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Alle Zutaten in den Shaker geben und shaken.',
                    'is_veggy' => true,
                ],
                [
                    'name' => 'Pina Colada',
                    'status' => 'published',
                    'punchline' => 'Karibisch und lecker',
                    'description' => 'Brauner Rum, weißter Rum, Ananassaft, Kokossirup und Sahne.',
                    'difficulty' => 'einfach',
                    'rating' => 3,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Alle Zutaten in den Shaker geben und shaken.',
                    'is_veggy' => true,
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
                    'user_id' => 1,
                ]));
            }
        }
    }
}
