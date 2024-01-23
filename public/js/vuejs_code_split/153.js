(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=template&id=1447edb0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=template&id=1447edb0& ***!
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
                attrs: { to: "/create@booking" }
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
                  "\n                col-lg-7\n                px-lg-5\n                col-sm-8\n                offset-sm-2\n                col-12\n                pb-2\n                pt-2\n                mb-3\n                supplier-border\n                comm-form-box-back-color\n              "
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
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
                _vm._m(8),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _vm._m(10),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("center", [
                      _c("label", { staticClass: "text-primary" }, [
                        _c("b", [_vm._v("Received Document ")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(11)
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("hr"),
                    _vm._v(" "),
                    _c("center", [
                      _c("label", { staticClass: "text-primary" }, [
                        _c("b", [_vm._v("Document Need ")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(12)
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("h4", { staticClass: "text-center" }, [
                  _vm._v(" Billing Information")
                ]),
                _vm._v(" "),
                _vm._m(13),
                _vm._v(" "),
                _vm._m(14)
              ]
            ),
            _vm._v(" "),
            _vm._m(15)
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
      _vm._v("\n            New Booking\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "div",
        {
          staticClass: "col-3 text-center",
          staticStyle: { position: "absolute", right: "0" }
        },
        [
          _c("p", { staticClass: "mb-0" }, [_c("u", [_vm._v("V234A59B")])]),
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
      ),
      _vm._v(" "),
      _c("table", { staticClass: "mx-auto mt-3" }, [
        _c("tr", { staticClass: "text-center" }, [
          _c("td", [
            _c("div", { staticClass: "custom-control custom-checkbox" }, [
              _c("input", {
                staticClass: "custom-control-input",
                attrs: { type: "radio", name: "b2b", id: "customCheck1" }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "customCheck1" }
                },
                [_vm._v("B2B")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "custom-control custom-checkbox" }, [
              _c("input", {
                staticClass: "custom-control-input",
                attrs: { type: "radio", name: "b2b", id: "customCheck2" }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "customCheck2" }
                },
                [_vm._v("B2C")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("td", [
            _c("div", { staticClass: "custom-control custom-checkbox" }, [
              _c("input", {
                staticClass: "custom-control-input",
                attrs: { type: "radio", name: "b2b", id: "customCheck3" }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "customCheck3" }
                },
                [_vm._v("Vendor")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { colspan: "3" } }, [
            _c(
              "select",
              {
                staticClass: "form-control mt-3",
                staticStyle: { width: "300px" }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select Customer")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "" } })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { colspan: "3" } }, [
            _c(
              "select",
              {
                staticClass: "form-control mt-3",
                staticStyle: { width: "300px" }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select Passport")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "" } }, [_vm._v("B00668809")])
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("hr"),
      _vm._v(" "),
      _c("h5", { staticClass: "text-center mt-0" }, [
        _vm._v("Package Information")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Name ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", disabled: "", placeholder: "Name" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Gender ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [_c("option", { attrs: { value: "" } }, [_vm._v("Select Gender")])]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Father's Name ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", disabled: "", placeholder: "Father's Name" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Mother's Name ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", disabled: "", placeholder: "Mother's Name" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Nationality in Passport ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [_c("option", { attrs: { value: "" } }, [_vm._v("Bangladesh")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Country of Residence ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [_c("option", { attrs: { value: "" } }, [_vm._v("Bangladesh")])]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Birthday ")]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c(
              "select",
              {
                staticClass: "form-control dob_day",
                attrs: { disabled: "", name: "dob_day", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Day")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("1")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-control dob_month",
                attrs: { disabled: "", name: "dob_month", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Month")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("January")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-control dob_year",
                attrs: { disabled: "", name: "dob_year", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Year")]),
                _vm._v(" "),
                _c("option", [_vm._v("1932")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Country of Birth ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [_c("option", { attrs: { value: "" } }, [_vm._v("Bangladesh")])]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Personal ID No ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Select ID")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [_vm._v("NID")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [
                _vm._v("Birth Certificate")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Passport No ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", disabled: "", placeholder: "Passport No" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Personal Issue Date ")]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c(
              "select",
              {
                staticClass: "form-control dob_day",
                attrs: { disabled: "", name: "dob_day", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Day")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("1")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-control dob_month",
                attrs: { disabled: "", name: "dob_month", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Month")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("January")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-control dob_year",
                attrs: { disabled: "", name: "dob_year", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Year")]),
                _vm._v(" "),
                _c("option", [_vm._v("1932")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Passport Expire Date ")]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c(
              "select",
              {
                staticClass: "form-control dob_day",
                attrs: { disabled: "", name: "dob_day", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Day")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("1")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-control dob_month",
                attrs: { disabled: "", name: "dob_month", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Month")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("January")])
              ]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                staticClass: "form-control dob_year",
                attrs: { disabled: "", name: "dob_year", required: "" }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Year")]),
                _vm._v(" "),
                _c("option", [_vm._v("1932")])
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Passport Previous Country ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Bangladesh")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [_vm._v("Nepal")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Previous Country Visa type ")]),
          _vm._v(" "),
          _c(
            "select",
            { staticClass: "form-control", attrs: { disabled: "" } },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("visit")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [_vm._v("student")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [_vm._v("medical")])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Passport Receiving Reason ")]),
      _vm._v(" "),
      _c("select", { staticClass: "form-control", attrs: { disabled: "" } }, [
        _c("option", { attrs: { value: "" } }, [_vm._v("Visa")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Ticket")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Package Tour")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 mb-2" }, [
        _c("div", { staticClass: "custom-control custom-checkbox" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", disabled: "", id: "customCheck12" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheck12" }
            },
            [_vm._v("Bank Transaction")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mb-2" }, [
        _c("div", { staticClass: "custom-control custom-checkbox" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", disabled: "", id: "customCheck11" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheck11" }
            },
            [_vm._v("NID Copy")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mb-2" }, [
        _c("div", { staticClass: "custom-control custom-checkbox" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", disabled: "", id: "customCheck1" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheck1" }
            },
            [_vm._v("Bank solvency")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 mb-2" }, [
        _c("div", { staticClass: "custom-control custom-checkbox" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", disabled: "", id: "customCheck12" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheck12" }
            },
            [_vm._v("Bank Transaction")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 mb-2" }, [
        _c("div", { staticClass: "custom-control custom-checkbox" }, [
          _c("input", {
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", disabled: "", id: "customCheck11" }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheck11" }
            },
            [_vm._v("NID Copy")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Invoice No ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", value: "234332", disabled: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("label", [_vm._v(" Invoice Date ")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "date", value: "2022-02-02" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v("   ")]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-bordered" }, [
        _c("tr", [
          _c("th", [_vm._v(" SL ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Passport No ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Product ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Sales Price ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Discount  ")]),
          _vm._v(" "),
          _c("th", [_vm._v(" Total Price  ")]),
          _vm._v(" "),
          _c("th")
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v(" 1 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" 3434289897 ")]),
          _vm._v(" "),
          _c("td", [_vm._v(" Student Visa ")]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", disabled: "", value: "200" }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Discount" }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Total Price" }
            })
          ]),
          _vm._v(" "),
          _c("td", [
            _c("button", { staticClass: "btn btn-primary float-right" }, [
              _vm._v("Add")
            ])
          ])
        ])
      ])
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
          "col-12 pb-2 pt-2 mb-3 supplier-border\n                comm-form-box-back-color"
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("   ")]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-bordered" }, [
            _c("tr", [
              _c("th", [_vm._v(" SL ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Name ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Passport No ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Country ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Visa Type ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Sales  ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Discount ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Total ")]),
              _vm._v(" "),
              _c("th", [_vm._v(" Action ")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v(" 1 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Md Saiful ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 3434289897 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Thailand ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Student Visa ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 100 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 10 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 90 ")]),
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
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-danger btn-hover-shine",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-trash" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v(" 2 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Md kashem ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Bd923874329874 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Thailand ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" Student Visa ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 100 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 10 ")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 90 ")]),
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
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-eye" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-danger btn-hover-shine",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-trash" })]
                    )
                  ]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-5" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _c("tr", [
                _c("th", [_vm._v(" Total Amount ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", value: "180", disabled: "" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v(" Discount ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Discount" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v(" Payable ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", value: "180", disabled: "" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v(" Previous Payable ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", value: "80", disabled: "" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v(" Current Payable ")]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", value: "260", disabled: "" }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary float-right",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#exampleModal"
                }
              },
              [_vm._v(" Next ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "exampleModal",
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
                    _c("div", { staticClass: "modal-content" }, [
                      _c("div", { staticClass: "modal-header" }, [
                        _c(
                          "h5",
                          {
                            staticClass: "modal-title",
                            attrs: { id: "exampleModalLabel" }
                          },
                          [_vm._v(" Payment ")]
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
                          [
                            _c("span", { attrs: { "aria-hidden": "true" } }, [
                              _vm._v("×")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("table", { staticStyle: { width: "100%" } }, [
                              _c("tr", { staticClass: "mb-3" }, [
                                _c("td", [_vm._v(" Total Amount ")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      value: "260",
                                      disabled: ""
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", { staticClass: "mb-3" }, [
                                _c("td", [_vm._v(" Cash Amount")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Cash Amount"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(" Due Amount ")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      value: "260",
                                      disabled: ""
                                    }
                                  })
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("table", { staticStyle: { width: "100%" } }, [
                              _c("tr", { staticClass: "mb-3" }, [
                                _c("td", [_vm._v(" Bank Payment ")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "select",
                                    {
                                      staticClass: "form-control",
                                      attrs: { value: "260" }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(" Corporate Banking ")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(" Mobile  Banking ")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(" Debit/Credit Card ")
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer d-block" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger float-left",
                            attrs: { type: "button", "data-dismiss": "modal" }
                          },
                          [_vm._v("Close")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary float-right",
                            attrs: { type: "button" }
                          },
                          [_vm._v("Submit")]
                        )
                      ])
                    ])
                  ]
                )
              ]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/new@create@booking.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/new@create@booking.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_create_booking_vue_vue_type_template_id_1447edb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new@create@booking.vue?vue&type=template&id=1447edb0& */ "./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=template&id=1447edb0&");
/* harmony import */ var _new_create_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new@create@booking.vue?vue&type=script&lang=js& */ "./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_create_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_create_booking_vue_vue_type_template_id_1447edb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_create_booking_vue_vue_type_template_id_1447edb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/visa/visaSetup/new@create@booking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_create_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new@create@booking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_create_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=template&id=1447edb0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=template&id=1447edb0& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_create_booking_vue_vue_type_template_id_1447edb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new@create@booking.vue?vue&type=template&id=1447edb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/new@create@booking.vue?vue&type=template&id=1447edb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_create_booking_vue_vue_type_template_id_1447edb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_create_booking_vue_vue_type_template_id_1447edb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);