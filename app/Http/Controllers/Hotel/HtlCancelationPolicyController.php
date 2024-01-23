<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\Hotel\HtlCancelationPolicy;
use App\Models\Hotel\HtlRomInformation;

class HtlCancelationPolicyController extends Controller
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
        $data = HtlCancelationPolicy::withCount('cancellation_policy_info')->get();
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
                
                'cancel_policy_name' => 'required',
                'cancel_policy_status' => 'required',
            ],
            [
                'cancel_policy_name.required' => "Enter Cancel Policy Name.",
                'cancel_policy_status.required' => "Select Status.",
            ]
        );

        HtlCancelationPolicy::insert([
            'cancel_policy_name' => $request->cancel_policy_name,
            'status' => $request->cancel_policy_status,
            
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
        $cancel_policy = HtlCancelationPolicy::findOrFail($id);
        return ['cancel_policy' => $cancel_policy];
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
        $cancel_policy = HtlCancelationPolicy::findOrFail($id);
        $cancel_policy->cancel_policy_name = $request->cancel_policy_name;
        $cancel_policy->status = $request->cancel_policy_status;
        $cancel_policy->company_id =Auth::user()->id;
        $cancel_policy->update_by = Auth::user()->id;
        $cancel_policy->updated_at = Carbon::now();
        $cancel_policy->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        HtlCancelationPolicy::where('id',$id)->delete();
    }
}
