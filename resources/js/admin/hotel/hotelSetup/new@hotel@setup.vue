<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> Hotel Information Setup
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/hotel@information@setup" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"> < Back </router-link>
          </div>

        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="hotelInformationUpdate()">
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


             <div class="card-header card-header-tab-animation mb-2">
        <ul class="nav nav-justified">
          <li class="nav-item border-right">
            <a class="nav-link active" @click="setTabInfo(1)" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">General</a>
          </li>
          <li class="nav-item border-right">
            <a class="nav-link" @click="setTabInfo(2)" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Facility</a>
          </li>
          <li class="nav-item border-right">
            <a class="nav-link" @click="setTabInfo(3)" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Meta Info</a>
          </li>
          <!-- <li class="nav-item border-right">
           <a class="nav-link" @click="setTabInfo(4)" id="pills-bankInfo-tab" data-toggle="pill" href="#pills-bankInfo" role="tab" aria-controls="pills-bankInfo" aria-selected="false"> Bank Info</a>
          </li> -->
          <li class="nav-item border-right">
               <a class="nav-link" @click="setTabInfo(4)" id="pills-gallery-tab" data-toggle="pill" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false"> Gallery </a>
          </li>
          <li class="nav-item border-right">
             <a class="nav-link"  @click="setTabInfo(5)" id="pills-contactInfo-tab" data-toggle="pill" href="#pills-contactInfo" role="tab" aria-controls="pills-contactInfo" aria-selected="false"> Contact </a>
          </li>
          
          <li class="nav-item border-right">
             <a class="nav-link" @click="setTabInfo(6)" id="pills-policy-tab" data-toggle="pill" href="#pills-policy" role="tab" aria-controls="pills-policy" aria-selected="false"> Policy </a>
          </li>
          <li class="nav-item border-right">
            <a class="nav-link" @click="setTabInfo(7)" id="pills-translate-tab" data-toggle="pill" href="#pills-translate" role="tab" aria-controls="pills-translate" aria-selected="false"> Translate </a>
          </li>
        </ul>
      </div>
    
 
            
                <!-- <ul class="nav nav-pills nav-justified mb-3 border" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" @click="setTabInfo(1)" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">General</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="setTabInfo(2)" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Facility</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="setTabInfo(3)" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Meta Info</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" @click="setTabInfo(4)" id="pills-bankInfo-tab" data-toggle="pill" href="#pills-bankInfo" role="tab" aria-controls="pills-bankInfo" aria-selected="false"> Bank Info</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  @click="setTabInfo(5)" id="pills-contactInfo-tab" data-toggle="pill" href="#pills-contactInfo" role="tab" aria-controls="pills-contactInfo" aria-selected="false"> Contact </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="setTabInfo(6)" id="pills-policy-tab" data-toggle="pill" href="#pills-policy" role="tab" aria-controls="pills-policy" aria-selected="false"> Policy </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="setTabInfo(7)" id="pills-translate-tab" data-toggle="pill" href="#pills-translate" role="tab" aria-controls="pills-translate" aria-selected="false"> Translate </a>
                    </li>
                </ul> -->


                <div class="tab-content" id="pills-tabContent">

                    <!-- =================================== general  -->
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                   
                   
                    <div class="form-group">
                        <label> Hotel Code
                          <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                        </label>
                        <input type="text"  v-model="form.hotel_code" disabled class="form-control" value="">
                    </div>
                   
                    <div class="form-group">
                        <label> Hotel Name
                          <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                        </label>
                        <input type="text" v-model="form.hotel_name" class="form-control" value="Welcome Plaza Hotel">
                    </div>
                    
                    
                   
                    <div class="form-group">
                    <label>Property Type   
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                   

                    
                    <div class="col-md-8 offset-md-4" v-for="propertyTypeList in propertyTypeLists">
                    <label for="" class="mt-4">
                      <table>
                      <tr>
                        <td> <input type="radio" v-model="form.property_type_id" name="propertyType" :value="propertyTypeList.id"> </td>
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
                    <label> Google map link </label>
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
                class="form-control" @change="changeCountry()"
                v-model="form.countryId"
                :class="{ 'is-invalid': form.errors.has('countryId') }"
              >
                 <option value=""> Select Currency </option>
                 <option v-for="countryList in countryLists" :value="countryList.id"> {{ countryList.country }} </option>
                 
              </select> 
              <has-error :form="form" field="countryId"></has-error>  
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
              <label class="text-success"> Deposit / Commission</label>
                        <div class="input-group">
                            
                            <select class="form-control" v-model="form.commission_type">
                    <option value="1"> Fixed </option>
                    <option value="2"> Percentage </option>
                    </select>
                            <div class="input-group-prepend">
                                <span class="input-group-text" id=""></span>
                            </div>
                            <input type="text" v-model="form.commission_amount" class="form-control" placeholder="Value">
                        </div>  
                      </div>


                    <div class="form-group">
                <label class="text-danger"> Vat / Tax</label>
                        <div class="input-group">
                            
                            <select class="form-control" v-model="form.vat_type">
                    <option value="1"> Fixed </option>
                    <option value="2"> Percentage </option>
                    </select>
                            <div class="input-group-prepend">
                                <span class="input-group-text" id=""></span>
                            </div>
                            <input type="text" v-model="form.vat_amount" class="form-control" placeholder="Value">
                        </div>  
                      </div>

                      <div class="form-group">
                    <label> Related Hotel </label>
                    <input type="text" v-model="form.related_hotel" class="form-control" placeholder="Hotel Name">  
                      </div>


                </div>
                    <!-- =================================== /general  -->

                        <!-- =================================== facility  -->
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
                    <div class="row" >
                        
                        <div class="col-md-12">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" v-model="selectAll" id="customCheck">
                        <label class="custom-control-label text-primary" for="customCheck"> <b> Select All </b> </label>
                        <hr>
                    </div>
                        </div>

                        <!-- <p>{{ selected }}</p> -->

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
                    <!-- =================================== //facility  -->


                    <!-- =================================== meta  -->
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="form-group">
                        <label> Meta Title  </label>
                        <input type="text" class="form-control" v-model="form.meta_title">
                    </div>
                    <div class="form-group">
                        <label> Meta Keyword  </label>
                        <input type="text" class="form-control" v-model="form.meta_keyword">
                    </div>
                    <div class="form-group">
                        <label> Meta Description  </label>
                        <textarea class="form-control" v-model="form.meta_description"></textarea>
                    </div>
                </div>
                    <!-- =================================== //meta  -->



                    <!-- =================================== policy  -->
                <div class="tab-pane fade" id="pills-policy" role="tabpanel" aria-labelledby="pills-policy-tab">
                    
                    
                    <div class="form-group">
                        
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id=""> Check In </span>
                            </div>
                            <input type="text" class="form-control" v-model="form.check_in_time">

                            <div class="input-group-prepend">
                                <span class="input-group-text" id="">Check Out</span>
                            </div>

                            <input type="text" class="form-control" v-model="form.check_out_time">
                        </div>  
                        </div>
                        
                        <div class="form-group">
                          <label> Cancellation Policy </label>
                          <select class="form-control" v-model="form.policy_terms"  :class="{ 'is-invalid': form.errors.has('policy_terms') }">
                            <option value=""> Select Cancellation Policy </option>
                            <option v-for="cancelationPolicyList in cancelationPolicyLists" :value="cancelationPolicyList.id"> {{ cancelationPolicyList.cancel_policy_name }}    </option>
                              
                          </select> 
                        </div>

                        <div class="form-group">
                          <table class="table table-bordered">
                            <tr>
                              <th> Title </th>
                              <th> Description </th>
                              <th> Delete </th>
                            </tr>
                            <tr v-for="policyExtraList in policyExtraLists"> 
                              <td> {{ policyExtraList.title }} </td>
                              <td> {{ policyExtraList.description }} </td>
                              <td>  <button type="button" @click="deletePolicyExtra(policyExtraList.id)" class="btn btn-danger"> Delete </button>  </td>
                            </tr> 
                          </table>
                        </div>

                        <div class="form-group">
                          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#policyInfoForm"> Add More  </button>
                        </div>
                        
                        
                </div>
                        <!-- =================================== //policy  -->


                    <!-- =================================== Bank Info  -->
                <div class="tab-pane fade" id="pills-bankInfo" role="tabpanel" aria-labelledby="pills-bankInfo-tab">
                    
                    
                    <div class="row">
                      <div class="col-md-4" v-for="hotelBankInfo in hotelBankInfos">
                        
                       <table class="table table-bordered">
                        <tr>
                          <td>
                            <small class="text-muted"> Payment Option </small>
                            <br>
                          <span> Bank </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small class="text-muted"> Account Information </small>
                            <br>
                          <span> {{ hotelBankInfo.account_details }} </span>
                          </td>
                        </tr>
                       </table>
                       
                      </div>
                      <div class="col-md-4">
                        
                       <table class="table table-bordered" style="cursor:pointer;" data-toggle="modal" data-target="#bankInfoForm">
                        <tr>
                          <td class="text-center pt-3 pb-3">
                           <i class="fa fa-3x fa-plus text-muted mt-4 mb-4"></i>
                          </td>
                        </tr>
                       </table>
                       
                      </div>
                    </div>
                </div>
 
           

                        <!-- =================================== //Bank Info  -->


                    <!-- =================================== contact Info  -->
                <div class="tab-pane fade" id="pills-contactInfo" role="tabpanel" aria-labelledby="pills-contactInfo-tab">
                    
                    
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


                    <!-- =================================== room image  -->
                    <div class="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                      <form @submit.prevent="roomGalleryInsert()">
                  <div class="form-group row">
                    
                    <div class="col-md-3 border p-0" v-for="roomImageList in roomImageLists">
                    <div class="col-md-12 text-center">
                      <img :src="`images/hotel_image/`+roomImageList.image_name"
                      class="img img-responsive p-1"
                      style="height:150px;max-width:100%">
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
                        
                       <table class="table table-bordered" style="cursor:pointer;" data-toggle="modal" data-target="#translateInfoForm">
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

<!-- {{ clickTabValue  }} -->
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




          

<!-- ------- // bank information model  -->
<div class="modal fade" id="bankInfoForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            New Bank Information
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
                          <form @submit.prevent="addBankInformation()">
                            <div class="form-group">
                              <label> Bank Type </label>
                              <select
                                class="form-control"
                                v-model="form.bank_payment_type_id"
                                :class="{ 'is-invalid': form.errors.has('bank_payment_type_id') }">
                                
                              <option value=""> Select  </option>
                              <option :value="paymentMethodList.id" v-for="paymentMethodList in paymentMethodLists">{{ paymentMethodList.payment_type_name }}</option>
                            </select>
                              <has-error :form="form" field="bank_payment_type_id"></has-error>
                            </div>
                            <div class="form-group">
                              <label> Bank Type</label>
                              <select
                                class="form-control"
                                v-model="form.bank_payment_type_id"
                                :class="{ 'is-invalid': form.errors.has('bank_payment_type_id') }"
                              >
                              <option value=""> Select Payment Option </option>
                              <option :value="paymentMethodList.id" v-for="paymentMethodList in paymentMethodLists">{{ paymentMethodList.payment_type_name }}</option>
                            </select>
                              <has-error :form="form" field="bank_payment_type_id"></has-error>
                            </div>
                            <div class="form-group">
                              <label> Account Details </label>
                              <textarea
                                class="form-control"
                                v-model="form.account_details"
                                :class="{ 'is-invalid': form.errors.has('account_details') }"
                              ></textarea>
                              <has-error :form="form" field="account_details"></has-error>
                            </div>
                            <div class="form-group">
                              <label> Account Details </label>
                              <textarea
                                class="form-control"
                                v-model="form.account_details"
                                :class="{ 'is-invalid': form.errors.has('account_details') }"
                              ></textarea>
                              <has-error :form="form" field="account_details"></has-error>
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
                                >Add
                              </button>
                            </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>


<!-- ------- // bank information model  -->


          

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
						      							<td class="p-1 pl-3"> E-MAIL ADDRESS <font class="text-danger"> * </font> </td>
						      							<td> <input type="text" v-model="form.email" class="form-control" placeholder="" name="main_contact_email"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> MOBILE NUMBER  </td>
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
                                >Add
                              </button>
                            </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>


<!-- ------- // contact information model  -->

          

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
                                >Add
                              </button>
                            </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>


<!-- ------- // translate information model  -->
          

<!-- ------- // policy information model  -->
<div class="modal fade" id="policyInfoForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Policy Information
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
                          <form @submit.prevent="hotelPolicyExtraUpdate()">
                            <div class="col-12 table-responsive">
                            <table class="table table-bordered">
						      						<tbody>
						      					 <tr>
						      							<td class="p-1 pl-3"> Title <font class="text-danger"> * </font></td>
						      							<td> <input type="text" v-model="form.policy_field_title" class="form-control" placeholder=""> </td>
						      						</tr>
						      					 <tr>
						      							<td class="p-1 pl-3">  Description <font class="text-danger"> * </font></td>
						      							<td> <input type="text" v-model="form.policy_field_description" class="form-control" placeholder=""> </td>
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
                                >Add
                              </button>
                            </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>


<!-- ------- // policy information model  -->




        </div>
      </div>
  
      
    </span>
  </template>
  <script>
  export default {
    data() {
      return {

        form: new Form({
            // form variable here
            hotel_id:0,
            hotel_code:'',
            hotel_code_sl_no:'',
            hotel_name:'',
            hotel_location:'',
            property_type_id:'',
            star:'',
            countryId:'',
            commission_type:'1',
            commission_amount:'',
            vat_type:'1',
            vat_amount :'',
            related_hotel :'',

            // facility info
            facilities:[],

            // image
            logo:'',

            // meta info
            meta_title:'',
            meta_keyword:'',
            meta_description:'',

            // policy
            check_in_time:'3:00 PM',
            check_out_time:'12:00 PM',
            payment_method_id:'',
            policy_terms:'',
            position:1,
            //policy extra 
            policy_field_title:'',
            policy_field_description:'',

            // bank information
            bank_payment_type_id:'',
            account_details:'',
            bank_info_position:'1',
            bank_info_status:'1',


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
        
        
        users: [],
        countryLists: [],
        paymentMethodLists: [],
        
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
        roomImageLists:[],
        policyExtraLists:[],
        cancelationPolicyLists:[],
        
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
     this.hotelCode(0);
     this.countryList();
     this.paymentMethodList();
     this.propertyTypeList();
     this.hotelList();
     this.hotelContactTypeList();
     this.hotelContactPositionTypeList();
     this.hotelFacilityList();
     this.imageTitleList();
     this.cancelationPolicyList();
    },
    methods: {

      cancelationPolicyList() {
      let uri = `htl_cancelation_policy`;
      axios.get(uri).then((response) => {
        this.cancelationPolicyLists = response.data.data;
      });
    },           
    imageTitleList() {
      let uri = `htl_image_title_hotel`;
      axios.get(uri).then((response) => {
        this.imageTypeLists = response.data.data;
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

    getRoomImageList() {
      let uri = `/hotelImage`;
      axios.get(uri).then((response) => {
        this.roomImageLists = response.data.data;
      });
    },

    
    roomGalleryInsert() {
        this.loading = true;
        this.form
          .post("/hotelImage",{
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



      changeCountry(){
        this.hotelCode(this.form.countryId);
      },

      countryList() {
      let uri = `countryList`;
      axios.get(uri).then((response) => {
        this.countryLists = response.data.countryList;
      });
    },
      paymentMethodList() {
      let uri = `htl_payment_type`;
      axios.get(uri).then((response) => {
        this.paymentMethodLists = response.data.data;
      });
    },

      hotelCode(e){
        let uri = `htl_code_generate/`+e;
      axios.get(uri).then((response) => {
        this.form.hotel_code = response.data.data;
        this.form.hotel_code_sl_no = response.data.sl;
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
        $('#pills-gallery-tab').click();
        this.clickTabValue=4;
        // this.hotelBankInfo();
        }
        else if(this.clickTabValue==4){
        $('#pills-contactInfo-tab').click();
        this.clickTabValue=5;
        }
        else if(this.clickTabValue==5){
        $('#pills-policy-tab').click();
        this.clickTabValue=6;
        this.hotelPolicyExtraInfoShow();
        }
        else if(this.clickTabValue==6){
        $('#pills-translate-tab').click();
        this.clickTabValue=7;

        $('.formSubmitButton').show();
          $('.formNextButton').hide();
        }
        
        //alert(this.clickTabValue);
        
        // if(this.clickTabValue==7){
        //   this.formSubmitButton = true;
        //   this.formNextButton = false;
        // }else{
        //   this.formSubmitButton = false;
        //   this.formNextButton = true;
        // }


      },
      setTabInfo(e){
        this.clickTabValue = e;
        
        if(e==7){
          $('.formSubmitButton').show();
          $('.formNextButton').hide();
        }else{
          $('.formSubmitButton').hide();
          $('.formNextButton').show();
        }

        if(e==6){
          this.hotelPolicyExtraInfoShow();
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
      this.form.hotel_code = '';
        this.form.hotel_name = '';

        this.form.google_map_link = '';
        this.form.street_address = '';
        this.form.post_code = '';
     
        this.form.property_type_id = '';
        this.form.star = '';
        this.form.commission_type = '';
        this.form.commission_amount = '';
        this.form.vat_type = '';
        this.form.vat_amount = '';
        this.form.related_hotel = '';
        
        this.form.meta_title = '';
        this.form.meta_keyword = '';
        this.form.meta_description = '';

        this.form.check_in_time = '';
        this.form.check_out_time = '';
        this.form.payment_method_id = '';
        this.form.policy_terms = '';
        this.hotelCode(0);

        this.selected = '';
        this.hotelBankInfos = '';
        this.hotelContactInfos = '';
        this.hotelTranslateInfos = '';
        this.clickTabValue = 1;


        
      if(this.form.hotel_id>0){
      let uri = `hotel_info_by_id/`+this.form.hotel_id;
      axios.get(uri).then((response) => {
        this.form.hotel_code = response.data.data.hotel_code;
        this.form.hotel_name = response.data.data.hotel_name;

        this.form.google_map_link = response.data.data.location_map_url;
        this.form.street_address = response.data.data.street_address;
        this.form.post_code = response.data.data.post_code;
        this.form.countryId = response.data.data.country_id;
     
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
      this.getHotelTranslateList();
      }
      
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
            $('#translateInfoForm').modal("hide");
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
      
    
      hotelPolicyExtraInfoShow() {
        let uri = `/htl_policy_extra_info`;
      axios.get(uri).then((response) => {
        this.policyExtraLists = response.data.data;
      });
      },
      hotelPolicyExtraUpdate() {
        //alert(selected);
        this.loading = true;
        this.form
          .post("/htl_policy_extra_info")
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
            this.form.policy_field_title = '';
            this.form.policy_field_description = '';
            }

            this.policyExtraLists = res.data.data;
            $('#policyInfoForm').modal("hide");
            
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
        let url = "";
        if(this.form.hotel_id==0){
          url = "/htl_info_insert";
        }
        else if(this.form.hotel_id>0){
          url = "/htl_info_update/"+this.form.hotel_id;
        }

        this.form
          .post(url)
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
              this.form.reset();
              this.hotelCode(0);
              
              this.selected = '';
              this.hotelBankInfos = '';
              this.hotelContactInfos = '';
              this.hotelTranslateInfos = '';
              this.clickTabValue = 1;

              this.hotelList();

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
              $('#contactInfoForm').modal("hide");
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
              $("#bankInfoForm").modal("hide");
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
  
      deletePolicyExtra(e) {
        axios.delete("htl_policy_extra_info/" + e).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Delete Successfully",
          });
          this.policyExtraLists = res.data.data;
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
  