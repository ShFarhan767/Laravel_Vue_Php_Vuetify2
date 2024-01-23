<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i
            >
            Cheque Entry
          </h3>
          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/cheque@entry@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + New Cheque </router-link>
            </div>
        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
                <tr class="alert-info">
                <th> SN </th>
                <th> Type </th>
                <th> Bank Name </th>
                <th> Account Type </th>
                <th> Account Name  </th>
                <th> Account Number  </th>
                <th> Branch  </th>
                <th> First Page  </th>
                <th> Last Page  </th>
                <th> Status  </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td> 1</td>
                <td> Corporate Banking </td>
                <td> Islami Bank </td>
                <td> Current Account </td>
                <td> Doofaz IT LImited </td>
                <td> 233.214.234.23 </td>
                <td> Banasree </td>
                <td> 12345546 </td>
                <td> 65756756 </td>
                <td> <span class="badge badge-success"> Complete </span> </td>
                <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-info btn-hover-shine"><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
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
  