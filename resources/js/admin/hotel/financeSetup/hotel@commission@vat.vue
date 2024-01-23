<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> Hotel Finance Setup
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/hotel@commission@setup" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"> < Back </router-link>
          </div>

        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="hotelInformationUpdate()">
            <div
              class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color
              ">
           
            <div class="row">
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
                        <label> Hotel Location</label>
                        <input type="text" v-model="form.hotel_location" disabled class="form-control" value="Pataiya, bangkok, Thailand.">
                    </div>
                   
                    <div class="form-group">
              <label> Hotel Type   
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                  </label>
                    <select class="form-control"
                    disabled
                    v-model="form.property_type_id"
                    >
                    <option value=""> Select Hotel Property Type  </option>
                    <option v-for="propertyTypeList in propertyTypeLists" :value="propertyTypeList.id"> {{ propertyTypeList.property_type_name }}    </option>
             
                    </select>  
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
              <label> Deposit / Commission
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                   </label>
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
                <label> Vat / Tax
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                   </label>
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

                        
                </div>
                    <!-- =================================== /general  -->



            </div>

            </div>
  
            <!-- ----------------------------- card footer -->
  
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
                              <label> Payment Type</label>
                              <select
                                class="form-control"
                                v-model="form.bank_payment_type_id"
                                :class="{ 'is-invalid': form.errors.has('bank_payment_type_id') }"
                              >
                              <option value=""> Select Payment Option </option>
                        <option value="1"> Paypal </option>
                        <option value="2"> Skrill </option>
                        <option value="3"> Master Card </option>
                        <option value="4"> Bank </option>
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
            hotel_id:'',
            hotel_code:'',
            hotel_name:'',
            hotel_location:'',
            property_type_id:'',
            star:'',
            commission_type:'1',
            commission_amount:'',
            vat_type:'1',
            vat_amount :'',
            related_hotel :'',

            // facility info
            facilities:[],

            // meta info
            meta_title:'',
            meta_keyword:'',
            meta_description:'',
            // policy
            check_in_time:'',
            check_out_time:'',
            payment_method_id:'',
            policy_terms:'',
            position:1,

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
        
        // data variable here
        // users: [ 
        //     { "id": "1", "name": "Shad Jast", "email": "pfeffer.matt@yahoo.com" },
        //     { "id": "2", "name": "Duane Metz", "email": "mohammad.ferry@yahoo.com" }, 
        //     { "id": "3", "name": "Myah Kris", "email": "evolkman@hotmail.com" }, 
        //     { "id": "4", "name": "Dr. Kamron Wunsch", "email": "lenora95@leannon.com" }
        // ],
        users: [],
        
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
    },
    methods: {

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
      this.getHotelTranslateList();
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
  