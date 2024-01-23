<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
            > Tour Location Entry
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/tour@location@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
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
              "
            >
            <div class="form-group">
              <label> Country 
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i></label>
  
              <select
                class="form-control"
                name="countryId"
              >
                 <option value=""> Select Currency  </option>
                 
              </select>  
            </div>

              <div class="form-group">
                <label>City
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                  name="cityName"
                  class="form-control"
                >
              </div>

              <div class="form-group">
                <label>Place
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                  name="place"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Post Code
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                  name="postCode"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label>Status
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <select 
                  name="postCode"
                  class="form-control">
                    <option value=""> Active </option>
                    <option value=""> In-Active </option>
                </select>
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
        }),
        
        // data variable hrer

      };
    },
  
  
    mounted() {
     // this.currencyList();
    },
    methods: {

        
    currencyList() {
      let uri = `currencyList`;
      axios.get(uri).then((response) => {
        this.currencyLists = response.data.currencyList;
      });
    },
    
      hotelLocationCreate() {
        this.loading = true;
        this.form
          .post("/hotelLocationEntry")
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
                title: "Asset Brand Entry Successfully",
              });
              this.form.reset();
            }
            this.getShopAssetData();
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
  