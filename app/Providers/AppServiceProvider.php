<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Http\Request;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\Auth;

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

        // Vite::prefetch(concurrency: 3);
        //     Inertia::share([
        //     // 'auth' => function () {
        //     //     $user = Auth::user();
        //     //     return [
        //     //         'user' => $user,
        //     //     ];
        //     // },
        // ]);
    }

    /**
     * Configure the rate limiter for the login route.
     *
     * This rate limiter limits the number of login attempts to 3 per minute.
     * It uses the email address and IP address as the key for the rate limiter.
     * If the rate limit is exceeded, it will return a response with a view 'auth.max-try'.
     */
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
