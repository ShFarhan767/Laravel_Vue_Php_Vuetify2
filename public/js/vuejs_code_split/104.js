(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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



 // below you should only import what you need
// Example: import buttons and plugins



 // import the rest for your specific theme



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      gets: ''
    };
  },
  mounted: function mounted() {
    this.getInvoiceSetupInformation();
  },
  methods: {
    getInvoiceSetupInformation: function getInvoiceSetupInformation() {
      this.assetBrandList();
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=template&id=10ea0526&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=template&id=10ea0526& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("div", { staticClass: "card main-card  element-block-example" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h3", [
            _c("i", {
              staticClass:
                "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
            }),
            _vm._v("\n            Tour Package List\n          ")
          ])
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
              _c("thead", [
                _c("tr", { staticClass: "alert-info" }),
                _c("tr", [
                  _c("th", { staticStyle: { width: "50px" } }, [_vm._v("SN")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Country ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Package Name ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Package Code ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Product Details ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Facility ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Vendor Price ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" B2B Price ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" B2C Price ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Timeline ")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(" Status ")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v(" 1 ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" Thailand ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" Coral Iland ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" 5656")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" Visa ")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge badge-primary" }, [
                      _vm._v(" Facility ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" 100 ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" 200 ")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(" 300 ")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge badge-primary" }, [
                      _vm._v(" Timeline ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "badge badge-success" }, [
                      _vm._v(" Active ")
                    ])
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/tour/tourReport/tour@package@list.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/tour/tourReport/tour@package@list.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tour_package_list_vue_vue_type_template_id_10ea0526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tour@package@list.vue?vue&type=template&id=10ea0526& */ "./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=template&id=10ea0526&");
/* harmony import */ var _tour_package_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tour@package@list.vue?vue&type=script&lang=js& */ "./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tour_package_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tour_package_list_vue_vue_type_template_id_10ea0526___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tour_package_list_vue_vue_type_template_id_10ea0526___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/tour/tourReport/tour@package@list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_package_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour@package@list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_package_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=template&id=10ea0526&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=template&id=10ea0526& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_package_list_vue_vue_type_template_id_10ea0526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour@package@list.vue?vue&type=template&id=10ea0526& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/tour/tourReport/tour@package@list.vue?vue&type=template&id=10ea0526&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_package_list_vue_vue_type_template_id_10ea0526___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_package_list_vue_vue_type_template_id_10ea0526___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);