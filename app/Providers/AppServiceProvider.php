<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use App\Models\Dish;

use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Http\Request;
use Illuminate\Cache\RateLimiting\Limit;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureRateLimiter();

        Vite::prefetch(concurrency: 3);
            Inertia::share([
            // 'dishes' => function () {
            //     return Dish::all();
            // }
            // weitere globale Daten hier...
        ]);
    }

    public function configureRateLimiter():void {
        RateLimiter::for('login', function(Request $request) {
            $key = $request->email.$request->ip(); // emailadresse+ip
            
            // nur 3 Anfragen pro Minute mit der selben Email+Ip erlaubt
            return Limit::perMinute(3)->by($key)->response(function() {
                // return response("Zu viele Versuche!"); // Zeigt einfach nur Text
                return response()->view('auth.max-try');
            });

        });
    }
}
