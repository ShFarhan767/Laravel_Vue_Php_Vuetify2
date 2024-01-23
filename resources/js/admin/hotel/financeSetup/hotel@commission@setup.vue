<template id="">
    <span>
    
  
      <div class="card main-card element-block-example mt-5">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i>
            Hotel Finance Setup
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/hotel@commission@vat" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm">+ Add New </router-link>
          </div>

        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                    <th style="width:50px;">SN</th>
                    <th>Image </th>         
                    <th>Hotel Name </th>         
                    <th> Hotel Location </th>      
                    <th> Manager Contact </th>          
                    <th> Emergency Contact </th>       
                    <th> Commission </th>       
                    <th> Vat </th>       
                    <th> Timeline </th>       
                    <th> View </th>
                    <th> Edit </th>
                    <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                    <td> <div style="width:40px;height:40px;background:#d2d2d2;border:1px solid #fff;padding:2px;">&nbsp;</div> </td>
                    <td> 
                      <a href="" class="badge badge-primary">0192873</a> <br>Hotel welcome plaza 
                      <br> 
                      <i class="fa fa-star text-danger"></i>
                      <i class="fa fa-star text-danger"></i>
                      <i class="fa fa-star text-danger"></i>
                      <i class="fa fa-star text-danger"></i>
                    </td>
                    <td> Bangkok </td>
                    <td> saiful islam <br> 01813121344 </td>
                    <td> shamim hossain <br> 01812454358 </td>
                    <td> <a href="" class="badge badge-primary" data-toggle="modal" data-target="#exampleModal"> Visit </a> 
           


           <!-- Modal -->
           <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog" role="document">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel"><b>Hotel welcome plaza</b>  room availability</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div class="modal-body">
                   <div class="table-responsive">
                       <table class="table table-bordered">
                           <tr>
                               <th> SL </th>
                               <th> Image </th>
                               <th> Room Type </th>
                               <th> Bad Type </th>
                               <th> Availability </th>
                               <th> Facility </th>
                           </tr>
                           <tr>
                               <td> 1 </td>
                               <td> <div style="width:40px;height:40px;background:#d2d2d2;border:1px solid #fff;padding:2px;">&nbsp;</div> </td>
                               <td> VIP Room  </td>
                               <td> Single </td>
                               <td> 4 </td>
                               <td>  <a href="" class="badge badge-primary">view</a> </td>
                           </tr>
                       </table>
                   </div>
                 </div>
                 <div class="modal-footer">
                   <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                 </div>
               </div>
             </div>
           </div>
                               </td>
                    <td>  <span class="badge badge-primary"> Details </span> </td>
                    <td>  <span class="badge badge-primary"> Timeline </span> </td>
                  
                 <td><router-link
                  :to="`/assetBrand@entryEdit${1}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-eye"></i
                ></router-link></td>
                 <td><router-link
                  :to="`/assetBrand@entryEdit${1}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i></router-link>
                </td>
                <td><button type="button"
                  @click="distroy(1)"
                  class="
                    btn-wide btn-pill btn btn-outline-danger btn-hover-shine
                  "
                  ><i class="fa fa-trash"></i
                ></button></td>
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
  