<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\User;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $roles)
    {   
        /** @var User $user */
        $user = Auth::user();

        if (!$user) {
            return Inertia::render('NotAuthorized');
        }

        // Mehrere Rollen aus Parameter parsen
        $rolesArray = explode(',', $roles);

        // Prüfen, ob der Benutzer eine der Rollen hat
        foreach ($rolesArray as $role) {
            if ($user->hasRole(trim($role))) {
                return $next($request);
            }
        }

        return Inertia::render('NotAuthorized');
    }

}
