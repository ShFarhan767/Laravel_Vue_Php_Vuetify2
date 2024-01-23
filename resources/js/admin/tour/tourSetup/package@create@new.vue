<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> 
            Tour Package 
          </h3>
          <div class="btn-actions-pane-right text-capitalize">
          <router-link to="/package@create" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
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
              <label> Country  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
               </label>
                    <select class="form-control">
                    <option value=""> Select Country  </option>
                    <option value=""> Thailand  </option>
                    </select>  
            </div>

            <div class="form-group">
              <label> Package Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
               </label>
                    <input type="text" class="form-control" >
            </div>
            
            <div class="form-group">
              <label> Package Code  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
               </label>
                    <input type="text" class="form-control" >
            </div>

            
            <div class="form-group">
              <label> Product Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
               </label>
               <div class="input-group">
                            
                            <select class="form-control">
                            <option value="">  Product Name </option>
                            </select>
                             
                            <input type="button" class="btn btn-primary" value="Add">
                        </div>  
                    
            </div>
            <div class="form-group">
               <table class="table table-bordered">
                    <tr>
                        <th> SL </th>
                        <th> City </th>
                        <th> Place </th>
                        <th> Product </th>
                        <th>  Facility </th>
                        <th> Delete </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Pataiya </td>
                        <td> Coral Iceland </td>
                        <td> Visa </td>
                        <td> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">View Facility</button> </td>
                        <td> <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button> </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td> Bangkok </td>
                        <td> safary world </td>
                        <td> tour </td>
                        <td> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal">View Facility</button> </td>
                        <td> <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button> </td>
                    </tr>
               </table>
                    
            </div>
            
              <div class="form-group">
                <label> Package Image
                </label>
                <!-- <input type="file"
                  class="form-control"
                placeholder="Product Type"> -->
                <img src="http://www.abidibo.net/media/blog/main_img/Screenshot_from_2021-03-08_08-46-38.png" alt="" class="img" style="width:100%">
              </div>

              
               
              <div class="form-group">
              <label> Extra Facility </label>
                    
              <div class="row">
                <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">24-hours room service</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Car Parking</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Coffiee</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">CCTV</label>
                    </div>
                        </div>
              </div>
            </div>


              <div class="form-group">
                <label>Price Setup
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <div class="input-group">
                            
                            <select class="form-control">
                    <option value=""> Select Product </option>
                    <option value=""> visa </option>
                    </select>
                          
                            <input type="text" class="form-control" placeholder="Vendor Price">
                            <input type="text" class="form-control" placeholder="B2B Price">
                            <input type="text" class="form-control" placeholder="B2C Price">
                            <button class="btn btn-primary">Add</button>
                        </div> 
              </div>

              

              <div class="form-group">
               <table class="table table-bordered">
                    <tr>
                        <th> SL </th>
                        <th> Product </th>
                        <th> Vendor Price </th>
                        <th> B2B Price </th>
                        <th> B2C Price </th>
                        <th> Delete </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Visa </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button> </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td> Tour </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button> </td>
                    </tr>
                    <tr>
                        <td>  </td>
                        <td> Total </td>
                        <td> 200 </td>
                        <td> 400 </td>
                        <td> 600 </td>
                        <td>   </td>
                    </tr>
               </table>
                    
            </div>
              

               
              <div class="form-group">
              <label> Status </label>
                    <select class="form-control">
                    <option value=""> Active  </option>
                    <option value=""> In-Active  </option>
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

 

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Facility</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">24-hours room service</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Car Parking</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Coffiee</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">CCTV</label>
                    </div>
                        </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  
      
    </span>
  </template>
  <script>
  export default {
    data() {
      return {

        form: new Form({
            // form variable hrer
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
  