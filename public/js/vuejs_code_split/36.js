(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/change@password.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/generalpage/change@password.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
      })
    };
  },
  methods: {
    playSound: function playSound() {
      var audioFile = new Audio("https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3");
      audioFile.play();
    },
    add: function add() {
      var _this = this;

      this.form.post("change-password", {
        method: "post",
        body: JSON.stringify(this.change - password),
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        _this.form.reset();

        _this.playSound();

        Toast.fire({
          icon: "success",
          title: "Successfully Change  Password"
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/change@password.vue?vue&type=template&id=06f8a876&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/generalpage/change@password.vue?vue&type=template&id=06f8a876& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-md-2  " }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 " }, [
        _c("div", { staticClass: "card " }, [
          _c(
            "div",
            { staticClass: "card-body  ", staticStyle: { padding: "22px" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.add($event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "form-group row",
                      class: {
                        "has-error": _vm.form.errors.has("current_password")
                      }
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label text-md-right",
                          attrs: { for: "password" }
                        },
                        [_vm._v("Current Password")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.current_password,
                                expression: "form.current_password"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "current_password"
                              )
                            },
                            attrs: {
                              id: "password",
                              type: "password",
                              name: "current_password",
                              autocomplete: "current-password"
                            },
                            domProps: { value: _vm.form.current_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "current_password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "current_password" }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group row",
                      class: {
                        "has-error": _vm.form.errors.has("new_password")
                      }
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label text-md-right",
                          attrs: { for: "password" }
                        },
                        [_vm._v("New Password")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.new_password,
                                expression: "form.new_password"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("new_password")
                            },
                            attrs: {
                              id: "new_password",
                              type: "password",
                              name: "new_password",
                              autocomplete: "current-password"
                            },
                            domProps: { value: _vm.form.new_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "new_password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "new_password" }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group row",
                      class: {
                        "has-error": _vm.form.errors.has("new_confirm_password")
                      }
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label text-md-right",
                          attrs: { for: "password" }
                        },
                        [_vm._v("New Confirm Password")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.new_confirm_password,
                                expression: "form.new_confirm_password"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "new_confirm_password"
                              )
                            },
                            attrs: {
                              id: "new_confirm_password",
                              type: "password",
                              name: "new_confirm_password",
                              autocomplete: "current-password"
                            },
                            domProps: { value: _vm.form.new_confirm_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "new_confirm_password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "new_confirm_password"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-8 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [
            _vm._v(
              "\n                                    Update Password\n                                "
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/generalpage/change@password.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/generalpage/change@password.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_password_vue_vue_type_template_id_06f8a876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change@password.vue?vue&type=template&id=06f8a876& */ "./resources/js/admin/generalpage/change@password.vue?vue&type=template&id=06f8a876&");
/* harmony import */ var _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change@password.vue?vue&type=script&lang=js& */ "./resources/js/admin/generalpage/change@password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _change_password_vue_vue_type_template_id_06f8a876___WEBPACK_IMPORTED_MODULE_0__["render"],
  _change_password_vue_vue_type_template_id_06f8a876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/generalpage/change@password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/generalpage/change@password.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/generalpage/change@password.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./change@password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/change@password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/generalpage/change@password.vue?vue&type=template&id=06f8a876&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/generalpage/change@password.vue?vue&type=template&id=06f8a876& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_06f8a876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./change@password.vue?vue&type=template&id=06f8a876& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/generalpage/change@password.vue?vue&type=template&id=06f8a876&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_06f8a876___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_06f8a876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);