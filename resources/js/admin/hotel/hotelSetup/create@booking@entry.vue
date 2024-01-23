<template id="">
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
              <th> Invoice No </th>
              <th> Company Name </th>
              <th> Issue Date </th>
              <th> Valid Until </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>
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
                        <p class="mb-0"><u>Q234A59B</u></p>
                        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'" style="max-height:105px;max-width:100%;margin-top: -8px;" alt="Company Logo"/>
                            
                    </div>
                </div>

            </header>


            
            <div class="row">
                <div class="col"> 
                        <b>Quote To</b></br>
                         Company Name
                        
                </div>
                <div class="col"> 
                    <span style="position:absolute;top:-28px;font-size:25px;background:white;padding:0 16px;right:118px;color:#00aeef;"> Quotation </span>
                     
                    <b style="position:absolute;">Module </b>
                    </br>
                       Hotel <br>
                       Welcome Plaza Hotel
                 </div>
                <div class="col"> 
                    <table style="float:right;">
                        <tr>
                            <th>Issue Date</th>
                            <th>:</th>
                            <td> 3 Jan 2022</td>
                        </tr>
                        <tr>
                            <th>Valid Until</th>
                            <th>:</th>
                            <td>29 jan 2022</td>
                        </tr>
                        <tr>
                            <th> </th>
                            <th> </th>
                            <td> USD </td>
                        </tr>
                    </table>
                </div>
            </div>



            <div class="row">
                <div class="col table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th> SL </th>
                            <th> Product Type </th>
                            <th> Product Name </th>
                            <th> Description </th>
                            <th> Unit </th>
                            <th> Unit Price </th>
                            <th> Quantity </th>
                            <th> Discount </th>
                            <th> Total </th>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> Hotel </td>
                            <td> welcome plaza hotel </td>
                            <td> the welcome plaza hotel is most popular in the world. </td>
                            <td> 1 </td>
                            <td> 2000 </td>
                            <td> 2 </td>
                            <td> 30 </td>
                            <td> 1970 </td>
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
                      <li> paragraphs </li>
                      <li> words </li>
                      <li> bytes </li>
                      <li> lists </li>

                    </ul>
                    
                    <h5 class="mt-4 pt-4 mb-3">
                        <u> Authorize Sign </u>
                    </h5>

                </div>
                <div class="col-md-5">
                    <table class="table table-bordered">
                        <tr>
                            <th> Sub Total </th>
                            <td> 2000 </td>
                        </tr>
                        <tr>
                            <th> Discount </th>
                            <td> 20 </td>
                        </tr>
                        <tr>
                            <th> Payable </th>
                            <td> 2000 </td>
                        </tr>
                        <tr>
                            <th> vat </th>
                            <td> 5% </td>
                        </tr>
                        <tr>
                            <th> Total </th>
                            <td> 1500</td>
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
              }
          },
          mounted(){
            this.getInvoiceSetupInformation();
          },
          methods:{
  
      getInvoiceSetupInformation() {
     
        this.assetBrandList();
      
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
  