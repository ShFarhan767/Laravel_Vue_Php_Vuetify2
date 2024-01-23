<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
            >Property Entry
          </h3>
          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/hotel@name@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
            </div>
        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="htl_name_entry()">
            <div
              class="
                col-lg-7
                px-lg-5
                col-sm-8
                offset-sm-2
                col-12
                pb-2
                pt-2
                mb-3
                supplier-border
                comm-form-box-back-color
              "
            >

            
            <div class="form-group">
                <label>Property  Code
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                v-model="form.hotel_code" disabled
                  class="form-control"
                placeholder="Property  Code"
                :class="{ 'is-invalid': form.errors.has('hotel_code') }">
                <has-error :form="form" field="hotel_code"></has-error> 
              </div>

              <div class="form-group">
                <label>Property  Name
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                v-model="form.hotel_name"
                  class="form-control"
                placeholder="Property  Name"
                :class="{ 'is-invalid': form.errors.has('hotel_name') }">
                <has-error :form="form" field="hotel_name"></has-error> 
              </div>
              <div class="form-group">
              <label> Property Type 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <select class="form-control"
                    v-model="form.property_type_id"
                    :class="{ 'is-invalid': form.errors.has('property_type_id') }">
                    <option value=""> Select Property Type  </option>
                    <option v-for="hotelPropertyList in hotelPropertyLists" :value="hotelPropertyList.id"> {{ hotelPropertyList.property_type_name }} </option>
                    
                    </select> 
                    <has-error :form="form" field="property_type_id"></has-error>  
            </div>

            <div class="form-group">
              <label> Country 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <select class="form-control"
                    v-model="form.country_id"
                    :class="{ 'is-invalid': form.errors.has('country_id') }"
                    name="countryId"
                    @change="getCityById()">
                    <option value=""> Select Country  </option>
                    <option v-for="countryList in countryLists" :value="countryList.id"> {{ countryList.name }} </option>
                 
                    </select> 
                    <has-error :form="form" field="country_id"></has-error>  
            </div>
            
            <div class="form-group">
              <label> Place 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
                    <select class="form-control"
                    v-model="form.location_id"
                    :class="{ 'is-invalid': form.errors.has('location_id') }">
                    <option value=""> Select Place  </option>
                    <option v-for="cityList in cityLists" :value="cityList.id"> {{ cityList.place }} </option>
                    </select>  
                    <has-error :form="form" field="location_id"></has-error> 
            </div>

              <!-- <div class="form-group">
                <label>Post Code
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text" disabled
                  class="form-control"
                placeholder="Post Code">
              </div> -->


              <div class="form-group">
                <label>Location Map (Google Map)
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <textarea
                  class="form-control"
                  placeholder="Google Map"
                  v-model="form.location_map_url"
                  :class="{ 'is-invalid': form.errors.has('location_map_url') }"
                ></textarea>
                <has-error :form="form" field="location_map_url"></has-error> 
              </div>
              <div class="form-group">
              <label> Status </label>
                    <select class="form-control"
                    v-model="form.status"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1"> Active  </option>
                    <option value="0"> In-Active  </option>
                    </select> 
                    <has-error :form="form" field="status"></has-error>  
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
  
      
    </span>
  </template>
  <script>

var d = new Date();

  export default {
    data() {
      return {

        form: new Form({
            // form variable here
            country_id:'',
            location_id:'',
            
            hotel_code:'H'+d.getFullYear()+''+ d.getMonth()+''+d.getDate()+''+d.getHours()+''+d.getMinutes()+''+d.getSeconds(),
            hotel_name:'',
            property_type_id:'',
            location_map_url:'',
            status:'1',
        }),
        
        // data variable here
        countryLists:[],
        cityLists:[],
        hotelPropertyLists:[],
        loading:false,

      };
    },
  
  
    mounted() {
     this.countryList();
     this.property_type_list();
    },
    methods: {
 
        
    
        
      countryList() {
      let uri = `countryList`;
      axios.get(uri).then((response) => {
        this.countryLists = response.data.countryList;
      });
    },
    
        
      property_type_list() {
      let uri = `htl_property_type`;
      axios.get(uri).then((response) => {
        this.hotelPropertyLists = response.data.data;
      });
    },
        
    getCityById() {
      let uri = `get_placeList_by_country/`+this.form.country_id;
      axios.get(uri).then((response) => {
        this.cityLists = response.data.data;
      });
    },
    
    htl_name_entry() {
        this.loading = true;
        this.form
          .post("/htl_name_entry")
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
              this.form.reset();
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
  