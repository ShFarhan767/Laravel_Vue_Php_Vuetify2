<?php

namespace App\Http\Controllers\Hotel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Hotel\HtlCustomerInformation;
use App\Models\Hotel\Room\HtlRomInformation;
use App\Models\Hotel\Room\HtlRomPricing;
use App\Models\Hotel\Booking\HtlBookingProductList;
use App\Models\Hotel\Booking\HtlBookingInformation;
use App\HtlBookingInvoiceNoGenerate;
use App\ChartOfAccount;
use App\ChartOfAccountRegister;
use Carbon\Carbon;
use Auth;
use DB;

class HtlBookingInvoiceEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    
    public function customerInformationEntry(Request $request)
    {
          $this->validate($request, [
              'customerTypeId1' => 'required',
              'customerName' => 'required',
              'customerPhone' => 'required|numeric',
          ]);

          $shopTypeId = Auth::user()->shopTypeId;


            // ============================================
            // =============== Chart Of Accounts ==========
            // ============================================

            $noOfRow = HtlCustomerInformation::where('company_id',Auth::user()->shopId)
            ->where('customerTypeId',$request->customerTypeId1)->count()+1;
            // if(ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$request->customerTypeId1)->exists()){
            //     $code= ShopCustomerTypeEntry::where('shopCustomerTypeEntryId',$request->customerTypeId1)->first()->accountCode;
            // }else{
            //     return ['accountCodeError' => 1];
            // }
            $code = '102020101';
            $headNamePre= ChartOfAccount::where('headCode',$code)->first()->headName;
                        
                        $temp = explode(' ', $headNamePre);
                        $headShortName = '';
                        foreach($temp as $t){
                            $headShortName .= $t[0];
                        }

            // $headName = $headShortName.'-'.$request->customerName;
            $headName = $request->customerName;
            $lavel= ChartOfAccount::where('headCode',$code)->first()->headLavel+1;
            $dr_cr= ChartOfAccount::where('headCode',$code)->first()->dr_cr;
            $headGroupId= ChartOfAccount::where('headCode',$code)->first()->headGroupId;
            $headGroupType= ChartOfAccount::where('headCode',$code)->first()->headGroupType+1;
            $accCode = $code.str_pad($noOfRow, 3, '0', STR_PAD_LEFT);
 

            ChartOfAccountRegister::insert([
                'headGroupType' => $headGroupType,
                'headGroupId' => $headGroupId,
                'dr_cr' => $dr_cr,
                'pre_code' => $code,
                'headCode' => $accCode,
                'headName' => $headName,
                'headLavel' => $lavel,
                'lastCode' => 0,
                'status' => 1,
                'position' => 0,
                'autoCreate' => 0,
                'shopId' => Auth::user()->shopId,
                'createBy' => Auth::user()->id,
                'created_at' => Carbon::now(),
            ]);

            // ============================================
            // =============== // Chart Of Accounts ==========
            // ============================================


            HtlCustomerInformation::insert([
                'customerTypeId' => $request->customerTypeId1,
                'accountCode' => $accCode,
                'customerName' => $request->customerName,
                'customerEmail' => $request->customerEmail,
                'customerPhone' => $request->customerPhone,
                'customerImoNumber' => $request->customerImoNumber,
                'customerFacebookID' => $request->customerFacebookID,
                'customerAddress' => $request->customerAddress,
                'referenceName' => $request->referenceName,
                'referenceEmail' => $request->referenceEmail,
                'referencePhone' => $request->referencePhone,
                'company_id' => Auth::user()->shopId,
                'create_by' => Auth::User()->id,
            ]);



            

    }


    function customerTypeIdCatch($customerTypeId)
    {
        $salesCustomerLists = HtlCustomerInformation::where('customerTypeId',$customerTypeId)->where('company_id',Auth::user()->shopId)->get();

        return ['salesCustomerLists' => $salesCustomerLists];
    }


    function htl_rom_price_booking(Request $request)
    {
        $priceInfo = HtlRomPricing::
          where('hotel_info_id',$request->hotelId)
        ->where('room_type_id',$request->roomTypeId)
        ->where('bed_type_id',$request->bedTypeId)
        ->where('company_id',Auth::user()->shopId)->first();
        $price = $priceInfo->customer_price;

        $roomInfo = HtlRomInformation::
            where('hotel_info_id',$request->hotelId)
        ->where('room_type_id',$request->roomTypeId)
        ->where('bed_type_id',$request->bedTypeId)
        ->where('company_id',Auth::user()->shopId)->first();

        return [
            'roomInfo' => $roomInfo,
            'price' => $price
        ];
    }

    function hotelInvoiceProductEntry(Request $request)
    {  
        $this->validate(
            $request,
            [
                'hotelId' => 'required',
                'bedTypeId' => 'required',
            ],
            [
                'hotelId.required' => "Select Hotel.",
                'bedTypeId.required' => "Select Bed Type.",
            ]
        );

        HtlBookingProductList::insert([
            'invoiceNo' => $request->salesInvoiceNo,
            'hotelId' => $request->hotelId,
            'checkIn' => $request->checkIn,
            'checkOut' => $request->checkOut,
            'room_type_id' => $request->roomTypeId,
            'bed_type_id' => $request->bedTypeId,
            'adult' => $request->adult,
            'child' => $request->child,
            'noOfRoom' => $request->noOfRoom,
            'extraBed' => $request->extraBed,
            'extraBedPrice' => $request->extra_bed_charge,
            'night' => $request->night,
            'price' => $request->price,
            'totalPrice' => $request->totalPrice,
            
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        $select_info = HtlBookingProductList::
        with('hotel','room_type','bed_type')
        ->where('invoiceNo',$request->salesInvoiceNo)
        ->where('status',0)
        ->where('company_id',Auth::user()->shopId)
        ->get();
        $totalPrice = HtlBookingProductList::where('invoiceNo',$request->salesInvoiceNo)
        ->where('company_id',Auth::user()->shopId)
        ->sum('totalPrice');

        return [
            'totalPrice' => $totalPrice,
            'list' => $select_info
               ];

    }

    function hotelInvoiceProductDelete($id)
    {
       
        $salesInvoiceNo = HtlBookingProductList::where('id',$id)->first()->invoiceNo;
        $delete = HtlBookingProductList::where('id',$id)->delete();

        $select_info = HtlBookingProductList::
        with('hotel','room_type','bed_type')
        ->where('invoiceNo',$salesInvoiceNo)
        ->where('status',0)
        ->where('company_id',Auth::user()->shopId)
        ->get();

        $totalPrice = HtlBookingProductList::where('invoiceNo',$salesInvoiceNo)
        ->where('company_id',Auth::user()->shopId)
        ->sum('totalPrice');

        return [
            'totalPrice' => $totalPrice,
            'list' => $select_info
        ];

    }

    function hotelInvoiceEntry(Request $request)
    {
        $this->validate(
            $request,
            [
                'salesInvoiceNo' => 'required',
                'hotelId' => 'required',
                'bedTypeId' => 'required',
            ],
            [
                'salesInvoiceNo.required' => "Invoice Invalid.",
                'hotelId.required' => "Select Hotel.",
                'bedTypeId.required' => "Select Bed Type.",
            ]
        );

        if($request->salesCustomerEntryId=='')
        {
            $salesCustomerId = 0;
        }
        else
        {
            $implodeSalesCustomerId = implode(',', array_column($request->salesCustomerEntryId,$request->id));
            $salesCustomerId = explode(',',$implodeSalesCustomerId)[0];
        }




        HtlBookingInformation::insert([
           
            'invoiceNo' => $request->salesInvoiceNo,
            'salesDate' => $request->salesDate,
            'customerTypeId' => $request->customerTypeId,
            'salesCustomerId' => $salesCustomerId,
            'currentTotalAmount' => $request->totalBalance,
            'currentPaidAmount' => $request->totalBalance,
            'currentDue' => 0,
            
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);

        HtlBookingProductList::insert([
            'invoiceNo' => $request->salesInvoiceNo,
            'hotelId' => $request->hotelId,
            'checkIn' => $request->checkIn,
            'checkOut' => $request->checkOut,
            'room_type_id' => $request->roomTypeId,
            'bed_type_id' => $request->bedTypeId,
            'adult' => $request->adult,
            'child' => $request->child,
            'noOfRoom' => $request->noOfRoom,
            'extraBed' => $request->extraBed,
            'extraBedPrice' => $request->extra_bed_charge,
            'night' => $request->night,
            'price' => $request->price,
            'totalPrice' => $request->totalBalance,
            'status' => 1,
            
            'company_id' => Auth::user()->shopId,
            'create_by' => Auth::user()->id,
            'created_at' => Carbon::now(),
        ]);
        
        HtlBookingInvoiceNoGenerate::where('company_id',Auth::user()->shopId)->where('invoice_no',$request->salesInvoiceNo)->update([
            'status' => 1,
            'update_by' => Auth::user()->id,
            'updated_at' => Carbon::now(),
        ]);
        
    }


    public function hotelBookingInvoiceList(){

        $list = HtlBookingInformation::with('customer')->where('company_id',Auth::user()->shopId)->orderBy('id','DESC')->get();
        return [
            'list' => $list,
            'userName' => Auth::user()->userName
        ];
    }

    public function hotelBookingInvoiceListById($id){

        $info = HtlBookingInformation::with('customer')
        ->where('id',$id)
        ->where('company_id',Auth::user()->shopId)->first();

        $invoiceNo = $info->invoiceNo;

        $productList = HtlBookingProductList::
        with('hotel','room_type','bed_type')
        ->where('invoiceNo',$invoiceNo)
        ->where('company_id',Auth::user()->shopId)
        ->get();

        return [
            'info' => $info,
            'productList' => $productList
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
