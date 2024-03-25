<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\NavLogo;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class NavLogoController extends Controller
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
        $data = NavLogo::get();
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
        'largeScreenLogo' => 'required',
        'smallScreenLogo' => 'required',
        'logoLink' => 'required',
        'preloader' => 'required',
        ],
        [
        'largeScreenLogo.required' => 'Enter LargeScreenLogo',
        'smallScreenLogo.required' => 'Enter SmallScreenLogo',
        'logoLink.required' => 'Enter LogoLink',
        'preloader.required' => 'Enter Preloader',
    ]);

        NavLogo::insertGetId([
        'largeScreenLogo' => $request->largeScreenLogo, 
        'smallScreenLogo' => $request->smallScreenLogo, 
        'logoLink' => $request->logoLink, 
        'preloader' => $request->preloader, 
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
        NavLogo::where('id', $id)->delete();
    }
}
