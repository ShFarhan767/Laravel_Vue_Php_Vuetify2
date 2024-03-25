<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ServiceInfo;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ServiceInfoController extends Controller
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
        $data = ServiceInfo::get();
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
        'image' => 'required',
        'smallQuote' => 'required',
        'title' => 'required',
        'description' => 'required',
        'buttonName' => 'required',
        ],
        [
        'image.required' => 'Enter Image',
        'smallQuote.required' => 'Enter SmallQuote',
        'title.required' => 'Enter Title',
        'description.required' => 'Enter Description',
        'buttonName.required' => 'Enter ButtonName',
    ]);

        ServiceInfo::insertGetId([
        'image' => $request->image, 
        'smallQuote' => $request->smallQuote, 
        'title' => $request->title, 
        'description' => $request->description, 
        'buttonName' => $request->buttonName, 
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
        ServiceInfo::where('id', $id)->delete();
    }
}
