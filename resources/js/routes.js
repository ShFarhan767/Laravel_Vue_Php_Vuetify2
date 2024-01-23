export const routes = [
    ////////////////       Admin Menu Create
    {
        path: '/index',
        component:()=>import(/*WCN:"index" */'./index'),

    },
    {
        path: '/home',
        component:()=>import(/*WCN:"home" */'./index'),

    },
    {
        path: '/change@password',
        component:()=>import(/*WCN:"changepassword" */'./admin/generalpage/change@password'),
    
    },
    {
        path: '/profile',
        component:()=>import(/*WCN:"profile" */'./admin/generalpage/profile'),
    
    },
    {
        path: '/databaseSeeds',
        component:()=>import(/*WCN:"db-seed" */'./admin/adminmenucreate/databaseSeeds'),

    },
  
    {
        path: '/adminmenu@title',
        component:()=>import(/*WCN:"admin-menu-title" */'./admin/adminmenucreate/adminmenu@title'),

    }, 
    {
        path: '/adminmenu@titleEdit:adminMenuTitleId',
        component:()=>import(/*WCN:"admin-menu-title-edit" */'./admin/adminmenucreate/edit/adminmenu@titleEdit'),

    },
    {
        path: '/adminmenu@create',
        component:()=>import(/*WCN:"admin-menu-create" */'./admin/adminmenucreate/adminmenu@create'),

    },
    {
        path: '/adminmenu@Edit:adminMenuId',
        component: () => import/* webpackChunkName: "admin-menu-edit" */('./admin/adminmenucreate/edit/adminmenu@edit'),

    },
    {
        path: '/adminsubmenu@create',
        component:()=>import(/*WCN:"admin-submenu-create" */'./admin/adminmenucreate/adminsubmenu@create'),

    },
    {
        path: '/adminsubmenu@Edit:adminSubMenuId',
        component:()=>import(/*WCN:"admin-submenu-edit" */'./admin/adminmenucreate/edit/adminsubmenu@edit'),

    },

    {
        path: '/formDesign',
        component: () => import(/* webpackChunkName: "formDesign" */'./admin/adminmenucreate/formDesign'),

    },

// ==================================================
// ===================== Hotel ======================


// ------------ hotel setup 
{
    path: '/hotel@location@entry',
    name:'Hotel Location Entry',
    component:()=>import(/*WCN:"hotel@location@entry" */'./admin/hotel/hotelSetup/hotel@location@entry'),
},
{
    path: '/hotel@location@new',
    component:()=>import(/*WCN:"hotel@location@new" */'./admin/hotel/hotelSetup/hotel@location@new'),
},
{
    path: '/hotel@name@entry',
    component:()=>import(/*WCN:"hotel@name@entry" */'./admin/hotel/hotelSetup/hotel@name@entry'),
},
{
    path: '/hotel@name@new',
    component:()=>import(/*WCN:"hotel@name@new" */'./admin/hotel/hotelSetup/hotel@name@new'),
},
{
    path: '/hotel@property@type',
    name: 'Hotel Property Type',
    component:()=>import(/*WCN:"hotel@property@type" */'./admin/hotel/hotelSetup/hotel@property@type'),
    props:true,
},
{
    path: '/hotel@property@type@new',
    name: 'New Property Type',
    component:()=>import(/*WCN:"hotel@property@type@new" */'./admin/hotel/hotelSetup/hotel@property@type@new'),
    props:true,
},
{
    path: '/hotel@facility@entry',
    component:()=>import(/*WCN:"hotel@facility@entry" */'./admin/hotel/hotelSetup/hotel@facility@entry'),
},
{
    path: '/hotel@facility@new',
    component:()=>import(/*WCN:"hotel@facility@new" */'./admin/hotel/hotelSetup/hotel@facility@new'),
},
{
    path: '/hotel@cancellation@policy',
    component:()=>import(/*WCN:"hotel@cancellation@policy" */'./admin/hotel/hotelSetup/hotel@cancellation@policy'),
},
{
    path: '/hotel@cancellation@new',
    component:()=>import(/*WCN:"hotel@cancellation@new" */'./admin/hotel/hotelSetup/hotel@cancellation@new'),
},
{
    path: '/hotel@information@setup',
    component:()=>import(/*WCN:"hotel@information@setup" */'./admin/hotel/hotelSetup/hotel@information@setup'),
},
{
    path: '/new@hotel@setup',
    component:()=>import(/*WCN:"new@hotel@setup" */'./admin/hotel/hotelSetup/new@hotel@setup'),
},
{
    path: '/edit@hotel:id',
    component:()=>import(/*WCN:"new@hotel@setup" */'./admin/hotel/hotelSetup/new@hotel@update'),
},
{
    path: '/create@booking@entry',
    component:()=>import(/*WCN:"create@booking@entry" */'./admin/hotel/hotelSetup/create@booking@entry'),
},
{
    path: '/create@booking@new',
    component:()=>import(/*WCN:"create@booking@new" */'./admin/hotel/hotelSetup/create@booking@new'),
},
{
    path: '/hotel@settings',
    component:()=>import(/*WCN:"hotel@settings" */'./admin/hotel/hotelSetup/hotel@settings'),
},
// ------------ //hotel setup 



// ------------ Hotel Booking 

{
    path: '/hotel@booking@List',
    component:()=>import(/*WCN:"hotel@booking@List" */'./admin/hotel/booking/hotel@booking@List'),
},
{
    path: '/hotel@commission@vat',
    component:()=>import(/*WCN:"hotel@commission@vat" */'./admin/hotel/financeSetup/hotel@commission@vat'),
},
// ------------ // Hotel Booking



// ------------ finance setup 

{
    path: '/hotel@commission@setup',
    component:()=>import(/*WCN:"hotel@commission@setup" */'./admin/hotel/financeSetup/hotel@commission@setup'),
},
{
    path: '/hotel@commission@vat',
    component:()=>import(/*WCN:"hotel@commission@vat" */'./admin/hotel/financeSetup/hotel@commission@vat'),
},
// ------------ //finance setup 





// ------------ room setup 
{
    path: '/room@entry',
    component:()=>import(/*WCN:"room@entry" */'./admin/hotel/roomSetup/room@entry'),
},
{
    path: '/add@new@room',
    component:()=>import(/*WCN:"add@new@room" */'./admin/hotel/roomSetup/add@new@room'),
},
{
    path: '/room@facility@entry',
    component:()=>import(/*WCN:"room@facility@entry" */'./admin/hotel/roomSetup/room@facility@entry'),
},
{
    path: '/room@facility@new',
    component:()=>import(/*WCN:"room@facility@new" */'./admin/hotel/roomSetup/room@facility@new'),
},
{
    path: '/bed@type@entry',
    component:()=>import(/*WCN:"bed@type@entry" */'./admin/hotel/roomSetup/bed@type@entry'),
},
{
    path: '/bed@type@new',
    component:()=>import(/*WCN:"bed@type@new" */'./admin/hotel/roomSetup/bed@type@new'),
},
{
    path: '/room@type@entry',
    component:()=>import(/*WCN:"room@type@entry" */'./admin/hotel/roomSetup/room@type@entry'),
},
{
    path: '/room@type@new',
    component:()=>import(/*WCN:"room@type@new" */'./admin/hotel/roomSetup/room@type@new'),
},
{
    path: '/hotel@room@setup',
    component:()=>import(/*WCN:"hotel@room@setup" */'./admin/hotel/roomSetup/hotel@room@setup'),
},
{
    path: '/edit@room:id',
    component:()=>import(/*WCN:"hotel@room@setup" */'./admin/hotel/roomSetup/update@new@room'),
},
// ------------ //room setup 





// ------------ hotel report 
{
    path: '/hotel@inventory',
    component:()=>import(/*WCN:"hotel@inventory" */'./admin/hotel/hotelReport/hotel@inventory'),

},
{
    path: '/hotel@stock@out',
    component:()=>import(/*WCN:"hotel@inventory" */'./admin/hotel/hotelReport/hotel@stock@out'),

},
{
    path: '/hotel@list',
    component:()=>import(/*WCN:"hotel@list" */'./admin/hotel/hotelReport/hotel@list'),

},
// ------------ //hotel report 






// ------------ hotel sales report 
    {
        path: '/online@new@request',
        component:()=>import(/*WCN:"online@new@request" */'./admin/hotel/hotelSalesReport/online@new@request'),

    },
    {
        path: '/online@pending@request',
        component:()=>import(/*WCN:"online@pending@request" */'./admin/hotel/hotelSalesReport/online@pending@request'),

    },
    {
        path: '/online@cancel@request',
        component:()=>import(/*WCN:"online@cancel@request" */'./admin/hotel/hotelSalesReport/online@cancel@request'),

    },
    {
        path: '/online@accept@list',
        component:()=>import(/*WCN:"online@accept@list" */'./admin/hotel/hotelSalesReport/online@accept@list'),

    },
    {
        path: '/online@sales@complete',
        component:()=>import(/*WCN:"online@sales@complete" */'./admin/hotel/hotelSalesReport/online@sales@complete'),

    },
    // ------------ //hotel sales report 

    
// ===================== / Hotel ====================
// ==================================================







    

// ==================================================
// =====================   Visa  ====================

// --------- visa setup
{path: '/visa@type@entry',
    component:()=>import(/*WCN:"visa@type@entry" */'./admin/visa/visaSetup/visa@type@entry'),},

{path: '/new@visa@type',
    component:()=>import(/*WCN:"new@visa@type" */'./admin/visa/visaSetup/new@visa@type'),},

{path: '/visa@document@entry',
    component:()=>import(/*WCN:"visa@document@entry" */'./admin/visa/visaSetup/visa@document@entry'),},

{path: '/new@visa@document',
    component:()=>import(/*WCN:"new@visa@document" */'./admin/visa/visaSetup/new@visa@document'),},

{path: '/passport@entry',
    component:()=>import(/*WCN:"passport@entry" */'./admin/visa/visaSetup/passport@entry'),},

{path: '/new@passport@entry',
 component:()=>import(/*WCN:"new@passport@entry"*/'./admin/visa/visaSetup/new@passport@entry'),},

 {path: '/visa@processing',
 component:()=>import(/*WCN:"visa@processing"*/'./admin/visa/visaSetup/visa@processing'),},

 {path: '/new@visa@processing',
 component:()=>import(/*WCN:"new@visa@processing"*/'./admin/visa/visaSetup/new@visa@processing'),},

 {path: '/create@booking',
 component:()=>import(/*WCN:"create@booking"*/'./admin/visa/visaSetup/create@booking'),},

 {path: '/new@create@booking',
 component:()=>import(/*WCN:"new@create@booking"*/'./admin/visa/visaSetup/new@create@booking'),},

 {path: '/visa@price@entry',
 component:()=>import(/*WCN:"visa@price@entry"*/'./admin/visa/visaSetup/visa@price@entry'),},

 {path: '/new@visa@price',
 component:()=>import(/*WCN:"new@visa@price"*/'./admin/visa/visaSetup/new@visa@price'),},
 
 {path: '/visa@form@validation',
 component:()=>import(/*WCN:"new@visa@price"*/'./admin/visa/visaSetup/visa@form@validation.vue'),},

// --------- visa report

{path: '/working@country',
component:()=>import(/*WCN:"working@country"*/'./admin/visa/visaReport/working@country'),},

{path: '/visa@document',
component:()=>import(/*WCN:"visa@document"*/'./admin/visa/visaReport/visa@document'),},

{path: '/visa@process',
component:()=>import(/*WCN:"visa@process"*/'./admin/visa/visaReport/visa@process'),},

{path: '/document@need@for@visa',
component:()=>import(/*WCN:"document@need@for@visa"*/'./admin/visa/visaReport/document@need@for@visa'),},

{path: '/visa@process@cancel',
component:()=>import(/*WCN:"visa@process@cancel"*/'./admin/visa/visaReport/visa@process@cancel'),},

{path: '/visa@confirm',
component:()=>import(/*WCN:"visa@confirm"*/'./admin/visa/visaReport/visa@confirm'),},

    
// ===================== / Visa  ====================
// ==================================================
    





// ==================================================
// ===================== Tour management ============

// --------- tour setup
{path: '/tour@location@entry',
component:()=>import(/*WCN:"tour@location@entry"*/'./admin/tour/tourSetup/tour@location@entry'),},

{path: '/new@tour@location',
component:()=>import(/*WCN:"new@tour@location"*/'./admin/tour/tourSetup/new@tour@location'),},

{path: '/tour@product@type',
component:()=>import(/*WCN:"tour@product@type"*/'./admin/tour/tourSetup/tour@product@type'),},

{path: '/new@tour@product@type',
component:()=>import(/*WCN:"new@tour@product@type"*/'./admin/tour/tourSetup/new@tour@product@type'),},
 
{path: '/tour@facility@entry',
component:()=>import(/*WCN:"tour@facility@entry"*/'./admin/tour/tourSetup/tour@facility@entry'),},

{path: '/new@tour@facility',
component:()=>import(/*WCN:"new@tour@facility"*/'./admin/tour/tourSetup/new@tour@facility'),},

{path: '/product@name@entry',
component:()=>import(/*WCN:"product@name@entry"*/'./admin/tour/tourSetup/product@name@entry'),},

{path: '/product@name@new',
component:()=>import(/*WCN:"product@name@new"*/'./admin/tour/tourSetup/product@name@new'),},

{path: '/package@create',
component:()=>import(/*WCN:"package@create"*/'./admin/tour/tourSetup/package@create'),},

{path: '/package@create@new',
component:()=>import(/*WCN:"package@create@new"*/'./admin/tour/tourSetup/package@create@new'),},

{path: '/create@tour@schedule',
component:()=>import(/*WCN:"create@tour@schedule"*/'./admin/tour/tourSetup/create@tour@schedule'),},

{path: '/new@tour@schedule',
component:()=>import(/*WCN:"new@tour@schedule"*/'./admin/tour/tourSetup/new@tour@schedule'),},

{path: '/create@tour@booking',
component:()=>import(/*WCN:"create@tour@booking"*/'./admin/tour/tourSetup/create@tour@booking'),},

{path: '/new@tour@booking',
component:()=>import(/*WCN:"new@tour@booking"*/'./admin/tour/tourSetup/new@tour@booking'),},


// -------- tour report

{path: '/tour@location@list',
component:()=>import(/*WCN:"tour@location@list"*/'./admin/tour/tourReport/tour@location@list'),},

{path: '/tour@product@list',
component:()=>import(/*WCN:"tour@product@list"*/'./admin/tour/tourReport/tour@product@list'),},

{path: '/tour@facility@list',
component:()=>import(/*WCN:"tour@facility@list"*/'./admin/tour/tourReport/tour@facility@list'),},

{path: '/tour@product@name@list',
component:()=>import(/*WCN:"tour@product@name@list"*/'./admin/tour/tourReport/tour@product@name@list'),},

{path: '/tour@package@list',
component:()=>import(/*WCN:"tour@package@list"*/'./admin/tour/tourReport/tour@package@list'),},

{path: '/tour@package@schedule',
component:()=>import(/*WCN:"tour@package@schedule"*/'./admin/tour/tourReport/tour@package@schedule'),},

{path: '/tour@booking@list',
component:()=>import(/*WCN:"tour@booking@list"*/'./admin/tour/tourReport/tour@booking@list'),},


    
// ===================== / Tour management ==========
// ==================================================


// =========================================================
// =====================   sightseeing management ==========    


// -------- sightseeing entry

{path: '/sightseeng@place@entry',
component:()=>import(/*WCN:"sightseeng@place@entry"*/'./admin/sightseeing/sightseeingSetup/place@entry'),},

{path: '/new@place@sightseeing',
component:()=>import(/*WCN:"new@place@sightseeing"*/'./admin/sightseeing/sightseeingSetup/new@place@sightseeing'),},

{path: '/sightseeing@event@entry',
component:()=>import(/*WCN:"sightseeing@event@entry"*/'./admin/sightseeing/sightseeingSetup/sightseeing@event@entry'),},

{path: '/sightseeing@event@new',
component:()=>import(/*WCN:"sightseeing@event@new"*/'./admin/sightseeing/sightseeingSetup/sightseeing@event@new'),},

// {path: '/sightseeing@product@entry',
// component:()=>import(/*WCN:"sightseeing@product@entry"*/'./admin/sightseeing/sightseeingSetup/sightseeing@product@entry'),},

{path: '/sightseeing@product@new',
component:()=>import(/*WCN:"sightseeing@product@new"*/'./admin/sightseeing/sightseeingSetup/sightseeing@product@new'),},

{path: '/sightseeing@product@new1',
component:()=>import(/*WCN:"sightseeing@product@new1"*/'./admin/sightseeing/sightseeingSetup/sightseeing@product@new1'),},

{path: '/sightseeing@facility@entry',
component:()=>import(/*WCN:"sightseeing@facility@entry"*/'./admin/sightseeing/sightseeingSetup/sightseeing@facility@entry'),},

{path: '/sightseeing@facility@new',
component:()=>import(/*WCN:"sightseeing@facility@new"*/'./admin/sightseeing/sightseeingSetup/sightseeing@facility@new'),},

{path: '/sightseeing@activity@entry',
component:()=>import(/*WCN:"sightseeing@activity@entry"*/'./admin/sightseeing/sightseeingSetup/sightseeing@activity@entry'),},

{path: '/sightseeing@activity@new',
component:()=>import(/*WCN:"sightseeing@activity@new"*/'./admin/sightseeing/sightseeingSetup/sightseeing@activity@new'),},

{path: '/sightseeing@time@schedule',
component:()=>import(/*WCN:"sightseeing@time@schedule"*/'./admin/sightseeing/sightseeingSetup/sightseeing@time@schedule'),},

{path: '/sightseeing@timeSchedule@entry',
component:()=>import(/*WCN:"sightseeing@timeSchedule@entry"*/'./admin/sightseeing/sightseeingSetup/sightseeing@timeSchedule@entry'),},

{path: '/sightseeing@booking',
component:()=>import(/*WCN:"sightseeing@booking"*/'./admin/sightseeing/sightseeingSetup/sightseeing@booking'),},

{path: '/sightseeing@booking@new',
component:()=>import(/*WCN:"sightseeing@booking@new"*/'./admin/sightseeing/sightseeingSetup/sightseeing@booking@new'),},

{path: '/product@price@entry',
component:()=>import(/*WCN:"product@price@entry"*/'./admin/sightseeing/sightseeingSetup/product@price@entry'),},

{path: '/product@price@new',
component:()=>import(/*WCN:"product@price@new"*/'./admin/sightseeing/sightseeingSetup/product@price@new'),},



// -------- /sightseeing report

{path: '/sightseeing@place@list',
component:()=>import(/*WCN:"sightseeing@place@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@place@list'),},

{path: '/sightseeing@booking@list',
component:()=>import(/*WCN:"sightseeing@booking@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@booking@list'),},

{path: '/sightseeing@event@list',
component:()=>import(/*WCN:"sightseeing@event@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@event@list'),},

{path: '/sightseeing@facility@list',
component:()=>import(/*WCN:"sightseeing@facility@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@facility@list'),},

{path: '/sightseeing@activity@list',
component:()=>import(/*WCN:"sightseeing@activity@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@activity@list'),},

{path: '/sightseeing@product@name@list',
component:()=>import(/*WCN:"sightseeing@product@name@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@product@name@list'),},

{path: '/sightseeing@schedule@list',
component:()=>import(/*WCN:"sightseeing@schedule@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@schedule@list'),},

{path: '/sightseeing@product@price@list',
component:()=>import(/*WCN:"sightseeing@product@price@list"*/'./admin/sightseeing/sightseeingReport/sightseeing@product@price@list'),},



// ===================== / sightseeing management ==========
// =========================================================





// =========================================================
// ===================== Transport Management ==============

// -------- transport setup

{path: '/transport@location@entry',
component:()=>import(/*WCN:"transport@location@entry"*/'./admin/transport/transportSetup/transport@location@entry'),},

{path: '/transport@location@new',
component:()=>import(/*WCN:"transport@location@new"*/'./admin/transport/transportSetup/transport@location@new'),},

{path: '/transport@vendor@entry',
component:()=>import(/*WCN:"transport@vendor@entry"*/'./admin/transport/transportSetup/transport@vendor@entry'),},

{path: '/transport@vendor@new',
component:()=>import(/*WCN:"transport@vendor@new"*/'./admin/transport/transportSetup/transport@vendor@new'),},

{path: '/transport@car@entry',
component:()=>import(/*WCN:"transport@car@entry"*/'./admin/transport/transportSetup/transport@car@entry'),},

{path: '/transport@car@new',
component:()=>import(/*WCN:"transport@car@new"*/'./admin/transport/transportSetup/transport@car@new'),},

{path: '/transport@facility@entry',
component:()=>import(/*WCN:"transport@facility@entry"*/'./admin/transport/transportSetup/transport@facility@entry'),},

{path: '/transport@facility@new',
component:()=>import(/*WCN:"transport@facility@new"*/'./admin/transport/transportSetup/transport@facility@new'),},

{path: '/transport@driver@entry',
component:()=>import(/*WCN:"transport@driver@entry"*/'./admin/transport/transportSetup/transport@driver@entry'),},

{path: '/transport@driver@new',
component:()=>import(/*WCN:"transport@driver@new"*/'./admin/transport/transportSetup/transport@driver@new'),},

{path: '/transport@price@entry',
component:()=>import(/*WCN:"transport@price@entry"*/'./admin/transport/transportSetup/transport@price@entry'),},

{path: '/transport@price@new',
component:()=>import(/*WCN:"transport@price@new"*/'./admin/transport/transportSetup/transport@price@new'),},

{path: '/transport@carExpense@entry',
component:()=>import(/*WCN:"transport@carExpense@entry"*/'./admin/transport/transportSetup/transport@carExpense@entry'),},

{path: '/transport@carExpense@new',
component:()=>import(/*WCN:"transport@carExpense@new"*/'./admin/transport/transportSetup/transport@carExpense@new'),},

{path: '/transport@rent@entry',
component:()=>import(/*WCN:"transport@rent@entry"*/'./admin/transport/transportSetup/transport@rent@entry'),},

{path: '/transport@rent@new',
component:()=>import(/*WCN:"transport@rent@new"*/'./admin/transport/transportSetup/transport@rent@new'),},


// -------- transport report

{path: '/transport@location@list',
component:()=>import(/*WCN:"transport@location@list"*/'./admin/transport/transportReport/transport@location@list'),},

{path: '/transport@vendor@list',
component:()=>import(/*WCN:"transport@vendor@list"*/'./admin/transport/transportReport/transport@vendor@list'),},

{path: '/transport@car@list',
component:()=>import(/*WCN:"transport@car@list"*/'./admin/transport/transportReport/transport@car@list'),},

{path: '/transport@facility@list',
component:()=>import(/*WCN:"transport@facility@list"*/'./admin/transport/transportReport/transport@facility@list'),},

{path: '/transport@driver@list',
component:()=>import(/*WCN:"transport@driver@list"*/'./admin/transport/transportReport/transport@driver@list'),},

{path: '/transport@price@list',
component:()=>import(/*WCN:"transport@price@list"*/'./admin/transport/transportReport/transport@price@list'),},

{path: '/transport@carExpense@list',
component:()=>import(/*WCN:"transport@carExpense@list"*/'./admin/transport/transportReport/transport@carExpense@list'),},

{path: '/transport@rent@list',
component:()=>import(/*WCN:"transport@rent@list"*/'./admin/transport/transportReport/transport@rent@list'),},



// ===================== / Transport management ===========
// =========================================================












// =========================================================
// =====================  quotation management   ===========

//------------  quotation entry
{path: '/quotation@entry',
component:()=>import(/*WCN:"quotation@entry"*/'./admin/quotation/quotationSetup/quotation@entry'),},

{path: '/new@quotation',
component:()=>import(/*WCN:"new@quotation"*/'./admin/quotation/quotationSetup/new@quotation'),},


// ----------- quotation report

{path: '/quotation@list',
component:()=>import(/*WCN:"quotation@list"*/'./admin/quotation/quotationReport/quotation@list'),},


// ===================== / quotation  management ===========
// =========================================================





// =========================================================
// =====================  Accounting management   ===========

//------------  accounting voucher entry
{path: '/cash@payment@voucher',
component:()=>import(/*WCN:"cash@payment@voucher"*/'./admin/accounting/accountingVoucher/cash@payment@voucher'),},

{path: '/cash@payment@voucher@new',
component:()=>import(/*WCN:"cash@payment@voucher@new"*/'./admin/accounting/accountingVoucher/cash@payment@voucher@new'),},

{path: '/cash@receipt@voucher',
component:()=>import(/*WCN:"cash@receipt@voucher@"*/'./admin/accounting/accountingVoucher/cash@receipt@voucher'),},

{path: '/cash@receipt@voucher@new',
component:()=>import(/*WCN:"cash@receipt@voucher@new"*/'./admin/accounting/accountingVoucher/cash@receipt@voucher@new'),},

{path: '/bank@payment@voucher',
component:()=>import(/*WCN:"bank@payment@voucher"*/'./admin/accounting/accountingVoucher/bank@payment@voucher'),},

{path: '/bank@payment@voucher@new',
component:()=>import(/*WCN:"bank@payment@voucher@new"*/'./admin/accounting/accountingVoucher/bank@payment@voucher@new'),},

{path: '/bank@receipt@voucher',
component:()=>import(/*WCN:"bank@receipt@voucher"*/'./admin/accounting/accountingVoucher/bank@receipt@voucher'),},

{path: '/bank@receipt@voucher@new',
component:()=>import(/*WCN:"bank@receipt@voucher@new"*/'./admin/accounting/accountingVoucher/bank@receipt@voucher@new'),},
 

{path: '/journal@voucher',
component:()=>import(/*WCN:"journal@voucher"*/'./admin/accounting/accountingVoucher/journal@voucher@entry'),},
 
{path: '/journal@voucher@new',
component:()=>import(/*WCN:"journal@voucher@new"*/'./admin/accounting/accountingVoucher/journal@voucher@new'),},
 
{path: '/contra@voucher',
component:()=>import(/*WCN:"contra@voucher"*/'./admin/accounting/accountingVoucher/contra@voucher'),},
 
{path: '/contra@voucher@new',
component:()=>import(/*WCN:"contra@voucher@new"*/'./admin/accounting/accountingVoucher/contra@voucher@new'),},
 

// ----------- Accounting report

{path: '/voucher@list',
component:()=>import(/*WCN:"voucher@list"*/'./admin/accounting/report/voucher@list'),},

{path: '/general@journal',
component:()=>import(/*WCN:"general@journal"*/'./admin/accounting/report/general@journal'),},

{path: '/general@ledger',
component:()=>import(/*WCN:"general@ledger"*/'./admin/accounting/report/general@ledger'),},

{path: '/income@summery',
component:()=>import(/*WCN:"general@ledger"*/'./admin/accounting/report/income@summery'),},

{path: '/expense@summery',
component:()=>import(/*WCN:"expense@summery"*/'./admin/accounting/report/expense@summery'),},


// ----------- Bank Entry

{path: '/bank@entry',
component:()=>import(/*WCN:"bank@entry"*/'./admin/accounting/bankManagement/bank@entry'),},

{path: '/bank@entry@new',
component:()=>import(/*WCN:"bank@entry@new"*/'./admin/accounting/bankManagement/bank@entry@new'),},

{path: '/cheque@entry',
component:()=>import(/*WCN:"cheque@entry"*/'./admin/accounting/bankManagement/cheque@entry'),},

{path: '/cheque@entry@new',
component:()=>import(/*WCN:"cheque@entry@new"*/'./admin/accounting/bankManagement/cheque@entry@new'),},

 
// ===================== / Accounting management ===========
// =========================================================

 
// =========================================================
// ===================== Front office  =====================

//  ---------------- query center 
{path: '/queryCenter',
component:()=>import(/*WCN:"queryCenter"*/'./admin/frontOffice/queryCenter/query@center'),},

// ===================== / Front office  ===================
// =========================================================

 







 
// =========================================================
// ===================== system  =====================

//  ---------------- Company Registration 
{path: '/companyRegistration',
    component:()=>import(/*WCN:"companyRegistration"*/'./admin/system/company/companyRegistration'),},

{path: '/companyRegistration@Edit:id',
    component:()=>import(/*WCN:"companyRegistration@Edit"*/'./admin/system/company/companyRegistration@Edit'),},

{path: '/informationneedAdminshop',
    component: () => import(/* webpackChunkName: "information-need-shop" */'./admin/shopverification/InformationNeedAdmin'),},

{path: '/adminReportShopList',
    component: () => import(/* webpackChunkName: "adminReportShopList" */'./admin/shopInformation/adminReportShopList'),},

    // shop verification
    {
        path: '/newshop',
        component: () => import(/* webpackChunkName: "new-shop" */'./admin/shopverification/NewShop'),

    },
    {
        path: '/verifiedshop',
        component: () => import(/* webpackChunkName: "verified-shop" */'./admin/shopverification/VerifiedShop'),

    },
    {
        path: '/deliveredshop',
        component: () => import(/* webpackChunkName: "delivered-shop" */'./admin/shopverification/Delivered'),

    },
    {
        path: '/billingnewshop',
        component: () => import(/* webpackChunkName: "billing-new-shop" */'./admin/billingAdmin/BillingNewShop'),

    },
    {
        path: '/adminReportShopList',
        component: () => import(/* webpackChunkName: "adminReportShopList" */'./admin/shopInformation/adminReportShopList'),
    
    },

    {
        path: '/pendingshop',
        component: () => import(/* webpackChunkName: "pending-shop" */'./admin/shopverification/PendingShop'),

    },
    {
        path: '/cancelshop',
        component: () => import(/* webpackChunkName: "cancel-shop" */'./admin/shopverification/CancelShop'),

    },
    {
        path: '/informationneedshop',
        component: () => import(/* webpackChunkName: "informatiom-shop-seed" */'./admin/shopverification/InformationNeed'),

    },
    {
        path: '/cancelbillingshop',
        component: () => import(/* webpackChunkName: "cancelbillingshop" */'./admin/billingAdmin/BillingCancel'),

    },
    {
        path: '/pendingbillingshop',
        component: () => import(/* webpackChunkName: "pending-billing-shop" */'./admin/billingAdmin/BillingPending'),

    },
    {
        path: '/deliveredbillingshop',
        component: () => import(/* webpackChunkName: "deliveredbillingshop" */'./admin/billingAdmin/BillingDelivered'),

    },
    {
        path: '/active@shop@list',
        component: () => import(/* webpackChunkName: "active@shop@list" */'./admin/shopInformation/active@shop@list'),
    
        },
// ===================== / system  ===================
// =========================================================


]