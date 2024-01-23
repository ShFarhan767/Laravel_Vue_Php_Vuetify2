<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlInformation;
use App\Models\Hotel\HtlMetaInformation;
use App\Models\Hotel\HtlPolicyInformation;
use App\Models\Hotel\HtlPolicyExtraInformation;
use App\Models\Hotel\HtlBankInfo;
use App\Models\Hotel\HtlImage;
use App\Models\Hotel\HtlContactType;
use App\Models\Hotel\HtlContactPositionType;
use App\Models\Hotel\HtlContactInformation;
use App\Models\Hotel\HtlTranslateInformation;
use App\Models\Hotel\HtlFacilityMaster;
use App\Models\Hotel\HtlRomTranslateInformation;
use App\Models\Hotel\Room\HtlRomInformation;
use App\Country;


class HtlNameEnteryController extends Controller
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
        $data = HtlInformation::with('country','location','property_type')->get();
        return ['data' => $data];
    }
    
    public function hotel_list()
    {
        $data = HtlInformation::where('company_id',Auth::user()->shopId)->get();
        return ['data' => $data];
    }
    
    public function codeGenerate($id)
    {
        if(HtlInformation::where('company_id',Auth::user()->shopId)->exists()){
        $sl_id = HtlInformation::where('company_id',Auth::user()->shopId)->orderBy('hotel_code_serial_no','DESC')->first()->hotel_code_serial_no;
        }
        else{
            $sl_id = 0;
        }
        $sl_id++;
        $sl_id = sprintf('%04d',$sl_id);

            $year = date('y');
            $code = 'SHH09'.$year.$sl_id;
        
        return [
            'data' => $code,
            'sl' => $sl_id
        ];
    }
    
    public function hotel_info_by_id($id)
    {
        $data = HtlInformation::where('id',$id)->with('country','location','property_type')->where('company_id',Auth::user()->shopId)->first();
        $meta = HtlMetaInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->first();
        $policy = HtlPolicyInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->first();
        $facility_ids = HtlFacilityMaster::distinct()->where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->get('facility_id');
        
        if($facility_ids){
        $selected = array();
        foreach($facility_ids as $facility_id){
            $selected[] = $facility_id['facility_id'];
        }
        }else{
            $selected = array();
        }
        
        return [
            'data' => $data,
            'meta' => $meta,
            'policy' => $policy,
            'selected' => $selected,
        ];
    }
    
    public function hotel_info_list()
    {
        $data = HtlInformation::withCount('htl_room_info')->with('country','location','property_type','contact')
        ->where('company_id',Auth::user()->shopId)->orderBy('id','DESC')->get();
       
        
        return [
            'data' => $data
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
        $this->validate(
            $request,
            [
                
                'country_id' => 'required',
                'location_id' => 'required',
                'hotel_code' => 'required',
                'hotel_name' => 'required',
                'property_type_id' => 'required',
                'location_map_url' => 'required',
                'status' => 'required',
            ],
            [
                'country_id.required' => "Select Country.",
                'location_id.required' => "Select Location.",
                'hotel_code.required' => "Enter Hotel Code.",
                'hotel_name.required' => "Enter Hotel Name.",
                'property_type_id.required' => "Select Property Type.",
                'location_map_url.required' => "Enter Map Location.",
                'status.required' => "Select Status.",
            ]
        );

        HtlInformation::insert([
            'country_id' => $request->country_id,
            'location_id' => $request->location_id,
            'hotel_code' => $request->hotel_code,
            'hotel_name' => $request->hotel_name,
            'property_type_id' => $request->property_type_id,
            'location_map_url' => $request->location_map_url,
            'status' => $request->status,
            
            'company_id' => Auth::user()->id,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

          HtlPolicyInformation::insert([
            'hotel_info_id' => $id,
            'check_in_time' => $request->check_in_time,
            'check_out_time' => $request->check_out_time,
            'payment_method_id' => $request->payment_method_id,
            'policy_terms' => $request->policy_terms,
            'position' => $request->position,
            'status' => 1,
            'company_id' => Auth::user()->shopId,
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


     public function hotelInfoInsert(Request $request)
    {
        $this->validate(
            $request,
            [
                'hotel_id' => 'required',
            ],
            [
                'hotel_id.required' => "Select Hotel.",
            ]
        );
        
  
            $id = HtlInformation::insertGetId([
                'hotel_code_serial_no' => $request->hotel_code_sl_no,
                'hotel_code' => $request->hotel_code,
                'hotel_name' => $request->hotel_name,
                'property_type_id' => $request->property_type_id,
                'location_map_url' => $request->google_map_link,
                'street_address' => $request->street_address,
                'post_code' => $request->post_code,
                'country_id' => $request->countryId,
                'star' => $request->star,
                'commission_type' => $request->commission_type,
                'commission_amount' => $request->commission_amount,
                'vat_type' => $request->vat_type,
                'vat_amount' => $request->vat_amount,
                'related_hotel' => $request->related_hotel,
                'status' => 1,
                 
                'company_id' => Auth::user()->shopId,
                'create_by' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]); 
       

        
        foreach($request->facilities as $facility_id){
 
                HtlFacilityMaster::insert([
                    
                    'hotel_info_id' => $id,
                    'facility_id' => $facility_id,
        
                    'status' => 1,
                    'company_id' => Auth::user()->shopId,
                    'create_by' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);
        
        
        }

 
        HtlMetaInformation::insert([
            'hotel_info_id' => $id,

            'meta_title' => $request->meta_title,
            'meta_keyword' => $request->meta_keyword,
            'meta_description' => $request->meta_description,

            'status' => 1,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);


    
 

        HtlPolicyInformation::insert([
            'hotel_info_id' => $id,
            'check_in_time' => $request->check_in_time,
            'check_out_time' => $request->check_out_time,
            'payment_method_id' => $request->payment_method_id,
            'policy_terms' => $request->policy_terms,
            'position' => $request->position,
            'status' => 1,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);



        
        HtlPolicyExtraInformation::where('hotel_info_id',0)->where('company_id',Auth::user()->shopId)->update([
            'hotel_info_id' => $id,
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);

        
        HtlTranslateInformation::where('hotel_info_id',0)->where('company_id',Auth::user()->shopId)->update([
            'hotel_info_id' => $id,
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
     
        HtlContactInformation::where('hotel_info_id',0)->where('company_id',Auth::user()->shopId)->update([
            'hotel_info_id' => $id,
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
     
        HtlBankInfo::where('hotel_info_id',0)->where('company_id',Auth::user()->shopId)->update([
            'hotel_info_id' => $id,
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
        HtlImage::where('hotel_info_id',0)->where('company_id',Auth::user()->shopId)->update([
            'hotel_info_id' => $id,
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);

       
     


    }


    public function hotelInfoUpdate(Request $request, $id)
    {
        $this->validate(
            $request,
            [
                'hotel_id' => 'required',
            ],
            [
                'hotel_id.required' => "Select Hotel.",
            ]
        );
        
        
         
        HtlInformation::where('id',$id)->where('company_id',Auth::user()->shopId)->update([
            
            'hotel_name' => $request->hotel_name,
            'property_type_id' => $request->property_type_id,
            'location_map_url' => $request->google_map_link,
            'street_address' => $request->street_address,
            'post_code' => $request->post_code,
            'country_id' => $request->countryId,
            'star' => $request->star,
            'commission_type' => $request->commission_type,
            'commission_amount' => $request->commission_amount,
            'vat_type' => $request->vat_type,
            'vat_amount' => $request->vat_amount,
            'related_hotel' => $request->related_hotel,
             
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]); 

        

        if(HtlFacilityMaster::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->exists()){
            HtlFacilityMaster::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->delete();
        }


        foreach($request->facilities as $facility_id){
 
                HtlFacilityMaster::insert([
                    
                    'hotel_info_id' => $id,
                    'facility_id' => $facility_id,
        
                    'status' => 1,
                    'company_id' => Auth::user()->shopId,
                    'create_by' => Auth::user()->id,
                    'created_at' => Carbon::now(),
                ]);
        
        
        }


        if(HtlMetaInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->exists()){
        HtlMetaInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->update([
           
            'meta_title' => $request->meta_title,
            'meta_keyword' => $request->meta_keyword,
            'meta_description' => $request->meta_description,
            
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
    }
    else{
        HtlMetaInformation::insert([
            'hotel_info_id' => $request->id,

            'meta_title' => $request->meta_title,
            'meta_keyword' => $request->meta_keyword,
            'meta_description' => $request->meta_description,

            'status' => 1,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
    }


    if(HtlPolicyInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->exists()){

        HtlPolicyInformation::where('hotel_info_id',$id)->where('company_id',Auth::user()->shopId)->update([
           
            'check_in_time' => $request->check_in_time,
            'check_out_time' => $request->check_out_time,
            'payment_method_id' => $request->payment_method_id,
            'policy_terms' => $request->policy_terms,
            
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
    }
    else{

        HtlPolicyInformation::insert([
            'hotel_info_id' => $request->id,
            'check_in_time' => $request->check_in_time,
            'check_out_time' => $request->check_out_time,
            'payment_method_id' => $request->payment_method_id,
            'policy_terms' => $request->policy_terms,
            'position' => $request->position,
            'status' => 1,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
    }


    }

     public function hotelBankInfo(Request $request, $id)
    {
        $this->validate(
            $request,
            [
                'bank_payment_type_id' => 'required',
                'account_details' => 'required',
            ],
            [
                'bank_payment_type_id.required' => "Select Payment.",
                'account_details.required' => "Enter Account Details.",
            ]
        );

        HtlBankInfo::insert([
            'hotel_info_id' => $id,
            'bank_payment_type_id' => $request->bank_payment_type_id,
            'account_details' => $request->account_details,
            'position' => $request->bank_info_position,
            'status' => $request->bank_info_status,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

    }

    public function getHotelBankInfo($id){
        $data = HtlBankInfo::where('hotel_info_id',$id)->get();
        return ['data' => $data];
    }

    

    public function getHotelContactType(){
        $data = HtlContactType::orderBy('position','ASC')->get();
        return ['data' => $data];
    }
    

    public function getHotelContactPositionType(){
        $data = HtlContactPositionType::orderBy('position','ASC')->get();
        return ['data' => $data];
    }

    

    public function getHotelContactList($id){
        $data = HtlContactInformation::with('contact_type','position_type')->where('hotel_info_id',$id)->orderBy('id','ASC')->get();
        return ['data' => $data];
    }

    public function getHotelTranslateList($id){
        $data = HtlTranslateInformation::with('language')->where('hotel_info_id',$id)->orderBy('id','ASC')->get();
        return ['data' => $data];
    }


    public function getHotelRoomTranslateList($id){
        $data = HtlRomTranslateInformation::with('language')->where('hotel_info_id',$id)->orderBy('id','ASC')->get();
        return ['data' => $data];
    }


    
    public function HotelContactInformation(Request $request, $id)
    {
        $this->validate(
            $request,
            [
                'hotel_id' => 'required',
                'contact_type_id' => 'required',
                'position_type_id' => 'required',
                'full_name' => 'required',
                'email' => 'required',
            ],
            [
                'hotel_id.required' => "Select Hotel.",
                'contact_type_id.required' => "Select Contact Type.",
                'position_type_id.required' => "Select Position Type.",
                'full_name.required' => "Enter Full Name.",
                'email.required' => "Enter Email Address.",
            ]
        );

        HtlContactInformation::insert([
            'hotel_info_id' => $id,
            'contact_type_id' => $request->contact_type_id,
            'position_type_id' => $request->position_type_id,
            'full_name' => $request->full_name,
            'email' => $request->email,
            'mobile_no' => $request->mobile_no,
            'office_phone_no' => $request->office_phone_no,
            'extension' => $request->extension,
            'contact_hour_from' => $request->contact_hour_from,
            'contact_hour_to' => $request->contact_hour_to,
            'position' => $request->contact_info_position,
            'status' => $request->contact_info_status,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

    }

    
    public function HotelTranslateInformation(Request $request, $id)
    {
        $this->validate(
            $request,
            [
                'hotel_id' => 'required',
            ],
            [
                'hotel_id.required' => "Select Hotel.",
            ]
        );

        HtlTranslateInformation::insert([
            'hotel_info_id' => $id,

            'language_id' => $request->language_id,
            'hotel_name' => $request->trans_hotel_name,
            'hotel_description' => $request->trans_hotel_description,
            'meta_title' => $request->trans_meta_title,
            'meta_keyword' => $request->trans_meta_keyword,
            'meta_description' => $request->trans_meta_description,

            // 'position' => $request->translate_info_position,
            'status' => 0,
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

    }


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
        //
    }
    public function bankInfoDelete($id)
    {
        $htl_bank = HtlBankInfo::findOrFail($id);
        $htl_bank->delete();
    }
    public function ContactInfoDelete($id)
    {
        $htl_contact_info = HtlContactInformation::findOrFail($id);
        $htl_contact_info->delete();
    }
    public function TranslateInfoDelete($id)
    {
        $htl_translate_info = HtlTranslateInformation::findOrFail($id);
        $htl_translate_info->delete();
    }
    public function hotelSetupDelete($id)
    {
        HtlInformation::where('id',$id)->delete();
        HtlFacilityMaster::where('hotel_info_id',$id)->delete();
        HtlMetaInformation::where('hotel_info_id',$id)->delete();
        HtlBankInfo::where('hotel_info_id',$id)->delete();
        HtlContactInformation::where('hotel_info_id',$id)->delete();
        HtlPolicyInformation::where('hotel_info_id',$id)->delete();
        HtlTranslateInformation::where('hotel_info_id',$id)->delete();
        
    }
}