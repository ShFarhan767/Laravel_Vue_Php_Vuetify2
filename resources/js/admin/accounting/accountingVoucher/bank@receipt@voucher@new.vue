<template id="">
    <span>
      <div class="card">
        <div class="card-header">
          <h3>
            <i class="header-icon lnr-pencil icon-gradient bg-happy-itmeo"></i
            > Bank Receipt Voucher
          </h3>
           

          <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/bank@receipt@voucher" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
            </div>
        </div>
        <div class="supplier-entry p-0 pt-3 comm-form-back-img">
          <form @submit.prevent="hotelLocationCreate()">
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
           

           <div class="row">
           <div class="col-md-6">
              <div class="form-group">
                <label>Voucher Date
                  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="date"
                  class="form-control" 
                  value="12/2/2022">
              </div>
              

               
              <div class="form-group">
              <label> Type  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control" v-model="form.type" @change="bankInfoDetails()">
                    <option value=""> Select Type </option>
                    <option value="1"> Bank Transfer </option>
                    <option value="2"> By Cheque </option>
                    </select>  
            </div>
            
            
               <div v-if="bankInfoTransferStatus">
             
               
              <div class="form-group">
              <label> Receiver Bank Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Bank Name  </option>
                    <option value=""> Dutch Bangla Bank  </option>
                    </select>  
            </div>
             
            <div class="form-group">
              <label> Receiver Account Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Account Name  </option>
                    <option value=""> Doofaz it limited  </option>
                    </select>  
            </div>
                
              <div class="form-group">
              <label> Sender Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Sender Name  </option>
                    <option value=""> Rabeya Enterprise  </option>
                    </select>  
            </div>
                
              <div class="form-group">
              <label> Sender Bank Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Bank Name  </option>
                    <option value=""> Dutch Bangla Bank  </option>
                    </select>  
            </div>
               
              <div class="form-group">
              <label> Sender Bank Account Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="text" class="form-control" placeholder="Enter Account Name "
                     value="">
                   
            </div>
               
              <div class="form-group">
              <label> Sender Bank Account Number  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="text" class="form-control" placeholder="Enter Account Number "
                     value="">
                   
            </div>

            
            </div>


            
               <div v-if="bankInfoChequeStatus">
              <div class="form-group">
              <label>Cheque Type  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control" v-model="form.chequeType" @change="checkTypeInfo()">
                    <option value=""> Select type  </option>
                    <option value="1"> Cash Check  </option>
                    <option value="2"> Account Payable   </option>
                    </select>  
            </div>

            
            <div class="" v-if="cashCheckStatus">
            <div class="form-group">
              <label> Receiver Bank Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Bank Name  </option>
                    <option value=""> Dutch Bangla Bank  </option>
                    </select>  
            </div>
             
            <div class="form-group">
              <label> Receiver Account Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Account Name  </option>
                    <option value=""> Doofaz it limited  </option>
                    </select>  
            </div>
                
              <div class="form-group">
              <label> Sender Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Sender Name  </option>
                    <option value=""> Rabeya Enterprise  </option>
                    </select>  
            </div>

            
            <div class="form-group">
              <label> Person Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="text" class="form-control" placeholder="Enter Person Name "
                     value="">
                   
            </div>
            
            <div class="form-group">
              <label> Mobile Number  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="text" class="form-control" placeholder="Enter Mobile Number"
                     value="">
                   
            </div>
            </div>
            


            <div v-if="accountPayableCheckStatus">
              <div class="form-group">
              <label> Receiver Bank Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Bank Name  </option>
                    <option value=""> Dutch Bangla Bank  </option>
                    </select>  
            </div>
             
            <div class="form-group">
              <label> Receiver Account Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Account Name  </option>
                    <option value=""> Doofaz it limited  </option>
                    </select>  
            </div>
                
              <div class="form-group">
              <label> Sender Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Sender Name  </option>
                    <option value=""> Rabeya Enterprise  </option>
                    </select>  
            </div>
            <div class="form-group">
              <label> Sender Bank Name  <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <select class="form-control">
                    <option value=""> Select Bank Name  </option>
                    <option value=""> Islami Bank Limited  </option>
                    </select>  
            </div>
             
            <div class="form-group">
              <label> Sender Account Name <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text" class="form-control" placeholder="Enter Sender Account Name"
                     value="">
            </div>

            
            <div class="form-group">
              <label> Issue Date <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="date" class="form-control" placeholder="Enter Person Name "
                     value="">
                   
            </div>
            
            <div class="form-group">
              <label> Payment Date <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="date" class="form-control" placeholder="Enter Mobile Number"
                     value="">
                   
            </div>
              
            </div>

            
            </div>


            </div>
               
              
               
               
            <div class="col-md-6">
            <div class="form-group">
                <label>Voucher No
                  <i class="fa fa-star text-danger text-10 cursor-pointer"
                   title="Mandatory Field" data-placement="top"
                    data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                <input type="text" disabled
                  class="form-control"
                placeholder="BR-31-12/22">
              </div>
               <div class="form-group">
              <label> Purpose </label>
                    <select class="form-control">
                    <option value=""> -------  </option>
                    <option value=""> Hotel Booking  </option>
                    <option value=""> Flight Booking  </option>
                    </select>  
            </div>
               
            <div class="form-group">
              <label> Amount   <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <input type="text" class="form-control">
            </div>
           

            <div class="form-group ">
              <label> Particular    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                </label>
                    <textarea class="form-control"></textarea>
            </div>

  
             
            <div class="form-group ">
              <label> Status </label>
                    <select class="form-control">
                    <option value=""> Active  </option>
                    <option value=""> In-Active  </option>
                    </select>  
            </div>
            </div>
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
  import moment from 'moment';
  export default {
    data() {
      return {
        moment: moment,
        bankInfoTransferStatus:false,
        bankInfoChequeStatus:false,
        cashCheckStatus:false,
        accountPayableCheckStatus:false,
        form: new Form({
            // form variable hrer\
            voucherDate: new Date().toISOString().slice(0,10),
            type:'',
            chequeType:'',
        }),
        
        // data variable hrer

      };
    },
  
  
    mounted() {
     // this.currencyList();
    },
    methods: {
      
      checkTypeInfo(){
        if(this.form.chequeType==1){
          this.cashCheckStatus = true;
          this.accountPayableCheckStatus = false;
        }
         else{
           this.cashCheckStatus = false;
          this.accountPayableCheckStatus = true;
        }
      },
      bankInfoDetails(){
        if(this.form.type==1){
          this.bankInfoTransferStatus=true;
          this.bankInfoChequeStatus=false;
        }
        else{
          this.bankInfoTransferStatus=false;
          this.bankInfoChequeStatus=true;
        }
      },

        
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
  