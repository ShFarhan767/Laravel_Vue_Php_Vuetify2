<?php

namespace App\Http\Controllers\Hotel\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Hotel\Room\HtlRomInformation;
use App\Models\Hotel\Room\HtlRomPricing;
use App\Models\Hotel\Room\HtlRomImage;
use App\Models\Hotel\Room\HtlRoomFacilityMaster;
use App\Models\Hotel\HtlInformation;
use App\Models\Hotel\HtlFacilityMaster;
use App\Models\Hotel\HtlTranslateInformation;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class HtlRomInformationController extends Controller
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
        $data = HtlRomInformation::where('company_id',Auth::user()->shopId)->get();
        return ['data' => $data];
    }

    public function htl_rom_information_list()
    {
        $data = HtlRomInformation::withCount('htl_room_book_info_system')->with('hotel_info','room_type','bed_type')
        ->where('company_id',Auth::user()->shopId)->orderBy('id','DESC')->get();
        return ['data' => $data];
    }
   
        
    public function room_info_by_hotel($id)
    {
         
        $hotel = HtlInformation::with('country','location','property_type','contact')
                                 ->where('id',$id)
                                 ->where('company_id',Auth::user()->shopId)
                                 ->first();
        return ['hotel' => $hotel];
    }
   
        
    public function room_id_by_hotel_info($id)
    {

        $data = HtlRomInformation::with('room_type','bed_type')->where('id',$id)->where('company_id',Auth::user()->shopId)->first();
        $hotel_id = $data->hotel_info_id;

         
        $hotel = HtlInformation::with('country','location','property_type','contact')->where('id',$hotel_id)->where('company_id',Auth::user()->shopId)->first();
         
        $hotel_room_image = HtlRomImage::with('image_title')->where('hotel_info_id',$hotel_id)
                                        ->where('room_id',$id)
                                        ->where('company_id',Auth::user()->shopId)
                                        ->get();

        $htl_translate_list = HtlTranslateInformation::with('language')
                                                          ->where('hotel_info_id',$hotel_id)
                                                          ->orderBy('id','ASC')
                                                          ->get();

        // $meta = HtlMetaInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->first();
        // $policy = HtlPolicyInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->first();
        $facility_ids = HtlRoomFacilityMaster::distinct()->where('room_id',$id)->where('hotel_id',$hotel_id)->where('company_id',Auth::user()->shopId)->get('room_facility_id');
        
        if($facility_ids){
        $selected = array();
        foreach($facility_ids as $facility_id){
            $selected[] = $facility_id['room_facility_id'];
        }
        }else{
            $selected = array();
        }
        
        return [
            'hotel' => $hotel,
            'data' => $data,
            'selected' => $selected,
            'htl_translate_list' => $htl_translate_list,
            'hotel_room_image' => $hotel_room_image,
        ];
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
            'room_title' => 'required',
            'bed_type_id' => 'required',
            ],
            [
            'hotel_id.required' => 'Select Hotel ',
            'room_type_id.required' => 'Enter Room type',
            'room_title.required' => 'Enter Room Title',
            'bed_type_id.required' => 'Enter Bed type',
    ]);

    $room_id = HtlRomInformation::insertGetId([
        'hotel_info_id' => $request->hotel_id, 
        'room_type_id' => $request->room_type_id, 
        'room_title' => $request->room_title, 
        'bed_type_id' => $request->bed_type_id, 
        'room_description' => $request->room_description, 
        'quantity' => $request->quantity,
        'minimum_stay' => $request->minimum_stay, 
        'free_breakfast_status' => $request->free_breakfast_status, 
        'max_adult' => $request->max_adult, 
        're_schedule_status' => $request->re_schedule_status, 
        'max_child' => $request->max_child, 
        'child_age' => $request->child_age, 
        'no_of_extra_bed' => $request->no_of_extra_bed, 
        'extra_bed_payment_status' => $request->extra_bed_payment_status, 
        'extra_bed_charge' => $request->extra_bed_charge, 
        'extra_bed_charge_status' => $request->extra_bed_charge_status, 
        
        'company_id' => Auth::user()->shopId,
        'create_by' => Auth::user()->id,
        'created_at' => Carbon::now(),
        ]);


         foreach($request->facilities as $facility_id){
 
                HtlRoomFacilityMaster::insert([
                    
                    'hotel_id' =>$request->hotel_id,
                    'room_id' =>$room_id,
                    'room_facility_id' => $facility_id,
        
                    'status' => 1,
                    'company_id' => Auth::user()->shopId,
                    'create_by' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);
        
        
        }



        HtlRomPricing::
        where('hotel_info_id',$request->hotel_id)
        ->where('room_type_id',$request->room_type_id)
        ->where('bed_type_id',$request->bed_type_id)
        ->where('company_id',Auth::user()->shopId)
        ->where('create_by',Auth::user()->id)
        ->update([
            'room_id' => $room_id
        ]);

        HtlRomImage::
        where('hotel_info_id',$request->hotel_id)
        ->where('company_id',Auth::user()->shopId)
        ->where('create_by',Auth::user()->id)
        ->update([
            'room_id' => $room_id
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
    // public function update(Request $request, $id)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlRomInformation::where('id', $id)->delete();
    }
    public function DeleteRoomSetup($id)
    {
         $data = HtlRomInformation::findOrFail($id);
         $hotel_id = $data->hotel_info_id;

         HtlRomInformation::where('id',$id)->delete();

         HtlRomImage::where('hotel_info_id',$hotel_id)
                     ->where('room_id',$id)
                     ->delete();

         HtlRoomFacilityMaster::where('hotel_id',$hotel_id)
                                 ->where('room_id',$id)
                                 ->delete();

         HtlRomPricing::where('hotel_info_id',$hotel_id)
                                 ->where('room_id',$id)
                                 ->delete();

        $data->delete();
    }
    public function hotelRoomTranslateInfoDelete($id)
    {
         $data = HtlTranslateInformation::findOrFail($id);
         $data->delete();
    }
    public function hotelRoomImageInfoDelete($id)
    {
         $data = HtlRomImage::findOrFail($id);
         $data->delete();
    }

    public function update(Request $request,$id){
        $data = HtlRomInformation::where('id',$id)->where('company_id',Auth::user()->shopId)->first();
        $hotel_id = $data->hotel_info_id;

        HtlRomInformation::where('id',$id)->where('hotel_info_id',$hotel_id)->update([
        'hotel_info_id' => $request->hotel_id, 
        'room_type_id' => $request->room_type_id, 
        'bed_type_id' => $request->bed_type_id, 
        'room_description' => $request->room_description, 
        'cancellation_policy_id' => $request->cancellation_policy_id, 
        'quantity' => $request->quantity,
        'minimum_stay' => $request->minimum_stay, 
        'free_breakfast_status' => $request->free_breakfast_status, 
        'max_adult' => $request->max_adult, 
        're_schedule_status' => $request->re_schedule_status, 
        'max_child' => $request->max_child, 
        'no_of_extra_bed' => $request->no_of_extra_bed, 
        'extra_bed_payment_status' => $request->extra_bed_payment_status, 
        'extra_bed_charge' => $request->extra_bed_charge, 
        'extra_bed_charge_status' => $request->extra_bed_charge_status, 
        
        'company_id' => Auth::user()->shopId,
        'create_by' => Auth::user()->id,
        'created_at' => Carbon::now(),
        ]);

        if(HtlRoomFacilityMaster::where('room_id',$id)
                                ->where('hotel_id',$hotel_id)
                                ->where('company_id',Auth::user()
                                ->shopId)
                                ->exists()){
            HtlRoomFacilityMaster::where('room_id',$id)
                                   ->where('hotel_id',$hotel_id)
                                   ->where('company_id',Auth::user()
                                   ->shopId)
                                   ->delete();
        }

        foreach($request->facilities as $facility_id){
            HtlRoomFacilityMaster::insert([   
                    'hotel_id' =>$hotel_id,
                    'room_id' =>$id,
                    'room_facility_id' => $facility_id,
                    'status' => 1,
                    'company_id' => Auth::user()->shopId,
                    'create_by' => Auth::user()->id,
                    'created_at' => Carbon::now(),
            ]);
        }

        HtlRomPricing::where('hotel_info_id',$hotel_id)
            ->where('room_type_id',$request->room_type_id)
            ->where('bed_type_id',$request->bed_type_id)
            ->where('company_id',Auth::user()->shopId)
            ->where('create_by',Auth::user()->id)
            ->update([
                'room_id' => $id
        ]);

        HtlRomImage::
        where('hotel_info_id',$hotel_id)
        ->where('company_id',Auth::user()->shopId)
        ->where('create_by',Auth::user()->id)
        ->update([
            'room_id' => $id
        ]);


    }

}
