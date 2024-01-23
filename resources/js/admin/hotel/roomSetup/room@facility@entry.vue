<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i
            >Room Facility Entry
          </h3>
          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/room@facility@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + Add </router-link>
            </div>
        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Room Facility Type </th>
                <th> Room Facility </th>
                <th> Position </th>
                <th> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="roomFacilityList,index in roomFacilityLists">
                 <td>{{ ++index }}</td>
                 <td> <span v-if="roomFacilityList.facility_type">{{ roomFacilityList.facility_type.room_facility_type_name }}</span> </td>
                 <td> {{ roomFacilityList.room_facility_name }}</td>
                 <td> {{ roomFacilityList.position }}</td>
                 
                    <td> 
                      <span v-if="roomFacilityList.status==1" class="badge badge-success"> Active </span>
                      <span v-if="roomFacilityList.status==0" class="badge badge-danger"> In-Active </span>
                    </td>
                 <td><router-link
                  :to="`/assetBrand@entryEdit${1}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-edit"></i></router-link></td>
                <td><button type="button"
                  @click="distroy(1)"
                  class="
                    btn-wide btn-pill btn btn-outline-danger btn-hover-shine
                  "
                  ><i class="fa fa-trash"></i></button></td>
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
        roomFacilityLists:[],

      };
    },
  
  
    mounted() {
     this.roomFacilityList();
    },
    methods: {

        
      roomFacilityList() {
      let uri = `htl_rom_facility`;
      axios.get(uri).then((response) => {
        this.roomFacilityLists = response.data.data;
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
  