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
        Permission::create(['name' => 'edit articles']);
        Permission::create(['name' => 'delete articles']);
        Permission::create(['name' => 'publish articles']);
        Permission::create(['name' => 'unpublish articles']);

        // Rolle "writer" mit Rechten
        $writer = Role::create(['name' => 'writer']);
        $writer->givePermissionTo(['edit articles', 'publish articles']);

        // Rolle "admin" mit allen Rechten
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo(Permission::all());
    }
}