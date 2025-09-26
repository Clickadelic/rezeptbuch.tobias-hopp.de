<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Vorspeise',
            'Hauptgang',
            'Nachtisch',
            'Cocktail',
            'Aperitif',
            'Snack',
            'Frühstück'
        ];

        foreach ($categories as $name) {
            Category::firstOrCreate([
                'name' => $name,
                'slug' => Str::slug($name),
            ]);
        }
    }
}
