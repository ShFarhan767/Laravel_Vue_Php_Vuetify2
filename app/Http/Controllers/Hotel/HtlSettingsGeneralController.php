<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlSettingsGeneral;

class HtlSettingsGeneralController extends Controller
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

        if(HtlSettingsGeneral::where('company_id',Auth::user()->shopId)->exists()){
            }else{
            HtlSettingsGeneral::insert([
                'target' => '_self', 
                'header_title' => 'Hotel Listing', 
                'home_featured_hotel' => 6, 
                'home_featured_hotel_display_order' => 1, 
                'listing_hotels' => 6, 
                'listing_hotels_display_order' => 1, 
                'search_result_hotel' => 20, 
                'search_result_hotel_display_order' => 1, 
                'related_hotels' => 10, 
                'search_min_price' => 1000, 
                'search_max_price' => 5000, 
                'check_in_time' => '11:50:23', 
                'check_out_time' => '12:50:23', 
                'meta_keyword' => 'Meta Keyword', 
                'meta_description' => 'Meta Description', 
                
                'company_id' => Auth::user()->shopId,
                'create_by' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);
        }

        $data = HtlSettingsGeneral::where('company_id',Auth::user()->shopId)->orderBy('id','DESC')->first();
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
            'target' => 'required',
            'header_title' => 'required',
            'home_featured_hotel' => 'required',
            'home_featured_hotel_display_order' => 'required',
            'listing_hotels' => 'required',
            'listing_hotels_display_order' => 'required',
            'search_result_hotel' => 'required',
            'search_result_hotel_display_order' => 'required',
            'related_hotels' => 'required',
            'search_min_price' => 'required',
            'search_max_price' => 'required',
            'check_in_time' => 'required',
            'check_out_time' => 'required',
            'meta_keyword' => 'required',
            'meta_description' => 'required',
            ],
            [
            'target.required' => 'Enter Target',
            'header_title.required' => 'Enter Header title',
            'home_featured_hotel.required' => 'Enter Home featured hotel',
            'home_featured_hotel_display_order.required' => 'Enter Home featured hotel display order',
            'listing_hotels.required' => 'Enter Listing hotels',
            'listing_hotels_display_order.required' => 'Enter Listing hotels display order',
            'search_result_hotel.required' => 'Enter Search result hotel',
            'search_result_hotel_display_order.required' => 'Enter Search result hotel display order',
            'related_hotels.required' => 'Enter Related hotels',
            'search_min_price.required' => 'Enter Search min price',
            'search_max_price.required' => 'Enter Search max price',
            'check_in_time.required' => 'Enter Check in time',
            'check_out_time.required' => 'Enter Check out time',
            'meta_keyword.required' => 'Enter Meta keyword',
            'meta_description.required' => 'Enter Meta description',
    ]);

        HtlSettingsGeneral::where('company_id',Auth::user()->shopId)->update([
            'target' => $request->target, 
            'header_title' => $request->header_title, 
            'home_featured_hotel' => $request->home_featured_hotel, 
            'home_featured_hotel_display_order' => $request->home_featured_hotel_display_order, 
            'listing_hotels' => $request->listing_hotels, 
            'listing_hotels_display_order' => $request->listing_hotels_display_order, 
            'search_result_hotel' => $request->search_result_hotel, 
            'search_result_hotel_display_order' => $request->search_result_hotel_display_order, 
            'related_hotels' => $request->related_hotels, 
            'search_min_price' => $request->search_min_price, 
            'search_max_price' => $request->search_max_price, 
            'check_in_time' => $request->check_in_time, 
            'check_out_time' => $request->check_out_time, 
            'meta_keyword' => $request->meta_keyword, 
            'meta_description' => $request->meta_description, 
            
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
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
        // HtlSettingsGeneral::where('id', $id)->delete();
    }
}
