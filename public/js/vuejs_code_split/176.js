(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=template&id=c7bc0afc&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=template&id=c7bc0afc& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [
    _c("div", { staticClass: "card main-card  element-block-example" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive bg-white p-3" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "previewModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true"
            }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-content",
                    staticStyle: { width: "137%", "margin-left": "-107px" }
                  },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        {
                          staticStyle: { "padding-top": "0px!important" },
                          attrs: { id: "invoice" }
                        },
                        [
                          _c("div", { staticClass: "invoice overflow-auto" }, [
                            _c(
                              "div",
                              { staticStyle: { "min-width": "600px" } },
                              [
                                _c(
                                  "header",
                                  {
                                    staticStyle: {
                                      "margin-bottom": "5px!important"
                                    },
                                    style: "border-bottom-color:blue"
                                  },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-6" }, [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              target: "_blank",
                                              href: "#"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              staticStyle: {
                                                "max-height": "105px",
                                                "max-width": "100%"
                                              },
                                              attrs: {
                                                src:
                                                  "http://travelcenter.asia/images/logo.png",
                                                alt: "Company Logo"
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-2 text-center" },
                                        [
                                          _vm._m(5),
                                          _vm._v(" "),
                                          _c("img", {
                                            staticStyle: {
                                              "max-height": "105px",
                                              "max-width": "100%",
                                              "margin-top": "-8px"
                                            },
                                            attrs: {
                                              src:
                                                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
                                              alt: "Company Logo"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(6),
                                _vm._v(" "),
                                _vm._m(7),
                                _vm._v(" "),
                                _vm._m(8)
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(9)
                  ]
                )
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [
        _c("i", {
          staticClass:
            "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
        }),
        _vm._v("\n                Quotation List\n              ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-5" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-2" }, [
        _c(
          "select",
          { staticClass: "form-control", attrs: { name: "", id: "" } },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v(" Status ")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v(" Pending ")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v(" Processing ")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-5" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      {
        staticClass: "table table-hover table-striped table-bordered",
        attrs: { id: "sampleTable" }
      },
      [
        _c("thead", [
          _c("tr", { staticClass: "alert-info" }),
          _vm._v(" "),
          _c("tr", [
            _c("th", { staticStyle: { width: "50px" } }, [_vm._v("SN")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Create By ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Create Date ")]),
            _vm._v(" "),
            _c("th", [_vm._v("Quotation No ")]),
            _vm._v(" "),
            _c("th", [_vm._v("Company Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Issue Date \t")]),
            _vm._v(" "),
            _c("th", [_vm._v("Valid Until")]),
            _vm._v(" "),
            _c("th", [_vm._v("Status")]),
            _vm._v(" "),
            _c("th", [_vm._v("View")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("Babul Uddin")]),
            _vm._v(" "),
            _c("td", [_vm._v("3 jan 2022")]),
            _vm._v(" "),
            _c("td", [_vm._v("Q234A59B")]),
            _vm._v(" "),
            _c("td", [_vm._v("ABC Limited")]),
            _vm._v(" "),
            _c("td", [_vm._v("3 jan 2022")]),
            _vm._v(" "),
            _c("td", [_vm._v("20 jan 2022")]),
            _vm._v(" "),
            _c("td", [
              _c("span", { staticClass: "badge badge-warning" }, [
                _vm._v(" pending ")
              ])
            ]),
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
                      staticClass: "btn btn-outline-primary btn-hover-shine",
                      attrs: {
                        type: "button",
                        "data-toggle": "modal",
                        "data-target": "#previewModal"
                      }
                    },
                    [_c("i", { staticClass: "fa fa-eye" })]
                  )
                ]
              )
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v(" Preview ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-4" }, [
      _c("div", [
        _c("i", { staticClass: "fa fa-home" }),
        _vm._v(
          "  15/5 (2nd Floor), Block-C, Tajmahal Road, Mohammadpur Dhaka-1207, Bangladesh "
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c("i", {
          staticClass: "fa fa-phone",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("   +880248110212")
      ]),
      _vm._v(" "),
      _c("div", [
        _c("i", {
          staticClass: "fa fa-envelope",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("   sales@travelcenter.asia")
      ]),
      _vm._v(" "),
      _c("div", [
        _c("i", {
          staticClass: "fa fa-globe",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v("   www.travelcenter.asia")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [_c("u", [_vm._v("Q234A59B")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("b", [_vm._v("Quote To")]),
        _c("br"),
        _vm._v(
          "\n                         Company Name\n                        \n                "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c(
          "span",
          {
            staticStyle: {
              position: "absolute",
              top: "-28px",
              "font-size": "25px",
              background: "white",
              padding: "0 16px",
              right: "118px",
              color: "#00aeef"
            }
          },
          [_vm._v(" Quotation ")]
        ),
        _vm._v(" "),
        _c("b", { staticStyle: { position: "absolute" } }, [_vm._v("Module ")]),
        _vm._v(" "),
        _c("br"),
        _vm._v("\n                       Hotel "),
        _c("br"),
        _vm._v(
          "\n                       Welcome Plaza Hotel\n                 "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c("table", { staticStyle: { float: "right" } }, [
          _c("tr", [
            _c("th", [_vm._v("Issue Date")]),
            _vm._v(" "),
            _c("th", [_vm._v(":")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 3 Jan 2022")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Valid Until")]),
            _vm._v(" "),
            _c("th", [_vm._v(":")]),
            _vm._v(" "),
            _c("td", [_vm._v("29 jan 2022")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th"),
            _vm._v(" "),
            _c("th"),
            _vm._v(" "),
            _c("td", [_vm._v(" USD ")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col table-responsive" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _c("tr", [
            _c("th", [_vm._v(" SL ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Product Type ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Product Name ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Description ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Unit ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Unit Price ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Quantity ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Discount ")]),
            _vm._v(" "),
            _c("th", [_vm._v(" Total ")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v(" 1 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" Hotel ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" welcome plaza hotel ")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(" the welcome plaza hotel is most popular in the world. ")
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(" 1 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 2000 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 2 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 30 ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 1970 ")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-7" }, [
        _c("b", [_vm._v(" Note : ")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(
          "\n                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.\n                \n                    "
        ),
        _c("hr"),
        _vm._v(" "),
        _c("b", [_vm._v(" Payment Condition :")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("ul", [
          _c("li", [_vm._v(" paragraphs ")]),
          _vm._v(" "),
          _c("li", [_vm._v(" words ")]),
          _vm._v(" "),
          _c("li", [_vm._v(" bytes ")]),
          _vm._v(" "),
          _c("li", [_vm._v(" lists ")])
        ]),
        _vm._v(" "),
        _c("h5", { staticClass: "mt-4 pt-4 mb-3" }, [
          _c("u", [_vm._v(" Authorize Sign ")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-5" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _c("tr", [
            _c("th", [_vm._v(" Sub Total ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 2000 ")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v(" Discount ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 20 ")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v(" Payable ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 2000 ")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v(" vat ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 5% ")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v(" Total ")]),
            _vm._v(" "),
            _c("td", [_vm._v(" 1500")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v(" Close ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/quotation/quotationReport/quotation@list.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/quotation/quotationReport/quotation@list.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotation_list_vue_vue_type_template_id_c7bc0afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotation@list.vue?vue&type=template&id=c7bc0afc& */ "./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=template&id=c7bc0afc&");
/* harmony import */ var _quotation_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotation@list.vue?vue&type=script&lang=js& */ "./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _quotation_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _quotation_list_vue_vue_type_template_id_c7bc0afc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _quotation_list_vue_vue_type_template_id_c7bc0afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/quotation/quotationReport/quotation@list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quotation_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quotation@list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quotation_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=template&id=c7bc0afc&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=template&id=c7bc0afc& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotation_list_vue_vue_type_template_id_c7bc0afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quotation@list.vue?vue&type=template&id=c7bc0afc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/quotation/quotationReport/quotation@list.vue?vue&type=template&id=c7bc0afc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotation_list_vue_vue_type_template_id_c7bc0afc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotation_list_vue_vue_type_template_id_c7bc0afc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);