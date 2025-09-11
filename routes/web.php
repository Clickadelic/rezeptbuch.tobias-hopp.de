<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\DishController;
use App\Http\Controllers\CocktailController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\IngredientController;
use Spatie\Permission\Middleware\RoleMiddleware;
use App\Models\User;

Route::get('/', function () {
    return Inertia::render('Frontpage');
});

Route::get('/admin', function () {
    
    $user = Auth::user();
    $users = User::with('roles')->get();

    return Inertia::render('Admin/Index', [
        'user' => [
            'name' => $user->name,
            'roles' => $user->getRoleNames(),
            'permissions' => $user->getAllPermissions()->pluck('name'),
        ],
        'users' => $users
    ]);
})->middleware(RoleMiddleware::class . ':admin');

Route::prefix('/gerichte')->group(function () {
    Route::get('/', [DishController::class, 'index'])->name('dishes.index');
    Route::get('/neues-gericht', [DishController::class, 'create'])->middleware(['auth', 'verified'])->name('dishes.create');
    Route::post('/', [DishController::class, 'store'])->middleware(['auth', 'verified'])->name('dishes.store');
    Route::get('/{dish}/edit', [DishController::class, 'edit'])->middleware(['auth', 'verified'])->name('dishes.edit');
    Route::put('/{dish}', [DishController::class, 'update'])->middleware(['auth', 'verified'])->name('dishes.update');
    Route::delete('/{dish}', [DishController::class, 'destroy'])->middleware(['auth', 'verified'])->name('dishes.destroy');
    // Route::get('/{dish}', [DishController::class, 'show'])->name('dishes.show');
    Route::get('/{slug}', [DishController::class, 'show'])->name('dishes.show');
});

Route::prefix('/cocktails')->group(function () {
    Route::get('/', [CocktailController::class, 'index'])->name('cocktails.index');
    Route::get('/neuer-cocktail', [CocktailController::class, 'create'])->middleware(['auth', 'verified'])->name('cocktails.create');
    Route::post('/', [CocktailController::class, 'store'])->middleware(['auth', 'verified'])->name('cocktails.store');
    Route::get('/{ingredient}/edit', [CocktailController::class, 'edit'])->middleware(['auth', 'verified'])->name('cocktails.edit');
    Route::put('/{ingredient}', [CocktailController::class, 'update'])->middleware(['auth', 'verified'])->name('cocktails.update');
    Route::delete('/{ingredient}', [CocktailController::class, 'destroy'])->middleware(['auth', 'verified'])->name('cocktails.destroy');
    Route::get('/{ingredient}', [CocktailController::class, 'show'])->name('cocktails.show');
});

Route::prefix('/zutaten')->group(function () {
    Route::get('/', [IngredientController::class, 'index'])->name('ingredients.index');
    Route::get('/neue-zutat', [IngredientController::class, 'create'])->middleware(['auth', 'verified'])->name('ingredients.create');
    Route::post('/', [IngredientController::class, 'store'])->middleware(['auth', 'verified'])->name('ingredients.store');
    Route::get('/{ingredient}/edit', [IngredientController::class, 'edit'])->middleware(['auth', 'verified'])->name('ingredients.edit');
    Route::put('/{ingredient}', [IngredientController::class, 'update'])->middleware(['auth', 'verified'])->name('ingredients.update');
    Route::delete('/{ingredient}', [IngredientController::class, 'destroy'])->middleware(['auth', 'verified'])->name('ingredients.destroy');
    Route::get('/{ingredient}', [IngredientController::class, 'show'])->name('ingredients.show');
});

Route::get('/impressum', function () {
    return Inertia::render('Impressum', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::post('upload', UploadController::class)->middleware(['auth', 'verified'])->name('upload');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
