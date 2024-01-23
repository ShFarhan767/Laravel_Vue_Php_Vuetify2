(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formDesign"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({
        brandName: "",
        type: "1",
        variableList: ""
      }),
      showDataentry: {},
      loading: false
    };
  },
  mounted: function mounted() {},
  methods: {
    textchange: function textchange() {
      this.form.variableList = this.form.variableList.replace(/(\r\n|\n|\r)/gm, "");
      this.form.variableList = this.form.variableList.trim();
    },
    create: function create() {
      var _this = this;

      this.form.post("/formDesign").then(function (res) {
        _this.showDataentry = res.data.data;
      });
    },
    ShowDataList: function ShowDataList() {
      var _this2 = this;

      axios.get("/purchaseBrandEntry").then(function (res) {
        _this2.showDataentry = res.data.showdata;
      });
    },
    changeStatus: function changeStatus(id) {
      var _this3 = this;

      var uri = "purchaseBrandEntry/changeStatus/".concat(id);
      axios.get(uri).then(function (response) {
        Toast.fire({
          icon: "success",
          title: "Status Change Successfully"
        });

        _this3.ShowDataList();
      });
    },
    deleteBrandProduct: function deleteBrandProduct($brandId) {
      var _this4 = this;

      axios["delete"]("/purchaseBrandEntry/" + $brandId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Deleted BrandEntry successfully"
        });

        _this4.ShowDataList();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=template&id=262a0ee5&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=template&id=262a0ee5& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.create()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "supplier-entry py-4 px-2 comm-form-back-img" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "\n            col-lg-7\n            px-lg-5\n            col-sm-8\n            offset-sm-2\n            col-12\n            supplier-border\n            comm-form-box-back-color\n          "
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.type,
                              expression: "form.type"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("type") },
                          attrs: { type: "text" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Form Variable")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Table Variable")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("Migration / Controller ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "4" } }, [
                            _vm._v(" Controller Insert Function ")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "type" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.variableList,
                            expression: "form.variableList"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("variableList")
                        },
                        domProps: { value: _vm.form.variableList },
                        on: {
                          keyup: function($event) {
                            return _vm.textchange()
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "variableList",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "variableList" }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-block pt-3 pb-4 card-footer overflow-hidden" },
            [
              _c(
                "div",
                { staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12" },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "\n              btn-pill btn-shadow btn-wide\n              fsize-1\n              btn btn-primary btn-lg\n              float-right\n            ",
                      attrs: { disabled: _vm.loading, type: "submit" }
                    },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("span", { staticClass: "mr-1" }, [
                        _vm._v(" Add New Entry ")
                      ]),
                      _vm._v(" "),
                      _vm.loading == true
                        ? _c(
                            "div",
                            {
                              staticClass: "spinner-border",
                              attrs: { role: "status" }
                            },
                            [
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Loading...")
                              ])
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(5),
      _vm._v(" "),
      _c("div", { staticClass: "card-body table-responsive bg-white" }, [
        _c("pre", {
          staticClass: "code",
          domProps: { innerHTML: _vm._s(_vm.showDataentry) }
        })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c(
          "div",
          {
            staticClass:
              "\n          card-header-title\n          font-size-lg\n          text-capitalize\n          font-weight-normal\n        "
          },
          [
            _c("i", {
              staticClass:
                "header-icon lnr-pencil icon-gradient bg-premium-dark"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v(" Form Design")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n              Type\n              "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mendatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mendatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("\n              Variable List (var,var,var,var,...........)"),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mendatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mendatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "\n              btn-pill btn-shadow btn-wide\n              fsize-1\n              btn btn-outline-danger btn-lg\n              float-left\n            ",
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2 opacity-7" }, [
      _c("i", { staticClass: "fa fa-paper-plane" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header-tab card-header alert-info" },
      [
        _c("h4", [
          _c("i", {
            staticClass:
              "header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          }),
          _vm._v("\n        View Information\n      ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/adminmenucreate/formDesign.vue":
/*!***********************************************************!*\
  !*** ./resources/js/admin/adminmenucreate/formDesign.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formDesign_vue_vue_type_template_id_262a0ee5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formDesign.vue?vue&type=template&id=262a0ee5& */ "./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=template&id=262a0ee5&");
/* harmony import */ var _formDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formDesign.vue?vue&type=script&lang=js& */ "./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formDesign_vue_vue_type_template_id_262a0ee5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formDesign_vue_vue_type_template_id_262a0ee5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/adminmenucreate/formDesign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./formDesign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formDesign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=template&id=262a0ee5&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=template&id=262a0ee5& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formDesign_vue_vue_type_template_id_262a0ee5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./formDesign.vue?vue&type=template&id=262a0ee5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/adminmenucreate/formDesign.vue?vue&type=template&id=262a0ee5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formDesign_vue_vue_type_template_id_262a0ee5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formDesign_vue_vue_type_template_id_262a0ee5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);