<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Using different syntax for Blade to avoid conflicts with AngularJS.
// You are well-advised to go without any Blade at all.
Blade::setContentTags('<%', '%>'); // For variables and all things Blade.
Blade::setEscapedContentTags('<%%', '%%>'); // For escaped data.

Auth::routes();

Route::get('/home', function () {
    return view('welcome');
})->middleware('auth');



// Route::group(['prefix' => 'api', 
//               'middleware' => ['auth', 'acl'],
//               // 'is' => 'administrator',
//               // 'can' => 'do.something',
//               'protect_alias' => 'api'
//               ], 
// function () {
//     Route::resource('employee', 'EmployeeController');
// });

Route::group(['middleware' => ['auth', 'acl'], 'prefix' => 'api'], function () {
	Route::get('test', "Controller@test");

	Route::get('employee/department_list', "EmployeeController@departmentList");
	Route::get('employee/all', "EmployeeController@index");
	//employee protected routes
	Route::get('/employee', ['uses'=>'EmployeeController@index','can'=>'view.employee']);
	Route::post('/employee', ['uses'=>'EmployeeController@store','can'=>'create.employee']);
	Route::put('/employee/{employee}', ['uses'=>'EmployeeController@update','can'=>'update.employee']);
	Route::get('/employee/{employee}/edit', ['uses'=>'EmployeeController@edit','can'=>'update.employee']);
	Route::delete('/employee/{employee}', ['uses'=>'EmployeeController@destroy','can'=>'delete.employee']);

	//department protected routes
	Route::get('/department', ['uses'=>'DepartmentController@index','can'=>'view.department']);
	Route::post('/department', ['uses'=>'DepartmentController@store','can'=>'create.department']);
	Route::put('/department/{department}', ['uses'=>'DepartmentController@update','can'=>'update.department']);
	Route::get('/department/{department}/edit', ['uses'=>'DepartmentController@edit','can'=>'update.department']);
	Route::delete('/department/{department}', ['uses'=>'DepartmentController@destroy','can'=>'delete.department']);

	//Category protected routes
	Route::get('/category', ['uses'=>'CategoryController@index','can'=>'view.category']);
	Route::post('/category', ['uses'=>'CategoryController@store','can'=>'create.category']);
	Route::put('/category/{category}', ['uses'=>'CategoryController@update','can'=>'update.category']);
	Route::get('/category/{category}/edit', ['uses'=>'CategoryController@edit','can'=>'update.category']);
	Route::delete('/category/{category}', ['uses'=>'CategoryController@destroy','can'=>'delete.category']);

	//Item protected routes
	Route::get('/item', ['uses'=>'ItemController@index','can'=>'view.item']);
	Route::get('/item/category_list', ['uses'=>'ItemController@categoryList','can'=>'view.item']);
	Route::post('/item', ['uses'=>'ItemController@store','can'=>'create.item']);
	Route::put('/item/{item}', ['uses'=>'ItemController@update','can'=>'update.item']);
	Route::get('/item/{item}/edit', ['uses'=>'ItemController@edit','can'=>'update.item']);
	Route::delete('/item/{item}', ['uses'=>'ItemController@destroy','can'=>'delete.item']);

	//Supplier protected routes
	Route::get('/supplier', ['uses'=>'SupplierController@index','can'=>'view.supplier']);
	Route::post('/supplier', ['uses'=>'SupplierController@store','can'=>'create.supplier']);
	Route::put('/supplier/{supplier}', ['uses'=>'SupplierController@update','can'=>'update.supplier']);
	Route::get('/supplier/{supplier}/edit', ['uses'=>'SupplierController@edit','can'=>'update.supplier']);
	Route::delete('/supplier/{supplier}', ['uses'=>'SupplierController@destroy','can'=>'delete.supplier']);
	// Route::resource('employee', 'EmployeeController');
});




