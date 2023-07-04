<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    // Auth -> VATSIM Connect
    Route::group(['prefix' => 'auth', 'middleware' => 'guest'], function () {
        Route::get('redirect', \App\Http\Controllers\API\v1\Auth\RedirectToVATSIM::class);
        Route::get('callback', \App\Http\Controllers\API\v1\Auth\ComingFromVATSIM::class);
    });

    // Logged-in user only
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::get('user', function (Request $request) {
            return $request->user();
        });
    });
});
