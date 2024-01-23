<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> Update Room 
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/hotel@room@setup" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"> < Back </router-link>
          </div>

        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="htlRomInformationUpdate()">
            <div
              class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color
              ">
           
            <div class="row d-none">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                    <div class="form-group mb-4">
                      <select class="form-control mx-auto"
             v-model="form.hotel_id"
             @change="getHotelInfo()">
             <option value=""> Select Hotel </option>
             <option v-for="hotelList in hotelLists" :value="hotelList.id"> {{ hotelList.hotel_name }}    </option>
             </select>
               </div>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal">
                         <i class="fa fa-eye"></i> Overview
                     </button>
 

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                </div>
            </div>


                 <div class="card-header card-header-tab-animation mb-2">
                <ul class="nav nav-justified">
                  <li class="nav-item border-right">
                     <a class="nav-link active"  @click="setTabInfo(1)" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">General</a>
                  </li>
                  <li class="nav-item border-right">
                    <a class="nav-link"  @click="setTabInfo(2)" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Amenities</a>
                  </li>
                  <li class="nav-item border-right">
                   <a class="nav-link" @click="setTabInfo(3)" id="pills-policy-tab" data-toggle="pill" href="#pills-policy" role="tab" aria-controls="pills-policy" aria-selected="false"> Room Gallery </a>
                  </li>
                  <li class="nav-item border-right">
                    <a class="nav-link" @click="setTabInfo(4)" id="pills-translate-tab" data-toggle="pill" href="#pills-translate" role="tab" aria-controls="pills-translate" aria-selected="false"> Translate</a>
                  </li>
                </ul>
            </div>


                <div class="tab-content" id="pills-tabContent">

                    <!-- =================================== general  -->
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                   
                   
                  <div class="form-group">
                        <label> Hotel Code</label>
                        <input type="text"  v-model="form.hotel_code" disabled class="form-control" value="">
                    </div>
                   
                    <div class="form-group">
                        <label> Hotel Name</label>
                        <input type="text" v-model="form.hotel_name" disabled class="form-control" value="Welcome Plaza Hotel">
                    </div>
                    
                    <div class="form-group">
                     <label> Room Type
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                    <select class="form-control" v-model="form.room_type_id"  :class="{ 'is-invalid': form.errors.has('room_type_id') }">
                    <option value=""> Select Room Type </option>
                    <option v-for="roomTypeList in roomTypeLists" :value="roomTypeList.id"> {{ roomTypeList.room_type_name }}    </option>
                      
                    </select> 
                    <has-error :form="form" field="room_type_id"></has-error> 
                      </div>

                    <div class="form-group">
                     <label> Bed Type
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                    <select class="form-control" v-model="form.bed_type_id"
                    @change="htlRomPricingShow(),getRoomImageList()" :class="{ 'is-invalid': form.errors.has('bed_type_id') }"> 
                    <option value=""> Select Bed Type </option>
                    <option v-for="bedTypeList in bedTypeLists" :value="bedTypeList.id"> {{ bedTypeList.bed_type_name }}    </option>
                    
                    </select> 
                    
                       <has-error :form="form" field="bed_type_id"></has-error> 
                      </div>
                    
                     
                    <!-- <div class="form-group">
                    <label> Cancellation Policy <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <textarea v-model="form.cancellation_policy" class="form-control" placeholder="Enter Cancellation Policy" :class="{ 'is-invalid': form.errors.has('cancellation_policy') }"></textarea>  
                    <has-error :form="form" field="cancellation_policy"></has-error>
                    </div> -->


                    <div class="form-group">
                     <label> Cancellation Policy
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                    <select class="form-control" v-model="form.cancellation_policy_id"  :class="{ 'is-invalid': form.errors.has('cancellation_policy_id') }">
                    <option value=""> Select Cancellation Policy </option>
                    <option v-for="cancelationPolicyList in cancelationPolicyLists" :value="cancelationPolicyList.id"> {{ cancelationPolicyList.cancel_policy_name }}    </option>
                      
                    </select> 
                    <has-error :form="form" field="cancellation_policy_id"></has-error> 
                      </div>
                   
                     
                      <div class="form-group">
                    <label>  Room Description <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <textarea v-model="form.room_description" class="form-control" placeholder="Enter Room Description" :class="{ 'is-invalid': form.errors.has('room_description') }"></textarea>  
                    <has-error :form="form" field="room_description"></has-error>
                    </div>
                   
                    <div class="form-group">
              
                <form @submit.prevent="htlRomPricingEntry()">
                <div class="col-12">
                    <div class="row">
                    
                    
    
                    <div class="form-group col-md-3">
                    <label> Day price type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <select v-model="form.day_price_type_id"
                    @change="dayPriceType()"
                     class="form-control" placeholder="Enter Day price type" :class="{ 'is-invalid': form.errors.has('day_price_type_id') }">
                      <option value=""> Select Day Price Type </option>
                    <option v-for="dayPriceTypeList in dayPriceTypeLists" :value="dayPriceTypeList.id"> {{ dayPriceTypeList.room_price_type_name }} </option>
                    
                    </select> 
                    <has-error :form="form" field="day_price_type_id"></has-error>
                    </div>
    
    
    
                    <div class="form-group col-md-3">
                    <label> Agent price <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.agent_price" class="form-control" placeholder="Enter Agent price" :class="{ 'is-invalid': form.errors.has('agent_price') }">
                    <has-error :form="form" field="agent_price"></has-error>
                    </div>
    
    
    
                    <div class="form-group col-md-3">
                    <label> Vendor price <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.vendor_price" class="form-control" placeholder="Enter Vendor price" :class="{ 'is-invalid': form.errors.has('vendor_price') }">
                    <has-error :form="form" field="vendor_price"></has-error>
                    </div>
    
    
    
                    <div class="form-group col-md-3">
                    <label> Customer price <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.customer_price" class="form-control" placeholder="Enter Customer price" :class="{ 'is-invalid': form.errors.has('customer_price') }">
                    <has-error :form="form" field="customer_price"></has-error>
                    </div>
    
                    <div class="form-group col-md-10">
                      <div class="input-group mb-3" v-if="fixedDateStatus">
                           
                          <input type="date" class="form-control" v-model="form.fixedDateFrom">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"> To </span>
                          </div>
                          <input type="date" class="form-control" v-model="form.fixedDateTo">
                        </div>
                    </div>

                    <div class="form-group col-md-2">
                    <button type="submit" class="btn btn-primary float-right"> Add </button>
                    </div>

                  </div>
                </div>
              </form>
                 
                        <div class="input-group">
                            <table class="table table-bordered">
                              <tr>
                                <th> SL </th>
                                <th> Price Type </th>
                                <th> Agent price </th>
                                <th> Vendor price </th>
                                <th> Customer price </th>
                                <th>  </th>
                              </tr>

                              <tr v-for="htlRomPricingList,index in htlRomPricingLists">
                                <td> {{ ++index }} </td>
                                <td> {{ htlRomPricingList.price_type.room_price_type_name }}
                                  <br>
                                <span v-if="htlRomPricingList.day_price_type_id==2">
                                  {{ htlRomPricingList.fixed_date_from }} to 
                                  {{ htlRomPricingList.fixed_date_to }}  
                                </span>
                                </td>
                                <td> {{ htlRomPricingList.agent_price }} </td>
                                <td> {{ htlRomPricingList.vendor_price }} </td>
                                <td> {{ htlRomPricingList.customer_price }} </td>
                                <td> <button type="button" class="btn btn-danger" @click="htlRomPricingDelete(htlRomPricingList.id)"> Delete </button> </td>
                              </tr>
                            </table>
                        </div> 

                         
                      </div>
                    

                    <div class="form-group">
                      <label> Quantity </label>
                        <div class="row">
                        <div class="col-6">
                          <input  type="text" v-model="form.quantity" class="form-control" placeholder="Enter Quantity" :class="{ 'is-invalid': form.errors.has('quantity') }">
                    <has-error :form="form" field="quantity"></has-error>
                        </div>  
                        <div class="col-6">  </div>
                      </div>
                      </div>
                    <div class="form-group">
                      <label> Minimum Stay </label>
                        <div class="row">
                        <div class="col-6">
                          <input  type="text" v-model="form.minimum_stay" class="form-control" placeholder="Enter Minimum stay" :class="{ 'is-invalid': form.errors.has('minimum_stay') }">
                    <has-error :form="form" field="minimum_stay"></has-error>
                        </div>  
                        <div class="col-6">
                            <div class="custom-control custom-checkbox mt-2">
                        <input type="checkbox" v-model="form.free_breakfast_status" class="custom-control-input" id="customCheckfb" :class="{ 'is-invalid': form.errors.has('free_breakfast_status') }">
                    <has-error :form="form" field="free_breakfast_status"></has-error>
                        <label class="custom-control-label" for="customCheckfb"> Free Breakfast </label>
                    </div>
                        </div>  
                      </div>
                      </div>

                    <div class="form-group">
                <label> Max Adults </label>
                        <div class="row">
                        <div class="col-6">
                          <input  type="text" v-model="form.max_adult" class="form-control" placeholder="Enter Max adult" :class="{ 'is-invalid': form.errors.has('max_adult') }">
                    <has-error :form="form" field="max_adult"></has-error>
                        </div>  
                        <div class="col-6">
                            <div class="custom-control custom-checkbox mt-2">
                        <input type="checkbox" v-model="form.re_schedule_status" class="custom-control-input" id="reschedul" :class="{ 'is-invalid': form.errors.has('re_schedule_status') }">
                    <has-error :form="form" field="re_schedule_status"></has-error>
                        <label class="custom-control-label" for="reschedul">  Re-scheduleable </label>
                    </div>
                        </div>  
                      </div>
                      </div>

                    <div class="form-group">
                <label> Max Children</label>
                        <div class="row">
                        <div class="col-6">
                          <input  type="text" v-model="form.max_child" class="form-control" placeholder="Enter Max child" :class="{ 'is-invalid': form.errors.has('max_child') }">
                    <has-error :form="form" field="max_child"></has-error>
                        </div>  
                        <div class="col-6">
                            <div class="custom-control custom-checkbox mt-2">
                        <input type="checkbox" class="custom-control-input" id="payinhotel">
                        <label class="custom-control-label" for="payinhotel">  Pay at Hotel </label>
                    </div>
                        </div>  
                      </div>
                      </div>

                    <div class="form-group">
                <label> No. of Extra Beds </label>
                        <div class="row">
                        <div class="col-6">
                          <input  type="text" v-model="form.no_of_extra_bed" class="form-control" placeholder="Enter No of extra bed" :class="{ 'is-invalid': form.errors.has('no_of_extra_bed') }">
                    <has-error :form="form" field="no_of_extra_bed"></has-error>
                        </div>  
                        <div class="col-6">
                            <div class="custom-control custom-checkbox mt-2">
                        <input type="checkbox" v-model="form.extra_bed_payment_status" class="custom-control-input" id="cardpayment" :class="{ 'is-invalid': form.errors.has('extra_bed_payment_status') }">
                    <has-error :form="form" field="extra_bed_payment_status"></has-error>
                        <label class="custom-control-label" for="cardpayment"> Without credit card or payment</label>
                    </div>
                        </div>  
                      </div>
                      </div>

                    <div class="form-group">
                <label> Extra Bed Charges </label>
                        <div class="row">
                        <div class="col-6">
                          <input  type="text" v-model="form.extra_bed_charge" class="form-control"  :class="{ 'is-invalid': form.errors.has('no_of_extra_bed') }">
                    <has-error :form="form" field="extra_bed_charge"></has-error>
                        </div>  
                        <div class="col-6">
                            <div class="custom-control custom-checkbox mt-2">
                        <input type="checkbox" v-model="form.extra_bed_charge_status" class="custom-control-input" id="extra_charge" :class="{ 'is-invalid': form.errors.has('extra_bed_charge_status') }">
                    <has-error :form="form" field="extra_bed_charge_status"></has-error>
                        <label class="custom-control-label" for="extra_charge"> Installment is available for credit card holders</label>
                    </div>
                        </div>  
                      </div>
                      </div>

                    


                </div>
                    <!-- =================================== /general  -->

                        <!-- =================================== facility  -->
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
                    <div class="row">
                        
                        <div class="col-md-12">
                          <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" v-model="selectAll" id="customCheck">
                        <label class="custom-control-label text-primary" for="customCheck"> <b> Select All </b> </label>
                        <hr>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2"  v-for="user in users">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input"
                                :id="`customCheck`+user.id"
                                v-model="selected"
                                :value="user.id"
                                  number>
                                <label class="custom-control-label" :for="`customCheck`+user.id">{{ user.room_facility_name }}</label>
                            </div>
                        </div>


                    </div>
                </div>
                    <!-- =================================== //facility  -->



                    <!-- =================================== room image  -->
                    <div class="tab-pane fade" id="pills-policy" role="tabpanel" aria-labelledby="pills-policy-tab">
                      <form @submit.prevent="roomGalleryInsert()">
                  <div class="form-group row">
                    
                    <div class="col-md-3 border p-0" v-for="roomImageList in roomImageLists">
                    <div class="col-md-12">
                       <button @click.prevent="hotelRoomImageInfoDelete(roomImageList.id)" style="width:25px;height:25px;border-radius:50%;text-align:center;line-height:15px;background:red;border:none;color:#fff;">X</button>
                      <img :src="`images/room_image/`+roomImageList.image_name"
                      class="img img-responsive p-1"
                      style="width:100%">
                      <div class="input-group p-2 bg-light border">
                        <span> {{ roomImageList.image_title.type_name }} </span>
                      </div>
                     
                    </div>
                    </div>

                    <div class="col-md-3 border p-0" v-if="form.logo">
                      <img :src="form.logo"
                      class="img img-responsive p-1"
                      style="width:100%">

                      <div class="input-group p-2 bg-light border">
                         
                         <select v-model="form.image_title_id" id="" class="form-control">
                        <option value=""> ----- </option> 
                        <option v-for="imageTypeList in imageTypeLists" :value="imageTypeList.id"> {{ imageTypeList.type_name }} </option> 
                      </select>
                      <button type="submit" class="btn btn-primary imgSaveButton"> Save </button>
                      </div>
                     
                    </div>

                   
                    <div class="col-md-4">
                      <img src="dashboard/assets/images/image-input.png" style="width:222px;height:127px;position: absolute;"></img>
                      <input type="file" id="logo" @change="changeImage($event)" 
                      style="width:222px;height:127px;opacity:0;cursor:pointer;">
                      
                      <has-error :form="form" field="logo"></has-error>
                    </div>

                    </div>
                  </form>
                  </div>
                        <!-- =================================== //room image  -->
                        
                    <!-- =================================== translate  -->
                <div class="tab-pane fade" id="pills-translate" role="tabpanel" aria-labelledby="pills-translate-tab">
                    
                  
                  <div class="row">
                      <div class="col-md-4" v-for="hotelTranslateInfo in hotelTranslateInfos">
                        
                       <table class="table table-bordered">
                        <tr>
                          <td>
                            <small class="text-muted"> Language </small>
                            <button @click.prevent="hotelRoomTranslateInfoDelete(hotelTranslateInfo.id)" style="width:25px;height:25px;border-radius:50%;text-align:center;line-height:15px;background:red;border:none;color:#fff;">X</button>
                            <br>
                            <br>
                          <span v-if="hotelTranslateInfo.language"> {{ hotelTranslateInfo.language.language_name }} </span> 
                          </td>
                        </tr>
                        
                        <tr>
                          <td>
                            <small class="text-muted"> Hotel Name </small>
                            <br>
                          <span> {{ hotelTranslateInfo.hotel_name }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Hotel Description </small>
                            <br>
                          <span> {{ hotelTranslateInfo.hotel_description }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Meta Title </small>
                            <br>
                          <span> {{ hotelTranslateInfo.meta_title }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Meta Keyword </small>
                            <br>
                          <span> {{ hotelTranslateInfo.meta_keyword }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Meta Description </small>
                            <br>
                          <span> {{ hotelTranslateInfo.meta_description }} </span> 
                          </td>
                        </tr>
                      
                       </table>
                       
                      </div>
                      <div class="col-md-4">
                        
                       <table class="table table-bordered" style="cursor:pointer;" 
                       data-toggle="modal" data-target="#translateInfoForm">
                        <tr>
                          <td class="text-center pt-3 pb-3">
                           <i class="fa fa-3x fa-plus text-muted mt-4 mb-4"></i>
                          </td>
                        </tr>
                       </table>
                       
                      </div>
                    </div>
                    
            </div>
                    <!-- =================================== //translate  -->




            </div>


            </div>
  
            <!-- -----------------------------   card footer  -->
  
            <div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
              <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
                <button
                  type="reset"
                  class="
                    btn-pill btn-shadow btn btn-outline-danger btn-lg
                    float-left
                  "> 
                  <span class="mr-2 opacity-7">
                    <i class="fa fa-undo"></i>
                  </span>
                  <span class="mr-1"> Clear </span>
                </button>
  
                <button
                  type="button"
                  class="
                    btn-pill btn-shadow btn btn-primary btn-lg
                    float-right
                    btn-hover-shine formNextButton
                  " @click="clickintab()"
                > <span class="mr-1"> Next </span>
                <span class="mr-2 opacity-7">
                    <i class="fa fa-angle-double-right"></i>
                  </span>
                </button>
  
                <button
                  type="submit"
                  class="
                    btn-pill btn-shadow btn btn-primary btn-lg
                    float-right
                    btn-hover-shine formSubmitButton
                  "
                  :disabled="loading"
                  style="display:none;"
                >
                  <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
  
                  <span v-else class="mr-2 opacity-7">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                  <span class="mr-1"> Submit </span>
                </button>
              </div>
            </div>
  
            <!-- -----------------------------   // card footer  -->
          </form>
        </div>
      </div>
  
      

<!-- ------- // translate information model  -->
<div class="modal fade" id="translateInfoForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Translate Information
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="hotelTranslateUpdate()">
              <div class="col-12 table-responsive">
              <table class="table table-bordered">
                <tbody>
                  
                <tr>
                  <td class="p-1 pl-3"> Language  <font class="text-danger"> * </font></td>
                  <td> <select v-model="form.language_id" class="form-control" id="HotelContact0Position" required="required">
                        <option value="">Select Language</option>
                        <option value="1"> English </option>
                        <option value="2"> Arabic </option>
                        <option value="3"> Thai </option>
                        <option value="4"> Bangla </option>
                        <option value="5"> Hindi </option>
                        <!-- <option v-for="hotelContactPositionType in hotelContactPositionTypes" :value="hotelContactPositionType.id"> {{ hotelContactPositionType.position_type_name }} </option> -->
                        </select> </td>
                </tr>
               <tr>
                  <td class="p-1 pl-3"> Hotel Name <font class="text-danger"> * </font></td>
                  <td> <input type="text" v-model="form.trans_hotel_name" class="form-control" placeholder=""> </td>
                </tr>
               <tr>
                  <td class="p-1 pl-3"> Hotel Description <font class="text-danger"> * </font></td>
                  <td> <input type="text" v-model="form.trans_hotel_description" class="form-control" placeholder=""> </td>
                </tr>
               <tr>
                  <td class="p-1 pl-3"> Meta Title <font class="text-danger"> * </font></td>
                  <td> <input type="text" v-model="form.trans_meta_title" class="form-control" placeholder=""> </td>
                </tr>
               <tr>
                  <td class="p-1 pl-3"> Meta Keyword <font class="text-danger"> * </font></td>
                  <td> <input type="text" v-model="form.trans_meta_keyword" class="form-control" placeholder=""> </td>
                </tr>
               <tr>
                  <td class="p-1 pl-3"> Meta Description <font class="text-danger"> * </font></td>
                  <td> <input type="text" v-model="form.trans_meta_description" class="form-control" placeholder=""> </td>
                </tr>
                

              </tbody>
            </table>
          </div>

              <div class="text-right pt-3">
                <button
                  type="submit"
                  class="
                    mr-2
                    btn-pill btn-hover-shine btn btn-primary
                  "
                  :disabled="loading"
                >
                  <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>

                  <span v-else class="mr-2 opacity-7">
                    <i class="fa fa-paper-plane"></i> </span
                  >Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>


<!-- ------- // translate information model  -->



    </span>
  </template>
  <script>
  export default {
    data() {
      return {

        form: new Form({
             // form variable here
            hotel_id:'',
            room_id:'',

            hotel_code:'',
            hotel_name:'',
            hotel_location:'',
            property_type_id:'',
            star:'',
            
            room_type_id:'',
            bed_type_id:'',
            cancellation_policy_id:'',
            // cancellation_policy:'',
            room_description:'',
            quantity:'',
            minimum_stay:'',
            free_breakfast_status:'',
            max_adult:'',
            re_schedule_status:'',
            max_child:'',
            no_of_extra_bed:'',
            extra_bed_payment_status:'',
            extra_bed_charge:'',
            extra_bed_charge_status:'',
          
            logo:'',

            // price information
            day_price_type_id:'',
            fixedDateFrom:'',
            fixedDateTo:'',
            agent_price:'',
            vendor_price:'',
            customer_price:'',
            currency_id:1,
            

            // facility info
            facilities:[],

            // translate information 
            language_id:'',
            trans_hotel_name:'',
            trans_hotel_description:'',
            trans_meta_title:'',
            trans_meta_keyword:'',
            trans_meta_description:'',
            translate_info_position:'1',
            translate_info_status:'1',
        }),
        
        // data variable here
        users: [],
        
        selected: [],
        hotelLists:[],
        hotelInfos:'',
        propertyTypeLists:[],
        roomTypeLists:[],
        bedTypeLists:[],
        cancelationPolicyLists:[],
        dayPriceTypeLists:[],
        hotelBankInfos:[],
        hotelContactTypes:[],
        hotelContactPositionTypes:[],
        hotelContactInfos:[],
        hotelTranslateInfos:[],
        loading:false,
        clickTabValue:1,
        roomImageLists:[],
        htlRomPricingLists:[],
        htlRomInformationLists:[],
        fixedDateStatus:false,
        imageTypeLists:[],

      };
    },
  
  
    computed: {
        selectAll: {
            get: function () {
                return this.users ? this.selected.length == this.users.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.users.forEach(function (user) {
                        selected.push(user.id);
                    });
                }

                this.selected = selected;
            }
        }
    },
    mounted() {
     this.form.room_id = this.$route.params.id;
     this.hotelList();
     this.propertyTypeList();
     this.roomTypeList();
     this.bedTypeList();
     this.cancelationPolicyList();
     this.roomPriceTypeList();
     this.hotelFacilityList();
     this.imageTitleList();
     this.getHotelInfo();
    },
    methods: {

    getHotelInfo() {
      this.selected = [];
      let uri = `room_id_by_hotel_info/`+this.form.room_id;
      axios.get(uri).then((response) => {
        this.form.fill(response.data.data);
        this.hotelTranslateInfos = response.data.htl_translate_list;
        this.roomImageLists = response.data.hotel_room_image;
        this.form.hotel_code = response.data.hotel.hotel_code;
        this.form.hotel_name = response.data.hotel.hotel_name;
        this.form.hotel_id = response.data.hotel.id;
        this.selected = response.data.selected;
      });
 
    },

                
      imageTitleList() {
      let uri = `htl_image_title`;
      axios.get(uri).then((response) => {
        this.imageTypeLists = response.data.data;
      });
    },
        
      dayPriceType(){
        if(this.form.day_price_type_id == 2){
          this.fixedDateStatus = true;
        }else{
          this.fixedDateStatus = false;
        }
      },
      
      clickintab(){
        if(this.clickTabValue==1){
        $('#pills-profile-tab').click();
        this.clickTabValue=2;
        }
        else if(this.clickTabValue==2){
        $('#pills-policy-tab').click();
        this.clickTabValue=3;
        }
        else if(this.clickTabValue==3){
        $('#pills-translate-tab').click();
          $('.formSubmitButton').show();
          $('.formNextButton').hide();
          
        }

      },
      setTabInfo(e){
        this.clickTabValue=e;
        if(e==4){
          $('.formSubmitButton').show();
          $('.formNextButton').hide();
        }
        else{
          $('.formSubmitButton').hide();
          $('.formNextButton').show();
        }

        
      },
      
      htlRomInformationUpdate(){
        this.form.facilities = this.selected;
    
    this.form.put("htl_rom_information/"+this.$route.params.id).then((response) => {
        if (response.data.changePurchaseType) {
          this.exit = true;
          this.mess = response.data.changePurchaseType;
          // Toast.fire({
          //     icon: 'error',
          //     title: 'Change Your Admin Type Name'
          // })
        } else {
          Toast.fire({
            icon: "success",
            title: "Data Updated Successful",
          }),

            this.form.reset();
            this.$router.push('/hotel@room@setup')
        }
      }).catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
},

  htlRomInformationShow(){
      
      this.form.get("/htl_rom_information").then((res) => {
        this.htlRomInformationLists = res.data.data;
      });
  
    },


  htlRomPricingEntry(){
    
    this.form.post("htl_rom_pricing").then((response) => {
        if (response.data.changePurchaseType) {
          this.exit = true;
          this.mess = response.data.changePurchaseType;
          // Toast.fire({
          //     icon: 'error',
          //     title: 'Change Your Admin Type Name'
          // })
        } else {
          Toast.fire({
            icon: "success",
            title: "Data Entry Successful",
          }),

            
                  
            this.form.day_price_type_id='';
            this.form.agent_price='';
            this.form.vendor_price='';
            this.form.customer_price=''; 

            this.htlRomPricingShow();
        }
      }).catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
},
htlRomPricingShow(){
      
      this.form.get("/htl_rom_pricing_list/"+this.form.hotel_id+'/'+this.form.room_type_id+'/'+this.form.bed_type_id).then((res) => {
        this.htlRomPricingLists = res.data.data;
      });
  
    },
  
  
htlRomPricingDelete($id) {
    axios.delete("/htl_rom_pricing/" + $id).then((res) => {
      Toast.fire({
        icon: "success",
        title: "Data Deleted  successfully",
      });
      this.htlRomPricingShow();
    });
  },
  
      hotelTranslateUpdate() {
        //alert(selected);
        this.loading = true;
        this.form
          .post("/htl_translate_update/"+this.form.hotel_id)
          .then((res) => {
            this.loading = false;
            if (res.data.changeAssetBrandName) {
              Toast.fire({
                icon: "error",
                title: "Change Your Asset Brand Name",
              });
            } else {
              Toast.fire({
                icon: "success",
                title: "Information Update Successful",
              });
            this.form.language_id = '';
            this.form.trans_hotel_name = '';
            this.form.trans_hotel_description = '';
            this.form.trans_meta_title = '';
            this.form.trans_meta_keyword = '';
            this.form.trans_meta_description = '';
            }

            this.getHotelTranslateList();
            $('#translateInfoForm').modal('hide');
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
      
      

      getHotelTranslateList() {
      let uri = `hotel_translate_list/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.hotelTranslateInfos = response.data.data;
      });
    },
    

      
    changeImage(event){
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.logo = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
      // $('.imgSaveButton').click();
    },

        
      hotelFacilityList() {
      let uri = `htl_rom_facility`;
      axios.get(uri).then((response) => {
        this.users = response.data.data;
      });
    },
    
    hotelList() {
      let uri = `hotel_list`;
      axios.get(uri).then((response) => {
        this.hotelLists = response.data.data;
      });
    },
        
    propertyTypeList() {
      let uri = `htl_property_type`;
      axios.get(uri).then((response) => {
        this.propertyTypeLists = response.data.data;
      });
    },
        
    roomTypeList() {
      let uri = `htl_rom_type`;
      axios.get(uri).then((response) => {
        this.roomTypeLists = response.data.data;
      });
    },
        
    bedTypeList() {
      let uri = `htl_rom_bed_type`;
      axios.get(uri).then((response) => {
        this.bedTypeLists = response.data.data;
      });
    },

    cancelationPolicyList() {
      let uri = `htl_cancelation_policy`;
      axios.get(uri).then((response) => {
        this.cancelationPolicyLists = response.data.data;
      });
    },
        
    roomPriceTypeList() {
      let uri = `htl_rom_price_type`;
      axios.get(uri).then((response) => {
        this.dayPriceTypeLists = response.data.data;
      });
    },

    // getHotelInfo() {
    //   this.selected = [];
    //   let uri = `room_info_by_hotel/`+this.form.hotel_id;
    //   axios.get(uri).then((response) => {
    //     //this.form.fill(response.data.data);
    //     //this.form.hotel_id = response.data.data.hotel_info_id;
    //     this.form.hotel_code = response.data.hotel.hotel_code;
    //     this.form.hotel_name = response.data.hotel.hotel_name;
        
        

    //   });
 
    // },
        
    currencyList() {
      let uri = `currencyList`;
      axios.get(uri).then((response) => {
        this.currencyLists = response.data.currencyList;
      });
    },
        
    getRoomImageList() {
      let uri = `imageByHotel/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.roomImageLists = response.data.data;
      });
    },
    
      roomGalleryInsert() {
        this.loading = true;
        this.form
          .post("/htl_rom_image",{
            logo:this.form.logo,
            hotel_id:this.form.hotel_id,})
          .then((res) => {
            this.loading = false; 
             
              Toast.fire({
                icon: "success",
                title: "Save Successful",
              });
             
             
            this.getRoomImageList();
            this.form.logo = '';
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },

        hotelRoomTranslateInfoDelete(id) {
        axios.get("hotelRoomTranslateInfoDelete/" + id).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Delete Successfully",
          });
          this.getHotelTranslateList();
        });
      },

        hotelRoomImageInfoDelete(id) {
        axios.get("hotelRoomImageInfoDelete/" + id).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Delete Successfully",
          });
          this.getRoomImageList();
        });
      },

    
    },
  };
  </script>
  