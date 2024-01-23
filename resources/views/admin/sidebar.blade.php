@if(Auth::check())
@if(Auth::check())
<div class="app-sidebar sidebar-shadow ">
  <div class="app-header__logo">
    <div class="logo-src"></div>
    <div class="header__pane ml-auto">
      <div>
        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="app-header__mobile-menu">
    <div>
      <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
  <div class="app-header__menu">
    <span>
      <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
        <span class="btn-icon-wrapper">
          <i class="fa fa-ellipsis-v fa-w-6"></i>
        </span>
      </button>
    </span>
  </div>


  <div class="sidebar-wrapper ">
    @if (Auth::user()->role == 1)
    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading">Menu Create</li>
        <li>
          <router-link to="/home" id="icon0">
            <i class="metismenu-icon pe-7s-home icon-gradient bg-love-kiss"></i>
            Dashboard 
          </router-link>
        </li>
        {{--............................................... Configaration Setup......................................--}}
     
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
        <li role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOneConfig" aria-expanded="true" aria-controls="collapseOne">
          <a href="#" id="icon0">
            <i class="metismenu-icon pe-7s-tools icon-gradient bg-arielle-smile"></i>
            Configuration 
            <i class="metismenu-state-icon pe-7s-plus caret-left"></i>
            <i class="metismenu-state-icon1 pe-7s-less caret-left"></i>
          </a>
         
        </li>
        <div id="collapseOneConfig" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      <ul>

<!-- <li class="block-element-btn-example-1 hamburger ">
  <router-link to="/databaseSeeds">
    <i class="metismenu-icon"></i>
    Database Seeds
  </router-link>
</li> -->

<li class="block-element-btn-example-1 hamburger">
  <router-link to="/adminmenu@title">
    <i class="metismenu-icon"></i>
    Admin Menu Title
  </router-link>
</li>
<li class="block-element-btn-example-1 hamburger">
  <router-link to="/adminmenu@create">
    <i class="metismenu-icon"></i>
    Admin Menu Create
  </router-link>
</li>

<li class="block-element-btn-example-1 hamburger">
  <router-link to="/adminsubmenu@create">
    <i class="metismenu-icon"></i>
    Admin Sub Menu Create
  </router-link>
</li>

<li class="block-element-btn-example-1 hamburger">
  <router-link to="/designation@entry">
    <i class="metismenu-icon"></i>
    Designation Entry
  </router-link>
</li>

<li class="block-element-btn-example-1 hamburger">
  <router-link to="/payment@method@entry">
    <i class="metismenu-icon"></i>
    Payment Method Entry
  </router-link>
</li>

<li class="block-element-btn-example-1 hamburger">
  <router-link to="/day@of@week">
    <i class="metismenu-icon"></i>
    Day of week
  </router-link>
</li>

<li class="block-element-btn-example-1 hamburger">
  <router-link to="/companyRegistration">
    <i class="metismenu-icon"></i>
    Company Registration
  </router-link>
</li>

</ul>
      </div>
        </div>


        {{--............................................... Configaration Setup ......................................--}}
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
       
       
        </li>
        {{--...............................................End Configaration Setup......................................--}}
      </ul>
    </div>

    @endif

    {{--------------------------------- User Menu ----------------------------}}
    @if (Auth::user()->role == 1)
    {{---------------------------------------- Admin Menu ----------------------------------------}}
    @php
    $adminMenuTitleNames = App\AdminMenuTitleName::where('adminMenuTitleStatus',1)->orderBy('adminMenuTitlePosition','asc')->get();
    @endphp

    @foreach ($adminMenuTitleNames as $adminMenuTitleName)
    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading"> {{ $adminMenuTitleName->adminMenuTitleName }}</li>
        @php
        $adminMenuLists = App\AdminMenu::where('adminMenuTitleId',$adminMenuTitleName->adminMenuTitleId )->where('adminMenuStatus',1)->orderBy('adminMenuPosition','asc')->get();
        @endphp
        @foreach ($adminMenuLists as $adminMenuList)
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
     
         <li role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne{{$adminMenuList->adminMenuId}}" aria-expanded="true" aria-controls="collapseOne">
          <{{ ($adminMenuList->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$adminMenuList->adminMenuUrl" }}>
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <span class="icon-wrapper-bg bg-danger">
              <i class="metismenu-icon  {{ $adminMenuList->adminMenuIcon }}  bg-info text-white rounded"></i>
            </span>
            @else
            <i class="metismenu-icon {{ $adminMenuList->adminMenuIcon }}  bg-danger text-white rounded"></i>
            @endif
            {{ $adminMenuList->adminMenuName }}
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-plus caret-left"></i>
            <i class="metismenu-state-icon1 pe-7s-less caret-left"></i>
            @endif
            <{{ ($adminMenuList->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>
            </li >
      
  
      </div>
      <div id="collapseOne{{$adminMenuList->adminMenuId}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
              @if ( $adminMenuList->adminSubMenuStatus == 1 )
              <ul>
                @php
                $AdminSubMenuLists = App\AdminSubMenu::where('adminMenuId',$adminMenuList->adminMenuId)->where('adminSubMenueStatus',1)->orderBy('adminSubMenuePosition','asc')->get();
                @endphp
                @foreach ($AdminSubMenuLists as $AdminSubMenuList)
                <li class="block-element-btn-example-1 hamburger">
                  <router-link to="/{{ $AdminSubMenuList->adminSubMenuUrl }}">
                    <i class="metismenu-icon"></i>
                    {{ $AdminSubMenuList->adminSubMenuName }}
                  </router-link>
                </li>
                @endforeach
              </ul>
              @endif
              </div>
              </div>
              </div>
              </div>
        @endforeach
      </ul>
    </div>
    @endforeach

    @elseif (Auth::user()->role == 2)
    @php
    $menuTitleNames = App\AdminMenuPermission::where('adminId', Auth::user()->adminId)->where('permissionStatus',1)->distinct()->get(['menuTitleId']);
    @endphp

    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        @foreach ($menuTitleNames as $menuTitleName)
        @php
        $menuTitleNames = App\AdminMenuTitleName::where('adminMenuTitleId', $menuTitleName->menuTitleId)->where('adminMenuTitleStatus',1)->orderBy('adminMenuTitlePosition','asc')->get()
        @endphp
        @foreach ($menuTitleNames as $menuTitleName)
        <li class="app-sidebar__heading"> {{ $menuTitleName->adminMenuTitleName }}</li>
        @endforeach
        @php
        $menuNameIds = App\AdminMenuPermission::where('adminId', Auth::user()->adminId)->where('permissionStatus',1)->distinct()->orderBy('menuId','asc')->get(['menuId']);
        @endphp
        @foreach ($menuNameIds as $menuNameId)
        @php
        $menuNames = App\AdminMenu::where('adminMenuId', $menuNameId->menuId)->where('adminMenuTitleId', $menuTitleName->adminMenuTitleId)->where('adminMenuStatus',1)->get()
        @endphp
        @foreach ($menuNames as $menuName)
        <li>
          <{{ ($menuName->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$menuName->adminMenuUrl" }}>
            @if ($menuName->adminSubMenuStatus == 1)
            <i class="metismenu-icon pe-7s-browser"></i>
            @else
            <i class="metismenu-icon pe-7s-angle-right"></i>
            @endif
            {{ $menuName->adminMenuName }}
            @if ($menuName->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-plus caret-left"></i>
            <i class="metismenu-state-icon1 pe-7s-less caret-left"></i>
            @endif
            <{{ ($menuName->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>

              @if ( $menuName->adminSubMenuStatus == 1 )

              <ul>
                @php
                $subMenuIds = App\AdminMenuPermission::where('adminId', Auth::user()->adminId)->where('permissionStatus',1)->distinct()->get(['subMenuId']);
                @endphp
                @foreach ($subMenuIds as $subMenuId)
                @php
                $sunMenuNames = App\AdminSubMenu::where('adminSubMenuId', $subMenuId->subMenuId)->where('adminMenuId', $menuNameId->menuId)->where('adminSubMenueStatus',1)->get()
                @endphp
                @foreach ($sunMenuNames as $sunMenuName)
                <li class="block-element-btn-example-1 ">
                  <router-link to="/{{ $sunMenuName->adminSubMenuUrl }}">
                    <i class="metismenu-icon"></i>
                    {{ $sunMenuName->adminSubMenuName }}
                  </router-link>
                </li>
                @endforeach
                @endforeach
              </ul>
              @endif
        </li>
        @endforeach
        @endforeach
        @endforeach
      </ul>
    </div>


    @elseif (Auth::user()->role == 3)
    @if(Auth::user()->status!=50)
    <div class="app-sidebar__inner ">
 
      <ul class="vertical-nav-menu">
        <!-- <li class="app-sidebar__heading"> Menu Permission </li> -->

        <li class="hamburger">
          <router-link to="/shop" id="icon0">
            <i class="metismenu-icon pe-7s-home icon-gradient bg-love-kiss"></i>
            Dashboard 
          </router-link>
        </li>
      </ul>
    </div>

    @php
    $adminMenuTitleNames = App\AdminMenuTitleName::where('adminMenuTitleStatus',1)->where('adminMenuTitlePermission',1)->orderBy('adminMenuTitlePosition','asc')->get();
    @endphp

    @foreach ($adminMenuTitleNames as $adminMenuTitleName)
    <div class="app-sidebar__inner ">
      <ul class="vertical-nav-menu ">
        
        <li class="app-sidebar__heading {{$adminMenuTitleName->adminMenuTitleIcon}} "> 
        @php 
        if(Auth::user()->language==1){
          echo $adminMenuTitleName->adminMenuTitleName;
        }else{
          echo $adminMenuTitleName->adminMenuTitleNameBn;
        }
        @endphp
          </li>
        @php
        $adminMenuLists = App\AdminMenu::where('adminMenuTitleId',$adminMenuTitleName->adminMenuTitleId )->where('adminMenuStatus',1)->orderBy('adminMenuPosition','asc')->get();
        @endphp
        @foreach ($adminMenuLists as $adminMenuList)
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
     
         <li role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne{{$adminMenuList->adminMenuId}}" aria-expanded="true" aria-controls="collapseOne">
         <{{ ($adminMenuList->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$adminMenuList->adminMenuUrl class=hamburger " }}>
            
            <i class="metismenu-icon {{$adminMenuList->adminMenuIcon}}"></i>
            
             
            
                    @php 
                if(Auth::user()->language==1){
                  echo $adminMenuList->adminMenuName;
                }else{
                  echo $adminMenuList->adminMenuNameBn;
                }
                @endphp



            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-plus caret-left" style="font-size:15px;line-height:50px;"></i>
            <i class="metismenu-state-icon pe-7s-less caret-left" style="font-size:15px;line-height:50px;"></i>
            @endif
            <{{ ($adminMenuList->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>
              
            </li >
      
  
    </div>
    <div id="collapseOne{{$adminMenuList->adminMenuId}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
      @if ( $adminMenuList->adminSubMenuStatus == 1 )
              <ul>
                @php
                $AdminSubMenuLists = App\AdminSubMenu::where('adminMenuId',$adminMenuList->adminMenuId)->where('adminSubMenueStatus',1)->where('adminSubMenuePermission',1)->orderBy('adminSubMenuePosition','asc')->get();
                @endphp
                @foreach ($AdminSubMenuLists as $AdminSubMenuList)
                <li class="block-element-btn-example-1 hamburger ">
                  <router-link to="/{{ $AdminSubMenuList->adminSubMenuUrl }}">
                    <i class="metismenu-icon"></i>

                    @php 
                if(Auth::user()->language==1){
                  echo $AdminSubMenuList->adminSubMenuName;
                }else{
                  echo $AdminSubMenuList->adminSubMenuNameBn;
                }
                @endphp

                    
                  </router-link>
                </li>
                @endforeach
              </ul>
              @endif
      </div>
    </div>
  </div>
 

</div>
        <!-- <li data-toggle="collapse" data-parent="#accordion" href="#collapseOne{{$adminMenuList->adminMenuId}}" aria-expanded="true" aria-controls="collapseOne1">
          <{{ ($adminMenuList->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$adminMenuList->adminMenuUrl class=hamburger " }}>
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-icon pe-7s-browser"></i>
            @else
            <i class="metismenu-icon pe-7s-angle-right"></i>
            @endif
            {{ $adminMenuList->adminMenuName }}
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-plus caret-left"></i>
            <i class="metismenu-state-icon1 pe-7s-less caret-left"></i>
            @endif
            <{{ ($adminMenuList->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>

              @if ( $adminMenuList->adminSubMenuStatus == 1 )
              <ul  id="collapseOne{{$adminMenuList->adminMenuId}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne1">
                @php
                $AdminSubMenuLists = App\AdminSubMenu::where('adminMenuId',$adminMenuList->adminMenuId)->where('adminSubMenueStatus',1)->where('adminSubMenuePermission',1)->orderBy('adminSubMenuePosition','asc')->get();
                @endphp
                @foreach ($AdminSubMenuLists as $AdminSubMenuList)
                <li class="block-element-btn-example-1 hamburger ">
                  <router-link to="/{{ $AdminSubMenuList->adminSubMenuUrl }}">
                    <i class="metismenu-icon"></i>
                    {{ $AdminSubMenuList->adminSubMenuName }}
                  </router-link>
                </li>
                @endforeach
              </ul>
              @endif
        </li> -->
        @endforeach
      </ul>
    </div>
    @endforeach







    @else

    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="col-12" style="padding-top: 16px;">
            <div class="alert alert-danger alert-dismissible fade show border border-danger" role="alert" style="overflow:hidden;">

              <div class="float-left">
                @php
                $getNoti=App\ExpireDateNotification::first();
                @endphp
                <h4 class="alert-heading">
                  <span class="pe-7s-attention"></span>
                  {{ $getNoti->title}}
                </h4>
                <h6> {{ $getNoti->details}} <button class="border-0 btn-transition btn btn-outline-danger">1200 tk.</button> </h6>
              </div>
              <div class="float-right">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading"> Menu Permission </li>

        <li>
          <a data-toggle="modal" data-target=".bd-example-modal-lg" to="/home" id="icon0">
            <i class="metismenu-icon pe-7s-home icon-gradient bg-love-kiss"></i>
            Dashboard 
          </a>
        </li>



      </ul>
    </div>

    @php
    $adminMenuTitleNames = App\AdminMenuTitleName::where('adminMenuTitleStatus',1)->where('adminMenuTitlePermission',1)->orderBy('adminMenuTitlePosition','asc')->get();
    @endphp

    @foreach ($adminMenuTitleNames as $adminMenuTitleName)
    <div class="app-sidebar__inner ">
      <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading">5 {{ $adminMenuTitleName->adminMenuTitleName }}</li>
        @php
        $adminMenuLists = App\AdminMenu::where('adminMenuTitleId',$adminMenuTitleName->adminMenuTitleId )->where('adminMenuStatus',1)->orderBy('adminMenuPosition','asc')->get();
        @endphp
        @foreach ($adminMenuLists as $adminMenuList)
        <li>
          <{{ ($adminMenuList->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$adminMenuList->adminMenuUrl" }}>
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-icon pe-7s-browser"></i>
            @else
            <i class="metismenu-icon pe-7s-angle-right"></i>
            @endif
            {{ $adminMenuList->adminMenuName }}
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
            @endif
            <{{ ($adminMenuList->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>

              @if ( $adminMenuList->adminSubMenuStatus == 1 )
              <ul>
                @php
                $AdminSubMenuLists = App\AdminSubMenu::where('adminMenuId',$adminMenuList->adminMenuId)->where('adminSubMenueStatus',1)->orderBy('adminSubMenuePosition','asc')->get();
                @endphp
                @foreach ($AdminSubMenuLists as $AdminSubMenuList)
                <li class="block-element-btn-example-1">
                  <a data-toggle="modal" data-target=".bd-example-modal-lg" to="/{{ $AdminSubMenuList->adminSubMenuUrl }}">
                    <i class="metismenu-icon"></i>
                    {{ $AdminSubMenuList->adminSubMenuName }}
                  </a>
                </li>
                @endforeach
              </ul>
              @endif
        </li>
        @endforeach
      </ul>
    </div>
    @endforeach
    @endif
    @elseif (Auth::user()->role == 4)

    @php
    $menuTitleNames = App\ShopMenuPermission::where('employeeEntryId', Auth::user()->employeeId)->where('permissionStatus',1)->distinct()->get(['menuTitleId']);
    @endphp

    <div class="app-sidebar__inner ">
      <ul class="vertical-nav-menu ">
        
      @foreach ($menuTitleNames as $menuTitleName)
        @php
        $menuTitleNames = App\AdminMenuTitleName::where('adminMenuTitleId', $menuTitleName->menuTitleId)->where('adminMenuTitleStatus',1)->orderBy('adminMenuTitlePosition','asc')->get()
        @endphp
        @foreach ($menuTitleNames as $menuTitleName)
        <li class="app-sidebar__heading">{{ $menuTitleName->adminMenuTitleName }}</li>
        @endforeach
          



        @php
        $menuNameIds = App\ShopMenuPermission::where('employeeEntryId', Auth::user()->employeeId)->where('permissionStatus',1)->distinct()->orderBy('menuId','asc')->get(['menuId']);
        @endphp
        @foreach ($menuNameIds as $menuNameId)
        @php
        $menuNames = App\AdminMenu::where('adminMenuId', $menuNameId->menuId)->where('adminMenuTitleId', $menuTitleName->adminMenuTitleId)->where('adminMenuStatus',1)->get()
        @endphp
        @foreach ($menuNames as $menuName)
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
     
         <li 
         {{ ($menuName->adminSubMenuStatus == 1)? "class=" : "class=hamburger" }}
         role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne{{$menuName->adminMenuId}}" aria-expanded="true" aria-controls="collapseOne">
         <{{ ($menuName->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$menuName->adminMenuUrl" }}>
            @if ($menuName->adminSubMenuStatus == 1)
            <i class="metismenu-icon pe-7s-browser"></i>
            @else
            <i class="metismenu-icon pe-7s-angle-right"></i>
            @endif
            {{ $menuName->adminMenuName }}
            @if ($menuName->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-plus caret-left"></i>
            <i class="metismenu-state-icon1 pe-7s-less caret-left"></i>
            @endif
            <{{ ($menuName->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>
            </li>
      
  
    </div>
    @if ($menuName->adminSubMenuStatus == 1)
    <div id="collapseOne{{$menuName->adminMenuId}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
       
      @if ( $menuName->adminSubMenuStatus == 1 )

            <ul>
              @php
              $subMenuIds = App\ShopMenuPermission::where('employeeEntryId', Auth::user()->employeeId)->where('permissionStatus',1)->distinct()->get(['subMenuId']);
              @endphp
              @foreach ($subMenuIds as $subMenuId)
              @php
              $sunMenuNames = App\AdminSubMenu::where('adminSubMenuId', $subMenuId->subMenuId)->where('adminMenuId', $menuNameId->menuId)->where('adminSubMenueStatus',1)->get()
              @endphp
              @foreach ($sunMenuNames as $sunMenuName)
              <li class="block-element-btn-example-1 hamburger ">
                <router-link to="/{{ $sunMenuName->adminSubMenuUrl }}">
                  <i class="metismenu-icon"></i>
                  {{ $sunMenuName->adminSubMenuName }}
                </router-link>
              </li>
              @endforeach
              @endforeach
            </ul>
            @endif
               
      </div>
    </div>
    @endif
  </div>
 

</div>

@endforeach
@endforeach

      </ul>
    </div>

    @endforeach

    @endif
    @endif
    <p style="height:200px"></p>
  </div>
</div>
@endif






<!-- ======================== not working ========== -->

@if(0)
<div class="app-sidebar sidebar-shadow ">
  <div class="app-header__logo">
    <div class="logo-src"></div>
    <div class="header__pane ml-auto">
      <div>
        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="app-header__mobile-menu">
    <div>
      <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
  <div class="app-header__menu">
    <span>
      <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
        <span class="btn-icon-wrapper">
          <i class="fa fa-ellipsis-v fa-w-6"></i>
        </span>
      </button>
    </span>
  </div>


  <div class="scrollbar-sidebar">


    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading"> Menu Create </li>
        <li>
          <router-link to="/shop" id="icon0">
            <i class="metismenu-icon pe-7s-home icon-gradient bg-love-kiss"></i>
            Dashboard 
          </router-link>
        </li>
      </ul>
    </div>

    @php
    $adminMenuTitleNames = App\AdminMenuTitleName::where('adminMenuTitleStatus',1)->where('adminMenuTitlePermission',1)->orderBy('adminMenuTitlePosition','ASC')->get();
    @endphp

    @foreach ($adminMenuTitleNames as $adminMenuTitleName)
    <div class="app-sidebar__inner">
      <ul class="vertical-nav-menu">
        <li class="app-sidebar__heading">7 {{ $adminMenuTitleName->adminMenuTitleName }}</li>
        @php
        $adminMenuLists = App\AdminMenu::where('adminMenuTitleId',$adminMenuTitleName->adminMenuTitleId )->where('adminMenuStatus',1)->orderBy('adminMenuPosition','ASC')->get();
        @endphp
        @foreach ($adminMenuLists as $adminMenuList)
        <li>
          <{{ ($adminMenuList->adminSubMenuStatus == 1)? "a href=#" : "router-link to=/$adminMenuList->adminMenuUrl" }}>
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-icon pe-7s-browser"></i>
            @else
            <i class="metismenu-icon pe-7s-angle-right"></i>
            @endif
            {{ $adminMenuList->adminMenuName }}
            @if ($adminMenuList->adminSubMenuStatus == 1)
            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
            @endif
            <{{ ($adminMenuList->adminSubMenuStatus == 1)? "/a" : "/router-link" }}>

              @if ( $adminMenuList->adminSubMenuStatus == 1 )
              <ul>
                @php
                $AdminSubMenuLists = App\AdminSubMenu::where('adminMenuId',$adminMenuList->adminMenuId)->where('adminSubMenueStatus',1)->orderBy('adminSubMenuePosition','asc')->get();
                @endphp
                @foreach ($AdminSubMenuLists as $AdminSubMenuList)
                <li class="block-element-btn-example-1">
                  <router-link to="/{{ $AdminSubMenuList->adminSubMenuUrl }}">
                    <i class="metismenu-icon"></i>
                    {{ $AdminSubMenuList->adminSubMenuName }}
                  </router-link>
                </li>
                @endforeach
              </ul>
              @endif
        </li>
        @endforeach

      </ul>

    </div>
    @endforeach




  </div>
</div>
@endif

<!-- ======================== not working ========== -->