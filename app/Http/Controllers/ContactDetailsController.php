<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactDetails;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ContactDetailsController extends Controller
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
        $data = ContactDetails::get();
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
        'title' => 'required',
        'number' => 'required',
        'emailAdress' => 'required',
        'officeAddress' => 'required',
        ],
        [
        'title.required' => 'Enter Title',
        'number.required' => 'Enter Number',
        'emailAdress.required' => 'Enter EmailAdress',
        'officeAddress.required' => 'Enter OfficeAddress',
    ]);

        ContactDetails::insertGetId([
        'title' => $request->title, 
        'number' => $request->number, 
        'emailAdress' => $request->emailAdress, 
        'officeAddress' => $request->officeAddress, 
        'shopId' => Auth::user()->shopId,
        'createBy' => Auth::User()->id,
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
        ContactDetails::where('id', $id)->delete();
    }
}
