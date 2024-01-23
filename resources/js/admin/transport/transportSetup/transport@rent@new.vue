
<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i>
            Transport Rent
          </h3>
          <div class="btn-actions-pane-right text-capitalize">
                    <router-link to="/transport@rent@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
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
                
                <div class="col-3 text-center" style="position:absolute;right:0;"><p class="mb-0"><u>T234A59B</u></p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="Company Logo" style="max-height: 105px; max-width: 100%; margin-top: -8px;"></div>

                <table class="mx-auto mt-3">
                  <tr class="text-center">
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="radio"
                          class="custom-control-input"
                          name="b2b"
                          id="customCheck1"
                        />
                        <label class="custom-control-label" for="customCheck1"
                          >B2B</label
                        >
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="radio"
                          class="custom-control-input"
                          name="b2b"
                          id="customCheck2"
                        />
                        <label class="custom-control-label" for="customCheck2"
                          >B2C</label
                        >
                      </div>
                    </td>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          type="radio"
                          class="custom-control-input"
                          name="b2b"
                          id="customCheck3"
                        />
                        <label class="custom-control-label" for="customCheck3"
                          >Vendor</label>
                      </div>
                    </td>
                  </tr>
  
                  <tr>
                    <td colspan="3">
                      <select class="form-control mt-3" style="width: 300px">
                        <option value="">Select Customer</option>
                        <option value=""></option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="3">
                       
                        <div class="input-group mt-3">
                            <input type="text" class="form-control" style="width:13px;" placeholder="Invoice No" disabled>
                            
                            <input type="date" class="form-control" value="2022-09-20" style="padding-left:20px;" disabled>
                        </div>
                    </td>
                  </tr>
  
                  <tr>
                    <td colspan="3">
                      <select class="form-control mt-3" style="width: 300px">
                        <option value="">Select Type</option>
                        <option value=""> </option>
                      </select>
                    </td>
                  </tr>
  
                  <tr>
                    <td colspan="3">
                      <select class="form-control mt-3" style="width: 300px">
                        <option value="">Select Brand </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  </tr>
  
                  <tr>
                    <td colspan="3">
                      <select class="form-control mt-3" style="width: 300px">
                        <option value="">Select Model </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  </tr>
                </table>

                <div class="form-group">
                    <label for=""> Facility </label>
                    <div class="row">
                        
                        <div class="col-md-12">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label text-primary" for="customCheck1"> <b>Select All</b> </label>
                        <hr>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Air Condition</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Drinking Water</label>
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

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Internet Service</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Wifi Service</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Relax Seat</label>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Wifi Service</label>
                    </div>
                        </div>

                    </div>
                </div>
                
  
              <div class="form-group">
                <label> &nbsp; </label>
                <button class="btn btn-primary float-right"> Add </button>
              </div>
              </div>
              <div class="form-group">
                <hr />
                <h5 class="text-center mt-0"> Transport  Information </h5>
              </div>
  
              <div class="form-group">
                <label> &nbsp; </label>
                <table class="table table-bordered">
                    <tr>
                        <th> SL </th>
                        <th> Transport </th>
                        <th> Vendor Price </th>
                        <th> B2B Price </th>
                        <th> B2C Price </th>
                        <th> Facility </th>
                        <th> Delete </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Private Car <br> Toyota <br> 2015 </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <span class="badge badge-primary">Facility</span> </td>
                        <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td> Micro <br> Toyota <br> 2015 </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <span class="badge badge-primary">Facility</span> </td>
                        <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                       <th>  </th>
                       <th>  </th>
                       <th> 200 </th>
                       <th> 400 </th>
                       <th> 600 </th>
                       <th>  </th>
                       <th>  </th>
                    </tr>
                </table>
              </div>
              
  
           
               
            </div>



            <div
              class="col-12 pb-2 pt-2 mb-3 supplier-border
                comm-form-box-back-color">
               


              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-3"></div>
                <div class="col-md-5">
                    <table class="table table-bordered">
                        <tr>
                            <th> Total Amount </th>
                            <td> <input type="text" class="form-control" value="180" disabled> </td>
                        </tr>
                        <tr>
                            <th> Discount </th>
                            <td> <input type="text" class="form-control" placeholder="Discount"> </td>
                        </tr>
                        <tr>
                            <th> Payable </th>
                            <td> <input type="text" class="form-control" value="180" disabled> </td>
                        </tr>
                        <tr>
                            <th> Previous Payable </th>
                            <td> <input type="text" class="form-control" value="80" disabled> </td>
                        </tr>
                        <tr>
                            <th> Current Payable </th>
                            <td> <input type="text" class="form-control" value="260" disabled> </td>
                        </tr>
                    </table>

                    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal"> Next </button>
                   

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Payment </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-6">
                <table style="width:100%;">
                    <tr class="mb-3">
                        <td> Total Amount </td>
                        <td> <input type="text" class="form-control" value="260" disabled> </td>
                    </tr>
                    <tr class="mb-3">
                        <td> Cash Amount</td>
                        <td> <input type="text" class="form-control" placeholder="Cash Amount"> </td>
                    </tr>
                    <tr>
                        <td> Due Amount </td>
                        <td> <input type="text" class="form-control" value="260" disabled> </td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6">
                <table style="width:100%;">
                    <tr class="mb-3">
                        <td> Bank Payment </td>
                        <td> <select class="form-control" value="260" >
                            <option value=""> Corporate Banking </option>
                            <option value=""> Mobile  Banking </option>
                            <option value=""> Debit/Credit Card </option>
                        </select> </td>
                    </tr>
                   
                </table>
            </div>

        </div>
      </div>
      <div class="modal-footer d-block" style="">
        <button type="button" class="btn btn-danger float-left" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary float-right">Submit</button>
      </div>
    </div>
  </div>
</div>




<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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






                </div>
              </div>
            </div>
  
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
    