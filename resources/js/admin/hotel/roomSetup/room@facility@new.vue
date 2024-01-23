<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
            > Room Facility Entry
          </h3>
            <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/room@facility@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
            </div>
        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="addFacility()">
            <div
              class="
                col-lg-7
                px-lg-5
                col-sm-8
                offset-sm-2
                col-12
                pb-2
                pt-2
                mb-3
                supplier-border
                comm-form-box-back-color
              "
            >
           
            <div class="form-group">
              <label> Facility Type   
                 <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    <span class="badge badge-primary" data-toggle="modal" data-target="#facilityTypeModal">
                     +
                    </span>
                </label>
                    <select class="form-control"
                    v-model="form.room_facility_type_id"
                    :class="{ 'is-invalid': form.errors.has('room_facility_type_id') }">
                    <option value=""> Select Facility Type </option>
                    <option v-for="facility_type_list in facility_type_lists" :value="facility_type_list.id"> {{ facility_type_list.room_facility_type_name }} </option>
                    </select> 
                    <has-error :form="form" field="room_facility_type_id"></has-error> 
                      
                                <!-- Modal -->
                  <div
                    class="modal fade"
                    id="facilityTypeModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Facility Type
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="addFacilityType()">
                            <div class="form-group">
                              <label> Type Name</label>
                              <input
                                type="text"
                                placeholder="Type  Name"
                                class="form-control"
                                v-model="form.room_facility_type_name"
                                :class="{ 'is-invalid': form.errors.has('room_facility_type_name') }"
                              />
                              <has-error :form="form" field="room_facility_type_name"></has-error>
                            </div>

                            <div class="text-right pt-3">
                              <button
                                type="submit"
                                class="
                                  mr-2
                                  btn-pill btn-hover-shine btn btn-primary
                                "
                                :disabled="loading"
                              >
                                <span
                                  v-if="loading"
                                  class="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>

                                <span v-else class="mr-2 opacity-7">
                                  <i class="fa fa-paper-plane"></i> </span
                                >Submit
                              </button>
                            </div>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <!-- ======================================== /modal === -->
                  </div>
           
                  <div class="form-group">
                <label>Facility  Name 
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                v-model="form.room_facility_name"
                  class="form-control"
                placeholder="Facility  Name  "
                :class="{ 'is-invalid': form.errors.has('room_facility_name') }">
                <has-error :form="form" field="room_facility_name"></has-error>
              </div>
              <div class="form-group">
                <label>Position
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text"
                v-model="form.position"
                  class="form-control"
                placeholder="Position"
                :class="{ 'is-invalid': form.errors.has('position') }">
                <has-error :form="form" field="position"></has-error>
              </div>

               
              <div class="form-group">
              <label> Status </label>
                    <select class="form-control"
                    v-model="form.status"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1"> Active  </option>
                    <option value="0"> In-Active  </option>
                    </select>  
                    <has-error :form="form" field="status"></has-error>
            </div>


            </div>
  
            <!-- -----------------------------   card footer  -->
  
            <div class="d-block p-0 pt-3 pb-4 card-footer overflow-hidden">
              <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
                <button
                  type="reset"
                  class="
                    btn-pill btn-shadow btn btn-outline-danger btn-lg
                    float-left
                  "> 
                  <span class="mr-2 opacity-7">
                    <i class="fa fa-undo"></i>
                  </span>
                  <span class="mr-1"> Clear </span>
                </button>
  
                <button
                  type="submit"
                  class="
                    btn-pill btn-shadow btn btn-primary btn-lg
                    float-right
                    btn-hover-shine
                  "
                  :disabled="loading"
                >
                  <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
  
                  <span v-else class="mr-2 opacity-7">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                  <span class="mr-1"> Submit </span>
                </button>
              </div>
            </div>
  
            <!-- -----------------------------   // card footer  -->
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
            // form variable here
            room_facility_type_name:'',
            room_facility_type_id:'',
            room_facility_name:'',
            position:'',
            status:'1',
        }),
        
        // data variable here
        facility_type_lists:[],
        loading:false,

      };
    },
  
  
    mounted() {
      this.getFacilityType();
    },
    methods: {

      
      getFacilityType() {
      let uri = `htl_rom_facility_type`;
      axios.get(uri).then((response) => {
        this.facility_type_lists = response.data.data;
        });
      },
    addFacilityType() {
        this.loading = true;
        this.form
          .post("/htl_rom_facility_type")
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
                title: "Data Entry Successful",
              });
              this.form.room_facility_type_name = '';
            }
            this.getFacilityType();
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
    
    addFacility() {
        this.loading = true;
        this.form
          .post("/htl_rom_facility")
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
                title: "Data Entry Successful",
              });
              this.form.reset();
            }
            
          })
          .catch((res) => {
            this.loading = false;
            Toast.fire({
              icon: "error",
              title: "Something Missing",
            });
          });
      },
    },
  };
  </script>
  