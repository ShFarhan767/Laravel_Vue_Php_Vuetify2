<template id="">
    <v-app>
       <div class="card main-card  element-block-example">
           <div class="card-header">
              <h3>
                <i class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>
                Visa Type Entry
              </h3>
  
  
              <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/new@visa@type">
                    <v-btn
                      elevation="2" 
                      outlined
                      rounded
                      small
                      color="primary"
                    > Add New
                    </v-btn>
                  </router-link>
                  <router-link to="/visa@form@validation" class="mx-2">
                    <v-btn
                      elevation="2"
                      outlined
                      rounded
                      small
                      color="primary"
                    > Register
                    </v-btn> 
                  </router-link>
                  <v-btn @click="toggleDarkMode" color="primary" elevation="2" raised rounded small>
                    Dark Mode
                  </v-btn>  
              </div>
            </div>
  
            
  
          
             <div class="table-responsive bg-white p-3">
          <table class="table table-hover table-striped table-bordered" id="sampleTable">
            <thead  class="alert-info">
                  <tr>
                    <th style="width:50px;">SN</th>
                    <th>Image </th>         
                    <th>Country </th>         
                    <th> Visa Type </th>           
                    <th> Timeline </th>    
                    <th> Status </th>         
                    <th> Action </th>         
                          
                  </tr>
              
                 </thead>
                 <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> <div style="width:40px;height:40px;background:#d2d2d2;border:1px solid #fff;padding:2px;">&nbsp;</div> </td>
                    <td> Thailand </td>
                    <td>Online Apply</td>
                    
                    <td> 
                      <span> 
                          <v-btn
                           color="primary"
                            elevation="2"
                            outlined
                            rounded
                            small
                          >  
                          Timeline</v-btn>
                      </span>
                    </td>
                    <td> 
                      <v-btn
                        class="ma-2"
                        color="teal"
                        small
                        rounded
                        dark
                      >
                        Active
                        <v-icon
                          dark
                          right
                        >
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </v-btn>
                    </td>
                    <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-info btn-hover-shine"><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
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
  


        <template>

          <div class="Table">
              <v-data-table
                    :headers="headers"
                    :items="desserts"
                    class="responsive-table sticky-header"
                    fixed-header
                    height="540px"
                    :single-select="singleSelect"
                    item-key="name"
                    show-select
                    style="margin-top: 50px;"
                    :mobile-breakpoint="null"
                  >
                    <template v-slot:item.calories="{ item }">
                      <v-chip
                        :color="getColor(item.calories)"
                        dark
                      >
                        {{ item.calories }}
                      </v-chip>
                    </template>

                        <template v-slot:item.details="{ item }">
                          <v-btn @click="handleButtonClick(item)" color="primary"
                            elevation="2"
                            raised
                            rounded
                            small
                          >
                            Details
                          </v-btn>
                        </template>

                    <template v-slot:top>
                      <v-switch
                        v-model="singleSelect"
                        label="Single select"
                        class="pa-3"
                      ></v-switch>
                    </template>
                  </v-data-table>
          </div>
        </template>
  
    </v-app>
  </template>
<style scoped>
.Table{
  background-color:azure;
  box-shadow: 1px;
}

  .responsive-table {
    width: 100%; /* Use 100% width by default */
    scrollbar-width: none;
  }

  /* Responsive styles for smaller screens */
  @media screen and (max-width: 600px) {
    .responsive-table {
      overflow-x: auto; /* Add horizontal scrollbar for small screens */
      width: auto; /* Allow the table to expand beyond the viewport width */
      scrollbar-width: none;
    }
  }
</style>
  
<script>
import datatable from "datatables.net-bs4";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import jsZip from 'jszip'

// Example: import buttons and plugins
import 'datatables.net-buttons/js/dataTables.buttons.js'
import 'datatables.net-buttons/js/buttons.html5.js'
import 'datatables.net-buttons/js/buttons.print.js'

import 'datatables.net-buttons-bs4'
   
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
  export default {
    data() {
      
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'name',
            width: '120px',
            class: 'sticky-header grey lighten-3',
          },
          { text: 'Sales', value: 'sales' , align: 'center', class: 'sticky-header grey lighten-3', },
          { text: 'Collection', value: 'collection' , align: 'center', class: 'sticky-header grey lighten-3', },
          { text: 'Purchase', value: 'purchase' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Payment', value: 'payment' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Expense', value: 'expense' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Salary', value: 'salary' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Credit', value: 'credit' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Debit', value: 'debit' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Profit', value: 'profit' , align: 'center',class: 'sticky-header grey lighten-3',},
          { text: 'Details', value: 'details' ,  width:'140px', align: 'center', class: 'sticky-header grey lighten-3',},
        ],
        desserts: [
          {
            name: '2024-01-01',
            sales: 0,
            collection: 10,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-02',
            sales: 0,
            collection: 50,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details: '',
          },
          {
            name: '2024-01-03',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-04',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-05',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-06',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-07',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-08',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-09',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
          {
            name: '2024-01-10',
            sales: 0,
            collection: 0,
            purchase: 0,
            payment: 0,
            expense: 0,
            salary: 0,
            credit: 0,
            debit: 0,
            profit: 0,
            details:'',
          },
        ],
      }
    },
          mounted(){
            this.getInvoiceSetupInformation();
          },
          methods:{
  
      getInvoiceSetupInformation() {
     
                this.assetBrandList();

        
      
              },
    getColor(calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },

      handleButtonClick(item) {
        console.log(`Button clicked for item: ${item.details}`);
      },

      toggleDarkMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
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
        $('.col-xs-12').addClass('col-12').removeClass('col-xs-12');
        
      });
    },
        
  }

  
</script>
  