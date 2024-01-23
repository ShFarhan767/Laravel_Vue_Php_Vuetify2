(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      moment: moment__WEBPACK_IMPORTED_MODULE_0___default.a,
      bankInfoTransferStatus: false,
      bankInfoChequeStatus: false,
      cashCheckStatus: false,
      accountPayableCheckStatus: false,
      form: new Form({
        // form variable hrer\
        voucherDate: new Date().toISOString().slice(0, 10),
        type: '',
        chequeType: ''
      }) // data variable hrer

    };
  },
  mounted: function mounted() {// this.currencyList();
  },
  methods: {
    checkTypeInfo: function checkTypeInfo() {
      if (this.form.chequeType == 1) {
        this.cashCheckStatus = true;
        this.accountPayableCheckStatus = false;
      } else {
        this.cashCheckStatus = false;
        this.accountPayableCheckStatus = true;
      }
    },
    bankInfoDetails: function bankInfoDetails() {
      if (this.form.type == 1) {
        this.bankInfoTransferStatus = true;
        this.bankInfoChequeStatus = false;
      } else {
        this.bankInfoTransferStatus = false;
        this.bankInfoChequeStatus = true;
      }
    },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                attrs: { to: "/bank@payment@voucher" }
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
            _c(
              "div",
              {
                staticClass:
                  "\n            col-lg-7\n            px-lg-5\n            col-sm-8\n            offset-sm-2\n            col-12\n            pb-2\n            pt-2\n            mb-3\n            supplier-border\n            comm-form-box-back-color\n          "
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(2),
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
                          on: {
                            change: [
                              function($event) {
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
                              },
                              function($event) {
                                return _vm.bankInfoDetails()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v(" Select Type ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v(" Bank Transfer ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v(" By Cheque ")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.bankInfoTransferStatus
                      ? _c("div", [
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._m(4),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _vm._m(6),
                          _vm._v(" "),
                          _vm._m(7),
                          _vm._v(" "),
                          _vm._m(8)
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.bankInfoChequeStatus
                      ? _c("div", [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(9),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.chequeType,
                                    expression: "form.chequeType"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "chequeType",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkTypeInfo()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(" Select type  ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v(" Cash Check  ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v(" Account Payable   ")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.cashCheckStatus
                            ? _c("div", {}, [
                                _vm._m(10),
                                _vm._v(" "),
                                _vm._m(11),
                                _vm._v(" "),
                                _vm._m(12),
                                _vm._v(" "),
                                _vm._m(13),
                                _vm._v(" "),
                                _vm._m(14)
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.accountPayableCheckStatus
                            ? _c("div", [
                                _vm._m(15),
                                _vm._v(" "),
                                _vm._m(16),
                                _vm._v(" "),
                                _vm._m(17),
                                _vm._v(" "),
                                _vm._m(18),
                                _vm._v(" "),
                                _vm._m(19),
                                _vm._v(" "),
                                _vm._m(20),
                                _vm._v(" "),
                                _vm._m(21)
                              ])
                            : _vm._e()
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm._m(22)
                ])
              ]
            ),
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
                    _vm._m(23),
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
      _vm._v(" Bank Payment Voucher\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v("Voucher Date\n              "),
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
        attrs: { type: "date", value: "12/2/2022" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Type  "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Sender Bank Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [_vm._v(" Select Bank Name  ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Dutch Bangla Bank  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Sender Account Name "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Select Account Name  ")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Doofaz it limited  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Select Receiver Name  ")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Rabeya Enterprise  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Bank Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [_vm._v(" Select Bank Name  ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Dutch Bangla Bank  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Bank Account Name  "),
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
        attrs: { type: "text", placeholder: "Enter Account Name ", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Bank Account Number  "),
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
        attrs: { type: "text", placeholder: "Enter Account Number ", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v("Cheque Type  "),
      _c("i", {
        staticClass: "fa fa-star text-danger text-10 cursor-pointer",
        attrs: {
          title: "Mandatory Field",
          "data-placement": "top",
          "data-toggle": "tooltip",
          "data-original-title": "Mandatory Field"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Sender Bank Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [_vm._v(" Select Bank Name  ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Dutch Bangla Bank  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Sender Account Name "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Select Account Name  ")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Doofaz it limited  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Select Receiver Name  ")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Rabeya Enterprise  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Person Name "),
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
        attrs: { type: "text", placeholder: "Enter Person Name ", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Mobile Number  "),
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
        attrs: { type: "text", placeholder: "Enter Mobile Number", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Sender Bank Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [_vm._v(" Select Bank Name  ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Dutch Bangla Bank  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Sender Account Name "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Select Account Name  ")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Doofaz it limited  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Select Receiver Name  ")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v(" Rabeya Enterprise  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Bank Name  "),
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
      _c("select", { staticClass: "form-control" }, [
        _c("option", { attrs: { value: "" } }, [_vm._v(" Select Bank Name  ")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [
          _vm._v(" Islami Bank Limited  ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Receiver Account Name "),
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
        attrs: {
          type: "text",
          placeholder: "Enter Receiver Account Name",
          value: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Issue Date "),
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
        attrs: { type: "date", placeholder: "Enter Person Name ", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _vm._v(" Payment Date "),
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
        attrs: { type: "date", placeholder: "Enter Mobile Number", value: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _vm._v("Voucher No\n              "),
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
          attrs: { type: "text", disabled: "", placeholder: "BP-31-12/22" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v(" Purpose ")]),
        _vm._v(" "),
        _c("select", { staticClass: "form-control" }, [
          _c("option", { attrs: { value: "" } }, [_vm._v(" -------  ")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "" } }, [_vm._v(" Hotel Booking  ")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "" } }, [_vm._v(" Flight Booking  ")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _vm._v(" Amount   "),
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
        _c("input", { staticClass: "form-control", attrs: { type: "text" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group " }, [
        _c("label", [
          _vm._v(" Particular    "),
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
        _c("textarea", { staticClass: "form-control" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group " }, [
        _c("label", [_vm._v(" Status ")]),
        _vm._v(" "),
        _c("select", { staticClass: "form-control" }, [
          _c("option", { attrs: { value: "" } }, [_vm._v(" Active  ")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "" } }, [_vm._v(" In-Active  ")])
        ])
      ])
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

/***/ "./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bank_payment_voucher_new_vue_vue_type_template_id_b6ed829c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c& */ "./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c&");
/* harmony import */ var _bank_payment_voucher_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank@payment@voucher@new.vue?vue&type=script&lang=js& */ "./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bank_payment_voucher_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bank_payment_voucher_new_vue_vue_type_template_id_b6ed829c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bank_payment_voucher_new_vue_vue_type_template_id_b6ed829c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_payment_voucher_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./bank@payment@voucher@new.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_payment_voucher_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_payment_voucher_new_vue_vue_type_template_id_b6ed829c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/accounting/accountingVoucher/bank@payment@voucher@new.vue?vue&type=template&id=b6ed829c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_payment_voucher_new_vue_vue_type_template_id_b6ed829c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bank_payment_voucher_new_vue_vue_type_template_id_b6ed829c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);