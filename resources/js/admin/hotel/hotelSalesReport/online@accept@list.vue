<template id="">
  <span>
     <div class="card main-card  element-block-example">
         <div class="card-header">
            <h3>
              <i class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>
              Online Accept List
            </h3>


            <div class="btn-actions-pane-right text-capitalize">
                <button class="btn-wide btn-outline-2x mr-md-2 btn btn-outline-primary btn-sm"
                  onclick="$('.hotlineInformation').slideToggle();"> Advance Search </button>
            </div>
          </div>

          <div class="main-card mb-3 card hotlineInformation" style="display:none;">
                            <div class="no-gutters row">

                              <div class="table-responsive">

<table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
<thead>
<tr>
    <th colspan="12" class="text-center"> 
      <center>
        <form method="">
          <table class="">
            <tr>
                <td> 
                    <select type="text" class="form-control" placeholder="Select" style="width:150px;">
                        <option value=""> Hotel Name </option>
                       
                    </select>
                </td>
               <td> 
                    <select type="text" class="form-control" placeholder="Select" style="width:150px;">
                        <option value=""> Hotel Area </option> 
                    </select>
                </td>
                <td> 
                  <input type="text" class="form-control" placeholder="Order No / Mobile" style="width:150px;">
                </td>
                <td> 
                    <input type="date" class="form-control" placeholder="Select Date" style="width:150px;">
                </td>
                <td> 
                  <input type="date" class="form-control" placeholder="Select Date" style="width:150px;">
                </td>
                <td> <input type="submit" class="btn btn-primary" value="Search"> </td>
                <td> <input type="reset" class="btn btn-danger"> 
                </td>
            </tr>
          </table>
      </form>
      </center> 
       </th>
  </tr>
  </thead>

     </table>
    </div>
                              
                              
                              <!--
                                 <div class="col-md-6 col-xl-4">
                                    <div class="widget-content">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-right ml-0 mr-3">
                                                <div class="widget-numbers text-danger">45.9%</div>
                                            </div>
                                            <div class="widget-content-left">
                                                <div class="widget-heading">Followers</div>
                                                <div class="widget-subheading">People Interested</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>   -->



                            </div>
                        </div>


        
           <div class="table-responsive bg-white p-3">
        <table class="table table-hover table-striped table-bordered" id="sampleTable">
          <thead>
            <tr class="alert-info">
                <tr>
                  <th style="width:50px;">SN</th>
                  <th>Image </th>         
                  <th>Hotel Name </th>         
                  <th> Hotel Location </th>     
                  <th> Customer Location </th>       
                  <th> Date & Time </th>         
                  <th> Invoice No </th>         
                  <th> Customer Name </th>         
                  <th> Mobile No </th>         
                  <th> Quantity </th>         
                  <th> Accept Reason </th>         
                  <th> Accept By </th>         
                  <th> Timeline </th>    
                  <th> Status </th>         
                        
                </tr>
            
               </thead>
               <tbody>
                <tr>
                  <td> 1 </td>
                  <td> <div style="width:40px;height:40px;background:#d2d2d2;border:1px solid #fff;padding:2px;">&nbsp;</div> </td>
                  <td> 
                    <a href="" class="badge badge-primary">0192873</a> <br>Hotel welcome plaza 
                    <br> 
                    <i class="fa fa-star text-danger"></i>
                    <i class="fa fa-star text-danger"></i>
                    <i class="fa fa-star text-danger"></i>
                    <i class="fa fa-star text-danger"></i>
                  </td>
                  <td> Bangkok </td>
                  <td> Feni </td>
                  <td> 3 jan 2022 11:30 am </td>
                  <td> <a href="" class="badge badge-primary-outline"> 102928 </a> </td>
                  <td> Md Ariful islam </td>
                  <td> 01812454358 </td>
                  <td> <a href="" class="badge badge-primary"> 4 </a> </td>
                  <td> <span class="badge badge-primary"> view </span> <br> 30 jan 2022 11:30 am </td>
                  <td> Babul Uddin </td>
                  <td> 
                    <span class="badge badge-primary"> Timeline </span>
                    <br>
                    <span class="badge badge-info"> Movement </span>
                   </td>
                  <td> 
                    <div class="dropdown">
                  <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Collection</a>
                    <a class="dropdown-item" href="#">Update</a>
                    <a class="dropdown-item" href="#"> Pending   </a>
                    <a class="dropdown-item" href="#"> Cancel   </a>
                    <a class="dropdown-item" href="#"> Message   </a>
                  </div>
                </div>
                </td>
                </tr>
               </tbody>
               <!-- <tbody> <tr> 
                  <td colspan="2" class="text-center"> <h3> Loading.....</h3></td>
                </tr></tbody> -->
              
              
           </table>
              <!-- Modal -->
        
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
