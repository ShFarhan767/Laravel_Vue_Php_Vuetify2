<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>Hotel Location Entry
          </h3>
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/hotel@location@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
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
                <th> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="hotel_location_list,index in hotel_location_lists">
                <td>{{ ++index }}</td>
                <td><span v-if="hotel_location_list.country">{{ hotel_location_list.country.name }}</span></td>
                <td>{{ hotel_location_list.cityName }}</td>
                <td>{{ hotel_location_list.place }}</td>
                <td>{{ hotel_location_list.postCode }}</td>
                <td> 
                      <span v-if="hotel_location_list.status==0" class="badge badge-danger"> In-Active </span>
                      <span v-if="hotel_location_list.status==1" class="badge badge-success"> Active </span>
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
        <span class="card_footer">
          
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
        hotel_location_lists:[],

      };
    },
  
  
    mounted() {
     this.show_data();
    },
    methods: {

        
    show_data() {
      let uri = `htl_location`;
      axios.get(uri).then((response) => {
        this.hotel_location_lists = response.data.data;
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
  