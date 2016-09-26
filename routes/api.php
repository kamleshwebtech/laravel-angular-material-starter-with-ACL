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

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('test', "Controller@test");

Route::get('employee/department_list', "EmployeeController@departmentList");
Route::get('employee/all', "EmployeeController@index");
Route::resource('employee', 'EmployeeController');



