<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
            > Property Type Entry 
          </h3>

           <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/hotel@property@type" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
            </div>

        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="htl_property_type()">
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
                <label>Property Type Name 
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text" v-model="form.property_type_name"
                  class="form-control"
                placeholder="Property Type Name "
                :class="{ 'is-invalid': form.errors.has('property_type_name') }">
                <has-error :form="form" field="property_type_name"></has-error>
              </div>

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
              <div class="form-group">
              <label> Status </label>
                    <select class="form-control" v-model="form.status" 
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
            property_type_name:'',
            property_type_description:'',
            status:'1',
        }),
        
        // data variable here
        loading:false,
      };
    },
  
  
    mounted() {
     // this.currencyList();
    },
    methods: {

       
    
      htl_property_type() {
        this.loading = true;
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
  