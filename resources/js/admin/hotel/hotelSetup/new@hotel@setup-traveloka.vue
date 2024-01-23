<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> Hotel Information Setupss
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/hotel@information@setup" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"> < Back </router-link>
          </div>

        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="hotelInformationUpdate()">
<!-- 
            <div class="position-static"> 1 </div>
            <div class="position-relative">2</div>
            <div class="position-absolute">3</div>
            <div class="position-fixed">4</div>
            <div class="position-sticky">5</div> -->

            <div class="row">
            <div class="col-md-3">
              <ul class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link active" @click="setTabInfo(1)" id="pills-general-tab" data-toggle="pill" href="#pills-general" role="tab" aria-controls="pills-general" aria-selected="true"> <i class="fa fa-arrow-right mr-3"></i> <b> General Information</b> </a>
                    </li>
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link " @click="setTabInfo(2)" id="pills-detail-tab" data-toggle="pill" href="#pills-detail" role="tab" aria-controls="pills-detail" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i>  
                          <b>Property Detail</b>
                        </a>
                    </li>
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link " @click="setTabInfo(3)" id="pills-facility-tab" data-toggle="pill" href="#pills-facility" role="tab" aria-controls="pills-facility" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i> 
                           <b>Property Facility</b>
                           </a>
                    </li>
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link " @click="setTabInfo(4)" id="pills-rooms-tab" data-toggle="pill" href="#pills-rooms" role="tab" aria-controls="pills-rooms" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i>  
                          <b>Rooms</b> </a>
                    </li>
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link " @click="setTabInfo(5)" id="pills-room-facility-tab" data-toggle="pill" href="#pills-room-facility" role="tab" aria-controls="pills-room-facility" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i>  
                          <b>Room Facilities</b> </a>
                    </li>
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link " @click="setTabInfo(6)" id="pills-photo-tab" data-toggle="pill" href="#pills-photo" role="tab" aria-controls="pills-photo" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i>  
                          <b>Photo</b> </a>
                    </li>
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link " @click="setTabInfo(7)" id="pills-payment-tab" data-toggle="pill" href="#pills-payment" role="tab" aria-controls="pills-payment" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i>  
                          <b>Payment Information</b> </a>
                    </li>
                    <!-- <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link" @click="setTabInfo(8)" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i> 
                           <b>Property Preview</b>
                        </a>
                    </li> -->
                    
                    <li class="nav-item list-group-item pt-0 pb-0">
                        <a class="nav-link"  @click="setTabInfo(9)" id="pills-contactInfo-tab" data-toggle="pill" href="#pills-contactInfo" role="tab" aria-controls="pills-contactInfo" aria-selected="false">  <i class="fa fa-arrow-right mr-3"></i>
                            <b> Contact </b>
                        </a>
                    </li>
                   
                </ul>

            </div>

            <div
              class="col-lg-8 px-lg-5 col-sm-8 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color" style="min-height:500px;">
           
            <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                    <div class="form-group mb-4">
             
             <select class="form-control mx-auto"
             v-model="form.hotel_id"
             @change="getHotelInfo()">
             <option value="0"> Select Hotel </option>
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
    
 
            
                

                <div class="tab-content" id="pills-tabContent">

                    <!-- =================================== general  -->
                <div class="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                   
                  <h5> General Information </h5>
                  <hr>
                   
                  <div class="form-group">
                    <label> Property code <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.property_code" class="form-control" placeholder="Enter Property code" :class="{ 'is-invalid': form.errors.has('property_code') }">
                    <has-error :form="form" field="property_code"></has-error>
                    </div>
                   
                    <div class="form-group">
                    <label> Property name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.property_name" class="form-control" placeholder="Enter Property name" :class="{ 'is-invalid': form.errors.has('property_name') }">
                    <has-error :form="form" field="property_name"></has-error>
                    </div>
                    
                   
                    <div class="form-group">
                    <label> Legal Entity Name </label>
                    <input  type="text" v-model="form.legal_entity_name" class="form-control" placeholder="Enter Legal Entity Name" >
                    </div>
                    
                   
                    <div class="form-group">
                    <label>Property Type   
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                   

                    
                    <div class="col-md-8 offset-md-4" v-for="propertyTypeList in propertyTypeLists">
                    <label for="" class="mt-4">
                      <table>
                      <tr>
                        <td> <input type="radio" v-model="form.property_type_id" name="propertyType" class=""></input> </td>
                        <td><b>{{ propertyTypeList.property_type_name }}</b>
                      <br>
                      <span>{{ propertyTypeList.property_type_description }}</span>
                     </td>
                      </tr>
                    </table>
                     </label>
                    </div>
                    
 


                      </div>
                   
                      <div class="form-group">
                    <label> Google map link <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <textarea v-model="form.google_map_link" class="form-control" placeholder="Enter Google map link" :class="{ 'is-invalid': form.errors.has('google_map_link') }"></textarea>
                    <has-error :form="form" field="google_map_link"></has-error>
                    </div>
                    
    
    
                    <div class="form-group">
                    <label> Street address <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <textarea v-model="form.street_address" class="form-control" placeholder="Enter Street address" :class="{ 'is-invalid': form.errors.has('street_address') }"></textarea>
                    <has-error :form="form" field="street_address"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Post code <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.post_code" class="form-control" placeholder="Enter Post code" :class="{ 'is-invalid': form.errors.has('post_code') }">
                    <has-error :form="form" field="post_code"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
              <label> Country 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
  
              <select
                class="form-control"
                v-model="form.countryId"
                :class="{ 'is-invalid': form.errors.has('countryId') }"
              >
                 <option value=""> Select Currency </option>
                 <option v-for="countryList in countryLists" :value="countryList.id"> {{ countryList.country }} </option>
                 
              </select> 
              <has-error :form="form" field="countryId"></has-error>  
            </div>
    
    
    
                    <div class="form-group">
                    <label> Phone no <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.phone_no" class="form-control" placeholder="Enter Phone no" :class="{ 'is-invalid': form.errors.has('phone_no') }">
                    <has-error :form="form" field="phone_no"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> No of rooms <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.no_of_rooms" class="form-control" placeholder="Enter No of rooms" :class="{ 'is-invalid': form.errors.has('no_of_rooms') }">
                    <has-error :form="form" field="no_of_rooms"></has-error>
                    </div>
    

                </div>
                    <!-- =================================== /general  -->

                    <!-- =================================== property detail  -->
                <div class="tab-pane fade" id="pills-detail" role="tabpanel" aria-labelledby="pills-detail-tab">
                    

                   
                  <h5>Property Detail </h5>
                  <hr>

                    <div class="row" >
                    <div class="col-md-12">
                      <div class="form-group">
                    <label> Main currency <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <select
                      class="form-control"
                      v-model="form.countryId"
                      :class="{ 'is-invalid': form.errors.has('countryId') }">
                      <option value=""> Select Currency </option>
                      <option v-for="countryList in countryLists" :value="countryList.id"> {{ countryList.code }} </option>
                      
                    </select> 
                    <has-error :form="form" field="main_currency"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Check in time <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="time" v-model="form.check_in_time" class="form-control" placeholder="Enter Check in time" :class="{ 'is-invalid': form.errors.has('check_in_time') }">
                    <has-error :form="form" field="check_in_time"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Check out time <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="time" v-model="form.check_out_time" class="form-control" placeholder="Enter Check out time" :class="{ 'is-invalid': form.errors.has('check_out_time') }">
                    <has-error :form="form" field="check_out_time"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Distance to city center <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.distance_to_city_center" class="form-control" placeholder="Enter Distance to city center" :class="{ 'is-invalid': form.errors.has('distance_to_city_center') }">
                    <has-error :form="form" field="distance_to_city_center"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Additional breakfast charge <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <input  type="text" v-model="form.additional_breakfast_charge" class="form-control" placeholder="Enter Additional breakfast charge" :class="{ 'is-invalid': form.errors.has('additional_breakfast_charge') }">
                    <has-error :form="form" field="additional_breakfast_charge"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Cancellation policy <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <select v-model="form.cancellation_policy_id" class="form-control" placeholder="Enter Cancellation policy" :class="{ 'is-invalid': form.errors.has('cancellation_policy_id') }">
                      <option value=""> Select policy </option>
                      <option v-for="cancellationPolicy in cancellationPolicys" :value="cancellationPolicy.id"> {{ cancellationPolicy.cancel_policy_name }} </option>
                    </select>
                    <has-error :form="form" field="cancellation_policy_id"></has-error>
                    </div>

                    
                    </div>
                    </div>
                </div>
                    <!-- =================================== //property detail  -->

                        <!-- =================================== property facility  -->
                        <div class="tab-pane fade" id="pills-facility" role="tabpanel" aria-labelledby="pills-facility-tab">
                    
                    <div class="row">
                      <h3> Property Facility</h3>
                      <hr>

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
                                <label class="custom-control-label" :for="`customCheck`+user.id">{{ user.facility_name }}</label>
                            </div>
                        </div>


                    </div>
                </div>
                    <!-- =================================== //property facility  -->


                    <!-- =================================== rooms -->
                    <div class="tab-pane fade" id="pills-rooms" role="tabpanel" aria-labelledby="pills-rooms-tab">
                    
                  <div class="row">
                    <div class="col-md-12">
                    <h5> Rooms </h5>
                    <hr>
                  </div>
                    <div class="col-md-12">

                    <div class="form-group">
                    <label> Room name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.room_name" class="form-control" placeholder="Enter Room name" :class="{ 'is-invalid': form.errors.has('room_name') }">
                    <has-error :form="form" field="room_name"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
              <label> Star
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                   </label>
                    <select class="form-control" v-model="form.star">
                    <option value=""> Select Star</option>
                    <option value="1"> 1 Star</option>
                    <option value="2"> 2 Star</option>
                    <option value="3"> 3 Star</option>
                    <option value="4"> 4 Star</option>
                    <option value="5"> 5 Star</option>
                    </select>  
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
                    @change="htlRomPricingShow()" :class="{ 'is-invalid': form.errors.has('bed_type_id') }"> 
                    <option value=""> Select Bed Type </option>
                    <option v-for="bedTypeList in bedTypeLists" :value="bedTypeList.id"> {{ bedTypeList.bed_type_name }}    </option>
                    
                    </select> 
                    
                <has-error :form="form" field="bed_type_id"></has-error> 
                      </div>
    
    
    
                    <div class="form-group">
                    <label> Maximum occupancy <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.maximum_occupancy" class="form-control" placeholder="Enter Maximum occupancy" :class="{ 'is-invalid': form.errors.has('maximum_occupancy') }">
                    <has-error :form="form" field="maximum_occupancy"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Maximum extra bed <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.maximum_extra_bed" class="form-control" placeholder="Enter Maximum extra bed" :class="{ 'is-invalid': form.errors.has('maximum_extra_bed') }">
                    <has-error :form="form" field="maximum_extra_bed"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Price of extra bed <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.price_of_extra_bed" class="form-control" placeholder="Enter Price of extra bed" :class="{ 'is-invalid': form.errors.has('price_of_extra_bed') }">
                    <has-error :form="form" field="price_of_extra_bed"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Room size width <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.room_size_width" class="form-control" placeholder="Enter Room size width" :class="{ 'is-invalid': form.errors.has('room_size_width') }">
                    <has-error :form="form" field="room_size_width"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Room size height <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.room_size_height" class="form-control" placeholder="Enter Room size height" :class="{ 'is-invalid': form.errors.has('room_size_height') }">
                    <has-error :form="form" field="room_size_height"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Room rate <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.room_rate" class="form-control" placeholder="Enter Room rate" :class="{ 'is-invalid': form.errors.has('room_rate') }">
                    <has-error :form="form" field="room_rate"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> Breakfast included <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <select  type="text" v-model="form.breakfast_included" class="form-control" placeholder="Enter Breakfast included" :class="{ 'is-invalid': form.errors.has('breakfast_included') }">
                    <option value=""> ---- </option>
                    <option value="1"> Yes </option>
                    <option value="2"> No </option>
                    </select> 
                    <has-error :form="form" field="breakfast_included"></has-error>
                    </div>
    
    
    
                    <div class="form-group">
                    <label> No of room this type <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mendatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mendatory Field"></i></label>
                    <input  type="text" v-model="form.no_of_room_this_type" class="form-control" placeholder="Enter No of room this type" :class="{ 'is-invalid': form.errors.has('no_of_room_this_type') }">
                    <has-error :form="form" field="no_of_room_this_type"></has-error>
                    </div>



                    </div>
                    </div>
                  </div>
                        <!-- =================================== // rooms  -->
                        

                        <!-- =================================== room facility  -->

                        <div class="tab-pane fade" id="pills-room-facility" role="tabpanel" aria-labelledby="pills-room-facility-tab">
                    
                    <div class="row">
                      <h3> Room Facility</h3>
                      <hr>
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
                                <label class="custom-control-label" :for="`customCheck`+user.id">{{ user.facility_name }}</label>
                            </div>
                        </div>


                    </div>
                </div>
                    <!-- =================================== //room facility  -->



                    <!-- =================================== Photo -->
                    <div class="tab-pane fade" id="pills-photo" role="tabpanel" aria-labelledby="pills-photo-tab">
                    <form @submit.prevent="roomGalleryInsert()">
                  <div class="form-group row">
                    
                    <div class="col-md-3 border p-0" v-for="roomImageList in roomImageLists">
                    <div class="col-md-12">
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
                        <!-- =================================== // Photo  -->
                        


                    <!-- =================================== contact Info  -->
                <div class="tab-pane fade" id="pills-contactInfo" role="tabpanel" aria-labelledby="pills-contactInfo-tab">
                    
                     
                  <h5> Contact Information </h5>
                  <hr>
                    <div class="row">
                      <div class="col-md-4" v-for="hotelContactInfo in hotelContactInfos">
                        
                       <table class="table table-bordered">
                        <tr>
                          <td>
                            <small class="text-muted"> Contact Type </small>
                            <br>
                          <span v-if="hotelContactInfo.contact_type"> {{ hotelContactInfo.contact_type.contact_type_name }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Position Type </small>
                            <br>
                            <span v-if="hotelContactInfo.position_type"> {{ hotelContactInfo.position_type.position_type_name }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> FULL NAME </small>
                            <br>
                          <span> {{ hotelContactInfo.full_name }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> E-MAIL ADDRESS </small>
                            <br>
                          <span> {{ hotelContactInfo.email }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> MOBILE NUMBER </small>
                            <br>
                          <span> {{ hotelContactInfo.mobile_no }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> OFFICE PHONE NUMBER </small>
                            <br>
                          <span> {{ hotelContactInfo.office_phone_no }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> EXTENSION </small>
                            <br>
                          <span> {{ hotelContactInfo.extension }} </span> 
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Contactable Hour </small>
                            <br>
                          <span> {{ hotelContactInfo.contact_hour_from }} </span> 
                          to
                          <span> {{ hotelContactInfo.contact_hour_to }} </span> 
                          </td>
                        </tr>
                       </table>
                       
                      </div>
                      <div class="col-md-4">
                        
                       <table class="table table-bordered" style="cursor:pointer;" data-toggle="modal" data-target="#contactInfoForm">
                        <tr>
                          <td class="text-center pt-3 pb-3">
                           <i class="fa fa-3x fa-plus text-muted mt-4 mb-4"></i>
                          </td>
                        </tr>
                       </table>
                       
                      </div>
                    </div>
 
                </div>
                        <!-- =================================== //contact Info  -->

                    <!-- =================================== payment Info  -->
                <div class="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab">
                    
                     
                  <h5> Payment Information </h5>
                  <hr>
                    <div class="row">
                     
                      <div class="col-md-12">
                         
                        <div class="form-group">
                     <label> Payment Type
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                    <select class="form-control" v-model="form.payment_type_id" 
                    @change="getBankList()"
                     :class="{ 'is-invalid': form.errors.has('payment_type_id') }">
                    <option value=""> Select Payment Type </option>
                    <option v-for="paymentTypeList in paymentTypeLists" :value="paymentTypeList.id"> {{ paymentTypeList.payment_type_name }}    </option>
                      
                    </select> 
                    <has-error :form="form" field="payment_type_id"></has-error> 
                      </div>
                    <div class="form-group">
                     <label> Bank / Card
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                    <select class="form-control" v-model="form.bed_type_id"
                    @change="htlRomPricingShow()" :class="{ 'is-invalid': form.errors.has('bed_type_id') }"> 
                    <option value=""> Select Bank / Card </option>
                    <option v-for="bankCardList in bankCardLists" :value="bankCardList.id"> {{ bankCardList.bed_type_name }}    </option>
                    
                    </select> 
                    
                <has-error :form="form" field="bed_type_id"></has-error> 
                      </div>
                       
                      </div>
                    </div>
 
                </div>
                        <!-- =================================== //payment Info  -->


            </div>

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






          

<!-- ------- // contact information model  -->
<div class="modal fade" id="contactInfoForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Contact Information
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
                          <form @submit.prevent="addContactInformation()">
                            <div class="col-12 table-responsive">
                            <table class="table table-bordered">
						      						<tbody>
                                <tr>
                                  <td>
                                    Contact Type <font class="text-danger"> * </font>
                                  </td>
						      							<td class="text-left"> 
                                                      
                                                        <select v-model="form.contact_type_id" class="form-control">
                                                            <option value=""> Select Contact Type </option>
                                                            <option v-for="hotelContactType in hotelContactTypes" :value="hotelContactType.id"> {{ hotelContactType.contact_type_name }} </option>
                                                        </select>
                                                       
                                                        </td>
						      						</tr>
                              <tr>
						      							<td class="p-1 pl-3"> POSITION  <font class="text-danger"> * </font></td>
						      							<td> <select v-model="form.position_type_id" class="form-control" id="HotelContact0Position" required="required">
                                      <option value="">Select Position</option>
                                      <option v-for="hotelContactPositionType in hotelContactPositionTypes" :value="hotelContactPositionType.id"> {{ hotelContactPositionType.position_type_name }} </option>
                                      </select> </td>
						      						</tr>
						      					 <tr>
						      							<td class="p-1 pl-3"> FULL NAME <font class="text-danger"> * </font></td>
						      							<td> <input type="text" v-model="form.full_name" class="form-control" placeholder="" name="main_contact_full_name"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> E-MAIL ADDRESS </td>
						      							<td> <input type="text" v-model="form.email" class="form-control" placeholder="" name="main_contact_email"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> MOBILE NUMBER  <font class="text-danger"> * </font></td>
						      							<td> <input type="text" v-model="form.mobile_no" class="form-control" placeholder="" name="main_contact_mobile_no"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> OFFICE PHONE NUMBER </td>
						      							<td> <input type="text" v-model="form.office_phone_no" class="form-control" placeholder="" name="main_contact_office_phone_no"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> EXTENSION </td>
						      							<td> <input type="text" v-model="form.extension" class="form-control" placeholder="" name="main_contact_extension"> </td>
						      						</tr>
						      						

						      						<tr>

						      							<td colspan="2"> 
                                                            <div class="input-group">
                                                                <label for=""> Contactable Hour</label><br>
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="">From </span>
                                                                </div>
                                                                <input type="time" v-model="form.contact_hour_from" class="form-control">

                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="">To</span>
                                                                </div>

                                                                <input type="time" v-model="form.contact_hour_to" class="form-control">
                                                            </div>  
                      
                                                             </td>
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


<!-- ------- // contact information model  -->

          

        </div>
      </div>
  
      
    </span>
  </template>
  <script>
  export default {
    data() {
      return {

        form: new Form({
            hotel_id:0,
            // general information
            property_code:'',
            property_name:'',
            legal_entity_name:'',
            property_type_id:'',
            google_map_link:'',
            street_address:'',
            post_code:'',
            country_id:'',
            phone_no:'',
            no_of_rooms:'',

            //property detail
            main_currency:'',
            check_in_time:'',
            check_out_time:'',
            distance_to_city_center:'',
            additional_breakfast_charge:'',
            cancellation_policy_id:'',

            // facility info
            facilities:[],



            // contact information 
            contact_type_id:'',
            position_type_id:'',
            full_name:'',
            email:'',
            mobile_no:'',
            office_phone_no:'',
            extension:'',
            contact_hour_from:'',
            contact_hour_to:'',
            contact_info_position:'1',
            contact_info_status:'1',

            logo:'',
            image_title_id:'',



        }),
        
        // data variable here
        // users: [ 
        //     { "id": "1", "name": "Shad Jast", "email": "pfeffer.matt@yahoo.com" },
        //     { "id": "2", "name": "Duane Metz", "email": "mohammad.ferry@yahoo.com" }, 
        //     { "id": "3", "name": "Myah Kris", "email": "evolkman@hotmail.com" }, 
        //     { "id": "4", "name": "Dr. Kamron Wunsch", "email": "lenora95@leannon.com" }
        // ],

        users: [],
        countryLists: [],
        
        selected: [],
        hotelLists:[],
        hotelInfos:'',
        propertyTypeLists:[],
        hotelBankInfos:[],
        hotelContactTypes:[],
        hotelContactPositionTypes:[],
        hotelContactInfos:[],
        hotelTranslateInfos:[],
        loading:false,
        clickTabValue:1,
        cancellationPolicys:[],
        roomImageLists:[],
        roomTypeLists:[],
        bedTypeLists:[],
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
     this.propertyTypeList();
     this.hotelList();
     this.hotelContactTypeList();
     this.hotelContactPositionTypeList();
     this.hotelFacilityList();
     this.countryList();
     this.cancelletionPolicyList();
     this.roomTypeList();
     this.bedTypeList();
     this.imageTitleList();
    },
    methods: {

                    
    imageTitleList() {
      let uri = `htl_image_title`;
      axios.get(uri).then((response) => {
        this.imageTypeLists = response.data.data;
      });
    },
                    
    bedTypeList() {
      let uri = `htl_rom_bed_type`;
      axios.get(uri).then((response) => {
        this.bedTypeLists = response.data.data;
      });
    },
          
    roomTypeList() {
      let uri = `htl_rom_type`;
      axios.get(uri).then((response) => {
        this.roomTypeLists = response.data.data;
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
            this.form.image_title_id = '';
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
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
      
      countryList() {
      let uri = `countryList`;
      axios.get(uri).then((response) => {
        this.countryLists = response.data.countryList;
      });
    },

      
      cancelletionPolicyList() {
      let uri = `htl_cancelation_policy`;
      axios.get(uri).then((response) => {
        this.cancellationPolicys = response.data.data;
      });
    },


      clickintab(){
        if(this.clickTabValue==1){
        $('#pills-profile-tab').click();
        this.clickTabValue=2;
        }
        else if(this.clickTabValue==2){
        $('#pills-contact-tab').click();
        this.clickTabValue=3;
        }
        else if(this.clickTabValue==3){
        $('#pills-bankInfo-tab').click();
        this.clickTabValue=4;
        this.hotelBankInfo();
        }
        else if(this.clickTabValue==4){
        $('#pills-contactInfo-tab').click();
        this.clickTabValue=5;
        }
        else if(this.clickTabValue==5){
        $('#pills-policy-tab').click();
        this.clickTabValue=6;
        }
        else if(this.clickTabValue==6){
        $('#pills-translate-tab').click();
          $('.formSubmitButton').show();
          $('.formNextButton').hide();
          
        }

        // if(this.clickTabValue==7){
        //   this.formSubmitButton = true;
        //   this.formNextButton = false;
        // }else{
        //   this.formSubmitButton = false;
        //   this.formNextButton = true;
        // }


      },
      setTabInfo(e){
        this.clickTabValue=e;
        if(e==7){
          $('.formSubmitButton').show();
          $('.formNextButton').hide();
        }else{
          $('.formSubmitButton').hide();
          $('.formNextButton').show();
        }

        if(e==4){
          this.hotelBankInfo();
        }
      },

        
      hotelFacilityList() {
      let uri = `htl_facility`;
      axios.get(uri).then((response) => {
        this.users = response.data.data;
      });
    },
        

        
      hotelContactTypeList() {
      let uri = `htl_contact_type`;
      axios.get(uri).then((response) => {
        this.hotelContactTypes = response.data.data;
      });
    },
        
    hotelContactPositionTypeList() {
      let uri = `htl_contact_position_type`;
      axios.get(uri).then((response) => {
        this.hotelContactPositionTypes = response.data.data;
      });
    },
    
    hotelBankInfo() {
      let uri = `htl_bank_info/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.hotelBankInfos = response.data.data;
      });
    },
        
        
    propertyTypeList() {
      let uri = `htl_property_type`;
      axios.get(uri).then((response) => {
        this.propertyTypeLists = response.data.data;
      });
    },
        
    hotelList() {
      let uri = `hotel_list`;
      axios.get(uri).then((response) => {
        this.hotelLists = response.data.data;
      });
    },
        
    getHotelContactInfo() {
      let uri = `hotel_contact_list/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.hotelContactInfos = response.data.data;
      });
    },
        
    getHotelTranslateList() {
      let uri = `hotel_translate_list/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.hotelTranslateInfos = response.data.data;
      });
    },
    
        
    getHotelInfo() {
      this.selected = [];
      let uri = `hotel_info_by_id/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.form.hotel_code = response.data.data.hotel_code;
        this.form.hotel_name = response.data.data.hotel_name;
        this.form.hotel_location = 
        response.data.data.location.cityName+', '+
        response.data.data.location.place+', '+response.data.data.country.name; 
        this.form.property_type_id = response.data.data.property_type_id;
        this.form.star = response.data.data.star;
        this.form.commission_type = response.data.data.commission_type;
        this.form.commission_amount = response.data.data.commission_amount;
        this.form.vat_type = response.data.data.vat_type;
        this.form.vat_amount = response.data.data.vat_amount;
        this.form.related_hotel = response.data.data.related_hotel;
        
        this.form.meta_title = response.data.meta.meta_title;
        this.form.meta_keyword = response.data.meta.meta_keyword;
        this.form.meta_description = response.data.meta.meta_description;

        this.form.check_in_time = response.data.policy.check_in_time;
        this.form.check_out_time = response.data.policy.check_out_time;
        this.form.payment_method_id = response.data.policy.payment_method_id;
        this.form.policy_terms = response.data.policy.policy_terms;
        
        this.selected = response.data.selected;

      });
      this.getHotelContactInfo();
      this.getRoomImageList();
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
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
      
      
    
      hotelInformationUpdate() {
        //alert(selected);
        this.loading = true;
        this.form.facilities = this.selected;
        this.form
          .post("/htl_info_update/"+this.form.hotel_id)
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
              
              $('#pills-home-tab').click();
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
      
      
    
      addContactInformation() {
        //alert(selected);
        this.loading = true;
        this.form
          .post("/htl_contact_info/"+this.form.hotel_id)
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

            this.form.contact_type_id = '';
            this.form.position_type_id = '';
            this.form.full_name = '';
            this.form.email = '';
            this.form.mobile_no = '';
            this.form.office_phone_no = '';
            this.form.extension = '';
            this.form.contact_hour_from = '';
            this.form.contact_hour_to = '';
              this.getHotelContactInfo()
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
      
      
      addBankInformation() {
        //alert(selected);
        this.loading = true;
        this.form
          .post("/htl_bank_information/"+this.form.hotel_id)
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
              this.form.payment_method_id = '';
              this.form.account_details = '';
              this.hotelBankInfo();
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
      getShopAssetData() {
        axios.get("/shopAssetBrandEntry").then((res) => {
          this.assetBrandData = res.data.assetBrandList;
        });
      },
  
      
      changeStatus(assetBrandEntryId) {
        axios.get("/assetBrandEntry/" + assetBrandEntryId).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Status Change Successfully",
          });
          this.getShopAssetData();
        });
      },
  
      distroy(assetBrandEntryId) {
        axios.delete("assetBrandEntry/" + assetBrandEntryId).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Delete Successfully",
          });
          this.getShopAssetData();
        });
      },
    },
  };
  </script>
  