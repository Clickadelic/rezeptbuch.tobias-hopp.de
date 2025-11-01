<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

use App\Models\Recipe;
use App\Models\Category;
use App\Models\Ingredient;
use App\Models\Media;
use App\Models\User;

class AdminpageController extends Controller
{
    public function index()
    {

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


    }
}
