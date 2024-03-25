(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-buttons/js/dataTables.buttons.js */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js");
/* harmony import */ var datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_dataTables_buttons_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.html5.js */ "./node_modules/datatables.net-buttons/js/buttons.html5.js");
/* harmony import */ var datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_html5_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-buttons/js/buttons.print.js */ "./node_modules/datatables.net-buttons/js/buttons.print.js");
/* harmony import */ var datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_js_buttons_print_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-buttons-bs4 */ "./node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js");
/* harmony import */ var datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css */ "./node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css");
/* harmony import */ var datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_buttons_bs4_css_buttons_bootstrap4_min_css__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // Example: import buttons and plugins






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [{
        text: 'Date',
        align: 'left',
        sortable: false,
        value: 'name',
        width: '120px',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Sales',
        value: 'sales',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Collection',
        value: 'collection',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Purchase',
        value: 'purchase',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Payment',
        value: 'payment',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Expense',
        value: 'expense',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Salary',
        value: 'salary',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Credit',
        value: 'credit',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Debit',
        value: 'debit',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Profit',
        value: 'profit',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }, {
        text: 'Details',
        value: 'details',
        width: '140px',
        align: 'center',
        "class": 'sticky-header grey lighten-3'
      }],
      desserts: [{
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }, {
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
        details: ''
      }]
    };
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      this.assetBrandList();
    },
    getColor: function getColor(calories) {
      if (calories > 400) return 'red';else if (calories > 200) return 'orange';else return 'green';
    },
    handleButtonClick: function handleButtonClick(item) {
      console.log("Button clicked for item: ".concat(item.details));
    },
    toggleDarkMode: function toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  assetBrandList: function assetBrandList() {
    var companyName = this.gets.companyName;
    var address = this.gets.address;
    var contact = this.gets.mobileNo + ', ' + this.gets.email + ', ' + this.gets.website;
    var pageTitle = 'Asset Brand List';
    $(document).ready(function () {
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;
      window.pdfMake = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a;
      window.JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
      var table = $("#sampleTable").DataTable({
        lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "All"]],
        processing: true,
        language: {
          "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>"
        },
        serverSide: true,
        columnDefs: [// { orderable: false, targets: [ 1 ] },
        ],
        dom: "<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>>" + "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        buttons: [{
          extend: 'excelHtml5',
          text: '<i class="fa fa-file-excel-o"></i> Excel',
          title: companyName,
          filename: pageTitle,
          selectorOpts: {
            filter: 'applied',
            order: 'current'
          },
          createEmptyCells: true,
          sheetName: pageTitle,
          messageTop: pageTitle,
          exportOptions: {
            columns: [0, 1]
          },
          customize: function customize(xlsx) {//my code
          }
        }, {
          extend: "pdf",
          className: "btn export-pdf",
          text: '<i class="fa fa-file-pdf-o"></i> PDF',
          titleAttr: 'PDF',
          customize: function customize(doc) {
            doc.defaultStyle.alignment = 'center';
            doc.styles.tableHeader.alignment = 'center';
          },
          title: companyName,
          messageTop: address + ', Contact:- ' + contact,
          fileName: pageTitle + ".pdf",
          exportOptions: {
            columns: [0, 1]
          }
        }, {
          extend: "print",
          className: "btn btn-primary",
          text: '<i class="fa fa-print"></i> Print',
          titleAttr: 'Print',
          oSelectorOpts: {
            page: 'all'
          },
          bShowAll: true,
          title: '',
          messageTop: '<h3 class="text-center">' + companyName + '</h3><h5 class="text-center">' + address + '</h5><h5 class="text-center border-bottom">' + contact + '</h5><center><span class="badge badge-light border border border-secondary">' + pageTitle + '</span></center>',
          exportOptions: {
            columns: [0, 1]
          }
        }],
        ajax: "/shopAssetBrandReportAlvl",
        columns: [{
          "title": "SN",
          render: function render(data, type, row, meta) {
            return meta.row + meta.settings._iDisplayStart + 1;
          }
        }, {
          data: "assetBrandName"
        }]
      });
      $(table.table().container()).removeClass('form-inline');
      $('.col-xs-12').addClass('col-12').removeClass('col-xs-12');
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.Table[data-v-1c2546e8]{\r\n  background-color:azure;\r\n  box-shadow: 1px;\n}\n.responsive-table[data-v-1c2546e8] {\r\n    width: 100%; /* Use 100% width by default */\r\n    scrollbar-width: none;\n}\r\n\r\n  /* Responsive styles for smaller screens */\n@media screen and (max-width: 600px) {\n.responsive-table[data-v-1c2546e8] {\r\n      overflow-x: auto; /* Add horizontal scrollbar for small screens */\r\n      width: auto; /* Allow the table to expand beyond the viewport width */\r\n      scrollbar-width: none;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("div", { staticClass: "card main-card  element-block-example" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h3", [
            _c("i", {
              staticClass:
                "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            }),
            _vm._v("\n            Visa Type Entry\n          ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-actions-pane-right text-capitalize" },
            [
              _c(
                "router-link",
                { attrs: { to: "/new@visa@type" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        elevation: "2",
                        outlined: "",
                        rounded: "",
                        small: "",
                        color: "primary"
                      }
                    },
                    [_vm._v(" Add New\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "mx-2", attrs: { to: "/visa@form@validation" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        elevation: "2",
                        outlined: "",
                        rounded: "",
                        small: "",
                        color: "primary"
                      }
                    },
                    [_vm._v(" Register\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    elevation: "2",
                    raised: "",
                    rounded: "",
                    small: ""
                  },
                  on: { click: _vm.toggleDarkMode }
                },
                [_vm._v("\n                Dark Mode\n              ")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive bg-white p-3" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-bordered",
              attrs: { id: "sampleTable" }
            },
            [
              _c("thead", { staticClass: "alert-info" }, [
                _c("tr", [
                  _c("th", { staticStyle: { width: "50px" } }, [_vm._v("SN")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Image ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Country ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Visa Type ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Timeline ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Status ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Action ")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v(" 1 ")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          width: "40px",
                          height: "40px",
                          background: "#d2d2d2",
                          border: "1px solid #fff",
                          padding: "2px"
                        }
                      },
                      [_vm._v(" ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" Thailand ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Online Apply")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              color: "primary",
                              elevation: "2",
                              outlined: "",
                              rounded: "",
                              small: ""
                            }
                          },
                          [_vm._v("  \n                      Timeline")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "teal",
                            small: "",
                            rounded: "",
                            dark: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Active\n                    "
                          ),
                          _c("v-icon", { attrs: { dark: "", right: "" } }, [
                            _vm._v(
                              "\n                      mdi-checkbox-marked-circle\n                    "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticClass: "btn-group",
                        attrs: { role: "group", "aria-label": "Basic example" }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-outline-primary btn-hover-shine",
                            attrs: { type: "button" }
                          },
                          [_c("i", { staticClass: "fa fa-eye" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info btn-hover-shine",
                            attrs: { type: "button" }
                          },
                          [_c("i", { staticClass: "fa fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-outline-danger btn-hover-shine",
                            attrs: { type: "button" }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      [
        _c(
          "div",
          { staticClass: "Table" },
          [
            _c("v-data-table", {
              staticClass: "responsive-table sticky-header",
              staticStyle: { "margin-top": "50px" },
              attrs: {
                headers: _vm.headers,
                items: _vm.desserts,
                "fixed-header": "",
                height: "540px",
                "single-select": _vm.singleSelect,
                "item-key": "name",
                "show-select": "",
                "mobile-breakpoint": null
              },
              scopedSlots: _vm._u([
                {
                  key: "item.calories",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-chip",
                        {
                          attrs: {
                            color: _vm.getColor(item.calories),
                            dark: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.calories) +
                              "\n                  "
                          )
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "item.details",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            elevation: "2",
                            raised: "",
                            rounded: "",
                            small: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleButtonClick(item)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Details\n                      "
                          )
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c("v-switch", {
                        staticClass: "pa-3",
                        attrs: { label: "Single select" },
                        model: {
                          value: _vm.singleSelect,
                          callback: function($$v) {
                            _vm.singleSelect = $$v
                          },
                          expression: "singleSelect"
                        }
                      })
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@type@entry.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visa_type_entry_vue_vue_type_template_id_1c2546e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true& */ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true&");
/* harmony import */ var _visa_type_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visa@type@entry.vue?vue&type=script&lang=js& */ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css& */ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _visa_type_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _visa_type_entry_vue_vue_type_template_id_1c2546e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _visa_type_entry_vue_vue_type_template_id_1c2546e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c2546e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/visa/visaSetup/visa@type@entry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@type@entry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=style&index=0&id=1c2546e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_style_index_0_id_1c2546e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_template_id_1c2546e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@type@entry.vue?vue&type=template&id=1c2546e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_template_id_1c2546e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_type_entry_vue_vue_type_template_id_1c2546e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);