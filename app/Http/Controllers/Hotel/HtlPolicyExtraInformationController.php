<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlPolicyExtraInformation;

class HtlPolicyExtraInformationController extends Controller
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
        $data = HtlPolicyExtraInformation::where('company_id',Auth::user()->shopId)->get();
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
                'policy_field_title' => 'required',
                'policy_field_description' => 'required',
            ],
            [
                'policy_field_title.required' => "Enter Title.",
                'policy_field_description.required' => "Enter Description.",
            ]
        );

        HtlPolicyExtraInformation::insert([
            'hotel_info_id' => 0,
            'title' => $request->policy_field_title,
            'description' => $request->policy_field_description,
            //'status' => $request->status,
            
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        $data = HtlPolicyExtraInformation::where('hotel_info_id',0)->where('company_id',Auth::user()->shopId)->get();
        return ['data' => $data];
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
        HtlPolicyExtraInformation::where('id',$id)->delete();
        $data = HtlPolicyExtraInformation::where('company_id',Auth::user()->shopId)->get();
        return ['data' => $data];
    }
}
