<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> Bed Type Entry
          </h3>
          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/bed@type@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
            </div>
        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="bedTypeEntry()">
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
  export default {
    data() {
      return {

        form: new Form({
            // form variable here
            bed_type_name:'',
            status:'1',
        }),
        
        // data variable here
        loading:false,

      };
    },
  
  
    mounted() {
     // 
    },
    methods: {

    
      bedTypeEntry() {
        this.loading = true;
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
    },
  };
  </script>
  