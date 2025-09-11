<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Rollen sicherstellen
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'writer']);

        // Admin User
        $admin = User::firstOrCreate(
            ['email' => 'click@clickadelic.de'],
            [
                'name' => 'Clickadelic',
                'password' => Hash::make('password'),
            ]
        );
        $admin->assignRole('admin');

        // Writer User
        $writer = User::firstOrCreate(
            ['email' => 'johndough@example.com'],
            [
                'name' => 'John Dough',
                'password' => Hash::make('password'), // Bitte anpassen 
            ]
        );
        $writer->assignRole('writer');
    }
}