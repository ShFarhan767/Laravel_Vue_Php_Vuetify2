<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlPaymentType;


class HtlPaymentTypeController extends Controller
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
       $data = HtlPaymentType::withCount('htl_payment_info')->get();
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
                
                'payment_type_name' => 'required',
                'payment_type_status' => 'required',
            ],
            [
                'payment_type_name.required' => "Enter Payment Type Name.",
                'payment_type_status.required' => "Select Status.",
            ]
        );

        HtlPaymentType::insert([
            'payment_type_name' => $request->payment_type_name,
            'status' => $request->payment_type_status,
            
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
        $payment_type = HtlPaymentType::findOrFail($id);
        return ['payment_type' => $payment_type];
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
        $payment_type = HtlPaymentType::findOrFail($id);
        $payment_type->payment_type_name = $request->payment_type_name;
        $payment_type->status = $request->payment_type_status;
        $payment_type->company_id =  Auth::user()->id;
        $payment_type->update_by =  Auth::user()->id;
        $payment_type->updated_at =  Carbon::now();
        $payment_type->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlPaymentType::where('id',$id)->delete();
    }
}
