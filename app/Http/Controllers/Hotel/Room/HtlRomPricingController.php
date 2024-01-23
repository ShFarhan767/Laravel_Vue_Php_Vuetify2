<?php

namespace App\Http\Controllers\Hotel\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Hotel\Room\HtlRomPricing;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class HtlRomPricingController extends Controller
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
        $data = HtlRomPricing::where('company_id',Auth::user()->shopId)->get();
        return ['data' => $data];
    }


    public function room_price_list($hId,$rtId,$btId)
    {
        $data = HtlRomPricing::
        with('price_type')
        ->where('hotel_info_id',$hId)
        ->where('room_id',0)
        ->where('room_type_id',$rtId)
        ->where('bed_type_id',$btId)
        ->where('company_id',Auth::user()->shopId)
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
        
    $this->validate($request, [
        'hotel_id' => 'required',
        'room_type_id' => 'required',
        'bed_type_id' => 'required',
        'day_price_type_id' => 'required',
        'agent_price' => 'required',
        'vendor_price' => 'required',
        'customer_price' => 'required',
        'showing_price' => 'required',
        ],
        [
        'hotel_id.required' => 'Select Hotel ',
        'room_type_id.required' => 'Select Room type',
        'bed_type_id.required' => 'Select Bed type',
        'day_price_type_id.required' => 'Select Day price type',
        'agent_price.required' => 'Enter Agent price',
        'vendor_price.required' => 'Enter Vendor price',
        'customer_price.required' => 'Enter Customer price',
        'showing_price.required' => 'Enter Showing price',
]);


        HtlRomPricing::insertGetId([
        'hotel_info_id' => $request->hotel_id, 
        'room_id' => 0, 
        'room_type_id' => $request->room_type_id, 
        'bed_type_id' => $request->bed_type_id, 
        'day_price_type_id' => $request->day_price_type_id, 
        'fixed_date_from' => $request->fixedDateFrom, 
        'fixed_date_to' => $request->fixedDateTo, 
        'agent_price' => $request->agent_price, 
        'vendor_price' => $request->vendor_price, 
        'customer_price' => $request->customer_price, 
        'showing_price' => $request->showing_price, 
        'currency_id' => 0, 

        'company_id' => Auth::user()->shopId,
        'create_by' => Auth::User()->id,
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlRomPricing::where('id', $id)->delete();
    }
}
