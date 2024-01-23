<?php

namespace App\Http\Controllers\Hotel\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\Room\HtlRomBedType;


class HtlRomBedTypeController extends Controller
{
 
    
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = HtlRomBedType::withCount('bed_info')->get();
        return ['data' => $data];
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
        $this->validate(
            $request,
            [
                
                'bed_type_name' => 'required',
                'bed_type_status' => 'required',
            ],
            [
                'bed_type_name.required' => "Enter Bed Type Name.",
                'bed_type_status.required' => "Select Status.",
            ]
        );

        HtlRomBedType::insert([
            'bed_type_name' => $request->bed_type_name,
            'status' => $request->bed_type_status,
            
            'company_id' => Auth::user()->id,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
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
        $bed_type = HtlRomBedType::findOrFail($id);
        return ['bed_type' => $bed_type];
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
        $bed_type = HtlRomBedType::findOrFail($id);
        $bed_type->bed_type_name = $request->bed_type_name;
        $bed_type->status = $request->bed_type_status;
        $bed_type->company_id = Auth::user()->id;
        $bed_type->update_by = Auth::user()->id;
        $bed_type->updated_at = Carbon::now();
        $bed_type->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlRomBedType::where('id',$id)->delete();
    }
}
