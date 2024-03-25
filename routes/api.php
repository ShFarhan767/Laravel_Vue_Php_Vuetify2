<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/shop/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
Route::post('/shop/demoLogin', 'Auth\AdminLoginController@demoLogin')->name('admin.login.submit');
Route::post('/shop/demoRequest', 'Auth\AdminLoginController@demoRequest');
Route::post('/admin/login', 'Auth\LoginController@login');

Route::get('/shop/login','Auth\AdminLoginController@showLoginForm')->name('admin.login'); 
Route::get('/shop/demoLogin/{id}','Auth\AdminLoginController@showDemoLoginForm');
Route::get('/shop/demoRequest','Auth\AdminLoginController@showDemoRequest');

Route::get('/login','Auth\AdminLoginController@showLoginForm')->name('login'); 
Route::get('/admin/login','Auth\LoginController@showLoginForm'); 
Route::get('/shop/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');
Route::get('/admin/logout', 'Auth\LoginController@logout');
Route::get('/shop', 'Auth\AdminController@index')->name('shop');

Route::get('/home', 'HomeController@index')->name('home');


Route::group([  'middleware' => 'auth:,admin'], function()
{

//  country list
Route::resource('currencyList','currencyController');
Route::resource('countryList','countryController');
Route::get('countryListAll','countryController@countryListAll');
Route::resource('divisionList','divisionController');
Route::get('divisionListById/{id}','divisionController@divisionListById');
Route::resource('districtList','districtController');
Route::get('districtListById/{id}','districtController@districtListById');
Route::resource('upazilaList','upazillaController');
Route::get('upazilaListById/{id}','upazillaController@upazilaListById');
Route::resource('unionList','unionController');
Route::get('unionListById/{id}','unionController@unionListById');
Route::resource('wardList','wardController');
Route::get('wardListById/{id}','wardController@wardListById');


//  AdminMenu
Route::resource('/adminMenuTitle','AdminMenuTitleController');
Route::resource('/adminMenu','AdminMenuController');
Route::get('/statusChangeEventMenu/{id}','AdminMenuController@changeStatus');
Route::get('/adminMenulistById/{id}','AdminMenuController@adminMenulistById');
Route::get('/adminMenuTitlelist','AdminMenuController@adminMenuTitlelist');
Route::get('/adminMenuTitlePositionSelect/{adminMenuTitleId}','AdminMenuController@menuTitlePositionSelect');
//  AdminSubMenu
Route::resource('/adminSubMenu','AdminSubMenuController');
Route::get('/adminSubMenuePermission/{adminSubMenuId}','AdminSubMenuController@adminSubMenuePermission');
Route::get('/adminSubMenueStatus/{adminSubMenuId}','AdminSubMenuController@adminSubMenueStatus');
Route::get('/adminMenuPositionSelect/{adminMenuId}','AdminSubMenuController@menuPositionSelect');

Route::post('formDesign','databaseSeedCodeController@formDesign');

//change Password
Route::resource('/changePassword','PasswordChangeController');
//profile setting
Route::resource('/settingsProfile','SettingsController');



//  new company 
Route::resource('shopInformation','ShopInformation\ShopInformationController');

// --------------------------
// ------ hotel route


// - hotel setup
Route::resource('/htl_display_order_by','Hotel\HtlSettingsGeneralOrderByController');
Route::resource('/htl_settings_general_info','Hotel\HtlSettingsGeneralController');
Route::resource('/htl_property_type','Hotel\HtlPropertyTypeController');
Route::resource('/htl_location','Hotel\HtlLocationController');
Route::get('/get_placeList_by_country/{id}','Hotel\HtlLocationController@placeByCountry');

Route::resource('/htl_facility_type','Hotel\HtlFacilityTypeController');
Route::resource('/htl_facility','Hotel\HtlFacilityController');
Route::resource('/htl_cancelation_policy','Hotel\HtlCancelationPolicyController');
Route::resource('/htl_name_entry','Hotel\HtlNameEnteryController');
Route::post('/htl_info_insert','Hotel\HtlNameEnteryController@hotelInfoInsert');
Route::post('/htl_info_update/{id}','Hotel\HtlNameEnteryController@hotelInfoUpdate');
Route::post('/htl_bank_information/{id}','Hotel\HtlNameEnteryController@hotelBankInfo');
Route::get('/htl_bank_info/{id}','Hotel\HtlNameEnteryController@getHotelBankInfo');
Route::get('/htl_contact_type','Hotel\HtlNameEnteryController@getHotelContactType');
Route::get('/htl_contact_position_type','Hotel\HtlNameEnteryController@getHotelContactPositionType');
Route::post('/htl_contact_info/{id}','Hotel\HtlNameEnteryController@HotelContactInformation');
Route::post('/htl_translate_update/{id}','Hotel\HtlNameEnteryController@HotelTranslateInformation');
Route::get('/hotel_contact_list/{id}','Hotel\HtlNameEnteryController@getHotelContactList');
Route::get('/hotel_translate_list/{id}','Hotel\HtlNameEnteryController@getHotelTranslateList');
Route::get('/hotel_list','Hotel\HtlNameEnteryController@hotel_list');
Route::get('/hotel_info_by_id/{id}','Hotel\HtlNameEnteryController@hotel_info_by_id');
Route::get('/hotel_info_list','Hotel\HtlNameEnteryController@hotel_info_list');
Route::get('/htl_code_generate/{id}','Hotel\HtlNameEnteryController@codeGenerate');
Route::get('bankInfoDelete/{id}','Hotel\HtlNameEnteryController@bankInfoDelete');
Route::get('ContactInfoDelete/{id}','Hotel\HtlNameEnteryController@ContactInfoDelete');
Route::get('TranslateInfoDelete/{id}','Hotel\HtlNameEnteryController@TranslateInfoDelete');
Route::get('hotelSetupDelete/{id}','Hotel\HtlNameEnteryController@hotelSetupDelete');
Route::resource('htl_policy_extra_info','Hotel\HtlPolicyExtraInformationController');
// - hotel setup

// - hotel room setup
Route::get('/room_info_by_hotel/{id}','Hotel\Room\HtlRomInformationController@room_info_by_hotel');
Route::get('/room_id_by_hotel_info/{id}','Hotel\Room\HtlRomInformationController@room_id_by_hotel_info');
Route::get('/DeleteRoomSetup/{id}','Hotel\Room\HtlRomInformationController@DeleteRoomSetup');
Route::get('/hotelRoomTranslateInfoDelete/{id}','Hotel\Room\HtlRomInformationController@hotelRoomTranslateInfoDelete');
Route::get('/hotelRoomImageInfoDelete/{id}','Hotel\Room\HtlRomInformationController@hotelRoomImageInfoDelete');
Route::resource('/htl_rom_type','Hotel\Room\HtlRomTypeController');
Route::resource('/htl_rom_bed_type','Hotel\Room\HtlRomBedTypeController');
Route::resource('/htl_rom_facility_type','Hotel\Room\HtlRomFacilityTypeController');
Route::resource('/htl_rom_facility','Hotel\Room\HtlRomFacilityController');
Route::resource('/htl_image_title','Hotel\HtlImageTitleController');
Route::get('/htl_image_title_hotel','Hotel\HtlImageTitleController@htl_image_title_hotel');
Route::resource('/htl_rom_image','Hotel\Room\HtlRomImageController');
Route::resource('/htl_rom_price_type','Hotel\Room\HtlRomPriceTypeController');
Route::resource('/htl_rom_pricing','Hotel\Room\HtlRomPricingController');
Route::resource('/htl_rom_information','Hotel\Room\HtlRomInformationController');
Route::get('/htl_rom_information_list','Hotel\Room\HtlRomInformationController@htl_rom_information_list');
Route::resource('/htl_payment_type','Hotel\HtlPaymentTypeController');
Route::get('/htl_rom_pricing_list/{hId}/{rtId}/{btId}','Hotel\Room\HtlRomPricingController@room_price_list');
// Route::get('/hotelImage','Hotel\Room\HtlRomImageController@hotelImage');
Route::get('/imageByHotel/{id}','Hotel\Room\HtlRomImageController@imageByHotel');
Route::get('/hotel_room_translate_list/{id}','Hotel\HtlNameEnteryController@getHotelRoomTranslateList');
Route::resource('/hotelImage','Hotel\HtlImageController');
// - hotel room setup


// - Hotel Booking
Route::resource('/HtlBookingInvoiceNo','Hotel\HtlBookingInvoiceNoGenerateController');
Route::post('/customerInformationEntry','Hotel\HtlBookingInvoiceEntryController@customerInformationEntry');
Route::get('/customerTypeIdCatch/{customerTypeId}','Hotel\HtlBookingInvoiceEntryController@customerTypeIdCatch');
Route::post('/htl_rom_price_booking','Hotel\HtlBookingInvoiceEntryController@htl_rom_price_booking');
Route::post('/hotelInvoiceProductEntry','Hotel\HtlBookingInvoiceEntryController@hotelInvoiceProductEntry');
Route::post('/hotelInvoiceEntry','Hotel\HtlBookingInvoiceEntryController@hotelInvoiceEntry');
Route::get('/hotelBookingInvoiceList','Hotel\HtlBookingInvoiceEntryController@hotelBookingInvoiceList');
Route::get('/hotelBookingInvoiceListById/{id}','Hotel\HtlBookingInvoiceEntryController@hotelBookingInvoiceListById');
Route::get('/hotelInvoiceProductDelete/{id}','Hotel\HtlBookingInvoiceEntryController@hotelInvoiceProductDelete');
// - Hotel Booking


// - hotel sales report 
Route::get('/shopAssetBrandReportAll','AdminSubMenuController@getInvoiceSetupInformation');
// - hotel sales report 


// ------ /hotel route
// --------------------------

// ----------------------------
// ------ admin configuration 

Route::get('informationNeedStatusup','ShopVerification\ShopverificationController@informationNeedStatusup');

Route::resource('shopVerification','ShopVerification\ShopverificationController');
Route::post('shopVerificationPending/{id}','ShopVerification\ShopverificationController@shopVerificationPending');
Route::get('verifiedShop','ShopVerification\ShopverificationController@verifiedShop');
Route::get('pendingShop','ShopVerification\ShopverificationController@pendingShop');
Route::get('cancelShop','ShopVerification\ShopverificationController@cancelShop');
Route::post('cancelShopStatus/{id}','ShopVerification\ShopverificationController@cancelShopStatus');
Route::get('informationNeed','ShopVerification\ShopverificationController@informationNeed');
Route::get('informationNeedStatusup','ShopVerification\ShopverificationController@informationNeedStatusup');
Route::post('informationNeedStatus/{id}','ShopVerification\ShopverificationController@informationNeedStatus');
Route::get('deliveredShop','ShopVerification\ShopverificationController@deliveredShop');
Route::post('deliveredShopStatus/{id}','ShopVerification\ShopverificationController@deliveredShopStatus');
Route::post('informationneedBack/{id}','ShopVerification\ShopverificationController@informationneedBack');


Route::resource('billingShop','BillingAdmin\BillingAdminController');
Route::resource('graceDateEn','GraceDateEntryController');
Route::get('billingPending','BillingAdmin\BillingAdminController@billingPending');
Route::get('billingCancel','BillingAdmin\BillingAdminController@billingCancel');
Route::get('billingDelivered','BillingAdmin\BillingAdminController@billingDelivered');
Route::get('billingList','BillingAdmin\BillingAdminController@billingList');
Route::get('graceDateList','BillingAdmin\BillingAdminController@graceDateList');
Route::get('expiredDateList','BillingAdmin\BillingAdminController@expiredDateList');
Route::get('expiredDateListall','BillingAdmin\BillingAdminController@expiredDateListall');
Route::post('deliveredBillingStatus/{id}','BillingAdmin\BillingAdminController@deliveredBillingStatus');
Route::resource('training','CRMTraining\CRMTrainingController');
Route::post('trainerAssign/{id}','CRMTraining\CRMTrainingController@trainerAssign');
Route::get('trainerTSchedule','CRMTraining\CRMTrainingController@trainerTSchedule');
Route::get('successTraining','CRMTraining\CRMTrainingController@successTraining');
Route::resource('expireDateInfo','ExpireDateNotificationController');
Route::resource('salesPriceType','SalesPriceTypeController');
Route::get('updatePriceTypeConfigure/{id}','SalesPriceTypeController@updatePriceTypeConfigure');
Route::resource('activeShop','ActiveShopController');
Route::get('activeShopGet/{source}/{type}','ActiveShopController@activeShopGet');

Route::get('/shopInformationSearch/{id}','ShopInformation\ShopInformationController@shopInformationSearch');

Route::get('getLoginId','UserInfoController@getLoginId');

// ------ / admin configuration
// ----------------------------


// ===== unitech 

Route::resource('/menuItems','MenuItemsController');

Route::resource('/navLogo','NavLogoController');

Route::resource('/slider','SliderController');

Route::resource('/serviceHeading','ServiceHeadingController');

Route::resource('/serviceBox','ServiceBoxController');

Route::resource('/blogCard','BlogCardController');

Route::resource('/addressDetails','AddressDetailsController');

Route::resource('/galleryCard','GalleryCardController');

Route::resource('/productCards','ProductCardsController');

Route::resource('/serviceInfo','ServiceInfoController');

Route::resource('/contactDetails','ContactDetailsController');

Route::resource('/clients','ClientsController');

Route::resource('/homeIntro','HomeIntroController');

// ===== unitech 

Route::get('{anypath}','HomeController@index')->where( 'path', '([A-z\d-\/_.]+)? ');
});
