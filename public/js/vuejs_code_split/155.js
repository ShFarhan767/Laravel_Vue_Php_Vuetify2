(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({// form variable hrer
      }) // data variable hrer

    };
  },
  mounted: function mounted() {// this.currencyList();
  },
  methods: {
    currencyList: function currencyList() {
      var _this = this;

      var uri = "currencyList";
      axios.get(uri).then(function (response) {
        _this.currencyLists = response.data.currencyList;
      });
    },
    hotelLocationCreate: function hotelLocationCreate() {
      var _this2 = this;

      this.loading = true;
      this.form.post("/hotelLocationEntry").then(function (res) {
        _this2.loading = false;

        if (res.data.changeAssetBrandName) {
          Toast.fire({
            icon: "error",
            title: "Change Your Asset Brand Name"
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Asset Brand Entry Successfully"
          });

          _this2.form.reset();
        }

        _this2.getShopAssetData();
      })["catch"](function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    getShopAssetData: function getShopAssetData() {
      var _this3 = this;

      axios.get("/shopAssetBrandEntry").then(function (res) {
        _this3.assetBrandData = res.data.assetBrandList;
      });
    },
    changeStatus: function changeStatus(assetBrandEntryId) {
      var _this4 = this;

      axios.get("/assetBrandEntry/" + assetBrandEntryId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Status Change Successfully"
        });

        _this4.getShopAssetData();
      });
    },
    distroy: function distroy(assetBrandEntryId) {
      var _this5 = this;

      axios["delete"]("assetBrandEntry/" + assetBrandEntryId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully"
        });

        _this5.getShopAssetData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=template&id=4596e477&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=template&id=4596e477& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "btn-actions-pane-right text-capitalize" },
          [
            _c(
              "router-link",
              {
                staticClass:
                  "btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm",
                attrs: { to: "/visa@document@entry" }
              },
              [_vm._v(" < Back ")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "supplier-entry p-0 pt-3 comm-form-back-img" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.hotelLocationCreate()
              }
            }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-block p-0 pt-3 pb-4 card-footer overflow-hidden"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "\n                btn-pill btn-shadow btn btn-primary btn-lg\n                float-right\n                btn-hover-shine\n              ",
                        attrs: { type: "submit", disabled: _vm.loading }
                      },
                      [
                        _vm.loading
                          ? _c("span", {
                              staticClass: "spinner-border spinner-border-sm",
                              attrs: { role: "status", "aria-hidden": "true" }
                            })
                          : _c("span", { staticClass: "mr-2 opacity-7" }, [
                              _c("i", { staticClass: "fa fa-paper-plane" })
                            ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "mr-1" }, [
                          _vm._v(" Submit ")
                        ])
                      ]
                    )
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
    return _c("h3", [
      _c("i", {
        staticClass: "header-icon lnr-pencil icon-gradient bg-happy-itmeo"
      }),
      _vm._v(" Visa Document Entry\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "\n            col-lg-7\n            px-lg-5\n            col-sm-8\n            offset-sm-2\n            col-12\n            pb-2\n            pt-2\n            mb-3\n            supplier-border\n            comm-form-box-back-color\n          "
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" Country ")]),
          _vm._v(" "),
          _c("select", { staticClass: "form-control" }, [
            _c("option", { attrs: { value: "" } }, [
              _vm._v(" Select Country  ")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v(" Thailand  ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" Visa Type \n            ")]),
          _vm._v(" "),
          _c("select", { staticClass: "form-control" }, [
            _c("option", { attrs: { value: "" } }, [
              _vm._v(" Select Visa Type   ")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "" } }, [_vm._v(" Visit Visa  ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [
            _vm._v("Document\n              "),
            _c("i", {
              staticClass: "fa fa-star text-danger text-10 cursor-pointer",
              attrs: {
                title: "Mandatory Field",
                "data-placement": "top",
                "data-toggle": "tooltip",
                "data-original-title": "Mandatory Field"
              }
            })
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Document" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-primary float-right" }, [
            _vm._v(" Add ")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "\n                btn-pill btn-shadow btn btn-outline-danger btn-lg\n                float-left\n              ",
        attrs: { type: "reset" }
      },
      [
        _c("span", { staticClass: "mr-2 opacity-7" }, [
          _c("i", { staticClass: "fa fa-undo" })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "mr-1" }, [_vm._v(" Clear ")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/new@visa@document.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/new@visa@document.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_visa_document_vue_vue_type_template_id_4596e477___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new@visa@document.vue?vue&type=template&id=4596e477& */ "./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=template&id=4596e477&");
/* harmony import */ var _new_visa_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new@visa@document.vue?vue&type=script&lang=js& */ "./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_visa_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_visa_document_vue_vue_type_template_id_4596e477___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_visa_document_vue_vue_type_template_id_4596e477___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/visa/visaSetup/new@visa@document.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_visa_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new@visa@document.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_visa_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=template&id=4596e477&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=template&id=4596e477& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_visa_document_vue_vue_type_template_id_4596e477___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new@visa@document.vue?vue&type=template&id=4596e477& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@visa@document.vue?vue&type=template&id=4596e477&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_visa_document_vue_vue_type_template_id_4596e477___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_visa_document_vue_vue_type_template_id_4596e477___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);