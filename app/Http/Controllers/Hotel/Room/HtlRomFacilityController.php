<?php

namespace App\Http\Controllers\Hotel\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\Room\HtlRomFacility;

class HtlRomFacilityController extends Controller
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
        $data = HtlRomFacility::with('facility_type')->withCount('htl_room_facility')->get();
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
                'room_facility_type_id' => 'required',
                'room_facility_name' => 'required',
                'room_facility_position' => 'required',
                'room_facility_status' => 'required',
            ],
            [
                'room_facility_type_id.required' => "Select Room Facility Type.",
                'room_facility_name.required' => "Enter Room Facility Name.",
                'room_facility_position.required' => "Enter Position.",
                'room_facility_status.required' => "Select Status.",
            ]
        );

        HtlRomFacility::insert([
            'room_facility_type_id' => $request->room_facility_type_id,
            'room_facility_name' => $request->room_facility_name,
            'position' => $request->room_facility_position,
            'status' => $request->room_facility_status,
            
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
        $room_facility = HtlRomFacility::findOrFail($id);
        return ['room_facility' => $room_facility];
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
        $room_facility = HtlRomFacility::findOrFail($id);
        $room_facility->room_facility_type_id = $request->room_facility_type_id;
        $room_facility->room_facility_name = $request->room_facility_name;
        $room_facility->position = $request->room_facility_position;
        $room_facility->status = $request->room_facility_status;
        $room_facility->company_id = Auth::user()->id;
        $room_facility->update_by = Auth::user()->id;
        $room_facility->updated_at = Carbon::now();
        $room_facility->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlRomFacility::where('id',$id)->delete();
    }
}
