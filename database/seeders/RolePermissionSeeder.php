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

        // Permissions anlegen (sprechende Namen a la "can ...")
        $canEditRecipes = Permission::create(['name' => 'can edit recipes']);
        $canDeleteRecipes = Permission::create(['name' => 'can delete recipes']);
        $canPublishRecipes = Permission::create(['name' => 'can publish recipes']);
        $canUnpublishRecipes = Permission::create(['name' => 'can unpublish recipes']);

        // Rolle "user" mit Rechten
        $user = Role::create(['name' => 'user']);
        $user->givePermissionTo([
            $canEditRecipes,
            $canPublishRecipes,
        ]);

        // Rolle "admin" mit allen Rechten
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo(Permission::all());
    }
}