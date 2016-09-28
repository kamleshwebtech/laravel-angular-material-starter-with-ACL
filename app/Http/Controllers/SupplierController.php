<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\Supplier;

class SupplierController extends Controller
{
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

        $this->middleware('auth');
    }
    /**
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user  = Auth::user();

        $data = Supplier::where('is_active', 1)->get();

        //response all permission to show hide accrodingly
        $permission = $user->getPermissions(); 
        if ($data->count() > 0) {
            $res = ['status' => true, 'message' => $this->dataFound, 'data' => $data, 'permission' => $permission['supplier']]; 
        } else {
            $res = ['status' => true, 'message' => $this->dataNotFound, 'data' => null, 'permission' => $permission['supplier']]; 
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
            'name' => 'required',
            'is_active' => 'required',
        ]);

        $req = $request->all();

        $data = new Supplier; 
        $data->name = $req['name']; 
        $data->address = (isset($req['address']) ? $req['address'] : null); 
        $data->contact = (isset($req['contact']) ? $req['contact'] : null); 
        $data->is_active = $req['is_active']; 

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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Supplier::where('is_active', 1)->find($id); 
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
            'name' => 'required',
            'is_active' => 'required',
        ]);

        $req = $request->all();

        $data = Supplier::where('is_active', 1)->find($id); 
        $data->name = $req['name']; 
        $data->address = (isset($req['address']) ? $req['address'] : null); 
        $data->contact = (isset($req['contact']) ? $req['contact'] : null); 
        $data->is_active = $req['is_active']; 

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
        //check there any employee belogns to that Supplier 
        $emp  = Employee::where(['Supplier_id' => $id, 'is_active' => 1])->first(); 
        if ($emp === null) {
            $data = Supplier::find($id); 

            if ($data->delete()) {
                $res = ['status' => true, 'message' => $this->dataDeleted]; 
            } else {
                $res = ['status' => true, 'message' => $this->dataDeleteFail]; 
            }
        } else {
            $res = ['status' => false, 'message' => "You can't delete this Supplier"]; 
        }
        return $res; 
    }
}
