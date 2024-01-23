<?php

namespace App\Http\Controllers\Hotel\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\Room\HtlRomType;
use App\ProductCategory;
use App\HomeCategory;


class HtlRomTypeController extends Controller
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
        $data = HtlRomType::withCount('room_info')->get();
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
                
                'room_type_name' => 'required',
                'roomTypeStatus' => 'required',
            ],
            [
                'room_type_name.required' => "Enter Room Type Name.",
                'roomTypeStatus.required' => "Select Status.",
            ]
        );

        HtlRomType::insert([
            'room_type_name' => $request->room_type_name,
            'status' => $request->roomTypeStatus,
            
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
        $room_type = HtlRomType::findOrFail($id);
        return ['room_type' => $room_type];
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
        $room_type = HtlRomType::findOrFail($id);
        $room_type->room_type_name = $request->room_type_name;
        $room_type->status = $request->roomTypeStatus;
        $room_type->company_id = Auth::user()->id;
        $room_type->update_by = Auth::user()->id;
        $room_type->updated_at = Carbon::now();
        $room_type->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlRomType::where('id',$id)->delete();
    }
}
