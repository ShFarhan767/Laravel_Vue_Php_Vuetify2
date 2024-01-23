<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlPropertyType;
use App\Models\Hotel\HtlInformation;

class HtlPropertyTypeController extends Controller
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
        $data = HtlPropertyType::withCount("hotel_info")->get();
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
                
                'property_type_name' => 'required',
                'property_type_description' => 'required',
                'propertyTypeStatus' => 'required',
            ],
            [
                'property_type_name.required' => "Enter Property Type Name.",
                'property_type_description.required' => "Enter Property Type Description.",
                'propertyTypeStatus.required' => "Select Status.",
            ]
        );

        HtlPropertyType::insert([
            'property_type_name' => $request->property_type_name,
            'property_type_description' => $request->property_type_description,
            'status' => $request->propertyTypeStatus,
            
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
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $property = HtlPropertyType::findOrFail($id);
       return ['property' => $property];
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
         $this->validate(
            $request,
            [
                
                'property_type_name' => 'required',
                'property_type_description' => 'required',
                'propertyTypeStatus' => 'required',
            ],
            [
                'property_type_name.required' => "Enter Property Type Name.",
                'property_type_description.required' => "Enter Property Type Description.",
                'propertyTypeStatus.required' => "Select Status.",
            ]
        );

        $property = HtlPropertyType::findOrFail($id);
        $property->property_type_name = $request->property_type_name;
        $property->property_type_description = $request->property_type_description;
        $property->status = $request->propertyTypeStatus;
        $property->company_id = Auth::user()->id;
        $property->update_by = Auth::user()->id;
        $property->updated_at = Carbon::now();
        $property->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlPropertyType::where('id',$id)->delete();
    }
}
