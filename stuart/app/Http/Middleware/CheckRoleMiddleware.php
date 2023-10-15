<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRoleMiddleware
{
    public function handle(Request $request, Closure $next, string $role)
    {
        $accepted = match ($role) {
            'admin' => auth()->user()->is_admin,
            default => false,
        };

        return $accepted ? $next($request) : abort(403);
    }
}
