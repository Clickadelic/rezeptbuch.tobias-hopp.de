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
        // Role::firstOrCreate(['name' => 'admin']);
        // Role::firstOrCreate(['name' => 'user']);

        // Admin User
        $admin = User::firstOrCreate(
            ['email' => 'click@clickadelic.de'],
            [
                'name' => 'Clickadelic',
                'password' => Hash::make('forello204$'),
            ]
        );
        $admin->assignRole('admin');

        // user User
        $user = User::firstOrCreate(
            ['email' => 'johndough@example.com'],
            [
                'name' => 'John Dough',
                'password' => Hash::make('johndough'), // Bitte anpassen 
            ]
        );
        $user->assignRole('user');

        $user = User::firstOrCreate(
            ['email' => 'toby.hopp+batman@gmail.com'],
            [
                'name' => 'Batman',
                'password' => Hash::make('batman'), // Bitte anpassen 
            ]
        );
        $user->assignRole('user');

        $user = User::firstOrCreate(
            ['email' => 'toby.hopp+joker@gmail.com'],
            [
                'name' => 'Joker',
                'password' => Hash::make('joker'), // Bitte anpassen 
            ]
        );
        $user->assignRole('user');

        $user = User::firstOrCreate(
            ['email' => 'toby.hopp+pinguin@gmail.com'],
            [
                'name' => 'Pinguin',
                'password' => Hash::make('pinguin'), // Bitte anpassen 
            ]
        );
        $user->assignRole('user');
        
        
    }
}