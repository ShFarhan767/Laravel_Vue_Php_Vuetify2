<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlFacility;

class HtlFacilityController extends Controller
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
        $data = HtlFacility::where('company_id',Auth::user()->shopId)
                             ->with('facility_type')
                             ->withCount('facility_info')
                             ->get();
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
                
                'facility_type_id' => 'required',
                'facility_name' => 'required',
                'position' => 'required',
                'hotel_facility_status' => 'required',
            ],
            [
                'facility_type_id.required' => "Select Facility Type.",
                'facility_name.required' => "Enter Facility Name.",
                'position.required' => "Enter Position.",
                'hotel_facility_status.required' => "Select Status.",
            ]
        );

        HtlFacility::insert([
            'facility_type_id' => $request->facility_type_id,
            'facility_name' => $request->facility_name,
            'position' => $request->position,
            'status' => $request->hotel_facility_status,
            
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
        // $hotel_facility = HtlFacility::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $hotel_facility = HtlFacility::findOrFail($id);
        return ['hotel_facility' => $hotel_facility];
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
        $hotel_facility = HtlFacility::findOrFail($id);
        $hotel_facility->facility_type_id = $request->facility_type_id;
        $hotel_facility->facility_name = $request->facility_name;
        $hotel_facility->position = $request->position;
        $hotel_facility->status = $request->hotel_facility_status;
        $hotel_facility->company_id = Auth::user()->id;
        $hotel_facility->update_by = Auth::user()->id;
        $hotel_facility->updated_at = Carbon::now();
        $hotel_facility->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlFacility::where('id',$id)->delete();
    }
}
