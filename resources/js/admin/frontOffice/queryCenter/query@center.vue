<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i> Query Center
          </h3>
           
        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="hotelLocationCreate()">
            <div
              class="
                col-12
                pb-2
                pt-2
                mb-3
                supplier-border
                comm-form-box-back-color">
           
            <table class="table table-bordered" style="">
                        <tr>
                            <td>
                                <label> Country </label>
                                    <select class="form-control">
                                        <option value=""> Select Country  </option>
                                        <option value=""> Thailand  </option>
                                    </select>  
                            </td>
                            <td>
                                <label> Module </label>
                                    <select class="form-control">
                                        <option value=""> Select Module  </option>
                                        <option value=""> Hotel  </option>
                                        <option value=""> Flight  </option>
                                        <option value=""> Tour  </option>
                                        <option value=""> Transport  </option>
                                    </select>  
                            </td>
                            <td>
                                <label> Invoice </label>
                                    <input type="text" class="form-control" style="width:100px;">
                            </td>
                            <td>
                                <label> Mobile No </label>
                                    <input type="text" class="form-control" style="width:150px;">  
                            </td>
                            <td>
                                <label> From </label>
                                    <input type="date" class="form-control">
                            </td>
                            <td>
                                <label> To </label>
                                    <input type="date" class="form-control">
                            </td>
                            <td>
                                <label> &nbsp; </label>
                                 <button class="btn btn-primary"> Search </button>
                            </td>
                            
                        </tr>
                    </table>


                    <hr style="margin-top:30px;margin-bottom:30px;">


                    <table class="table table-bordered">
                        <tr>
                            <th> SN </th>
                            <th> Customer Name </th>
                            <th> Mobile No </th>
                            <th> Invoice No </th>
                            <th> Invoice Date  </th>
                            <th> Product Name </th>
                            <th> Product Details </th>
                            <th> Location </th>
                            <th> Amount </th>
                            <th> Timeline  </th>
                            <th> Status </th>
                        </tr>
                    </table>


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
  