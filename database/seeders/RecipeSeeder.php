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
            'category_id' => 'f5993d22-8182-4a26-9e25-89f096f3aae4',
            'rating' => 3,
            'preparation_time' => 20,
            'preparation_instructions' => 'Nudeln al dente kochen und abtropfen lassen. Eier zusammen mit dem geriebenen Parmesan und Sahne in einer Schüssel mischen. Das Eiweiß vorher trennen. Speck anbraten und abtupfen, dann in die Mischung geben. Anschließend die Nudeln untermengen und servieren.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Rinderbraten',
            'punchline' => 'Wie bei Mutti',
            'description' => 'Saftiger Braten mit kräftiger Sauce, perfekt für Sonntage.',
            'difficulty' => 'schwer',
            'category_id' => 'f5993d22-8182-4a26-9e25-89f096f3aae4',
            'rating' => 4,
            'preparation_time' => 180,
            'preparation_instructions' => 'Fleisch anbraten, Gemüse hinzufügen, mit Brühe ablöschen und mehrere Stunden schmoren lassen. Am Ende Sauce abschmecken.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Caesar Salad',
            'punchline' => 'mit Huhn, Croutons und Caesar-Dressing',
            'description' => 'Frischer Salat mit Huhn, Croutons und cremigem Caesar-Dressing.',
            'difficulty' => 'mittel',
            'category_id' => 'f5993d22-8182-4a26-9e25-89f096f3aae4',
            'rating' => 4,
            'preparation_time' => 15,
            'preparation_instructions' => 'Salat waschen und abtropfen lassen. Huhn in Stücke schneiden und anbraten. Croutons rösten. Dressing aus Knoblauch, Öl, Eigelb, Parmesan und Zitrone mischen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Nudeln mit Paniermehl und Ei',
            'punchline' => 'Wenn es schnell gehen muss',
            'description' => 'Schnelles und einfaches Gericht für den kleinen Hunger.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 15,
            'preparation_instructions' => 'Nudeln kochen. Paniermehl in Butter anrösten und Nudeln darin schwenken. Mit Ei ergänzen und sofort servieren.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Wan-Tan-Suppe',
            'punchline' => 'Asiatische Suppe',
            'description' => 'Leichte asiatische Suppe mit Wan-Tans, perfekt als Vorspeise.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 20,
            'preparation_instructions' => 'Wan-Tans in Brühe garen, Gemüse hinzufügen und mit Sojasauce abschmecken.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Pizza Margherita',
            'punchline' => 'Klassiker aus Italien',
            'description' => 'Einfacher Pizza-Klassiker mit Tomaten, Mozzarella und Basilikum.',
            'difficulty' => 'mittel',
            'rating' => 5,
            'preparation_time' => 30,
            'preparation_instructions' => 'Teig vorbereiten, gehen lassen. Tomatensauce auftragen, mit Mozzarella und Basilikum belegen und im Ofen backen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Hühnerfrikassee',
            'punchline' => 'Deutscher Klassiker',
            'description' => 'Zartes Hühnerfleisch in cremiger Sauce, perfekt zu Reis.',
            'difficulty' => 'mittel',
            'rating' => 5,
            'preparation_time' => 45,
            'preparation_instructions' => 'Huhn kochen, Fleisch zerkleinern, Sauce mit Butter, Mehl und Brühe zubereiten, abschmecken und servieren.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Gemüse-Curry',
            'punchline' => 'Vegan und lecker',
            'description' => 'Herzhaftes Curry mit viel frischem Gemüse und Kokosmilch.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 25,
            'preparation_instructions' => 'Gemüse anbraten, mit Kokosmilch und Currypaste ablöschen, köcheln lassen und abschmecken.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Gulasch',
            'punchline' => 'Kräftig und deftig',
            'description' => 'Ungarischer Eintopfklassiker mit Paprika und Rindfleisch.',
            'difficulty' => 'schwer',
            'rating' => 5,
            'preparation_time' => 150,
            'preparation_instructions' => 'Fleisch anbraten, Zwiebeln und Paprika hinzufügen, lange schmoren lassen und kräftig würzen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Lasagne Bolognese',
            'punchline' => 'Mit viel Käse',
            'description' => 'Italienischer Klassiker mit Bolognese, Bechamelsauce und Käse.',
            'difficulty' => 'mittel',
            'rating' => 5,
            'preparation_time' => 60,
            'preparation_instructions' => 'Bolognese und Bechamelsauce vorbereiten, Schichten abwechselnd in eine Form geben und im Ofen backen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Kaiserschmarrn',
            'punchline' => 'Süßspeise aus Österreich',
            'description' => 'Fluffiger Pfannkuchen, in Stücke gezupft und karamellisiert.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 20,
            'preparation_instructions' => 'Teig zubereiten, in Pfanne backen, in Stücke reißen und karamellisieren.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Tomatensuppe',
            'punchline' => 'Frisch und leicht',
            'description' => 'Klassische Suppe aus frischen Tomaten.',
            'difficulty' => 'einfach',
            'rating' => 3,
            'preparation_time' => 20,
            'preparation_instructions' => 'Tomaten kochen, pürieren, würzen und mit Sahne verfeinern.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Sushi Rollen',
            'punchline' => 'Japanische Delikatesse',
            'description' => 'Hausgemachte Sushi Rollen mit Lachs, Gurke und Avocado.',
            'difficulty' => 'schwer',
            'rating' => 5,
            'preparation_time' => 50,
            'preparation_instructions' => 'Reis kochen und würzen. Algenblätter mit Reis und Füllung belegen, fest rollen und schneiden.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Ratatouille',
            'punchline' => 'Französischer Klassiker',
            'description' => 'Gemüsegericht aus der Provence, gesund und aromatisch.',
            'difficulty' => 'mittel',
            'rating' => 4,
            'preparation_time' => 40,
            'preparation_instructions' => 'Gemüse in Scheiben schneiden, schichten, würzen und im Ofen garen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Pfannkuchen',
            'punchline' => 'Süß oder herzhaft',
            'description' => 'Vielseitiger Klassiker, der süß oder herzhaft zubereitet werden kann.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 15,
            'preparation_instructions' => 'Teig aus Mehl, Milch und Eiern zubereiten, in Pfanne goldbraun ausbacken.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Tiramisu',
            'punchline' => 'Italienisches Dessert',
            'description' => 'Kaffeegetränkter Löffelbiskuit mit Mascarponecreme.',
            'difficulty' => 'mittel',
            'rating' => 5,
            'preparation_time' => 25,
            'preparation_instructions' => 'Biskuit in Kaffee tauchen, Mascarponecreme schichten, kaltstellen und vor dem Servieren mit Kakao bestreuen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Griechischer Salat',
            'punchline' => 'Frisch und gesund',
            'description' => 'Frischer Salat mit Feta, Oliven und knackigem Gemüse.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 10,
            'preparation_instructions' => 'Gemüse schneiden, mit Oliven, Feta und Dressing vermengen.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Pizza Diavolo',
            'punchline' => 'Feurig scharfe Pizza',
            'description' => 'Wer gerne feurig scharf ist, sollte diese Pizza probieren.',
            'difficulty' => 'einfach',
            'rating' => 4,
            'preparation_time' => 45,
            'preparation_instructions' => 'Teig zubereiten und in der Pfanne vorbacken, danach die Pizza belegen und im Ofen ausbacken.',
            'user_id' => 1,
        ]);

        Recipe::create([
            'name' => 'Ramen Suppe',
            'punchline' => 'Wärmend und herzhaft',
            'description' => 'Japanische Nudelsuppe mit Brühe, Fleisch und Gemüse.',
            'difficulty' => 'schwer',
            'rating' => 5,
            'preparation_time' => 90,
            'preparation_instructions' => 'Brühe lange köcheln lassen, Nudeln und Toppings hinzufügen und heiß servieren.',
            'user_id' => 1,
        ]);
    }
}
