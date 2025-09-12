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
    public function handle(Request $request, Closure $next, $role)
    {   
        /** @var User $user */
        $user = Auth::user();

        if (!$user || !$user->hasRole($role)) {
            // Inertia-Seite für unautorisierte Benutzer
            return Inertia::render('NotAuthorized');
        }

        return $next($request);
    }
}
