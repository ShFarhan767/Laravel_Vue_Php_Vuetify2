<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i
            >
            Bank Payment Voucher
          </h3>
          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/bank@payment@voucher@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + New Payment </router-link>
            </div>
        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Date </th>
                <th> Sender Account </th>
                <th> Receiver Name </th>
                <th> Receiver Account </th>
                <th> Voucher No </th>
                <th> Voucher Type </th>
                <th> Cheque Date </th>
               
                
                <th> Particular </th>
                <th> Amount </th>
                <th> Status </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td> 1</td>
                <td> 3 Jan 2022 </td>
                <td> Doofazit Limited </br> 1242.123.123.12</td>
                <td> Rabeya Enterprise </td>
                <td> Rabeya Enterprise </br> 1242.123.123.12</td>
                <td> <span class="badge badge-primary"  data-toggle="modal" data-target="#exampleModal">BP-23/22</span> </td>
                <td> Bank Payment 
                    </br>
                    <span class="badge badge-primary"  data-toggle="modal" data-target="#exampleModal">Account Payable</span>
                </td>
                
                <td> 4 jan 2022 </td>
             
                <td> This is hotel booking </td>
                <td> 1000 </td>
                <td> Pending </td>
                <td> 
                    <div class="dropdown">
                  <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#"> Approve   </a>
                      <a class="dropdown-item" href="#"> Pending   </a>
                      <a class="dropdown-item" href="#"> Cancel   </a>
                      <a class="dropdown-item" href="#">Update</a>
                    <a class="dropdown-item" href="#">Post Date</a>
                  </div>
                </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
        <span class="card_footer">
          <pagination
            :data="assetBrandData"
            @pagination-change-page="getPaginateList"
          >
            <span slot="prev-nav">&lt; Previous</span>
            <span slot="next-nav">Next &gt;</span>
          </pagination>
        </span>
      </div>
 
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
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
  