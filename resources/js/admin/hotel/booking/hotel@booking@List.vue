m<template id="">
    <span>
       <div class="card main-card  element-block-example">
           <div class="card-header">
              <h3>
                <i class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>
                Hotel Booking
              </h3>
  
  
              <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/create@booking@new" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > + Add New </router-link>
              </div>
            </div>
  
            
  
          
          <div class="table-responsive bg-white p-3">
       
          <table class="table table-hover table-striped table-bordered" id="sampleTable">
            <thead>
            <tr class="alert-info"></tr>
            <tr>
              <th style="width: 50px">SN</th>
              <th> Create By </th>
              <th> Create Date </th>
              <th> Company Name </th>
              <th> Service </th>
              <th> Invoice No </th>
              <th> Invoice Amount </th>
              <th> Print </th>
              <th> Due   </th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoiceList,index in invoiceLists">
              <td> {{ ++index }} </td>
              <td> {{ userName }} </td>
              <td> {{ invoiceList.created_at }} </td>
              <td> <span v-if="invoiceList.customer">
                {{ invoiceList.customer.customerName }}
                <br>
                {{ invoiceList.customer.customerPhone }}
              </span> </td>
              <td> Hotel </td>
              <td> <span class="badge badge-primary"
                  @click="showInvoiceDetails(invoiceList.id)"
                 data-toggle="modal" data-target="#previewModal"> {{ invoiceList.invoiceNo }}</span> </td>
              <td> {{ invoiceList.currentTotalAmount }} </td>
              <td> {{ invoiceList.currentPaidAmount }} </td>
              <td> {{ invoiceList.currentDue }} </td>
             
            </tr>
            <!-- <tr>
              <td>1</td>
              <td>Babul Uddin</td>
              <td>3 jan 2022</td>
              <td>H234A59B</td>
              <td>ABC Limited</td>
              <td>3 jan 2022</td>
              <td>20 jan 2022</td>
              <td><span class="badge badge-warning"> pending </span></td>
              <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine" data-toggle="modal" data-target="#previewModal"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-info btn-hover-shine"><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
              </td>
            </tr> -->
          </tbody>
        </table>
              
<!-- preview Modal -->
<div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="width:137%;margin-left:-107px;">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Preview </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        <div id="invoice" style="padding-top:0px!important;">
    <div class="invoice overflow-auto">
        <div style="min-width: 600px">



                    <header  :style="'border-bottom-color:blue'" style="margin-bottom:5px!important;">
                <div class="row">
                    <div class="col-6">
                        <a target="_blank" href="#">
                            <img :src="'http://travelcenter.asia/images/logo.png'" style="max-height:105px;max-width:100%;" alt="Company Logo"/>
                            </a>
                    </div>
                    <div class="col-4">
                        <div> <i class="fa fa-home"></i>  15/5 (2nd Floor), Block-C, Tajmahal Road, Mohammadpur Dhaka-1207, Bangladesh </div>
                        <div> <i class="fa fa-phone" aria-hidden="true"></i>   +880248110212</div>
                        <div> <i class="fa fa-envelope" aria-hidden="true"></i>   sales@travelcenter.asia</div> 
                        <div> <i class="fa fa-globe" aria-hidden="true"></i>   www.travelcenter.asia</div>
                    </div>
                    <div class="col-2 text-center">
                        <!-- <p class="mb-0"><u>Q234A59B</u></p> -->
                        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'" style="max-height:105px;max-width:100%;margin-top: -8px;" alt="Company Logo"/>
                            
                    </div>
                </div>

            </header>


            
            <div class="row">
                <div class="col"> 
                        <b>Customer Info</b></br>
                         <span v-if="invoiceInfo.customer">{{ invoiceInfo.customer.customerName }}</span>
                         <br>
                         <span v-if="invoiceInfo.customer">{{ invoiceInfo.customer.customerPhone }}</span>
                        
                </div>
                <div class="col"> 
                    <span style="position:absolute;top:-28px;font-size:25px;background:white;padding:0 16px;right:118px;color:#00aeef;"> Booking </span>
                     
                    <b style="position:absolute;"> Module </b>
                    </br>
                       Hotel 
                 </div>
                <div class="col"> 
                    <table style="float:right;">
                        <tr>
                            <th>Issue Date</th>
                            <th>:</th>
                            <td> {{ invoiceInfo.salesDate }}</td>
                        </tr>
                         
                        <tr>
                            <th> </th>
                            <th> </th>
                            <td> BDT </td>
                        </tr>
                    </table>
                </div>
            </div>



            <div class="row mt-3">
                <div class="col table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th> SL </th>
                            <th> Hotel Name</th>
                            <th> Check In-Out</th>
                            <th> Room Type </th>
                            <th> Bed Type </th>
                            <th> Person</th>
                            <th> No of Room</th>
                            <th> Extra Bed</th>
                            <th> Night</th>
                            <th> Price</th>
                            <th> Total Price</th>
                        </tr>
                        <tr v-for="bookingProductList,index in invoiceProductLists">
                            <td>{{ index + 1 }}</td>
                            <td ><span v-if="bookingProductList.hotel">
                              {{ bookingProductList.hotel.hotel_name }} 
                            </span>
                            </td>
                            <td>
                              {{ bookingProductList.checkIn }} <br>
                              to
                              {{ bookingProductList.checkOut }}
                            </td>
                            <td ><span v-if="bookingProductList.room_type">
                              {{ bookingProductList.room_type.room_type_name }} 
                            </span>
                            </td>
                            <td ><span v-if="bookingProductList.bed_type">
                              {{ bookingProductList.bed_type.bed_type_name }} 
                            </span>
                            </td>
                            <td>
                              Adult: {{ bookingProductList.adult }}
                              <br>
                              <span v-if="bookingProductList.child"> Child: {{ bookingProductList.child }} </span>
                              
                            </td>
                            <td> {{ bookingProductList.noOfRoom }} </td>
                            <td> {{ bookingProductList.extraBed }}*{{ bookingProductList.extraBedPrice }} = {{ bookingProductList.extraBed * bookingProductList.extraBedPrice }} </td>
                            <td> {{ bookingProductList.night }} </td>
                            <td> {{ bookingProductList.price }} </td>
                            <td> {{ bookingProductList.totalPrice }} </td>
                        </tr>
                    </table>
                </div>
            </div>



            

            <div class="row">
                <div class="col-md-7">
                    <b> Note : </b>
                    <br>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                
                    <hr>
                    <b> Payment Condition :</b>
                    <br>
                    <ul>
                      <li> Bank </li>
                      <li> Credit Card </li>
                      <li> MFS </li>

                    </ul>
                    
                    <h5 class="mt-4 pt-4 mb-3">
                        <u> Authorize Sign </u>
                    </h5>

                </div>
                <div class="col-md-5">
                    <table class="table table-bordered">
                        <tr>
                            <th> Sub Total </th>
                            <td> {{ invoiceInfo.currentTotalAmount }} </td>
                        </tr>
                        <tr>
                            <th> Discount </th>
                            <td> 0 </td>
                        </tr>
                        <tr>
                            <th> Payable </th>
                            <td> {{ invoiceInfo.currentTotalAmount }} </td>
                        </tr>
                        <tr>
                            <th> vat </th>
                            <td> 0% </td>
                        </tr>
                        <tr>
                            <th> Total </th>
                            <td> {{ invoiceInfo.currentTotalAmount }}</td>
                        </tr>
                    </table>
 

                </div>
              </div>


            </div>
            </div>
            </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>




          
           </div>
       
        </div>
  
  
    </span>
  </template>
  <style>
  
  </style>
  <script>
  import datatable from "datatables.net-bs4";
  import pdfMake from 'pdfmake/build/pdfmake'
  import pdfFonts from 'pdfmake/build/vfs_fonts'
  import jsZip from 'jszip'
   
  // below you should only import what you need
  // Example: import buttons and plugins
  import 'datatables.net-buttons/js/dataTables.buttons.js'
  import 'datatables.net-buttons/js/buttons.html5.js'
  import 'datatables.net-buttons/js/buttons.print.js'
  // import the rest for your specific theme
  import 'datatables.net-buttons-bs4'
   
  import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
      export default {
          data(){
              return{
                  gets:'',
                  invoiceLists:'',
                  userName:'',
                  invoiceInfo:'',
                  invoiceProductLists:[],
              }
          },
          mounted(){
            this.invoiceList();
          },
          methods:{
            invoiceList()
            {
                axios
                .get("/hotelBookingInvoiceList")
                .then((res) => {
                  this.invoiceLists = res.data.list;
                  this.userName = res.data.userName;
                });
            },

            showInvoiceDetails(e)
            {
              axios
                .get("/hotelBookingInvoiceListById/"+e)
                .then((res) => {
                  this.invoiceInfo = res.data.info;
                  this.invoiceProductLists = res.data.productList;
                });
            },
        
          },
         
      }
  
  </script>
  