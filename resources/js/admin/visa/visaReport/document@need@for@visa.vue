<template id="">
    <span>
       <div class="card main-card  element-block-example">
           <div class="card-header">
              <h3>
                <i class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>
                Document Need For Visa
              </h3>
  
            </div>
  
            
  
          
             <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered" id="sampleTable">
            <thead>
              <tr class="alert-info">
                  <tr>
                    <th style="width:50px;">SN</th>     
                    <th> Agent/Customer </th>
                    <th> Passport No </th>
                    <th> Birthday </th>
                    <th> Nationality as passport </th>
                    <th> Reason  </th>
                    <th> Document </th>
                    <th> Status </th>       
                    <th> Comment </th>     
                          
                  </tr>
              
                 </thead>
                 <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> Nazmul Huda (Agent) </td>
                    <td> <span class="badge badge-primary"  data-toggle="modal" data-target="#exampleModal">3434289897</span> </td>
                    <td> 3 jan 2022 </td>
                    <td> Bangladesh </td>
                    <td> Visa </td>
                    <td>   <ul>
                        <li> Birth Cirtificate </li>
                        <li> Bank Statement </li>
                        <li> Passport </li>
                      </ul> </td>
                    <td> Active </td>
                    <td> Embasy te submit korse </td>
                  
                  </tr>
                  <tr>
                    <td> 2 </td>
                    <td> saiful Huda (Customer) </td>
                    <td> <span class="badge badge-primary"  data-toggle="modal" data-target="#exampleModal">BD43243234</span>  </td>
                    <td> 3 jan 2022 </td>
                    <td> Bangladesh </td>
                    <td> Visa </td>
                    <td>   <ul>
                        <li> Birth Cirtificate </li>
                        <li> Bank Statement </li>
                        <li> Passport </li>
                      </ul> </td>
                    <td> Ready to delivery </td>
                    <td> Visa Processing... </td>
                    
                  </tr>
                 </tbody>
                
                
                
             </table>
 

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Passport Information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
            
              <h5 class="text-center mt-0">Passport No : BD3423423</h5>
                <hr />
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Name </label>
                  <input type="text" class="form-control" disabled placeholder="Name" />
                </div>
                <div class="col-6">
                  <label> Gender </label>
                  <select class="form-control" disabled>
                    <option value="">Select Gender</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Father's Name </label>
                  <input
                    type="text"
                    class="form-control" disabled
                    placeholder="Father's Name"
                  />
                </div>

                <div class="col-6">
                  <label> Mother's Name </label>
                  <input
                    type="text"
                    class="form-control" disabled
                    placeholder="Mother's Name"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Nationality in Passport </label>
                  <select class="form-control" disabled>
                    <option value="">Select Country</option>
                  </select>
                </div>

                <div class="col-6">
                  <label> Country of Residence </label>
                  <select class="form-control" disabled>
                    <option value="">Select Country</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Birthday </label>
                  <div class="input-group">
                    <select
                      class="form-control dob_day" disabled
                      name="dob_day"
                      required=""
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                    </select>

                    <select
                      class="form-control dob_month" disabled
                      name="dob_month"
                      required=""
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                    </select>

                    <select
                      class="form-control dob_year" disabled
                      name="dob_year"
                      required=""
                    >
                      <option value="">Year</option>
                      <option>1932</option>
                    </select>
                  </div>
                </div>

                <div class="col-6">
                  <label> Country of Birth </label>
                  <select class="form-control" disabled>
                    <option value="">Select Country</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Personal ID No </label>
                  <select class="form-control" disabled>
                    <option value="">Select ID</option>
                    <option value="">NID</option>
                    <option value="">Birth Certificate</option>
                  </select>
                </div>

                <div class="col-6">
                  <label> Passport No </label>
                  <input
                    type="text"
                    class="form-control" disabled
                    placeholder="Passport No"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label> Personal Issue Date </label>
                  <div class="input-group">
                    <select
                      class="form-control dob_day" disabled
                      name="dob_day"
                      required=""
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                    </select>

                    <select
                      class="form-control dob_month" disabled
                      name="dob_month"
                      required=""
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                    </select>

                    <select
                      class="form-control dob_year" disabled
                      name="dob_year"
                      required=""
                    >
                      <option value="">Year</option>
                      <option>1932</option>
                    </select>
                  </div>
                </div>

                <div class="col-6">
                  <label> Passport Expire Date </label>
                  <div class="input-group">
                    <select
                      class="form-control dob_day" disabled
                      name="dob_day"
                      required=""
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                    </select>

                    <select
                      class="form-control dob_month" disabled
                      name="dob_month"
                      required=""
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                    </select>

                    <select
                      class="form-control dob_year" disabled
                      name="dob_year"
                      required=""
                    >
                      <option value="">Year</option>
                      <option>1932</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
                <div class="row">
                    <div class="col-6">
                        <label> Passport Previous Country </label>
                        <select class="form-control" disabled>
                            <option value="">Bangladesh</option>
                            <option value="">Nepal</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label> Previous Country Visa type </label>
                        <select class="form-control" disabled>
                            <option value="">visit</option>
                            <option value="">student</option>
                            <option value="">medical</option>
                        </select>
                    </div>
                     
                </div>
              
            </div>

            <div class="form-group">
              <label> Passport Receiving Reason </label>
              <select class="form-control" disabled>
                <option value="">Visa</option>
                <option value="">Ticket</option>
                <option value="">Package Tour</option>
              </select>
            </div>

            <div class="form-group">
              <label> Received Document  </label>
              <div class="row">
                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" disabled id="customCheck12">
                                <label class="custom-control-label" for="customCheck12">Bank Transaction</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" disabled id="customCheck11">
                                <label class="custom-control-label" for="customCheck11">NID Copy</label>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" disabled id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Bank solvency</label>
                            </div>
                        </div>
                        
                        
              </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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