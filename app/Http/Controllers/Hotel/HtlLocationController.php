<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlLocation;


class HtlLocationController extends Controller
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
        $data = HtlLocation::with('country')->get();
        return ['data' => $data];
    }
    public function placeByCountry($country_id)
    {
        $data = HtlLocation::with('country')->where('countryId',$country_id)->get();
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
                'countryId' => 'required',
                'cityName' => 'required',
                'place' => 'required',
                'postCode' => 'required',
                'status' => 'required',
            ],
            [
                'countryId.required' => "Select Country.",
                'cityName.required' => "Enter City Name.",
                'place.required' => "Enter Place.",
                'postCode.required' => "Enter Post Code.",
                'status.required' => "Select Status.",
            ]
        );

        HtlLocation::insert([
            'countryId' => $request->countryId,
            'cityName' => $request->cityName,
            'place' => $request->place,
            'postCode' => $request->postCode,
            'status' => $request->status,
            
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
