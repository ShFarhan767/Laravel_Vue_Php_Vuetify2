<template id="">
    <span>
      
  
      <div class="card main-card element-block-example">
        <div class="card-header">
          <h3>
            <i
              class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            ></i
            >Property Type Entry
          </h3>

          
          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/hotel@property@type@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + Add </router-link>
            </div>

        </div>
        <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr class="alert-info">
                <th> SN </th>
                <th> Property Type Name </th>
                <th> Property Type Description </th>
                <th> Status </th>
                <th> Edit </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="information,index in informations">
                <td>{{ ++index }}</td>
                 <td>{{ information.property_type_name }}</td>
                 <td>{{ information.property_type_description }}</td>
                 
                 
                    <td> 
                      <span v-if="information.status==0" class="badge badge-danger"> In-Active </span>
                      <span v-if="information.status==1" class="badge badge-success"> Active </span>
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
            // form variable hrer
        }),
        
        // data variable hrer
        informations:[],

      };
    },
  
  
    mounted() {
     this.showData();
    },
    methods: {

        showData()
        {
         axios.get('/htl_property_type').then(res =>{        
              this.informations = res.data.data;
          });
        },
  
    },
  };
  </script>
  