<?php

namespace App\Http\Controllers;

use User;

use App\Models\Department;

use App\Models\Employee;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//use App\Department; 

class EmployeeController extends Controller
{
	/**
     * Instantiate a new new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
     	$this->dataFound = "data found"; 
        $this->dataNotFound = "data not found"; 
        $this->dataUpdated = "data updated successfully"; 
        $this->dataUpdateFail = "unable to update data"; 
        $this->dataInserted = "data inserted successfully"; 
     	$this->dataInsertFail = "unable to insert data"; 
        $this->dataDeleted = "data deleted successfully"; 
        $this->dataDeleteFail = "unable to delete data"; 

        $this->user_id = 1; 
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //check is priviliged to see all data. 
    	$data = Employee::where('is_active', 1)->get();

    	if ($data->count() > 0) {
    		$res = ['status' => true, 'message' => $this->dataFound, 'data' => $data]; 
    	} else {
    		$res = ['status' => true, 'message' => $this->dataNotFound, 'data' => null]; 
    	}
    	return $res; 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'employee_id' => 'required|unique:employees,employee_id|max:5',
            'name' => 'required',
            'designation' => 'required',
            'department_id' => 'required',
            'is_active' => 'required',
        ]);

        $req = $request->all();

        $data = new Employee; 
        $data->employee_id = $req['employee_id']; 
        $data->name = $req['name']; 
        $data->designation = $req['designation']; 
        $data->department_id = $req['department_id']; 
        $data->is_active = $req['is_active']; 

        $data->created_by = $this->user_id; 
        $data->save(); 

        if ($data) {
            $res = ['status' => true, 'message' => $this->dataInserted]; 
        } else {
            $res = ['status' => true, 'message' => $this->dataInsertFail]; 
        }
        return $res; 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Employee::where('is_active', 1)->find($id); 
        if ($data->count() > 0) {
            $res = ['status' => true, 'message' => $this->dataFound, 'data' => $data]; 
        } else {
            $res = ['status' => true, 'message' => $this->dataNotFound, 'data' => null]; 
        }
        return $res; 

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'employee_id' => 'required|unique:employees,employee_id,' . $id . '|max:5',
            'name' => 'required',
            'designation' => 'required',
            'department_id' => 'required',
            'is_active' => 'required',
        ]);

        $req = $request->all();

        $data = Employee::where('is_active', 1)->find($id); 
        $data->employee_id = $req['employee_id']; 
        $data->name = $req['name']; 
        $data->designation = $req['designation']; 
        $data->department_id = $req['department_id']; 
        $data->is_active = $req['is_active']; 

        $data->created_by = $this->user_id; 
        $data->save(); 

        if ($data) {
            $res = ['status' => true, 'message' => $this->dataUpdated]; 
        } else {
            $res = ['status' => true, 'message' => $this->dataUpdateFail]; 
        }
        return $res; 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Employee::find($id); 

        if ($data->delete()) {
            $res = ['status' => true, 'message' => $this->dataDeleted]; 
        } else {
            $res = ['status' => true, 'message' => $this->dataDeleteFail]; 
        }
        return $res; 
    }
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function departmentList()
    {
    	$data = Department::where('is_active', 1)->get(); 
    	if ($data->count() > 0) {
    		$res = ['status' => true, 'message' => $this->dataFound, 'data' => $data]; 
    	} else {
    		$res = ['status' => true, 'message' => $this->dataNotFound, 'data' => null]; 
    	}
    	return $res; 
    }

}
