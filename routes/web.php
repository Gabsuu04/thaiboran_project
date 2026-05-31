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

Route::get('/{path}', function () {
    return view('app');
})->where('path', '^(?!api).*$');

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
