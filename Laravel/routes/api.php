<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/meme','MemeController@index'):
Route::get('/mene/{id}','MemeController@show');
Route::post('/meme','MemeController@store');
Route::put('meme/{id}','MemeController@update');
Route::delete('\meme/{id}','MemeController@destroy');
