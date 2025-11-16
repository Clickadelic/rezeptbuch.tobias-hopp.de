<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Middleware\CheckRole;
use Spatie\Permission\Models\Role;

class AdminpageController extends Controller
{
    public function index()
    {
        $authUser = Auth::user();
        $users = User::with('roles')->get();
        return Inertia::render('Admin/Index', [
            'authUser' => [
                'id' => $authUser->id,
                'name' => $authUser->name,
                'roles' => $authUser->getRoleNames(),
                'permissions' => $authUser->getAllPermissions()->pluck('name'),
            ],
            'users' => $users->map(fn(User $user) => [
                'id' => $user->id,
                'name' => $user->name,
                'avatar' => $user->avatar,
                'email' => $user->email,
                'roles' => $user->getRoleNames(),
                'permissions' => $user->getAllPermissions()->pluck('name'),
            ]),
            'availableRoles' => Role::pluck('name'), // optional für Dropdown
        ]);
    }

    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return back()->withErrors(['message' => 'Du kannst dich nicht selbst löschen.']);
        }

        $user->delete();

        return back()->with('success', 'Benutzer gelöscht.');
    }

    public function updateRole(Request $request, User $user)
    {
        // Erwartet ein Array von Rollen
        $roles = $request->input('roles', []);
        // Alle Rollen synchronisieren
        $user->syncRoles($roles);

        return response()->json(['success' => true]);
    }
}
