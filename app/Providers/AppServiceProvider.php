<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

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
    }

    public function configureRateLimiter():void {
        RateLimiter::for('login', function(Request $request) {
            $key = $request->email.$request->ip(); // emailadresse+ip
            return Limit::perMinute(3)->by($key)->response(function() {
                // return response("Zu viele Versuche!"); // Zeigt einfach nur Text
                return response()->view('auth.max-try');
            });

        });
    }
}
