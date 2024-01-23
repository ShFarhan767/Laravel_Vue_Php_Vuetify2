
<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i>
            New Booking
          </h3>
          <div class="btn-actions-pane-right text-capitalize">
                    <router-link to="/create@booking" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
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

                
                <div class="col-3 text-center" style="position:absolute;right:0;"><p class="mb-0"><u>V234A59B</u></p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="Company Logo" style="max-height: 105px; max-width: 100%; margin-top: -8px;"></div>


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
                          >Vendor</label
                        >
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
                      <select class="form-control mt-3" style="width: 300px">
                        <option value="">Select Passport</option>
                        <option value="">B00668809</option>
                      </select>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="form-group">
                <hr />
                <h5 class="text-center mt-0">Package Information</h5>
              </div>
  
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <label> Name </label>
                    <input type="text" class="form-control" disabled placeholder="Name" />
                  </div>
                  <div class="col-6">
                    <label> Gender </label>
                    <select class="form-control" disabled>
                      <option value="">Select Gender</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <label> Father's Name </label>
                    <input
                      type="text"
                      class="form-control" disabled
                      placeholder="Father's Name"
                    />
                  </div>
  
                  <div class="col-6">
                    <label> Mother's Name </label>
                    <input
                      type="text"
                      class="form-control" disabled
                      placeholder="Mother's Name"
                    />
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <label> Nationality in Passport </label>
                    <select class="form-control" disabled>
                      <option value="">Bangladesh</option>
                    </select>
                  </div>
  
                  <div class="col-6">
                    <label> Country of Residence </label>
                    <select class="form-control" disabled>
                      <option value="">Bangladesh</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <label> Birthday </label>
                    <div class="input-group">
                      <select
                        class="form-control dob_day" disabled
                        name="dob_day"
                        required=""
                      >
                        <option value="">Day</option>
                        <option value="1">1</option>
                      </select>
  
                      <select
                        class="form-control dob_month" disabled
                        name="dob_month"
                        required=""
                      >
                        <option value="">Month</option>
                        <option value="1">January</option>
                      </select>
  
                      <select
                        class="form-control dob_year" disabled
                        name="dob_year"
                        required=""
                      >
                        <option value="">Year</option>
                        <option>1932</option>
                      </select>
                    </div>
                  </div>
  
                  <div class="col-6">
                    <label> Country of Birth </label>
                    <select class="form-control" disabled>
                      <option value="">Bangladesh</option>
                    </select>
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <label> Personal ID No </label>
                    <select class="form-control" disabled>
                      <option value="">Select ID</option>
                      <option value="">NID</option>
                      <option value="">Birth Certificate</option>
                    </select>
                  </div>
  
                  <div class="col-6">
                    <label> Passport No </label>
                    <input
                      type="text"
                      class="form-control" disabled
                      placeholder="Passport No"
                    />
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <label> Personal Issue Date </label>
                    <div class="input-group">
                      <select
                        class="form-control dob_day" disabled
                        name="dob_day"
                        required=""
                      >
                        <option value="">Day</option>
                        <option value="1">1</option>
                      </select>
  
                      <select
                        class="form-control dob_month" disabled
                        name="dob_month"
                        required=""
                      >
                        <option value="">Month</option>
                        <option value="1">January</option>
                      </select>
  
                      <select
                        class="form-control dob_year" disabled
                        name="dob_year"
                        required=""
                      >
                        <option value="">Year</option>
                        <option>1932</option>
                      </select>
                    </div>
                  </div>
  
                  <div class="col-6">
                    <label> Passport Expire Date </label>
                    <div class="input-group">
                      <select
                        class="form-control dob_day" disabled
                        name="dob_day"
                        required=""
                      >
                        <option value="">Day</option>
                        <option value="1">1</option>
                      </select>
  
                      <select
                        class="form-control dob_month" disabled
                        name="dob_month"
                        required=""
                      >
                        <option value="">Month</option>
                        <option value="1">January</option>
                      </select>
  
                      <select
                        class="form-control dob_year" disabled
                        name="dob_year"
                        required=""
                      >
                        <option value="">Year</option>
                        <option>1932</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="form-group">
                  <div class="row">
                      <div class="col-6">
                          <label> Passport Previous Country </label>
                          <select class="form-control" disabled>
                              <option value="">Bangladesh</option>
                              <option value="">Nepal</option>
                          </select>
                      </div>
                      <div class="col-6">
                          <label> Previous Country Visa type </label>
                          <select class="form-control" disabled>
                              <option value="">visit</option>
                              <option value="">student</option>
                              <option value="">medical</option>
                          </select>
                      </div>
                       
                  </div>
                
              </div>
  
              <div class="form-group">
                <label> Passport Receiving Reason </label>
                <select class="form-control" disabled>
                  <option value="">Visa</option>
                  <option value="">Ticket</option>
                  <option value="">Package Tour</option>
                </select>
              </div>
  
              <div class="form-group">
                <center><label class="text-primary"><b>Received Document </b> </label></center>
                <div class="row">
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck12">
                                  <label class="custom-control-label" for="customCheck12">Bank Transaction</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck11">
                                  <label class="custom-control-label" for="customCheck11">NID Copy</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck1">
                                  <label class="custom-control-label" for="customCheck1">Bank solvency</label>
                              </div>
                          </div>
                          
                          
                </div>
              </div>
  
              <div class="form-group">
                <hr>
                <center><label class="text-primary"> <b>Document Need </b></label></center>
                <div class="row">
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck12">
                                  <label class="custom-control-label" for="customCheck12">Bank Transaction</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck11">
                                  <label class="custom-control-label" for="customCheck11">NID Copy</label>
                              </div>
                          </div>
                          
                          
                          
                </div>
              </div>
  
              
                <hr>
                <h4 class="text-center"> Billing Information</h4>
  
              
              <div class="form-group">
                <div class="row">
                    <div class="col-6">
                        <label> Invoice No </label>
                        <input type="text" class="form-control" value="234332" disabled>
                    </div>
                    <div class="col-6">
                        <label> Invoice Date </label>
                        <input type="date" class="form-control" value="2022-02-02">
                    </div>
                </div>
                
              </div>
              
              <div class="form-group">
                <label> &nbsp; </label>
                <table class="table table-bordered">
                  <tr>
                      <th> SL </th>
                      <th> Passport No </th>
                      <th> Product </th>
                      <th> Sales Price </th> 
                      <th> Discount  </th> 
                      <th> Total Price  </th> 
                      <th>  </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> 3434289897 </td>
                      <td> Student Visa </td>
                      <td> <input type="text" class="form-control" disabled value="200"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Discount"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Total Price"> </td> 
                      <td> <button class="btn btn-primary float-right">Add</button> </td> 
                     
                  </tr>
                </table>
              </div>
              
  
  
  
            </div>



            <div
              class="col-12 pb-2 pt-2 mb-3 supplier-border
                comm-form-box-back-color">
                <div class="form-group">
                <label> &nbsp; </label>
                <table class="table table-bordered">
                  <tr>
                      <th> SL </th>
                      <th> Name </th>
                      <th> Passport No </th>
                      <th> Country </th>
                      <th> Visa Type </th> 
                      <th> Sales  </th> 
                      <th> Discount </th> 
                      <th> Total </th> 
                      <th> Action </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> Md Saiful </td>
                      <td> 3434289897 </td>
                      <td> Thailand </td>
                      <td> Student Visa </td>
                      <td> 100 </td>
                      <td> 10 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                  <tr>
                      <td> 2 </td>
                      <td> Md kashem </td>
                      <td> Bd923874329874 </td>
                      <td> Thailand </td>
                      <td> Student Visa </td>
                      <td> 100 </td>    
                      <td> 10 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                </table>
              </div>


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
    