<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

use App\Models\User;
use App\Models\ContactSubmission;

class AdminpageController extends Controller
{
    /**
    * Show the admin dashboard.
    *
    * @return \Inertia\Response
    */
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

    /**
    * Destroy a user.
    *
    * @param User $user The user object, containing the user to be destroyed
    *
    * @return \\Illuminate\\Http\\RedirectResponse Redirects back to the admin users view
    */
    public function destroy(User $user)
    {
        if ($user->id === Auth::id()) {
            return back()->withErrors(['message' => 'Du kannst dich nicht selbst löschen.']);
        }

        $user->delete();

        return back()->with('success', 'Benutzer gelöscht.');
    }

    /**
     * Update the roles of a user.
     *
     * @param Request $request The request object, containing the roles to be updated.
     * @param User $user The user object, containing the user to be updated.
     *
     * @return \Illuminate\Http\JsonResponse A JSON response, containing a success flag.
     */
    public function updateRole(Request $request, User $user)
    {
        // Erwartet ein Array von Rollen
        $roles = $request->input('roles', []);

        // Optional: verhindern, dass sich ein Admin selbst die Admin-Rolle entzieht
        if ($user->id === Auth::id() && !in_array('admin', $roles, true)) {
            return response()->json([
                'success' => false,
                'message' => 'Du kannst deine eigene Admin-Rolle nicht entfernen.',
            ], 422);
        }

        // Alle Rollen synchronisieren
        $user->syncRoles($roles);

        return response()->json(['success' => true]);
    }

    /**
     * Return all contact submissions.
     *
     * @param ContactSubmission $request
     * @return \Inertia\Response
     */
    public function contactSubmissions(ContactSubmission $request)
    {
        $contactSubmissions = ContactSubmission::all();
        return Inertia::render('Admin/ContactSubmissions/Index', [
            'contactSubmissions' => $contactSubmissions,
        ]);
    }
}
