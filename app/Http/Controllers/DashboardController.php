<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Dish;
use App\Models\Ingredient;

use Illuminate\Http\Request;
class DashboardController extends Controller
{
    public function index() {
        $dishCount = Dish::all()->count();
        $ingredientCount = Ingredient::all()->count();
        return Inertia::render('Dashboard', [
            'dishCount' => $dishCount,
            'ingredientCount' => $ingredientCount
        ]);
    }
}
