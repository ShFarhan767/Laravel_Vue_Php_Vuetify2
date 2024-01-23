<template id="">
    <span>
       <div class="card main-card  element-block-example">
           <div class="card-header">
              <h3>
                <i class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>
                Hotel Room List
              </h3>
  
  
              <div class="btn-actions-pane-right text-capitalize">
                <router-link to="/add@new@room" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"> + Add Room  </router-link>
          </div>
            </div>
  
            
  
          
             <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered" id="sampleTable">
            <thead>
              <tr class="alert-info">
                  <tr>
                    <th style="width:50px;">SN</th>
                    <!-- <th>Image </th>          -->
                    <th>Hotel Name </th>         
                    <th> Hotel Location </th>      
                    <th> Room Type </th>      
                    <th> Bad Type </th>      
                    <th> Gallery </th>          
                    <th> Availability </th>          
                    <th> Timeline </th>       
                    <th> Action </th>       
                          
                  </tr>
              
                 </thead>
                 <tbody>
                  <tr v-for="hotelRoomList,index in hotelRoomLists">
                    <td> {{ ++index }} </td>
                    <!-- <td> <div style="width:40px;height:40px;background:#d2d2d2;border:1px solid #fff;padding:2px;">&nbsp;</div> </td> -->
                    <td> 
                      <a href="" class="badge badge-primary">{{ hotelRoomList.hotel_info.hotel_code }}</a>
                       <br>
                       {{ hotelRoomList.hotel_info.hotel_name }}
                      <br>
                      <i v-for="index in hotelRoomList.hotel_info.star" :key="index" class="fa fa-star text-danger"></i>
                    </td>
                    
                    <td> {{ hotelRoomList.hotel_info.street_address }} </td>
                    <td> <span v-if="hotelRoomList.room_type">{{ hotelRoomList.room_type.room_type_name }}</span> </td>
                    <td> <span v-if="hotelRoomList.bed_type">{{ hotelRoomList.bed_type.bed_type_name }} </span> </td>
                    <td> <span class="badge badge-primary" data-toggle="modal" data-target="#room_gallery" @click="getRoomImageList(hotelRoomList.hotel_info_id)"> Gallery </span>  </td>
                  
                    <td> <router-link to="/hotel@room@setup" class="badge badge-primary" > {{ hotelRoomList.quantity }} </router-link> Room </td>
                   
                    <td> 
                      <span class="badge badge-primary"> Timeline </span>
                     </td>
                    <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                          <router-link :to="`/edit@room${hotelRoomList.id}`" class="btn btn-outline-info btn-hover-shine">
                            <i class="fa fa-edit"></i>
                          </router-link>
                        
                        <button v-if="hotelRoomList.htl_room_book_info_system_count=='0'" type="button" @click="DeleteRoomSetup(hotelRoomList.id)" class="btn btn-outline-danger btn-hover-shine">
                          <i class="fa fa-trash"></i>
                        </button>
                        <button type="button" class="btn btn-outline-danger btn-hover-shine disabled" v-else>
                          <i class="fa fa-trash"></i>
                        </button>

                        </div>
                     </td>
                   
                  </tr>
                 </tbody>
                 
                
                
             </table>
               

<!-- Modal -->
<div class="modal fade" id="room_gallery" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Room Gallery</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <i v-if="room_gallery_loading_status" class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <div class="row">
          
        <div class="col-md-3 border p-0" v-for="roomImageList in roomImageLists">
                    <div class="col-md-12">
                      
                      <img :src="`images/room_image/`+roomImageList.image_name"
                      class="img img-responsive p-1"
                      style="width:100%">
                      
                      <div class="input-group p-2 bg-light border">
                          <span> {{ roomImageList.image_title.type_name }} </span>
                      </div>
                     
                    </div>
                    </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- --- // model  -->
          
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
                  hotelRoomLists:'',
                  gets:'',
                  roomImageLists:[],
                  room_gallery_loading_status:false,
              }
          },
          mounted(){
            this.hotelRoomList();
            // this.getInvoiceSetupInformation();
          },
          methods:{
         
            getRoomImageList(hotel_id) {
              this.room_gallery_loading_status = true;
      let uri = `imageByHotel/`+hotel_id;
      axios.get(uri).then((response) => {
        this.roomImageLists = response.data.data;
        this.room_gallery_loading_status = false;
      });
    },

       DeleteRoomSetup(id) {
        axios.get("DeleteRoomSetup/" + id).then((res) => {
          Toast.fire({
            icon: "success",
            title: "Delete Successfully",
          });
          this.hotelRoomList();
        });
      },

    hotelRoomList(){
      
      axios.get("/htl_rom_information_list").then((res) => {
        this.hotelRoomLists = res.data.data;
      });
  
    },
  
              assetBrandList(){
                
                    var companyName = this.gets.companyName;
                    var address = this.gets.address;
                    var contact = this.gets.mobileNo+', '+this.gets.email+', '+this.gets.website;
                    var pageTitle = 'Asset Brand List';
  
                   $(document).ready(function () {
                    
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  window.pdfMake = pdfMake;
  window.JSZip = require('jszip')
  
  
         var table = $("#sampleTable").DataTable({
           lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "All"]],
            processing: true,
            language: 
                        {          
                        "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>",
                        },
            serverSide: true,
            columnDefs: [
              // { orderable: false, targets: [ 1 ] },
            ],
            dom: 
          "<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>>"+
          "<'row'<'col-sm-12'tr>>"+
          "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      buttons: [ 
   
             
        {
          extend: 'excelHtml5',
          text: '<i class="fa fa-file-excel-o"></i> Excel',
          title: companyName,
          filename: pageTitle,
          selectorOpts: {filter: 'applied', order: 'current'},
          createEmptyCells : true,
          sheetName: pageTitle,
          messageTop: pageTitle,
          exportOptions: {
                          columns: [0,1]
                      },
          customize: function( xlsx ) {
          //my code
          }
          },
          {
                      extend: "pdf",
                      className: "btn export-pdf",
                      text: '<i class="fa fa-file-pdf-o"></i> PDF',
                      titleAttr: 'PDF',
  customize : function(doc){ 
      doc.defaultStyle.alignment = 'center';
      doc.styles.tableHeader.alignment = 'center';
      
          },
          
                      title: companyName,
                      messageTop:address+', Contact:- '+contact,
                      fileName: pageTitle+".pdf",
                      exportOptions: {
                  columns: [0,1]
              }
              },
        {
              extend: "print",
              className: "btn btn-primary",
              text: '<i class="fa fa-print"></i> Print',
              titleAttr: 'Print',
              oSelectorOpts: {
               page: 'all'
           },
           bShowAll: true,
              title: '',
              messageTop: '<h3 class="text-center">'+companyName+
              '</h3><h5 class="text-center">'+address+
              '</h5><h5 class="text-center border-bottom">'+contact+
              '</h5><center><span class="badge badge-light border border border-secondary">'+pageTitle+
              '</span></center>',
              exportOptions: {
                  columns: [0,1]
              }
          }
      ],
  
            ajax: "/shopAssetBrandReportAlvl",
  
            columns: [
              
             
              {
          "title": "SN",
          render: function (data, type, row, meta) {
          return meta.row + meta.settings._iDisplayStart + 1;
          }
          }, 
              {
                data: "assetBrandName",
              },
            
              
            ],
          });
          $( table.table().container() ).removeClass( 'form-inline' );
          $('.col-xs-12').addClass('col-12').removeClass( 'col-xs-12' );
        });
              },
        
          },
         
      }
  
  </script>
  