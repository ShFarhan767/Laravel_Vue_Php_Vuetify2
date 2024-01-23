<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i>
            Hotel Location Entry
          </h3>
          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/hotel@location@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
            </div>
        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="hotelLocationCreate()">
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
              ">
            <div class="form-group">
              <label> Country 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
  
              <select
                class="form-control"
                v-model="form.countryId"
                :class="{ 'is-invalid': form.errors.has('countryId') }"
              >
                 <option value=""> Select Currency </option>
                 <option v-for="countryList in countryLists" :value="countryList.id"> {{ countryList.name }} </option>
                 
              </select> 
              <has-error :form="form" field="countryId"></has-error>  
            </div>

              <div class="form-group">
                <label>City
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                  v-model="form.cityName"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('cityName') }"
                >
                <has-error :form="form" field="cityName"></has-error> 
              </div>

              <div class="form-group">
                <label>Place
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                v-model="form.place"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('place') }"
                >
                <has-error :form="form" field="place"></has-error>
              </div>
              <div class="form-group">
                <label>Post Code
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                v-model="form.postCode"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('postCode') }"
                >
                <has-error :form="form" field="postCode"></has-error>
              </div>

              <div class="form-group">
              <label> Status </label>
                    <select class="form-control" v-model="form.status" :class="{ 'is-invalid': form.errors.has('status') }">
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
  export default {
    data() {
      return {

        form: new Form({
            // form variable here
            countryId:'',
            cityName:'',
            place:'',
            postCode:'',
            status:'1',
        }),
        
        // data variable here
        countryLists:[],
        loading:false,

      };
    },
  
  
    mounted() {
     this.countryList();
    },
    methods: {

        
      countryList() {
      let uri = `countryList`;
      axios.get(uri).then((response) => {
        this.countryLists = response.data.countryList;
      });
    },
    
    hotelLocationCreate() {
        this.loading = true;
        this.form
          .post("/htl_location")
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
              this.form.reset();
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
      },
    },
  };
  </script>
  