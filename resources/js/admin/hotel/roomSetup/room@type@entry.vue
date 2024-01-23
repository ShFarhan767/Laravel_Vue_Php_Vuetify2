<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i
            >Room Type Entry
          </h3>
          
            <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/room@type@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + Add </router-link>
            </div>
        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Room Type </th>
                <th> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="roomTypeList,index in roomTypeLists">
                 <td>{{ ++index }}</td>
                 <td>{{ roomTypeList.room_type_name }}</td>
                 
                    <td> 
                      <span v-if="roomTypeList.status==1" class="badge badge-success"> Active </span>
                      <span v-if="roomTypeList.status==0" class="badge badge-danger"> In-Active </span>
                    </td>
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
        roomTypeLists:[],

      };
    },
  
  
    mounted() {
     this.roomTypeList();
    },
    methods: {

        
      roomTypeList() {
      let uri = `htl_rom_type`;
      axios.get(uri).then((response) => {
        this.roomTypeLists = response.data.data;
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
  