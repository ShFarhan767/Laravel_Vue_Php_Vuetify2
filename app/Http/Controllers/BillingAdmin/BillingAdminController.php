<?php

namespace App\Http\Controllers\BillingAdmin;

use App\GraceDateEntry;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShopInformation\ShopOwnerInformation;
use App\Mail\SuccessMail;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\ShopAccountIntormation;
use App\ShopInformation\ShopAddressLocation;
use App\ShopInformation\ShopOwnerInformation as ShopInformationShopOwnerInformation;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Stringable;
use Illuminate\Support\Str;
class BillingAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',6)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
        
    }
    public function billingPending()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',7)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function billingCancel()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',8)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function billingDelivered()
    {
        $newshop=Admin::where('role',3)->with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('status',9)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress];
    }
    public function billingList()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $blist=Admin::where('status',6)->get();
        
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }

    public function graceDateList()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
        $blist=ShopAccountIntormation::where('billingGraceDate',Carbon::now()->format('Y-m-d'))->orwhere('billingGraceDate','>',Carbon::now()->format('Y-m-d'))->get();
        
   
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }
    public function expiredDateList()
    {
        $newshop=Admin::with('shoprepresentative')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
     
        $get = GraceDateEntry::first();
        
        $blist=ShopAccountIntormation::whereDate('billingDate','>',Carbon::now()->addDays(-($get->dayLimit)))
        ->whereDate('billingDate','<',Carbon::now())
        
        ->get();
     
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
    }
    public function expiredDateListall()
    {
        $newshop=Admin::with('shoprepresentative','account','billinginfo')->with('shopcontactpersion')->with('refferuser')->with('shoptype')->with('shopownerinfo')->where('role',3)->where('status',50)->get();
        $shopaddress=ShopAddressLocation::with('ward')->with('thana')->with('division')->with('union')->with('district')->with('country')->get();
     
        $get = GraceDateEntry::first();
        
        $blist=ShopAccountIntormation::whereDate('billingDate','<',Carbon::now())
        
        ->get();
     
        return ['newshop'=>$newshop,'shopaddress'=>$shopaddress,'blist'=>$blist];
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
        Admin::where('shopId',$id)->update([
            'status'=>8
         ]);
    }
    public function deliveredBillingStatus(Request $request,$id)
    {

        $link=Admin::where('shopId',$id)->first();
        $u="https://cashbook.com.bd/".$link->id;
        $url = urlencode($u);
        $four_digit_random_number = Str::random(4);
        $json = file_get_contents("https://cutt.ly/api/api.php?key=18660c33af275d38022ff60cdedffdb0304ce&short=$url&name=$four_digit_random_number");
        $data = json_decode ($json, true);
       
        // $ul=var_dump($data);
        //  Admin::where('shopId',$id)->update([
        //     'existingUrl'=>$url,           

        //  ]);
        Admin::where('shopId',$id)->update([
            'status'=>9,
            'refferUrl'=>$data['url']['shortLink']
         ]);


         $s= Admin::where('shopId',$id)->first();
         $shopId =$s->shopId;
         $select_amount = ShopAccountIntormation::where('shopId', $shopId)->first();
         $today = $select_amount->billingDate;
         $billingDate =  date('Y-m-d H:i:s', strtotime("$today +1 Months"));
         $billingDate1 =  substr($billingDate,0,10);
 
         $details = [

            'title' => 'Mail from cashbook.com.bd',
    
            'body' => 'Welcome to cashbook. your shop user name ',
            'userName' => $s->userName,
            'shopSirialId' => $s->shopSirialId,
            'pass' => $s->pass,
    
        ];
        $con= DB::table('shop_owner_information')->where('shopId',$s->shopId)->first();
        // $args = http_build_query(array(
        //     'api_key' => '44516031325763141603132576',
        //     'contacts'  => $con->shopOwnerMobileNo,
        //     'senderid'    => '8801844532643',
        //     'msg'  => 'Welcome To cashbook.com.bd!!!Your userName is='.$s->userName.',Shop Serial Id='. $s->shopSirialId.',Password='.$s->pass.',your Payment=500Tk'));
    
        // $url = "http://sms.doofazit.com/api/v1/send?";
    
        
        // $ch = curl_init();
        // curl_setopt($ch, CURLOPT_URL, $url);
        // curl_setopt($ch, CURLOPT_POST, 1);
        // curl_setopt($ch, CURLOPT_POSTFIELDS,$args);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);   
      
        // $response = curl_exec($ch);
        // $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        // curl_close($ch);
       
            
        
        // Mail::to($s->email)->send(new SuccessMail($details));

        $ShopOwnerInformation =  ShopInformationShopOwnerInformation::where('shopId', $s->shopId)->first();



// mail configareation


$to = "$ShopOwnerInformation->shopOwnerEmail,sales@cashbook.com.bd";
if(!empty($to)){
$subject = 'Congratulations';

$headers = "From: cashbook.com.bd <" . strip_tags('sales@cashbook.com.bd') . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
                <link rel="preconnect" href="https://fonts.googleapis.com">
            
                <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Josefin+Sans&display=swap" rel="stylesheet">	<!--<![endif]-->
                <title>Cashbook.com.bd</title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
                
            
                <style type="text/css" media="screen">
                    /* Linked Styles */
                    body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#c5c1ff; -webkit-text-size-adjust:none }
                    a { color:#66c7ff; text-decoration:none }
                    p { padding:0 !important; margin:0 !important } 
                    img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
                    .mcnPreviewText { display: none !important; }
            
                            
                    /* Mobile styles */
                    @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                        .mobile-shell { width: 100% !important; min-width: 100% !important; }
                        .bg { background-size: 100% auto !important; -webkit-background-size: 100% auto !important; }
                        
                        .text-header,
                        .m-center { text-align: center !important; }
                        
                        .center { margin: 0 auto !important; }
                        .container { padding: 20px 10px !important }
                        
                        .td { width: 100% !important; min-width: 100% !important; }
            
                        .m-br-15 { height: 15px !important; }
                        .p30-15 { padding: 30px 15px !important; }
                        .p40 { padding: 20px !important; }
            
                        .m-td,
                        .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
            
                        .m-block { display: block !important; }
            
                        .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
                        .column-empty { padding-bottom: 10px !important; }
                        .column-empty2 { padding-bottom: 20px !important; }
                        .content-spacing { width: 15px !important; }
                    }
                </style>
            </head>
            <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#c5c1ff">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15" style="padding: 25px 30px 25px 30px;" bgcolor="#ffffff">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top" width="145" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                        <a href="https://cashbook.com.bd" target="_blank">
                                                                                            <img src="https://cashbook.com.bd/public/assets/logo/logo.png" width="167" height="45" editable="true" border="0" alt="" />
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                        <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                                        <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="text-header" style="color:#999999; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:16px; text-align:right; text-transform:uppercase;"><multiline><webversion class="link2" style="color:#999999; text-decoration:none;">
                                                                                    <b><u style="color:rgb(0, 0, 0);">Hotline</u></b>
                                                                                    
                                                                                    <span style="color:rgb(0, 0, 0);font-size:17px;">+880 1921-0000-11</span> <br>
                                                                                    <b><u style="color:rgb(9, 177, 37);">Whatsapp</u></b>
                                                                                    
                                                                                    <span style="color:rgb(9, 177, 37);font-size:17px;">+880 1921-0000-11</span>
                                                                                 </webversion></multiline></td>
                                                                                </tr>
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Header -->
            
                                        <repeater>
                                            <!-- Intro -->
                                            <layout label="Intro">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td background="https://www.damcogroup.com/wp-content/themes/DamcoNew/images/img-edit/img-edit-banner.jpg" bgcolor="#114490" valign="top" height="366" class="bg" style="background-size:cover !important; -webkit-background-size:cover !important; background-repeat:none;">
                                                                        <!--[if gte mso 9]>
                                                                        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:650px; height: 366px">
                                                                            <v:fill type="frame" src="images/t8_bg.jpg" color="#114490" />
                                                                            <v:textbox inset="0,0,0,0">
                                                                        <![endif]-->
                                                                        <div>
                                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td class="content-spacing" width="30" height="366" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                    <td style="padding: 30px 0px;">
                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                <td class="h1 center pb25" style="color:#ffffff; font-family: Dancing Script, cursive; font-size:40px; line-height:46px; text-align:center; padding-bottom:25px;">
                                                                                                    <small style="font-size: 30px;margin-bottom: 20px;"><u>Billing / Activation</u></small>
                                                                                                    
                                                                                                 </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="text-Left" style="color:#ffffff; font-family:Noto Sans, Arial,sans-serif; font-size:16px; line-height:30px; text-align:center;">
                                                                                                    <multiline><u>Login Information</u>';
            
                                                                                       
                                                                                                    $message .= '<p>  <a href="https://secure.cashbook.com.bd/shop/login" target="_blank" style="border:1px solid yellow;padding:5px;border-radius:5px;background:#ff000054;color:white;">Click to Login </a></p>';
                                                                                                    $message .= '<p> User Name :'.$s->userName.'</p>';
                                                                                                    $message .= '<p> Shop Code :'.$s->shopSirialId.'</p>';
                                                                                                    $message .= '<p> Password :'.$s->pass.' (after login change your password ) </p>';
                                                                                                    $message .= '<p> Our billing department received your installment fee 5000 (five thousand tk only)</p>';
                                                                                                    $message .= '<p> Next month billing date '.$billingDate1.'. </p> </multiline></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                    <td class="content-spacing" width="30" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                        <!--[if gte mso 9]>
                                                                            </v:textbox>
                                                                            </v:rect>
                                                                        <![endif]-->
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="mp15" style="padding: 20px 30px;"  align="center">
                                                                        <table border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tr>
                                                                                            <td class="h5 white" style="font-family:Noto Sans, Arial,sans-serif; font-size:16px; line-height:22px; text-align:left; font-weight:bold; color:#ffffff;"><multiline>
                                                                                            <center>
                                                                                                    <a href="https://cashbook.com.bd/about" target="_blank" class="link-white"  style="background:url(https://livedemo00.template-help.com/wt_55108/images/banner/background-03-1920x310.jpg);background-size:100% 100%; color:#ffffff; font-family:Noto Sans, Arial,sans-serif; font-size:14px; line-height:18px; padding:12px 20px; text-align:center; border-radius:6px;color:white;">
                                                                                                        <span class="link-white" style="color:#ffffff; text-decoration:none;"> About Cashbook </span>
                                                                                                    </a>
                                                                                                </center> </multiline></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </th>
                                                                                
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </layout>	
                                            <!-- END Intro -->
            
            
                                        </repeater>
            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="p30-15" style="padding: 50px 30px;" bgcolor="#ffffff">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"> 
                                                                            <div style="width:38px;height:38px;">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                        <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"> 
                                                                            <div style="width:38px;height:38px;">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                        <td class="img" width="55" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"> 
                                                                            <div style="width:38px;height:38px;">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                        <td class="img" width="38" style="font-size:0pt; line-height:0pt; text-align:left;"><a href="#" target="_blank"> 
                                                                            <div style="width:38px;height:38px;color:red;">
                                                                                <svg style="color: red;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path style="color: red;" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                                                                                </div>
                                                                             </a></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;"><multiline>Cashbook.com.bd</multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline>Call : +880 1921 00 00 11 </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline>Whats App : +880 1921 00 00 11 </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;"><multiline>H#20 (D1), Block-G, Main Road, Banasree, Dhaka-1219</multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline>Web : https://cashbook.com.bd | E-mail : sales@cashbook.com.bd </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> FB Page : https://web.facebook.com/cashbook.com.bd </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> FB Group : https://web.facebook.com/groups/cashbook.com.bd </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> Linked IN : https://www.linkedin.com/company/cashbookbd/ </multiline></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb10" style="color:#777; font-family:Noto Sans, Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;"><multiline> Youtube : https://www.youtube.com/channel/UC7MXjOcKNWrFpE9_rd_oekg </multiline></td>
                                                        </tr>
                                                       
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>';

//mail($to, $subject, $message, $headers);
}

 
         $ShopAccount =  ShopAccountIntormation::where('shopId', $shopId)->update([        
             'billingDate' => $billingDate,
             'billingGraceDate' => '',
         ]); 
         $Shop =  Admin::where('shopId', $shopId)->update([
             'paymentStatus' => 2,
             'status' => 9,
         ]);
         
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        Admin::where('shopId',$id)->update([
            'status'=>7
         ]);
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

