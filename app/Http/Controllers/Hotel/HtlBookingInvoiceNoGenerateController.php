<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\HtlBookingInvoiceNoGenerate;
use Carbon\Carbon;
use DataTables;
use Auth;


class HtlBookingInvoiceNoGenerateController extends Controller
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
         
        if(HtlBookingInvoiceNoGenerate::
                orderby('invoice_no','desc')
                ->where('status',0)
                ->where('company_id',Auth::user()->shopId)
                ->exists()){
                
                if(HtlBookingInvoiceNoGenerate::
                    orderby('invoice_no','desc')
                    ->where('status',0)
                    ->where('company_id',Auth::user()->shopId)
                    ->where('create_by',Auth::user()->id)->exists()){
                            
                    $salesInvoiceNo = HtlBookingInvoiceNoGenerate::orderby('invoice_no','desc')->where('create_by',Auth::user()->id)->where('status',0)->where('company_id',Auth::user()->shopId)->first()->invoice_no;
                    
                }
                else{

                    $lastInvoiceNo = HtlBookingInvoiceNoGenerate::
                    orderby('invoice_no','desc')
                    ->where('company_id',Auth::user()->shopId)
                    ->first()->invoice_no+1;

                    HtlBookingInvoiceNoGenerate::insert([
                        'company_id' => Auth::user()->shopId,
                        'status' => 0,
                        'invoice_no' => $lastInvoiceNo,
                        'create_by' => Auth::user()->id,
                        'created_at' => Carbon::now()
                    ]);
                    
                    $salesinvoiceNumber = HtlBookingInvoiceNoGenerate::orderby('invoice_no','desc')->where('create_by',Auth::user()->id)->where('company_id',Auth::user()->shopId)->first();
                    $salesInvoiceNo = $salesinvoiceNumber->invoice_no;
                }
                

            }
            else if(HtlBookingInvoiceNoGenerate::
                orderby('invoice_no','desc')
                ->where('status',1)
                ->where('company_id',Auth::user()->shopId)
                ->exists()){

                    $lastInvoiceNo = HtlBookingInvoiceNoGenerate::orderby('invoice_no','desc')
                    ->where('status',1)
                    ->where('company_id',Auth::user()->shopId)->first()->invoice_no+1;
                    
                    HtlBookingInvoiceNoGenerate::insert([
                        'company_id' => Auth::user()->shopId,
                        'status' => 0,
                        'invoice_no' => $lastInvoiceNo,
                        'create_by' => Auth::user()->id,
                        'created_at' => Carbon::now()
                    ]);

                    $salesInvoiceNo = $lastInvoiceNo;

                }
            else{

                HtlBookingInvoiceNoGenerate::insert([
                        'company_id' => Auth::user()->shopId,
                        'status' => 0,
                        'invoice_no' => 1,
                        'create_by' => Auth::user()->id,
                        'created_at' => Carbon::now()
                    ]);
                    $salesinvoiceNumber = HtlBookingInvoiceNoGenerate::orderby('invoice_no','desc')->where('company_id',Auth::user()->shopId)->first();
                    $salesInvoiceNo = $salesinvoiceNumber->invoice_no;
            }
     
       
        $currentDate = Carbon::now()->format('d-m-Y');
        return [
                'currentDate' => $currentDate, 
                'salesInvoiceNo' => $salesInvoiceNo
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
        //
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
