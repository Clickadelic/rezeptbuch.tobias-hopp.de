<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UploadController;
use App\Models\User;
use App\Http\Middleware\CheckRole;

Route::get('/admin', function () {
    $user = Auth::user();
    $users = User::with('roles')->get();

    return Inertia::render('Admin/Index', [
        'user' => [
            'name' => $user->name,
            'roles' => $user->getRoleNames(),
            'permissions' => $user->getAllPermissions()->pluck('name'),
        ],
        'users' => $users->map(fn($u) => [
            'id' => $u->id,
            'name' => $u->name,
            'avatar' => $u->avatar,
            'email' => $u->email,
            'roles' => $u->getRoleNames(),
        ]),
    ]);
})->middleware([CheckRole::class . ':admin']);