<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    // Auth -> VATSIM Connect
    Route::group(['prefix' => 'auth', 'middleware' => 'guest'], function () {
        Route::get('redirect', \App\Http\Controllers\API\v1\Auth\RedirectToVATSIM::class);
        Route::get('callback', \App\Http\Controllers\API\v1\Auth\ComingFromVATSIM::class);
    });

    // Logged-in user only
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::group(['prefix' => 'housekeeping', 'middleware' => ['role:admin']], function () {
            Route::apiResource('region', \App\Http\Controllers\API\v1\Housekeeping\RegionController::class);
        });

        // Ticket
        Route::apiResource('tickets', \App\Http\Controllers\API\v1\TicketController::class)
            ->except('destroy');
        Route::post('tickets/{ticket}/comment', \App\Http\Controllers\TicketCommentController::class);
    });
});
