(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        // form variable here
        hotel_id: '',
        hotel_code: '',
        hotel_name: '',
        hotel_location: '',
        property_type_id: '',
        star: '',
        commission_type: '1',
        commission_amount: '',
        vat_type: '1',
        vat_amount: '',
        related_hotel: '',
        // facility info
        facilities: [],
        // meta info
        meta_title: '',
        meta_keyword: '',
        meta_description: '',
        // policy
        check_in_time: '',
        check_out_time: '',
        payment_method_id: '',
        policy_terms: '',
        position: 1,
        // bank information
        bank_payment_type_id: '',
        account_details: '',
        bank_info_position: '1',
        bank_info_status: '1',
        // contact information 
        contact_type_id: '',
        position_type_id: '',
        full_name: '',
        email: '',
        mobile_no: '',
        office_phone_no: '',
        extension: '',
        contact_hour_from: '',
        contact_hour_to: '',
        contact_info_position: '1',
        contact_info_status: '1',
        // translate information 
        language_id: '',
        trans_hotel_name: '',
        trans_hotel_description: '',
        trans_meta_title: '',
        trans_meta_keyword: '',
        trans_meta_description: '',
        translate_info_position: '1',
        translate_info_status: '1'
      }),
      // data variable here
      // users: [ 
      //     { "id": "1", "name": "Shad Jast", "email": "pfeffer.matt@yahoo.com" },
      //     { "id": "2", "name": "Duane Metz", "email": "mohammad.ferry@yahoo.com" }, 
      //     { "id": "3", "name": "Myah Kris", "email": "evolkman@hotmail.com" }, 
      //     { "id": "4", "name": "Dr. Kamron Wunsch", "email": "lenora95@leannon.com" }
      // ],
      users: [],
      selected: [],
      hotelLists: [],
      hotelInfos: '',
      propertyTypeLists: [],
      hotelBankInfos: [],
      hotelContactTypes: [],
      hotelContactPositionTypes: [],
      hotelContactInfos: [],
      hotelTranslateInfos: [],
      loading: false,
      clickTabValue: 1
    };
  },
  computed: {
    selectAll: {
      get: function get() {
        return this.users ? this.selected.length == this.users.length : false;
      },
      set: function set(value) {
        var selected = [];

        if (value) {
          this.users.forEach(function (user) {
            selected.push(user.id);
          });
        }

        this.selected = selected;
      }
    }
  },
  mounted: function mounted() {
    this.propertyTypeList();
    this.hotelList();
    this.hotelContactTypeList();
    this.hotelContactPositionTypeList();
    this.hotelFacilityList();
  },
  methods: {
    clickintab: function clickintab() {
      if (this.clickTabValue == 1) {
        $('#pills-profile-tab').click();
        this.clickTabValue = 2;
      } else if (this.clickTabValue == 2) {
        $('#pills-contact-tab').click();
        this.clickTabValue = 3;
      } else if (this.clickTabValue == 3) {
        $('#pills-bankInfo-tab').click();
        this.clickTabValue = 4;
        this.hotelBankInfo();
      } else if (this.clickTabValue == 4) {
        $('#pills-contactInfo-tab').click();
        this.clickTabValue = 5;
      } else if (this.clickTabValue == 5) {
        $('#pills-policy-tab').click();
        this.clickTabValue = 6;
      } else if (this.clickTabValue == 6) {
        $('#pills-translate-tab').click();
        $('.formSubmitButton').show();
        $('.formNextButton').hide();
      } // if(this.clickTabValue==7){
      //   this.formSubmitButton = true;
      //   this.formNextButton = false;
      // }else{
      //   this.formSubmitButton = false;
      //   this.formNextButton = true;
      // }

    },
    setTabInfo: function setTabInfo(e) {
      this.clickTabValue = e;

      if (e == 7) {
        $('.formSubmitButton').show();
        $('.formNextButton').hide();
      } else {
        $('.formSubmitButton').hide();
        $('.formNextButton').show();
      }

      if (e == 4) {
        this.hotelBankInfo();
      }
    },
    hotelFacilityList: function hotelFacilityList() {
      var _this = this;

      var uri = "htl_facility";
      axios.get(uri).then(function (response) {
        _this.users = response.data.data;
      });
    },
    hotelContactTypeList: function hotelContactTypeList() {
      var _this2 = this;

      var uri = "htl_contact_type";
      axios.get(uri).then(function (response) {
        _this2.hotelContactTypes = response.data.data;
      });
    },
    hotelContactPositionTypeList: function hotelContactPositionTypeList() {
      var _this3 = this;

      var uri = "htl_contact_position_type";
      axios.get(uri).then(function (response) {
        _this3.hotelContactPositionTypes = response.data.data;
      });
    },
    hotelBankInfo: function hotelBankInfo() {
      var _this4 = this;

      var uri = "htl_bank_info/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        _this4.hotelBankInfos = response.data.data;
      });
    },
    propertyTypeList: function propertyTypeList() {
      var _this5 = this;

      var uri = "htl_property_type";
      axios.get(uri).then(function (response) {
        _this5.propertyTypeLists = response.data.data;
      });
    },
    hotelList: function hotelList() {
      var _this6 = this;

      var uri = "hotel_list";
      axios.get(uri).then(function (response) {
        _this6.hotelLists = response.data.data;
      });
    },
    getHotelContactInfo: function getHotelContactInfo() {
      var _this7 = this;

      var uri = "hotel_contact_list/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        _this7.hotelContactInfos = response.data.data;
      });
    },
    getHotelTranslateList: function getHotelTranslateList() {
      var _this8 = this;

      var uri = "hotel_translate_list/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        _this8.hotelTranslateInfos = response.data.data;
      });
    },
    getHotelInfo: function getHotelInfo() {
      var _this9 = this;

      this.selected = [];
      var uri = "hotel_info_by_id/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        _this9.form.hotel_code = response.data.data.hotel_code;
        _this9.form.hotel_name = response.data.data.hotel_name;
        _this9.form.hotel_location = response.data.data.location.cityName + ', ' + response.data.data.location.place + ', ' + response.data.data.country.name;
        _this9.form.property_type_id = response.data.data.property_type_id;
        _this9.form.star = response.data.data.star;
        _this9.form.commission_type = response.data.data.commission_type;
        _this9.form.commission_amount = response.data.data.commission_amount;
        _this9.form.vat_type = response.data.data.vat_type;
        _this9.form.vat_amount = response.data.data.vat_amount;
        _this9.form.related_hotel = response.data.data.related_hotel;
        _this9.form.meta_title = response.data.meta.meta_title;
        _this9.form.meta_keyword = response.data.meta.meta_keyword;
        _this9.form.meta_description = response.data.meta.meta_description;
        _this9.form.check_in_time = response.data.policy.check_in_time;
        _this9.form.check_out_time = response.data.policy.check_out_time;
        _this9.form.payment_method_id = response.data.policy.payment_method_id;
        _this9.form.policy_terms = response.data.policy.policy_terms;
        _this9.selected = response.data.selected;
      });
      this.getHotelContactInfo();
      this.getHotelTranslateList();
    },
    hotelTranslateUpdate: function hotelTranslateUpdate() {
      var _this10 = this;

      //alert(selected);
      this.loading = true;
      this.form.post("/htl_translate_update/" + this.form.hotel_id).then(function (res) {
        _this10.loading = false;

        if (res.data.changeAssetBrandName) {
          Toast.fire({
            icon: "error",
            title: "Change Your Asset Brand Name"
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Information Update Successful"
          });
          _this10.form.language_id = '';
          _this10.form.trans_hotel_name = '';
          _this10.form.trans_hotel_description = '';
          _this10.form.trans_meta_title = '';
          _this10.form.trans_meta_keyword = '';
          _this10.form.trans_meta_description = '';
        }

        _this10.getHotelTranslateList();
      })["catch"](function (res) {
        _this10.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    hotelInformationUpdate: function hotelInformationUpdate() {
      var _this11 = this;

      //alert(selected);
      this.loading = true;
      this.form.facilities = this.selected;
      this.form.post("/htl_info_update/" + this.form.hotel_id).then(function (res) {
        _this11.loading = false;

        if (res.data.changeAssetBrandName) {
          Toast.fire({
            icon: "error",
            title: "Change Your Asset Brand Name"
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Information Update Successful"
          });
          $('#pills-home-tab').click();
        }
      })["catch"](function (res) {
        _this11.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    addContactInformation: function addContactInformation() {
      var _this12 = this;

      //alert(selected);
      this.loading = true;
      this.form.post("/htl_contact_info/" + this.form.hotel_id).then(function (res) {
        _this12.loading = false;

        if (res.data.changeAssetBrandName) {
          Toast.fire({
            icon: "error",
            title: "Change Your Asset Brand Name"
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Information Update Successful"
          });
          _this12.form.contact_type_id = '';
          _this12.form.position_type_id = '';
          _this12.form.full_name = '';
          _this12.form.email = '';
          _this12.form.mobile_no = '';
          _this12.form.office_phone_no = '';
          _this12.form.extension = '';
          _this12.form.contact_hour_from = '';
          _this12.form.contact_hour_to = '';

          _this12.getHotelContactInfo();
        }
      })["catch"](function (res) {
        _this12.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    addBankInformation: function addBankInformation() {
      var _this13 = this;

      //alert(selected);
      this.loading = true;
      this.form.post("/htl_bank_information/" + this.form.hotel_id).then(function (res) {
        _this13.loading = false;

        if (res.data.changeAssetBrandName) {
          Toast.fire({
            icon: "error",
            title: "Change Your Asset Brand Name"
          });
        } else {
          Toast.fire({
            icon: "success",
            title: "Information Update Successful"
          });
          _this13.form.payment_method_id = '';
          _this13.form.account_details = '';

          _this13.hotelBankInfo();
        }
      })["catch"](function (res) {
        _this13.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    getShopAssetData: function getShopAssetData() {
      var _this14 = this;

      axios.get("/shopAssetBrandEntry").then(function (res) {
        _this14.assetBrandData = res.data.assetBrandList;
      });
    },
    changeStatus: function changeStatus(assetBrandEntryId) {
      var _this15 = this;

      axios.get("/assetBrandEntry/" + assetBrandEntryId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Status Change Successfully"
        });

        _this15.getShopAssetData();
      });
    },
    distroy: function distroy(assetBrandEntryId) {
      var _this16 = this;

      axios["delete"]("assetBrandEntry/" + assetBrandEntryId).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully"
        });

        _this16.getShopAssetData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=template&id=73e58fc3&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=template&id=73e58fc3& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
                attrs: { to: "/hotel@commission@setup" }
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
                return _vm.hotelInformationUpdate()
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color\n              "
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-4" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.hotel_id,
                              expression: "form.hotel_id"
                            }
                          ],
                          staticClass: "form-control mx-auto",
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
                                  "hotel_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.getHotelInfo()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v(" Select Hotel ")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.hotelLists, function(hotelList) {
                            return _c(
                              "option",
                              { domProps: { value: hotelList.id } },
                              [
                                _vm._v(
                                  " " + _vm._s(hotelList.hotel_name) + "    "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-content",
                    attrs: { id: "pills-tabContent" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade show active",
                        attrs: {
                          id: "pills-home",
                          role: "tabpanel",
                          "aria-labelledby": "pills-home-tab"
                        }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Hotel Code")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.hotel_code,
                                expression: "form.hotel_code"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "", value: "" },
                            domProps: { value: _vm.form.hotel_code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "hotel_code",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Hotel Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.hotel_name,
                                expression: "form.hotel_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              value: "Welcome Plaza Hotel"
                            },
                            domProps: { value: _vm.form.hotel_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "hotel_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Hotel Location")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.hotel_location,
                                expression: "form.hotel_location"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              value: "Pataiya, bangkok, Thailand."
                            },
                            domProps: { value: _vm.form.hotel_location },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "hotel_location",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.property_type_id,
                                  expression: "form.property_type_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "property_type_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" Select Hotel Property Type  ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.propertyTypeLists, function(
                                propertyTypeList
                              ) {
                                return _c(
                                  "option",
                                  { domProps: { value: propertyTypeList.id } },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          propertyTypeList.property_type_name
                                        ) +
                                        "    "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ]),
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
                                  value: _vm.form.star,
                                  expression: "form.star"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "star",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v(" Select Star")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v(" 1 Star")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v(" 2 Star")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "3" } }, [
                                _vm._v(" 3 Star")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "4" } }, [
                                _vm._v(" 4 Star")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "5" } }, [
                                _vm._v(" 5 Star")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.commission_type,
                                    expression: "form.commission_type"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "commission_type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v(" Fixed ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v(" Percentage ")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(4),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.commission_amount,
                                  expression: "form.commission_amount"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Value" },
                              domProps: { value: _vm.form.commission_amount },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "commission_amount",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.vat_type,
                                    expression: "form.vat_type"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "vat_type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v(" Fixed ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v(" Percentage ")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(6),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.vat_amount,
                                  expression: "form.vat_amount"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", placeholder: "Value" },
                              domProps: { value: _vm.form.vat_amount },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "vat_amount",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ]
                )
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
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "\n                    btn-pill btn-shadow btn btn-primary btn-lg\n                    float-right\n                    btn-hover-shine formNextButton\n                  ",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.clickintab()
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "mr-1" }, [_vm._v(" Next ")]),
                        _vm._v(" "),
                        _vm._m(8)
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "\n                    btn-pill btn-shadow btn btn-primary btn-lg\n                    float-right\n                    btn-hover-shine formSubmitButton\n                  ",
                        staticStyle: { display: "none" },
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
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "bankInfoForm",
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
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.addBankInformation()
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(" Payment Type")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bank_payment_type_id,
                                    expression: "form.bank_payment_type_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "bank_payment_type_id"
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "bank_payment_type_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(" Select Payment Option ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v(" Paypal ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v(" Skrill ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v(" Master Card ")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v(" Bank ")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.form,
                                field: "bank_payment_type_id"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(" Account Details ")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.account_details,
                                  expression: "form.account_details"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "account_details"
                                )
                              },
                              domProps: { value: _vm.form.account_details },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "account_details",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.form,
                                field: "account_details"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right pt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "\n                                  mr-2\n                                  btn-pill btn-hover-shine btn btn-primary\n                                ",
                              attrs: { type: "submit", disabled: _vm.loading }
                            },
                            [
                              _vm.loading
                                ? _c("span", {
                                    staticClass:
                                      "spinner-border spinner-border-sm",
                                    attrs: {
                                      role: "status",
                                      "aria-hidden": "true"
                                    }
                                  })
                                : _c(
                                    "span",
                                    { staticClass: "mr-2 opacity-7" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-paper-plane"
                                      })
                                    ]
                                  ),
                              _vm._v("Submit\n                              ")
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "contactInfoForm",
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
                  _vm._m(10),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.addContactInformation()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "col-12 table-responsive" }, [
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", [
                              _c("tr", [
                                _c(
                                  "td",
                                  [
                                    _vm._v(
                                      "\n                                    Contact Type "
                                    ),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-left" }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.contact_type_id,
                                          expression: "form.contact_type_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "contact_type_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(" Select Contact Type ")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.hotelContactTypes, function(
                                        hotelContactType
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            domProps: {
                                              value: hotelContactType.id
                                            }
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  hotelContactType.contact_type_name
                                                ) +
                                                " "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" POSITION  "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.position_type_id,
                                          expression: "form.position_type_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "HotelContact0Position",
                                        required: "required"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "position_type_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v("Select Position")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.hotelContactPositionTypes,
                                        function(hotelContactPositionType) {
                                          return _c(
                                            "option",
                                            {
                                              domProps: {
                                                value:
                                                  hotelContactPositionType.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    hotelContactPositionType.position_type_name
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          )
                                        }
                                      )
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" FULL NAME "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.full_name,
                                        expression: "form.full_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "",
                                      name: "main_contact_full_name"
                                    },
                                    domProps: { value: _vm.form.full_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "full_name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "p-1 pl-3" }, [
                                  _vm._v(" E-MAIL ADDRESS ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.email,
                                        expression: "form.email"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "",
                                      name: "main_contact_email"
                                    },
                                    domProps: { value: _vm.form.email },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "email",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" MOBILE NUMBER  "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mobile_no,
                                        expression: "form.mobile_no"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "",
                                      name: "main_contact_mobile_no"
                                    },
                                    domProps: { value: _vm.form.mobile_no },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mobile_no",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "p-1 pl-3" }, [
                                  _vm._v(" OFFICE PHONE NUMBER ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.office_phone_no,
                                        expression: "form.office_phone_no"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "",
                                      name: "main_contact_office_phone_no"
                                    },
                                    domProps: {
                                      value: _vm.form.office_phone_no
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "office_phone_no",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "p-1 pl-3" }, [
                                  _vm._v(" EXTENSION ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.extension,
                                        expression: "form.extension"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "",
                                      name: "main_contact_extension"
                                    },
                                    domProps: { value: _vm.form.extension },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "extension",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { attrs: { colspan: "2" } }, [
                                  _c("div", { staticClass: "input-group" }, [
                                    _c("label", { attrs: { for: "" } }, [
                                      _vm._v(" Contactable Hour")
                                    ]),
                                    _c("br"),
                                    _vm._v(" "),
                                    _vm._m(11),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.contact_hour_from,
                                          expression: "form.contact_hour_from"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "time" },
                                      domProps: {
                                        value: _vm.form.contact_hour_from
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "contact_hour_from",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm._m(12),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.contact_hour_to,
                                          expression: "form.contact_hour_to"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "time" },
                                      domProps: {
                                        value: _vm.form.contact_hour_to
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "contact_hour_to",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right pt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "\n                                  mr-2\n                                  btn-pill btn-hover-shine btn btn-primary\n                                ",
                              attrs: { type: "submit", disabled: _vm.loading }
                            },
                            [
                              _vm.loading
                                ? _c("span", {
                                    staticClass:
                                      "spinner-border spinner-border-sm",
                                    attrs: {
                                      role: "status",
                                      "aria-hidden": "true"
                                    }
                                  })
                                : _c(
                                    "span",
                                    { staticClass: "mr-2 opacity-7" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-paper-plane"
                                      })
                                    ]
                                  ),
                              _vm._v("Submit\n                              ")
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "translateInfoForm",
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
                  _vm._m(13),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.hotelTranslateUpdate()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "col-12 table-responsive" }, [
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", [
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" Language  "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.language_id,
                                          expression: "form.language_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "HotelContact0Position",
                                        required: "required"
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "language_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v("Select Language")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "1" } }, [
                                        _vm._v(" English ")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "2" } }, [
                                        _vm._v(" Arabic ")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "3" } }, [
                                        _vm._v(" Thai ")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "4" } }, [
                                        _vm._v(" Bangla ")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "5" } }, [
                                        _vm._v(" Hindi ")
                                      ])
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" Hotel Name "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.trans_hotel_name,
                                        expression: "form.trans_hotel_name"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: {
                                      value: _vm.form.trans_hotel_name
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "trans_hotel_name",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" Hotel Description "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.trans_hotel_description,
                                        expression:
                                          "form.trans_hotel_description"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: {
                                      value: _vm.form.trans_hotel_description
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "trans_hotel_description",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" Meta Title "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.trans_meta_title,
                                        expression: "form.trans_meta_title"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: {
                                      value: _vm.form.trans_meta_title
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "trans_meta_title",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" Meta Keyword "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.trans_meta_keyword,
                                        expression: "form.trans_meta_keyword"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: {
                                      value: _vm.form.trans_meta_keyword
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "trans_meta_keyword",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { staticClass: "p-1 pl-3" },
                                  [
                                    _vm._v(" Meta Description "),
                                    _c("font", { staticClass: "text-danger" }, [
                                      _vm._v(" * ")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.trans_meta_description,
                                        expression:
                                          "form.trans_meta_description"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", placeholder: "" },
                                    domProps: {
                                      value: _vm.form.trans_meta_description
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "trans_meta_description",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-right pt-3" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "\n                                  mr-2\n                                  btn-pill btn-hover-shine btn btn-primary\n                                ",
                              attrs: { type: "submit", disabled: _vm.loading }
                            },
                            [
                              _vm.loading
                                ? _c("span", {
                                    staticClass:
                                      "spinner-border spinner-border-sm",
                                    attrs: {
                                      role: "status",
                                      "aria-hidden": "true"
                                    }
                                  })
                                : _c(
                                    "span",
                                    { staticClass: "mr-2 opacity-7" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-paper-plane"
                                      })
                                    ]
                                  ),
                              _vm._v("Submit\n                              ")
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
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
      _vm._v(" Hotel Finance Setup\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Hotel Type   \n                 "),
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
    return _c("label", [
      _vm._v(" Star\n                 "),
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
    return _c("label", [
      _vm._v(" Deposit / Commission\n                 "),
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Vat / Tax\n                 "),
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "" } })
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
          "\n                    btn-pill btn-shadow btn btn-outline-danger btn-lg\n                    float-left\n                  ",
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
      _c("i", { staticClass: "fa fa-angle-double-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                            New Bank Information\n                          "
          )
        ]
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                            Add Contact Information\n                          "
          )
        ]
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "" } }, [
        _vm._v("From ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text", attrs: { id: "" } }, [
        _vm._v("To")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                            Add Translate Information\n                          "
          )
        ]
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue":
/*!************************************************************************!*\
  !*** ./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotel_commission_vat_vue_vue_type_template_id_73e58fc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel@commission@vat.vue?vue&type=template&id=73e58fc3& */ "./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=template&id=73e58fc3&");
/* harmony import */ var _hotel_commission_vat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotel@commission@vat.vue?vue&type=script&lang=js& */ "./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hotel_commission_vat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hotel_commission_vat_vue_vue_type_template_id_73e58fc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hotel_commission_vat_vue_vue_type_template_id_73e58fc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotel_commission_vat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hotel@commission@vat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotel_commission_vat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=template&id=73e58fc3&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=template&id=73e58fc3& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hotel_commission_vat_vue_vue_type_template_id_73e58fc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hotel@commission@vat.vue?vue&type=template&id=73e58fc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/financeSetup/hotel@commission@vat.vue?vue&type=template&id=73e58fc3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hotel_commission_vat_vue_vue_type_template_id_73e58fc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hotel_commission_vat_vue_vue_type_template_id_73e58fc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);