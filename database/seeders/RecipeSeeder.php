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
                    'preparation_time' => 15,
                    'preparation_instructions' => 'Brot rösten, Tomaten schneiden, alles anrichten.',
                ],
                [
                    'name' => 'Tomatensuppe',
                    'punchline' => 'Ein wärmender Start in den Abend',
                    'description' => 'Cremige Suppe mit frischen Tomaten und Kräutern.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'preparation_time' => 25,
                    'preparation_instructions' => 'Zwiebeln anschwitzen, Tomaten pürieren, würzen.',
                ],
                [
                    'name' => 'Grüner Spargel mit Speck',
                    'punchline' => 'Nur im Frühling',
                    'description' => 'Super leckerer Spargel mit Speck.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'preparation_time' => 25,
                    'preparation_instructions' => 'Grünen Spargel kurz blanchieren, anschließend in kaltem Wasser kurz abschrecken. Dadurch behält der Spargel seine schöne, grüne Farbe und bleibt knackig.',
                ],
            ],

            'hauptgericht' => [
                [
                    'name' => 'Ramen Suppe',
                    'punchline' => 'Wärmend und herzhaft',
                    'description' => 'Japanische Nudelsuppe mit Brühe, Fleisch und Gemüse.',
                    'difficulty' => 'schwer',
                    'rating' => 5,
                    'preparation_time' => 90,
                    'preparation_instructions' => 'Brühe lange köcheln lassen, Nudeln und Toppings hinzufügen.',
                ],
                [
                    'name' => 'Fischstäbchen mit Kartoffeln, Spinat und Ei',
                    'punchline' => 'Hausmannskost',
                    'description' => 'Kartoffeln und Spinat, Fischstäbchen und Eier.',
                    'difficulty' => 'einfach',
                    'rating' => 4,
                    'preparation_time' => 30,
                    'preparation_instructions' => 'Kartoffeln kochen, Spinat schneiden, Fischstäbchen kochen, Ei dazu - fertig.',
                ],
                [
                    'name' => 'Spaghetti Carbonara',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Pasta mit Speck, Ei und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Pasta kochen, Speck anbraten, Eier-Parmesan-Mix hinzufügen.',
                ],
                [
                    'name' => 'Spaghetti Bolognese',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Pasta mit Bolognese-Sauce und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 45,
                    'preparation_instructions' => 'Hackfleisch scharf anbraten, mit Rotwein ablöschen und weiter köcheln lassen. Dann Milch dazu geben und einkochen.',
                ],
                [
                    'name' => 'Lasagne',
                    'punchline' => 'Klassisch italienisch',
                    'description' => 'Flache Nudeln mit Bolognese-Sauce, Bechamel und Parmesan.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
                    'preparation_time' => 45,
                    'preparation_instructions' => 'Hackfleisch scharf anbraten, mit Rotwein ablöschen und weiter köcheln lassen. Dann Milch dazu geben und einkochen.',
                ],
            ],

            'nachtisch' => [
                [
                    'name' => 'Pancakes',
                    'punchline' => 'Fluffig und süß',
                    'description' => 'Amerikanische Pfannkuchen mit Ahornsirup.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Teig anrühren, ausbacken und servieren.',
                ],
                [
                    'name' => 'Kaiserschmarrn',
                    'punchline' => 'Fluffig und süß',
                    'description' => 'Fluffiger Kaiserschmarrn, mit Ahornsirup.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 20,
                    'preparation_instructions' => 'Teig anrühren, ausbacken und servieren.',
                ],
                [
                    'name' => 'Tiramisu',
                    'punchline' => 'Italienisches Dessert',
                    'description' => 'Schichtdessert mit Mascarpone und Espresso.',
                    'difficulty' => 'mittel',
                    'rating' => 5,
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
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Brot toasten, Avocado zerdrücken, anrichten.',
                ],
                [
                    'name' => 'Feigen im Speckmantel',
                    'punchline' => 'Leckere Vorspeise',
                    'description' => 'Schnell vorbereitet, einfach angerichtet.',
                    'difficulty' => 'leicht',
                    'rating' => 4,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Feigen mit Speck einrollen und im Backofen oder Heißluftofen für 10-15 Minuten backen.',
                ],
            ],

            'cocktail' => [
                [
                    'name' => 'Iced Coffee',
                    'punchline' => 'Erfrischender Koffein-Kick',
                    'description' => 'Kalter Kaffee mit Milch und Eiswürfeln.',
                    'difficulty' => 'leicht',
                    'rating' => 3,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Kaffee brühen, abkühlen lassen, mit Milch servieren.',
                ],
                [
                    'name' => 'Mojito',
                    'punchline' => 'Kubanischer Klassiker',
                    'description' => 'Rum, Limette, Minze und Soda – perfekt für den Sommer.',
                    'difficulty' => 'mittel',
                    'rating' => 4,
                    'preparation_time' => 10,
                    'preparation_instructions' => 'Minze zerdrücken, Limette auspressen, alles mischen.',
                ],
                [
                    'name' => 'Coconut Kiss',
                    'punchline' => 'Alkoholfrei und lecker',
                    'description' => 'Ananassaft, Kokossirup und Sahne, getopped mit einem Schuss Grenadine.',
                    'difficulty' => 'einfach',
                    'rating' => 3,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Alle Zutaten in den Shaker geben und shaken.',
                ],
                [
                    'name' => 'Pina Colada',
                    'punchline' => 'Karibisch und lecker',
                    'description' => 'Brauner Rum, weißter Rum, Ananassaft, Kokossirup und Sahne.',
                    'difficulty' => 'einfach',
                    'rating' => 3,
                    'preparation_time' => 5,
                    'preparation_instructions' => 'Alle Zutaten in den Shaker geben und shaken.',
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
