<template id="">
    <span>
    
  
      <div class="card main-card element-block-example mt-5">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i>
            Hotel List 
          </h3>

          <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/new@hotel@setup" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm">+ Add New </router-link>
          </div>

        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                    <th style="width:50px;">SN</th>
                    <!-- <th>Image </th>          -->
                    <th>Hotel Name </th>         
                    <th> Hotel Type </th>      
                    <th> Hotel Location </th>      
                    <th> Manager Contact </th>          
                    <th> Emergency Contact </th>       
                    <th> Room Availability </th>        
                    <th> Timeline </th>       
                    <th> View </th>
                    <th> Edit </th>
                    <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              
              <tr v-for="htlInfoList,index in htlInfoLists">
                <td> {{ ++index }} </td>
                    <!-- <td> <div style="width:40px;height:40px;background:#d2d2d2;border:1px solid #fff;padding:2px;">&nbsp;</div> </td> -->
                    <td> 
                      <a href="" class="badge badge-primary">{{ htlInfoList.hotel_code }}</a> <br>
                      {{ htlInfoList.hotel_name }} 
                      <br> 
                       <i v-for="index in htlInfoList.star" :key="index" class="fa fa-star text-danger"></i> 
                    
                    </td>
                    <td> {{ htlInfoList.property_type.property_type_name }} </td>
                    <td> {{ htlInfoList.street_address }} </td>
                    <td> 
                        <span v-if="htlInfoList.contact" v-for="contactInfo in htlInfoList.contact">
                          <span v-if="contactInfo.contact_type_id==1">{{ contactInfo.full_name }}
                          <br>
                          {{ contactInfo.mobile_no }}
                        </span>
                        </span>
                    </td>
                    <td> 
                        <span v-if="htlInfoList.contact" v-for="contactInfo in htlInfoList.contact">
                          <span v-if="contactInfo.contact_type_id==2">{{ contactInfo.full_name }}
                          <br>
                          {{ contactInfo.mobile_no }}
                        </span>
                        </span>
                    </td>
                     
                    <td> <span class="badge badge-primary"> Visit </span> </td>
                    <td> <span class="badge badge-primary"> Timeline </span> </td>
                  
                 <td><router-link
                  :to="`/assetBrand@entryEdit${1}`"
                  class="
                    btn-wide btn-pill btn btn-outline-primary btn-hover-shine
                  "
                  ><i class="fa fa-eye"></i
                ></router-link></td>

                 <td>
                  <router-link :to="`/edit@hotel${htlInfoList.id}`" class="btn-wide btn-pill btn btn-outline-primary btn-hover-shine"><i class="fa fa-edit"></i>
                  </router-link>
                </td>

                <td v-if="htlInfoList.htl_room_info_count=='0'">
                  <button type="button" @click.prevent="hotelSetupDelete(htlInfoList.id)" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i>
                  </button>
                </td>

                <td v-else>
                  <button type="button" class="btn-wide btn-pill btn btn-outline-danger btn-hover-shine disabled"><i class="fa fa-trash"></i>
                  </button>
                </td>

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
        htlInfoLists:[],

      };
    },
  
  
    mounted() {
     this.hotel_list();
    },
    methods: {

        
      hotel_list() {
      let uri = `/hotel_info_list`;
      axios.get(uri).then((response) => {
        this.htlInfoLists = response.data.data;
      });
    },

    hotelSetupDelete(id) {
        axios.get("hotelSetupDelete/" + id).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Delete Successfully",
          });
          this.hotel_list();
        });
      },

        
    },
  };
  </script>
  