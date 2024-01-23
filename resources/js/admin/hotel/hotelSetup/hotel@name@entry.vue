<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i
            >Property Entry
          </h3>

          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/hotel@name@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + Add </router-link>
            </div>
        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Country </th>
                <th> City </th>
                <th> Place </th>
                <th> Post Code </th>
                <th> Hotel Name </th>
                <th> Property Type </th>
                <th> Map </th>
                <th> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="hotelNameList,index in hotelNameLists">
                <td>{{ ++index }}</td>
                <td> <span v-if="hotelNameList.country">{{ hotelNameList.country.name }}</span></td>
                <td> <span v-if="hotelNameList.location">{{ hotelNameList.location.cityName }}</span></td>
                <td> <span v-if="hotelNameList.location">{{ hotelNameList.location.place }}</span></td>
                <td> <span v-if="hotelNameList.location">{{ hotelNameList.location.postCode }}</span></td>
                <td> {{ hotelNameList.hotel_name }} </td>
                <td> <span v-if="hotelNameList.property_type">{{ hotelNameList.property_type.property_type_name }}</span></td>
                
                 <td><img 
                     src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                     alt="map-placeholder-image" data-toggle="modal" data-target="#exampleModal" style="width:100px;height:50px;">
       
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Hotel Redisan Blue</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                        <div class="col-12">
                                        <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" 
                                        class="img img-responsive" style="width:100%" alt="hotel-large-map">
                                    </div>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    </td>
                    <td> <span class="badge badge-success" v-if="hotelNameList.status==1"> Active </span>
                     <span class="badge badge-danger" v-if="hotelNameList.status==0"> In-Active </span></td>
                 <td><router-link
                  :to="`/assetBrand@entryEdit${1}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i
                ></router-link></td>
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
            // form variable here
        }),
        
        // data variable here
        hotelNameLists:[],
      };
    },
  
  
    mounted() {
     this.hotelNameInformation();
    },
    methods: {

        
    hotelNameInformation() {
      let uri = `htl_name_entry`;
      axios.get(uri).then((response) => {
        this.hotelNameLists = response.data.data;
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
  