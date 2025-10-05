<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Zuerst alte Rollen & Berechtigungen bereinigen (optional, nur bei Dev/Seed sinnvoll)
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Permissions anlegen
        Permission::create(['name' => 'edit recipes']);
        Permission::create(['name' => 'delete recipes']);
        Permission::create(['name' => 'publish recipes']);
        Permission::create(['name' => 'unpublish recipes']);

        // Rolle "user" mit Rechten
        $user = Role::create(['name' => 'user']);
        $user->givePermissionTo(['edit recipes', 'publish recipes']);

        // Rolle "admin" mit allen Rechten
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo(Permission::all());
    }
}