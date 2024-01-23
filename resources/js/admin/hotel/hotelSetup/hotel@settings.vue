<template id="">
  <span>
    <div class="mb-3 card">
      <div class="card-header card-header-tab-animation">
        <ul class="nav nav-justified">
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-1" class="active nav-link">General</a>
          </li>
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-2" @click="propertyTypeTab()" class="nav-link">Property Types</a>
          </li>
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-3" @click="roomTypeTab()" class="nav-link">Room Types</a>
          </li>
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-4" @click="bedTypeTab()" class="nav-link">Bed Types</a>
          </li>
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-5" @click="hotelFacilityTab()" class="nav-link">Hotel Facility</a>
          </li>
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-6" @click="roomFacilityTab()" class="nav-link">Room Facility</a>
          </li>
          <li class="nav-item border-right">
            <a data-toggle="tab" href="#tab-eg115-7" @click="paymentMethodTab()" class="nav-link">Payment Methods</a>
          </li>
          <li class="nav-item">
            <a data-toggle="tab" href="#tab-eg115-8" @click="cancellationPolicyTab()" class="nav-link">Cancellation Policy</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          
            <!-- ============= tab details 1  -->
            <div class="tab-pane active" id="tab-eg115-1" role="tabpanel">

              <form @submit.prevent="hotelSettingsGeneralEntry()">
                <div class="row form-group">
            <label class="col-md-2 control-label text-left">Target</label>
            <div class="col-md-4">
              <select class="form-control" name="target" v-model="form.target">
                <option value="_self">Self</option>
                <option value="_blank">Blank</option>
              </select>
            </div>
          </div>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Header Title</label>
            <div class="col-md-4">
              <input type="text" v-model="form.header_title" class="form-control" placeholder="title" >
            </div>
          </div>
          <hr>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Home Featured Hotels</label>
            <div class="col-md-2">
              <input class="form-control"  v-model="form.home_featured_hotel"  type="text" placeholder="" name="home">
            </div>
            <label class="col-md-2 control-label text-left">Display Order</label>
            <div class="col-md-3">
              <select class="form-control"  v-model="form.home_featured_hotel_display_order" >
                <option v-for="displayOrderByList in displayOrderByLists" :value="displayOrderByList.id"> {{ displayOrderByList.name }} </option>
              </select>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Listings Hotels</label>
            <div class="col-md-2">
              <input class="form-control" type="text" placeholder=""  v-model="form.listing_hotels">
            </div>
            <label class="col-md-2 control-label text-left">Display Order</label>
            <div class="col-md-3">
              <select class="form-control" v-model="form.listing_hotels_display_order">
                <option v-for="displayOrderByList in displayOrderByLists" :value="displayOrderByList.id"> {{ displayOrderByList.name }} </option>
              </select>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Search Result Hotels</label>
            <div class="col-md-2">
              <input class="form-control" type="text" placeholder="" v-model="form.search_result_hotel">
            </div>
            <label class="col-md-2 control-label text-left">Display Order</label>
            <div class="col-md-3">
              <select class="form-control"  v-model="form.search_result_hotel_display_order">
                <option v-for="displayOrderByList in displayOrderByLists" :value="displayOrderByList.id"> {{ displayOrderByList.name }} </option>
              </select>
            </div>
          </div>
          <div class="clearfix"></div>
          
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Related Hotels</label>
            <div class="col-md-2">
              <input class="form-control" type="text" placeholder="" v-model="form.related_hotels">
            </div>
          </div>
          <hr>
          <h5 class="text-danger">Search Settings</h5>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Minimum Price</label>
            <div class="col-md-2">
              <input class="form-control" type="text" placeholder="" v-model="form.search_min_price">
            </div>
            <label class="col-md-2 control-label text-left">Maximum Price</label>
            <div class="col-md-2">
              <input class="form-control" type="text" placeholder="" v-model="form.search_max_price">
            </div>
          </div>
          <hr>
          <h5 class="text-danger">Default Check-Time</h5>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Check In</label>
            <div class="col-md-2">
              <input class="form-control timepicker" type="text" placeholder="" v-model="form.check_in_time" data-format="hh:mm A">
            </div>
            <label class="col-md-2 control-label text-left">Check Out</label>
            <div class="col-md-2">
              <input class="form-control timepicker" type="text" placeholder="" v-model="form.check_out_time" data-format="hh:mm A">
            </div>
          </div>

          <h5 class="text-danger">SEO</h5>
          <div class="row form-group">
            <label class="col-md-2 control-label text-left">Meta Keywords</label>
            <div class="col-md-4">
              <input class="form-control" type="text" placeholder="" v-model="form.meta_keyword">
            </div>
            <label class="col-md-2 control-label text-left">Meta Description</label>
            <div class="col-md-4">
              <input class="form-control" type="text" placeholder="" v-model="form.meta_description">
            </div>

            <div class="col-md-12">
                <hr>
                <button type="submit" class="btn btn-primary float-right"> Submit </button>
            </div>
          </div>
        </form>
          </div>
          <!-- ============= / tab details 1  -->

 
          
            <!-- ============= tab details 2  -->
            <div class="tab-pane" id="tab-eg115-2" role="tabpanel">
            <div class="table-responsive bg-white p-3">
                
                <!-- Button trigger modal -->
                <button @click="propertyEmpty" type="button" class="btn btn-success mb-3" data-toggle="modal" data-target="#propertyType"> + Add New </button>


                    <!-- Modal property Type -->
                    <div class="modal fade" id="propertyType" tabindex="-1" role="dialog" aria-labelledby="propertyTypeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form @submit.prevent="htl_property_type()">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> {{ property_type_title_text }} Property Type </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"> &times; </span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div
                                class="col-12
                                    pb-2
                                    pt-2
                                    mb-3
                                    supplier-border
                                    comm-form-box-back-color">
                            
                                <div class="form-group">
                                    <label>Property Type Name 
                                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                    </label>
                                    <input type="text" v-model="form.property_type_name"
                                    class="form-control"
                                    placeholder="Property Type Name"
                                    :class="{ 'is-invalid': form.errors.has('property_type_name') }">
                                    <has-error :form="form" field="property_type_name"></has-error>
                                </div>

                                <input type="hidden" v-model="form.property_id">

                                <div class="form-group">
                                    <label>Property Type Description 
                                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                    </label>
                                    <textarea v-model="form.property_type_description"
                                    class="form-control"
                                    placeholder="Property Type Description"
                                    :class="{ 'is-invalid': form.errors.has('property_type_description') }"
                                    ></textarea>
                                    <has-error :form="form" field="property_type_description"></has-error>
                                </div>
                                <div class="form-group" v-if="loginIds==0">
                                <label> Status </label>
                                        <select class="form-control" v-model="form.propertyTypeStatus" 
                                        :class="{ 'is-invalid': form.errors.has('propertyTypeStatus') }">
                                        <option value="1"> Active  </option>
                                        <option value="0"> In-Active  </option> 
                                        </select> 
                                        <has-error :form="form" field="propertyTypeStatus"></has-error> 
                                </div>


                                </div>
                    
                            


                        </div>
                        <div class="modal-footer">
                            <div class="col-12">
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
                                    type="submit"
                                    class="
                                        btn-pill btn-shadow btn btn-primary btn-lg
                                        float-right
                                        btn-hover-shine
                                    "
                                    :disabled="loading"
                                    >
                                    <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        aria-hidden="true"
                                    ></span>
                    
                                    <span v-else class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> {{ property_type_btn_text }} </span>
                                    </button>
                                </div>
                        </div>
                    </form>
                        </div> 
                    </div>
                    </div>
                    <!-- / Modal property Type -->


          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Property Type Name </th>
                <th> Property Type Description </th>
                <th v-if="loginIds==0"> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="information,index in propertyTypeLists">
                <td>{{ ++index }}</td>
                 <td>{{ information.property_type_name }}</td>
                 <td>{{ information.property_type_description }}</td>
                 
                    <td v-if="loginIds==0"> 
                      <span v-if="information.status==0" class="badge badge-danger"> In-Active </span>
                      <span v-if="information.status==1" class="badge badge-success"> Active </span>
                    </td>
                 <td>
                    <button @click="propertyEdit(information.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#propertyType">
                       <i class="fa fa-edit"></i>
                    </button>
                 </td>

                

                <td v-if="information.hotel_info_count=='0'">
                  <button type="button" @click="deletePropertyType(information.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                    <i class="fa fa-trash"></i>
                  </button>
              </td>

               <td v-else>
                  <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
                    <i class="fa fa-trash"></i>
                  </button>
              </td>


              </tr>
              
            </tbody>
          </table>
        </div>
          </div>
          <!-- ============= / tab details 2  -->

 
          
            <!-- ============= tab details 3  -->
            <div class="tab-pane" id="tab-eg115-3" role="tabpanel">
            

                
                <!-- Button trigger modal -->
                <button type="button" @click="RoomTypeEmpty" class="btn btn-success mb-3" data-toggle="modal" data-target="#roomType"> + Add New </button>


                    <!-- Modal room Type -->
                    <div class="modal fade" id="roomType" tabindex="-1" role="dialog" aria-labelledby="roomTypeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form @submit.prevent="roomTypeEntry()">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> {{ room_type_title_text }} Room Type </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div
                                class="col-12
                                    pb-2
                                    pt-2
                                    mb-3
                                    supplier-border
                                    comm-form-box-back-color">
                            
                                    <div class="form-group">
                                        <label>Room Type
                                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                        </label>
                                        <input type="text"
                                        class="form-control"
                                        placeholder="Enter Room Type"
                                        v-model="form.room_type_name"
                                        :class="{ 'is-invalid': form.errors.has('room_type_name') }">
                                        <has-error :form="form" field="room_type_name"></has-error>  
                                    </div>
                                    
                                    <input type="hidden" v-model="form.room_type_id">
                                    
                                    <div class="form-group" v-if="loginIds==0">
                                    <label> Status </label>
                                            <select class="form-control"
                                            v-model="form.roomTypeStatus"
                                            :class="{ 'is-invalid': form.errors.has('roomTypeStatus') }">
                                            <option value="1"> Active  </option>
                                            <option value="0"> In-Active  </option>
                                            </select>  
                                            <has-error :form="form" field="roomTypeStatus"></has-error>  
                                    </div>


                                </div>
                    
                            


                        </div>
                        <div class="modal-footer">
                            <div class="col-12">
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
                                    type="submit"
                                    class="
                                        btn-pill btn-shadow btn btn-primary btn-lg
                                        float-right
                                        btn-hover-shine
                                    "
                                    :disabled="loading"
                                    >
                                    <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        aria-hidden="true"
                                    ></span>
                    
                                    <span v-else class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> {{ room_type_btn_text }} </span>
                                    </button>
                                </div>
                        </div>
                    </form>
                        </div> 
                    </div>
                    </div>
                    <!-- / Modal room Type -->





            <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Room Type </th>
                <th v-if="loginIds==0"> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="roomTypeList,index in roomTypeLists">
                 <td>{{ ++index }}</td>
                 <td>{{ roomTypeList.room_type_name }}</td>
                 
                    <td v-if="loginIds==0"> 
                      <span v-if="roomTypeList.status==1" class="badge badge-success"> Active </span>
                      <span v-if="roomTypeList.status==0" class="badge badge-danger"> In-Active </span>
                    </td>
                 <td>
                  <button @click="editRoomType(roomTypeList.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#roomType">
                    <i class="fa fa-edit"></i>
                  </button>
                  </td>

                <td v-if="roomTypeList.room_info_count=='0'">
                  <button type="button" @click="deleteRoomType(roomTypeList.id)" class=" btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>

                <td v-else>
                  <button type="button" class=" btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>

              </tr>
              
            </tbody>
          </table>
          </div>
          <!-- ============= / tab details 3  -->
 
          
            <!-- ============= tab details 4  -->
            <div class="tab-pane" id="tab-eg115-4" role="tabpanel">
            

                
                <!-- Button trigger modal -->
                <button type="button" @click="BedTypeEmpty" class="btn btn-success mb-3" data-toggle="modal" data-target="#bedType"> + Add New </button>


                    <!-- Modal bed Type -->
                    <div class="modal fade" id="bedType" tabindex="-1" role="dialog" aria-labelledby="bedTypeLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form @submit.prevent="bedTypeEntry()">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> {{ bed_type_title_text }} Bed Type </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div
                                class="col-12
                                    pb-2
                                    pt-2
                                    mb-3
                                    supplier-border
                                    comm-form-box-back-color">
                            
                                    <div class="form-group">
                                        <label>Bed Type
                                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                        </label>
                                        <input type="text"
                                        class="form-control"
                                        placeholder="Enter Bed Type"
                                        v-model="form.bed_type_name"
                                        :class="{ 'is-invalid': form.errors.has('bed_type_name') }">
                                        <has-error :form="form" field="bed_type_name"></has-error>  
                                    </div>

                                    <input type="hidden" v-model="form.bed_type_id">
                                    

                                    
                                    <div class="form-group" v-if="loginIds==0">
                                    <label> Status </label>
                                    <select class="form-control"
                                            v-model="form.bed_type_status"
                                            :class="{ 'is-invalid': form.errors.has('bed_type_status') }">
                                            <option value="1"> Active  </option>
                                            <option value="0"> In-Active  </option>
                                            </select>  
                                            <has-error :form="form" field="bed_type_status"></has-error>  
                                    </div>


                                </div>
                    
                            


                        </div>
                        <div class="modal-footer">
                            <div class="col-12">
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
                                    type="submit"
                                    class="
                                        btn-pill btn-shadow btn btn-primary btn-lg
                                        float-right
                                        btn-hover-shine
                                    "
                                    :disabled="loading"
                                    >
                                    <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        aria-hidden="true"
                                    ></span>
                    
                                    <span v-else class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> {{ bed_type_btn_text }} </span>
                                    </button>
                                </div>
                        </div>
                    </form>
                        </div> 
                    </div>
                    </div>
                    <!-- / Modal room Type -->





                    <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Bed Type </th>
                <th v-if="loginIds==0"> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bedTypeList,index in bedTypeLists">
                 <td>{{ ++index }}</td>
                 <td> {{ bedTypeList.bed_type_name }} </td>
                 
                    <td v-if="loginIds==0"> 
                      <span v-if="bedTypeList.status==1" class="badge badge-success"> Active </span>
                      <span v-if="bedTypeList.status==0" class="badge badge-danger"> In-Active </span>
                    </td>

                 <td>
                  <button @click="editBedType(bedTypeList.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#bedType">
                    <i class="fa fa-edit"></i>
                  </button>
              </td>

                <td v-if="bedTypeList.bed_info_count=='0'">
                  <button type="button" @click="deleteBedType(bedTypeList.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
                <td v-else>
                  <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>

              </tr>
              
            </tbody>
          </table>


          </div>
          <!-- ============= / tab details 4  -->

 
          
            <!-- ============= tab details 5  -->
            <div class="tab-pane" id="tab-eg115-5" role="tabpanel">
            

                
                <!-- Button trigger modal -->
                <button type="button" @click="HotelFacilityEmpty" class="btn btn-success mb-3" data-toggle="modal" data-target="#hotelFacility"> + Add New </button>


                    <!-- Modal hotel Facility -->
                    <div class="modal fade" id="hotelFacility" tabindex="-1" role="dialog" aria-labelledby="hotelFacilityLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form @submit.prevent="addFacility()">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{ hotel_facility_title_text }} Hotel Facility </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div
                                class="col-12
                                    pb-2
                                    pt-2
                                    mb-3
                                    supplier-border
                                    comm-form-box-back-color">
                            
                                                            
                                    <div class="form-group">
                                    <label> Facility Type   
                                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                            <span class="badge badge-primary" data-toggle="modal" data-target="#facilityTypeModal">
                                            +
                                            </span>
                                        </label>
                                            <select class="form-control"
                                            v-model="form.facility_type_id"
                                            :class="{ 'is-invalid': form.errors.has('facility_type_id') }">
                                            <option value=""> Select Facility Type </option>
                                            <option v-for="facility_type_list in facility_type_lists" :value="facility_type_list.id"> {{ facility_type_list.facility_type_name }} </option>
                                            </select> 
                                            <has-error :form="form" field="facility_type_id"></has-error> 
                                            
                                                        <!-- Modal -->
                                        <div
                                            class="modal fade"
                                            id="facilityTypeModal"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">
                                                    Add Facility Type
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
                                                <form @submit.prevent="addFacilityType()">
                                                    <div class="form-group">
                                                    <label> Type Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Type  Name"
                                                        class="form-control"
                                                        v-model="form.facility_type_name"
                                                        :class="{ 'is-invalid': form.errors.has('facility_type_name') }"
                                                    />
                                                    <has-error :form="form" field="facility_type_name"></has-error>
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

                                        <!-- ======================================== /modal === -->




                                    </div>
                                    <div class="form-group">
                                        <label>Facility Name 
                                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                        </label>
                                        <input type="text"
                                        v-model="form.facility_name"
                                        class="form-control"
                                        placeholder="Facility  Name  "
                                        :class="{ 'is-invalid': form.errors.has('facility_name') }">
                                        <has-error :form="form" field="facility_name"></has-error>
                                    </div>

                                     <input type="hidden" v-model="form.hotel_facility_id">


                                    <div class="form-group" v-if="loginIds==0">
                                        <label>Position
                                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                        </label>
                                        <input type="text"
                                        v-model="form.position"
                                        class="form-control"
                                        placeholder="Position"
                                        :class="{ 'is-invalid': form.errors.has('position') }">
                                        <has-error :form="form" field="position"></has-error>
                                    </div>

                                    
                                    <div class="form-group" v-if="loginIds==0">
                                    <label> Status </label>
                                            <select class="form-control"
                                            v-model="form.hotel_facility_status"
                                            :class="{ 'is-invalid': form.errors.has('hotel_facility_status') }">
                                            <option value="1"> Active  </option>
                                            <option value="0"> In-Active  </option>
                                            </select>  
                                            <has-error :form="form" field="hotel_facility_status"></has-error>
                                    </div>


                                </div>
                    
                            


                        </div>
                        <div class="modal-footer">
                            <div class="col-12">
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
                                    type="submit"
                                    class="
                                        btn-pill btn-shadow btn btn-primary btn-lg
                                        float-right
                                        btn-hover-shine
                                    "
                                    :disabled="loading"
                                    >
                                    <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        aria-hidden="true"
                                    ></span>
                    
                                    <span v-else class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> {{ hotel_facility_btn_text }} </span>
                                    </button>
                                </div>
                        </div>
                    </form>
                        </div> 
                    </div>
                    </div>
                    <!-- / Modal hotel facility -->





                    <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Facility Type  </th>
                <th> Facility Name </th>
                <th v-if="loginIds==0"> Position </th>
                <th v-if="loginIds==0"> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="facilityList,index in facilityLists">
                 <td>{{ ++index }}</td>
                 <td><span v-if="facilityList.facility_type">{{ facilityList.facility_type.facility_type_name }}</span></td>
                 <td>{{ facilityList.facility_name }}</td>
                 <td v-if="loginIds==0">{{ facilityList.position }}</td>
                 <td v-if="loginIds==0"> 
                      <span v-if="facilityList.status==0" class="badge badge-danger"> In-Active </span>
                      <span v-if="facilityList.status==1" class="badge badge-success"> Active </span>
                    </td>
                 <td>
                  <button @click="editHotelFacility(facilityList.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#hotelFacility">
                    <i class="fa fa-edit"></i>
                  </button>
              </td>

                <td v-if="facilityList.facility_info_count=='0'">
                  <button type="button" @click="deleteHotelFacility(facilityList.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>

                <td v-else>
                  <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>

              </tr>
             
            </tbody>
          </table>


          </div>
          <!-- ============= / tab details 5  -->

 
          
 
          
            <!-- ============= tab details 6  -->
            <div class="tab-pane" id="tab-eg115-6" role="tabpanel">
            

                
                <!-- Button trigger modal -->
                <button type="button" @click="RoomFacilityTypeEmpty" class="btn btn-success mb-3" data-toggle="modal" data-target="#roomFacility"> + Add New </button>


                    <!-- Modal room Facility -->
                    <div class="modal fade" id="roomFacility" tabindex="-1" role="dialog" aria-labelledby="roomFacilityLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form @submit.prevent="addRoomFacility()">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> {{ room_facility_title_text }} Room Facility </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <div
                                class="col-12
                                    pb-2
                                    pt-2
                                    mb-3
                                    supplier-border
                                    comm-form-box-back-color">
                            
                                                            
                                    <div class="form-group">
                                        <label> Facility Type   
                                            <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                                <span class="badge badge-primary" data-toggle="modal" data-target="#roomFacilityTypeModal">
                                                +
                                                </span>
                                            </label>
                                                <select class="form-control"
                                                v-model="form.room_facility_type_id"
                                                :class="{ 'is-invalid': form.errors.has('room_facility_type_id') }">
                                                <option value=""> Select Facility Type </option>
                                                <option v-for="facility_type_list in room_facility_type_lists" :value="facility_type_list.id"> {{ facility_type_list.room_facility_type_name }} </option>
                                                </select> 
                                                <has-error :form="form" field="room_facility_type_id"></has-error> 
                                                
                                                            <!-- Modal -->
                                            <div
                                                class="modal fade"
                                                id="roomFacilityTypeModal"
                                                tabindex="-1"
                                                role="dialog"
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">
                                                        Add Room Facility Type
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
                                                    <form @submit.prevent="addRoomFacilityType()">
                                                        <div class="form-group">
                                                        <label> Type Name</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Type  Name"
                                                            class="form-control"
                                                            v-model="form.room_facility_type_name"
                                                            :class="{ 'is-invalid': form.errors.has('room_facility_type_name') }"
                                                        />
                                                        <has-error :form="form" field="room_facility_type_name"></has-error>
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

                                            <!-- ======================================== /modal === -->
                                            </div>
                                    
                                            <div class="form-group">
                                            <label>Facility  Name 
                                            <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                            </label>
                                            <input type="text"
                                            v-model="form.room_facility_name"
                                            class="form-control"
                                            placeholder="Facility  Name  "
                                            :class="{ 'is-invalid': form.errors.has('room_facility_name') }">
                                            <has-error :form="form" field="room_facility_name"></has-error>
                                        </div>


                                          <input type="hidden" v-model="form.room_facility_id">

                                        <div class="form-group" v-if="loginIds==0">
                                            <label>Position
                                            <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                            </label>
                                            <input type="text"
                                            v-model="form.room_facility_position"
                                            class="form-control"
                                            placeholder="Position"
                                            :class="{ 'is-invalid': form.errors.has('room_facility_position') }">
                                            <has-error :form="form" field="room_facility_position"></has-error>
                                        </div>

                                        
                                        <div class="form-group" v-if="loginIds==0">
                                        <label> Status </label>
                                                <select class="form-control"
                                                v-model="form.room_facility_status"
                                                :class="{ 'is-invalid': form.errors.has('room_facility_status') }">
                                                <option value="1"> Active  </option>
                                                <option value="0"> In-Active  </option>
                                                </select>  
                                                <has-error :form="form" field="room_facility_status"></has-error>
                                        </div>


                                </div>
                    
                            


                        </div>
                        <div class="modal-footer">
                            <div class="col-12">
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
                                    type="submit"
                                    class="
                                        btn-pill btn-shadow btn btn-primary btn-lg
                                        float-right
                                        btn-hover-shine
                                    "
                                    :disabled="loading"
                                    >
                                    <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        aria-hidden="true"
                                    ></span>
                    
                                    <span v-else class="mr-2 opacity-7">
                                        <i class="fa fa-paper-plane"></i>
                                    </span>
                                    <span class="mr-1"> {{ room_facility_btn_text }} </span>
                                    </button>
                                </div>
                        </div>
                    </form>
                        </div> 
                    </div>
                    </div>
                    <!-- / Modal hotel facility -->





                    <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Room Facility Type </th>
                <th> Room Facility </th>
                <th v-if="loginIds==0"> Position </th>
                <th v-if="loginIds==0"> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(roomFacilityList,index) in roomFacilityLists">
                 <td>{{ ++index }}</td>
                 <td> <span v-if="roomFacilityList.facility_type">{{ roomFacilityList.facility_type.room_facility_type_name }}</span> </td>
                 <td> {{ roomFacilityList.room_facility_name }}</td>
                 <td v-if="loginIds==0"> {{ roomFacilityList.position }}</td>
                 
                    <td v-if="loginIds==0"> 
                      <span v-if="roomFacilityList.status==1" class="badge badge-success"> Active </span>
                      <span v-if="roomFacilityList.status==0" class="badge badge-danger"> In-Active </span>
                    </td>
                 <td>
                  <button @click="editRoomFacility(roomFacilityList.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#roomFacility">
                    <i class="fa fa-edit"></i>
                  </button>
                 </td>
                <td v-if="roomFacilityList.htl_room_facility_count=='0'">
                  <button type="button" @click="deleteRoomFacility(roomFacilityList.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
                <td v-else>
                  <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>


          </div>
          <!-- ============= / tab details 6  -->

 
          
            <!-- ============= tab details 7  -->
            <div class="tab-pane" id="tab-eg115-7" role="tabpanel">
            

                
            <!-- Button trigger modal -->
            <button type="button" @click="PaymentTypeEmpty" class="btn btn-success mb-3" data-toggle="modal" data-target="#paymentType"> + Add New </button>


                <!-- Modal bed Type -->
                <div class="modal fade" id="paymentType" tabindex="-1" role="dialog" aria-labelledby="paymentTypeLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <form @submit.prevent="paymentTypeEntry()">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> {{  payment_type_title_text }} Payment Method </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div
                            class="col-12
                                pb-2
                                pt-2
                                mb-3
                                supplier-border
                                comm-form-box-back-color">
                        
                                <div class="form-group">
                                    <label>Payment Type Name
                                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                    </label>
                                    <input type="text"
                                    class="form-control"
                                    placeholder="Enter Payment Type"
                                    v-model="form.payment_type_name"
                                    :class="{ 'is-invalid': form.errors.has('payment_type_name') }">
                                    <has-error :form="form" field="payment_type_name"></has-error>  
                                </div>
                                
                                 <input type="hidden" v-model="form.payment_type_id">
                                
                                <div class="form-group" v-if="loginIds==0">
                                <label> Status </label>
                                <select class="form-control"
                                        v-model="form.payment_type_status"
                                        :class="{ 'is-invalid': form.errors.has('payment_type_status') }">
                                        <option value="1"> Active  </option>
                                        <option value="0"> In-Active  </option>
                                        </select>  
                                        <has-error :form="form" field="payment_type_status"></has-error>  
                                </div>


                            </div>
                
                        


                    </div>
                    <div class="modal-footer">
                        <div class="col-12">
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
                                type="submit"
                                class="
                                    btn-pill btn-shadow btn btn-primary btn-lg
                                    float-right
                                    btn-hover-shine
                                "
                                :disabled="loading"
                                >
                                <span
                                    v-if="loading"
                                    class="spinner-border spinner-border-sm"
                                    aria-hidden="true"
                                ></span>
                
                                <span v-else class="mr-2 opacity-7">
                                    <i class="fa fa-paper-plane"></i>
                                </span>
                                <span class="mr-1"> {{ payment_type_btn_text }} </span>
                                </button>
                            </div>
                    </div>
                </form>
                    </div> 
                </div>
                </div>
                <!-- / Modal room Type -->





                <table class="table table-hover table-striped table-bordered">
        <thead>
          <tr class="alert-info">
            <th> SN </th>
            <th> Payment Type </th>
            <th v-if="loginIds==0"> Status </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paymentTypeList,index in paymentTypeLists">
             <td>{{ ++index }}</td>
             <td> {{ paymentTypeList.payment_type_name }} </td>
             
                <td v-if="loginIds==0"> 
                  <span v-if="paymentTypeList.status==1" class="badge badge-success"> Active </span>
                  <span v-if="paymentTypeList.status==0" class="badge badge-danger"> In-Active </span>
                </td>
             <td>
                <button @click="editPaymentType(paymentTypeList.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#paymentType">
                <i class="fa fa-edit"></i>
                </button>
              </td>
            <td v-if="paymentTypeList.htl_payment_info_count=='0'">
              <button type="button" @click="deletePaymentType(paymentTypeList.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
              <i class="fa fa-trash"></i>
              </button>
           </td>
            <td v-else>
              <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
              <i class="fa fa-trash"></i>
              </button>
           </td>
          </tr>
          
        </tbody>
      </table>


      </div>
      <!-- ============= / tab details 7  -->
 
          
            <!-- ============= tab details 8  -->
            <div class="tab-pane" id="tab-eg115-8" role="tabpanel">
            

                
            <!-- Button trigger modal -->
            <button type="button" @click="CancelPolicyEmpty" class="btn btn-success mb-3" data-toggle="modal" data-target="#cancellationPolicy"> + Add New </button>


                <!-- Modal bed Type -->
                <div class="modal fade" id="cancellationPolicy" tabindex="-1" role="dialog" aria-labelledby="cancellationPolicyLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <form @submit.prevent="htl_cancelation_policy()">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"> {{ cancel_policy_title_text }} Cancellation Policy </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div
                            class="col-12
                                pb-2
                                pt-2
                                mb-3
                                supplier-border
                                comm-form-box-back-color">
                        
                                <div class="form-group">
                                    <label>Cancellation Policy
                                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                                    </label>
                                    <input type="text"
                                    class="form-control"
                                    placeholder="Enter Cancellation Policy"
                                    v-model="form.cancel_policy_name"
                                    :class="{ 'is-invalid': form.errors.has('cancel_policy_name') }">
                                    <has-error :form="form" field="cancel_policy_name"></has-error>  
                                </div>
                                
                                <input type="hidden" v-model="form.cancel_policy_id">
                                
                                <div class="form-group" v-if="loginIds==0">
                                <label> Status </label>
                                <select class="form-control"
                                        v-model="form.cancel_policy_status"
                                        :class="{ 'is-invalid': form.errors.has('cancel_policy_status') }">
                                        <option value="1"> Active  </option>
                                        <option value="0"> In-Active  </option>
                                        </select>  
                                        <has-error :form="form" field="cancel_policy_status"></has-error>  
                                </div>


                            </div>
                
                        


                    </div>
                    <div class="modal-footer">
                        <div class="col-12">
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
                                type="submit"
                                class="
                                    btn-pill btn-shadow btn btn-primary btn-lg
                                    float-right
                                    btn-hover-shine
                                "
                                :disabled="loading"
                                >
                                <span
                                    v-if="loading"
                                    class="spinner-border spinner-border-sm"
                                    aria-hidden="true"
                                ></span>
                
                                <span v-else class="mr-2 opacity-7">
                                    <i class="fa fa-paper-plane"></i>
                                </span>
                                <span class="mr-1"> {{ cancel_policy_btn_text }} </span>
                                </button>
                            </div>
                    </div>
                </form>
                    </div> 
                </div>
                </div>
                <!-- / Modal Cancellation Policy  -->





                <table class="table table-hover table-striped table-bordered">
        <thead>
          <tr class="alert-info">
            <th> SN </th>
            <th> Cancellation Policy </th>
            <th v-if="loginIds==0"> Status </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cancellationPolicyList,index in cancellationPolicyLists">
             <td>{{ ++index }}</td>
             <td> {{ cancellationPolicyList.cancel_policy_name }} </td>
             
                <td v-if="loginIds==0"> 
                  <span v-if="cancellationPolicyList.status==1" class="badge badge-success"> Active </span>
                  <span v-if="cancellationPolicyList.status==0" class="badge badge-danger"> In-Active </span>
                </td>
            <td>
                <button @click="editCancelPolicy(cancellationPolicyList.id)" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#cancellationPolicy">
                <i class="fa fa-edit"></i>
                </button>
              </td>

            <td v-if="cancellationPolicyList.cancellation_policy_info_count=='0'">
              <button type="button" @click="deleteCancellationPolicy(cancellationPolicyList.id)"
              class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine">
              <i class="fa fa-trash"></i>
            </button>
          </td>

            <td v-else>
              <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled">
              <i class="fa fa-trash"></i>
            </button>
          </td>

          </tr>
          
        </tbody>
      </table>


      </div>
      <!-- ============= / tab details 8  -->

 
          
        </div>
      </div>
    </div>
  </span>
</template>
  <script>
var d = new Date();

export default {
  data() {
    return {
      form: new Form({
        // form variable here
        
        target:'',
        header_title:'',
        home_featured_hotel:'',
        home_featured_hotel_display_order:'',
        listing_hotels:'',
        listing_hotels_display_order:'',
        search_result_hotel:'',
        search_result_hotel_display_order:'',
        related_hotels:'',
        search_min_price:'',
        search_max_price:'',
        check_in_time:'',
        check_out_time:'',
        meta_keyword:'',
        meta_description:'',

        // property type 
        property_type_name:'',
        property_type_description:'',
        propertyTypeStatus:'1',
        property_id:'',


        // hotel room type
        room_type_name:'',
        roomTypeStatus:1,
        room_type_id:'',

        // bed type 
        bed_type_name:'',
        bed_type_status:1,
        bed_type_id:'',

        // payment type 
        payment_type_name:'',
        payment_type_status:1,
        payment_type_id:'',

        // hotel Facility
        facility_type_name:'',
        facility_type_id:'',
        facility_name:'',
        position:'1',
        hotel_facility_status:'1',
        hotel_facility_id:'',
        // facility_type_id:'',

        // room facility 
        room_facility_type_name:'',
        room_facility_type_id:'',
        room_facility_name:'',
        room_facility_position:'1',
        room_facility_status:'1',
        room_facility_id:'',

        // cancellation policy
        cancel_policy_name:'',
        cancel_policy_status:'1',
        cancel_policy_id:'',

      }),

      // property type btn and text
      property_type_btn_text:'Submit',
      property_type_title_text:'Add',

      // room type btn and text
      room_type_btn_text:'Submit',
      room_type_title_text:'Add',

      // room facility type btn and text
      room_facility_type_btn_text:'Submit',
      room_facility_type_title_text:'Add',

      //payment type btn and text
      payment_type_btn_text:'Submit',
      payment_type_title_text:'Add',

      //cancel policy btn and text
      cancel_policy_btn_text:'Submit',
      cancel_policy_title_text:'Add',

      //hotel facility btn and text
      hotel_facility_btn_text:'Submit',
      hotel_facility_title_text:'Add',

      //room facility btn and text
      room_facility_btn_text:'Submit',
      room_facility_title_text:'Add',

      //room facility btn and text
      bed_type_btn_text:'Submit',
      bed_type_title_text:'Add',

      // data variable here
      loginIds: '',
      displayOrderByLists: [],
      hotelPropertyLists: [],
      propertyTypeLists: [],
      roomTypeLists: [],
      bedTypeLists: [],
      paymentTypeLists: [],
      cancellationPolicyLists: [],
      facilityLists: [],
      facility_type_lists: [],
      room_facility_type_lists: [],
      roomFacilityLists: [],
      htlSettinsInfo: '',
      loading: false,

      property_type_tab_status:0,
      room_type_tab_status:0,
      bed_type_tab_status:0,
      hotel_facility_tab_status:0,
      room_facility_tab_status:0,
      payment_method_tab_status:0,
      cancellation_policy_tab_status:0,

    };
  },

  mounted() {
    this.loginId();
    this.displayOrderByList();
    this.hotelSettingsGeneralInformation();
  },
  methods: { 

    //edit property type
    editPropertyType(id){
      
    },
   //edit property type

    cancellationPolicyTab(){
      if(this.cancellation_policy_tab_status==0){
      this.cancellationPolicyList();
      this.cancellation_policy_tab_status = 1;
      }
    },

    paymentMethodTab(){
      if(this.payment_method_tab_status==0){
      this.paymentTypeList();
      this.payment_method_tab_status = 1;
      }
    },

    roomFacilityTab(){
      if(this.room_facility_tab_status==0){
      this.roomFacilityList();
      this.room_facility_tab_status = 1;
      }
    },

    hotelFacilityTab(){
      if(this.hotel_facility_tab_status==0){
      this.facility_list();
      this.hotel_facility_tab_status = 1;
      }
    },

    bedTypeTab(){
      if(this.bed_type_tab_status==0){
      this.bedTypeList();
      this.bed_type_tab_status = 1;
      }
    },

    roomTypeTab(){
      if(this.room_type_tab_status==0){
      this.roomTypeList();
      this.room_type_tab_status = 1;
      }
    },

    propertyTypeTab(){
      if(this.property_type_tab_status==0){
      this.showPropertyType();
      this.property_type_tab_status = 1;
      }
    },


           
    hotelSettingsGeneralInformation() {
      let uri = `htl_settings_general_info`;
      axios.get(uri).then((response) => {
        
        this.form.target = response.data.data.target;
        this.form.header_title = response.data.data.header_title;
        this.form.home_featured_hotel = response.data.data.home_featured_hotel;
        this.form.home_featured_hotel_display_order = response.data.data.home_featured_hotel_display_order;
        this.form.listing_hotels = response.data.data.listing_hotels;
        this.form.listing_hotels_display_order = response.data.data.listing_hotels_display_order;
        this.form.search_result_hotel = response.data.data.search_result_hotel;
        this.form.search_result_hotel_display_order = response.data.data.search_result_hotel_display_order;
        this.form.related_hotels = response.data.data.related_hotels;
        this.form.search_min_price = response.data.data.search_min_price;
        this.form.search_max_price = response.data.data.search_max_price;
        this.form.check_in_time = response.data.data.check_in_time;
        this.form.check_out_time = response.data.data.check_out_time;
        this.form.meta_keyword = response.data.data.meta_keyword;
        this.form.meta_description = response.data.data.meta_description;

      });
    },

    hotelSettingsGeneralEntry() {
        this.loading = true;
        this.form
          .post("/htl_settings_general_info")
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
                title: "Information Entry Successfully",
              });
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
       
    loginId() {
      let uri = `getLoginId`;
      axios.get(uri).then((response) => {
        this.loginIds = response.data.id;
      });
    },
       
    
    displayOrderByList() {
      let uri = `htl_display_order_by`;
      axios.get(uri).then((response) => {
        this.displayOrderByLists = response.data.data;
      });
    },
       

    htl_cancelation_policy() {
        this.loading = true;

       if(this.form.cancel_policy_id>0){
         this.form
          .put("/htl_cancelation_policy/"+this.form.cancel_policy_id)
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
                title: "Information Update Successfully",
              });
              this.form.cancel_policy_name = '';
              this.cancellationPolicyList();
              $("#cancellationPolicy").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
       }else{
         this.form
          .post("/htl_cancelation_policy")
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
                title: "Information Entry Successfully",
              });
              this.form.cancel_policy_name = '';
              this.cancellationPolicyList();
              $("#cancellationPolicy").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
       }

      },

    cancellationPolicyList() {
      let uri = `htl_cancelation_policy`;
      axios.get(uri).then((response) => {
        this.cancellationPolicyLists = response.data.data;
      });
    },
    
    editCancellationPolicy(id) {

      this.form.cancel_policy_name = '';
      this.form.cancel_policy_status = '';

      axios.get('/htl_cancelation_policy/'+id+'/edit').then((res) => {
        this.form.cancel_policy_name = res.data.data.cancel_policy_name;
        this.form.cancel_policy_status = res.data.data.status;
      });
      $("#cancellationPolicy").modal("show");
      $('.cancellationPolicyForm').attr('action');
    },
    
    deleteCancellationPolicy(id) {
      axios.delete("htl_cancelation_policy/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.cancellationPolicyList();
      });
    },
    
    getRoomFacilityType() {
      let uri = `htl_rom_facility_type`;
      axios.get(uri).then((response) => {
        this.room_facility_type_lists = response.data.data;
        });
      },
    //add room facility type
    addRoomFacilityType() {
        this.loading = true;
        this.form
          .post("/htl_rom_facility_type")
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
                title: "Data Entry Successful",
              });
              this.form.room_facility_type_name = '';
            }
            this.getRoomFacilityType();
            $("#roomFacilityTypeModal").modal("hide");
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
    
    addRoomFacility() {
        this.loading = true;

        if(this.form.room_facility_id>0){
           this.form
          .put("/htl_rom_facility/"+this.form.room_facility_id)
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
                title: "Data Update Successful",
              });
                
                this.form.room_facility_type_name = '';
                this.form.room_facility_type_id = '';
                this.form.room_facility_name = '';
                this.form.room_facility_position = '';
              this.roomFacilityList();
              $("#roomFacility").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
        }else{
         this.form
          .post("/htl_rom_facility")
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
                title: "Data Entry Successful",
              });
                
                this.form.room_facility_type_name = '';
                this.form.room_facility_type_id = '';
                this.form.room_facility_name = '';
                this.form.room_facility_position = '';
              this.roomFacilityList();
              $("#roomFacility").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          }); 
        }

          
      },
  
      roomFacilityList() {
        this.getRoomFacilityType();
      let uri = `htl_rom_facility`;
      axios.get(uri).then((response) => {
        this.roomFacilityLists = response.data.data;
      });
       },

     
    deleteRoomFacility(id) {
      axios.delete("htl_rom_facility/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.roomFacilityList();
      });
    },




    getFacilityType() {
      let uri = `htl_facility_type`;
      axios.get(uri).then((response) => {
        this.facility_type_lists = response.data.data;
      });
    },

    addFacilityType() {
        this.loading = true;
        this.form
          .post("/htl_facility_type")
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
                title: "Information Entry Successfully",
              });
              this.form.facility_type_name = '';
            }
            this.getFacilityType();
            $("#facilityTypeModal").modal("hide");
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
    
    addFacility() {
        this.loading = true;

        if(this.form.hotel_facility_id>0){
           this.form
          .put("/htl_facility/"+this.form.hotel_facility_id)
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
                title: "Information Updated Successfully",
              });
              
                this.form.facility_type_name = '';
                this.form.facility_type_id = '';
                this.form.facility_name = '';
                this.form.position = '';

                this.facility_list();
              $("#hotelFacility").modal("hide");

            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
        }else{
            this.form
          .post("/htl_facility")
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
                title: "Information Entry Successfully",
              });
              
                this.form.facility_type_name = '';
                this.form.facility_type_id = '';
                this.form.facility_name = '';
                this.form.position = '';

                this.facility_list();
              $("#hotelFacility").modal("hide");

            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
        }

        
      },

    facility_list() {
        this.getFacilityType();
      let uri = `htl_facility`;
      axios.get(uri).then((response) => {
        this.facilityLists = response.data.data;
      });
    },
    
    deleteHotelFacility(id) {
      axios.delete("htl_facility/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.facility_list();
      });
    },


    paymentTypeEntry() {
        this.loading = true;

        if(this.form.payment_type_id>0){
           this.form
          .put("/htl_payment_type/"+this.form.payment_type_id)
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
                title: "Data Update Successful",
              });
              this.form.payment_type_name = '';
              this.paymentTypeList();
              $("#paymentType").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
        }else{
           this.form
          .post("/htl_payment_type")
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
                title: "Data Entry Successful",
              });
              this.form.payment_type_name = '';
              this.paymentTypeList();
              $("#paymentType").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
        }


        
      },
        
      paymentTypeList() {
      let uri = `htl_payment_type`;
      axios.get(uri).then((response) => {
        this.paymentTypeLists = response.data.data;
      });
    },
    
    deletePaymentType(id) {
      axios.delete("htl_payment_type/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.paymentTypeList();
      });
    },

    bedTypeEntry() {
        this.loading = true;

         if(this.form.bed_type_id>0){

          this.form
          .put("/htl_rom_bed_type/"+this.form.bed_type_id)
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
                title: "Data Update Successful",
              });
              this.form.bed_type_name = '';
              this.bedTypeList();
              $("#bedType").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });

         }else{

          this.form
          .post("/htl_rom_bed_type")
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
                title: "Data Entry Successful",
              });
              this.form.bed_type_name = '';
              this.bedTypeList();
              $("#bedType").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });

         }

        
      },
        
    bedTypeList() {
      let uri = `htl_rom_bed_type`;
      axios.get(uri).then((response) => {
        this.bedTypeLists = response.data.data;
      });
    },
    
    deleteBedType(id) {
      axios.delete("htl_rom_bed_type/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.bedTypeList();
      });
    },
      
    roomTypeEntry() {
        this.loading = true;


      if(this.form.room_type_id>0){
          this.form
          .put("/htl_rom_type/"+this.form.room_type_id)
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
                title: "Data Update Successful",
              });
              this.form.room_type_name = '';
              this.roomTypeList();
              $("#roomType").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      }else{
         this.form
          .post("/htl_rom_type")
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
                title: "Data Entry Successful",
              });
              this.form.room_type_name = '';
              this.roomTypeList();
              $("#roomType").modal("hide");
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      }

      },

    roomTypeList() {
      let uri = `htl_rom_type`;
      axios.get(uri).then((response) => {
        this.roomTypeLists = response.data.data;
      });
    },
    
    deleteRoomType(id) {
      axios.delete("htl_rom_type/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.roomTypeList();
      });
    },
    
    htl_property_type() { 
        this.loading = true;

        if(this.form.property_id>0){
            /*update property*/
            this.form
          .put("/htl_property_type/"+this.form.property_id)
          .then((res) => {
            
            //--------- submit button loading 
            this.loading = false;
            //--------- /submit button loading


            //---------validation 
            if (res.data.changeAssetBrandName) {
              Toast.fire({
                icon: "error",
                title: "Change Your Asset Brand Name",
              });
            }
            //---------/validation 
             else {
              Toast.fire({
                icon: "success",
                title: "Information Update successful.",
              });

              //--------- reset form
              this.showPropertyType();
              this.form.property_type_name='';
              this.form.property_type_description='';
              $("#propertyType").modal("hide");
              //--------- reset form

            }
          })
          .catch((res) => {
            
            //--------- submit button loading 
            this.loading = true;
            //--------- /submit button loading

            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
            this.loading = false;
          });
            /*update property*/
        }else{
           /*insert property*/

           this.form
          .post("/htl_property_type")
          .then((res) => {
            
            //--------- submit button loading 
            this.loading = false;
            //--------- /submit button loading

            //---------validation 
            if (res.data.changeAssetBrandName) {
              Toast.fire({
                icon: "error",
                title: "Change Your Asset Brand Name",
              });
            }
            //---------/validation 
             else {
              Toast.fire({
                icon: "success",
                title: "Information add successful.",
              });

              //--------- reset form
              this.showPropertyType();
              this.form.property_type_name='';
              this.form.property_type_description='';
              $("#propertyType").modal("hide");
              //--------- reset form
            }
          })
          .catch((res) => {
            
            //--------- submit button loading 
            this.loading = true;
            //--------- /submit button loading

            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
            this.loading = false;
          });

          
           /*insert property*/
        }

        
      },

      showPropertyType()
        {
         axios.get('/htl_property_type').then(res =>{        
              this.propertyTypeLists = res.data.data;
          });
        },
 

    deletePropertyType(id) {
      axios.delete("htl_property_type/" + id).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        this.showPropertyType();
      });
    },

    //property type

    propertyEdit(id) {
       this.property_type_btn_text='Update';
       this.property_type_title_text='Update';

      axios.get("htl_property_type/"+id+"/edit").then((res) => {
        this.form.property_id = id;
        this.form.property_type_name = res.data.property.property_type_name;
        this.form.property_type_description = res.data.property.property_type_description;
      });
    },

    propertyEmpty(){
      this.form.property_id = '';
      this.property_type_btn_text='Submit';
       this.property_type_title_text='Add';
        this.form.property_type_name = '';
        this.form.property_type_description = '';
    },

    //room type
    editRoomType(id) {
       this.room_type_btn_text='Update';
       this.room_type_title_text='Update';

      axios.get("htl_rom_type/"+id+"/edit").then((res) => {
        this.form.room_type_id = id;
        this.form.room_type_name = res.data.room_type.room_type_name;
      });
    },

    RoomTypeEmpty(){
      this.form.room_type_id = '';
      this.room_type_btn_text='Submit';
      this.room_type_title_text='Add';
      this.form.room_type_name = '';
    },
     //room type

    //bed type
    editBedType(id) {
       this.bed_type_btn_text='Update';
       this.bed_type_title_text='Update';

      axios.get("htl_rom_bed_type/"+id+"/edit").then((res) => {
        this.form.bed_type_id = id;
        this.form.bed_type_name = res.data.bed_type.bed_type_name;
      });
    },

    BedTypeEmpty(){
      this.form.bed_type_id = '';
      this.bed_type_btn_text='Submit';
      this.bed_type_title_text='Add';
      this.form.bed_type_name = '';
    },
     //room type

    //room facility
    editRoomFacility(id) {
       this.room_facility_btn_text='Update';
       this.room_facility_title_text='Update';

      axios.get("htl_rom_facility/"+id+"/edit").then((res) => {
        this.form.room_facility_id = id;
        this.form.room_facility_type_id = res.data.room_facility.room_facility_type_id;
        this.form.room_facility_name = res.data.room_facility.room_facility_name;
        this.form.room_facility_position = res.data.room_facility.position;
        this.form.room_facility_status = res.data.room_facility.status;
      });
    },

    RoomFacilityTypeEmpty(){
      this.form.room_facility_id = '';
      this.room_facility_btn_text='Submit';
      this.room_facility_title_text='Add';
      this.form.room_facility_type_id = '';
      this.form.room_facility_name = '';
      // this.form.room_facility_position = '';
      // this.form.room_facility_status = '';
    },
     //room facility


     editPaymentType(id){
       this.payment_type_btn_text ="Update";
       this.payment_type_title_text ="Update";
       axios.get('htl_payment_type/'+id+"/edit").then((response)=>{
         this.form.payment_type_id = id;
         this.form.payment_type_name = response.data.payment_type.payment_type_name;
         // this.form.payment_type_status = response.data.payment_type.status;
       });
     },
      PaymentTypeEmpty(){
      this.form.payment_type_id = '';
      this.payment_type_btn_text='Submit';
      this.payment_type_title_text='Add';
      this.form.payment_type_name = '';
      // this.form.payment_type_status = '';
    },

     editCancelPolicy(id){
       this.cancel_policy_btn_text ="Update";
       this.cancel_policy_title_text ="Update";
       axios.get('htl_cancelation_policy/'+id+"/edit").then((response)=>{
         this.form.cancel_policy_id = id;
         this.form.cancel_policy_name = response.data.cancel_policy.cancel_policy_name;
       });
     },
      CancelPolicyEmpty(){
      this.form.cancel_policy_id = '';
      this.cancel_policy_btn_text='Submit';
      this.cancel_policy_title_text='Add';
      this.form.cancel_policy_name = '';
    },
    //hotel facility
     editHotelFacility(id){
       this.hotel_facility_btn_text ="Update";
       this.hotel_facility_title_text ="Update";
       axios.get('htl_facility/'+id+"/edit").then((response)=>{
         this.form.hotel_facility_id = id;
         this.form.facility_type_id = response.data.hotel_facility.facility_type_id;
         this.form.facility_name = response.data.hotel_facility.facility_name;
         this.form.position = response.data.hotel_facility.position;
         this.form.hotel_facility_status = response.data.hotel_facility.status;
       });
     },
      HotelFacilityEmpty(){
      this.form.hotel_facility_id = '';
      this.hotel_facility_btn_text='Submit';
      this.hotel_facility_title_text='Add';
      this.form.facility_type_id = '';
      this.form.facility_name = '';
    },


  },
};
</script>
  