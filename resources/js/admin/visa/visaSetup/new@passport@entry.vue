
<template id="">
  <span>
    <div class="card">
      <div class="card-header">
        <h3>
          <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i>
          Passport Entry
        </h3>
        <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/passport@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
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
                        >Online</label
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
              </table>
            </div>
            <div class="form-group">
              <hr />
              <h5 class="text-center mt-0">Passport Information</h5>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Name </label>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col-6">
                  <label> Gender </label>
                  <select class="form-control">
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
                    class="form-control"
                    placeholder="Father's Name"
                  />
                </div>

                <div class="col-6">
                  <label> Mother's Name </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mother's Name"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Nationality in Passport </label>
                  <select class="form-control">
                    <option value="">Select Country</option>
                  </select>
                </div>

                <div class="col-6">
                  <label> Country of Residence </label>
                  <select class="form-control">
                    <option value="">Select Country</option>
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
                      class="form-control dob_day"
                      name="dob_day"
                      required=""
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                    </select>

                    <select
                      class="form-control dob_month"
                      name="dob_month"
                      required=""
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                    </select>

                    <select
                      class="form-control dob_year"
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
                  <select class="form-control">
                    <option value="">Select Country</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Personal ID No </label>
                  <select class="form-control">
                    <option value="">Select ID</option>
                    <option value="">NID</option>
                    <option value="">Birth Certificate</option>
                  </select>
                </div>

                <div class="col-6">
                  <label> Passport No </label>
                  <input
                    type="text"
                    class="form-control"
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
                      class="form-control dob_day"
                      name="dob_day"
                      required=""
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                    </select>

                    <select
                      class="form-control dob_month"
                      name="dob_month"
                      required=""
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                    </select>

                    <select
                      class="form-control dob_year"
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
                      class="form-control dob_day"
                      name="dob_day"
                      required=""
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                    </select>

                    <select
                      class="form-control dob_month"
                      name="dob_month"
                      required=""
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                    </select>

                    <select
                      class="form-control dob_year"
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
                        <select class="form-control">
                            <option value="">Bangladesh</option>
                            <option value="">Nepal</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label> Previous Country Visa type </label>
                        <select class="form-control">
                            <option value="">visit</option>
                            <option value="">student</option>
                            <option value="">medical</option>
                        </select>
                    </div>
                     
                </div>
              
            </div>

            <div class="form-group">
              <label> Passport Receiving Reason </label>
              <select class="form-control">
                <option value="">Visa</option>
                <option value="">Ticket</option>
                <option value="">Package Tour</option>
              </select>
            </div>

            <div class="form-group">
              <label>Receiving Document  </label>
              <div class="row">
                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck12">
                                <label class="custom-control-label" for="customCheck12">Bank Transaction</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck11">
                                <label class="custom-control-label" for="customCheck11">NID Copy</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Bank solvency</label>
                            </div>
                        </div>
                        
                        
              </div>
            </div>

            <div class="form-group">
              <label> Status </label>
              <select class="form-control">
                <option value="">Active</option>
                <option value="">In-Active</option>
              </select>
            </div>

            
            <div class="form-group">
              <label> &nbsp; </label>
              <button class="btn btn-primary float-right"> Add More Passport</button>
            </div>
            
            <div class="form-group">
              <label> &nbsp; </label>
              <table class="table table-bordered">
                <tr>
                    <th> SL </th>
                    <th> Name </th>
                    <th> Passport No </th>
                    <th> Birthday </th> 
                    <th> Reason  </th> 
                    <th> Action </th>
                </tr>

                <tr>
                    <td> 1 </td>
                    <td> Nazmul Huda </td>
                    <td> 3434289897 </td>
                    <td> 3 jan 2022 </td> 
                    <td> Visa </td> 
                    <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-info btn-hover-shine"><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
              </table>
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
                "
              >
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
  