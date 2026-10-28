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
        $canEditRecipes = Permission::firstOrCreate(['name' => 'can edit recipes', 'guard_name' => 'web']);
        $canDeleteRecipes = Permission::firstOrCreate(['name' => 'can delete recipes', 'guard_name' => 'web']);
        $canPublishRecipes = Permission::firstOrCreate(['name' => 'can publish recipes', 'guard_name' => 'web']);
        $canUnpublishRecipes = Permission::firstOrCreate(['name' => 'can unpublish recipes', 'guard_name' => 'web']);

        // Rolle "user" mit Rechten
        $user = Role::firstOrCreate(['name' => 'user', 'guard_name' => 'web']);
        $user->givePermissionTo([
            $canEditRecipes,
            $canPublishRecipes,
        ]);

        // Rolle "admin" mit allen Rechten
        $admin = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $admin->givePermissionTo(Permission::all());
    }
}