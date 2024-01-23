<?php

namespace App\Http\Controllers\Hotel\Room;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Image;
use File;
use App\Models\Hotel\Room\HtlRomImage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class HtlRomImageController extends Controller
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
            $data = HtlRomImage::with('image_title')->get();
            return ['data' => $data];
    }

    public function imageByHotel($hotel_id)
    {
        $data = HtlRomImage::with('image_title')->where('hotel_info_id',$hotel_id)->get();
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
        
        // return ['insert' => $request];

                    if(strpos($request->logo,';')){

                    $strpos = strpos($request->logo,';');
                    $sub = substr($request->logo,0,$strpos);
                    $ex = explode('/',$sub)[1];
                    $name = time().".".$ex;
                    $img = Image::make($request->logo);
                    $upload_path = public_path()."/images/room_image/";
                    $img->save($upload_path.$name);

                    // unlink('images/invoice_logo/'.$imageDb);

                        $roomImage  =  HtlRomImage::insert([
                        'hotel_info_id' => $request->hotel_id,
                        'image_title_id' => $request->image_title_id,
                        'room_id' => 0,
                        'image_path' => $upload_path,
                        'image_name' => $name,
                        'alt_text' => 'Room Image',
            
                        'company_id' => Auth::user()->id,
                        'create_by' => Auth::user()->id,
                        'created_at' => Carbon::now()
                        ]);

                        // return ['insert' => 1];
                    }
                    else{
                        return ['insert' => 0];
                    }
                    


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
        //
    }
}
