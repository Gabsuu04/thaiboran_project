<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('app');
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('api')->group(function () {
    Route::post('/bookings', 'App\Http\Controllers\BookingController@store');
    Route::get('/services', 'App\Http\Controllers\ServiceController@index');
    Route::post('/contact', 'App\Http\Controllers\ContactController@send');
});
