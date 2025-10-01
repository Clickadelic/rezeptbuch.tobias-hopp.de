<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;

class CommunityController extends Controller
{
    public function index() {
        $users = User::all();
        return Inertia::render('Community/Index', [
            'users' => $users
        ]);
    }
}
