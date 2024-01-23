(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        room_type_id: '',
        bed_type_id: '',
        cancellation_policy_id: '',
        // cancellation_policy:'',
        room_description: '',
        quantity: '',
        minimum_stay: '',
        free_breakfast_status: '',
        max_adult: '',
        re_schedule_status: '',
        max_child: '',
        no_of_extra_bed: '',
        extra_bed_payment_status: '',
        extra_bed_charge: '',
        extra_bed_charge_status: '',
        logo: '',
        // price information
        day_price_type_id: '',
        fixedDateFrom: '',
        fixedDateTo: '',
        agent_price: '',
        vendor_price: '',
        customer_price: '',
        currency_id: 1,
        // facility info
        facilities: [],
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
      users: [],
      selected: [],
      hotelLists: [],
      hotelInfos: '',
      propertyTypeLists: [],
      roomTypeLists: [],
      bedTypeLists: [],
      cancelationPolicyLists: [],
      dayPriceTypeLists: [],
      hotelBankInfos: [],
      hotelContactTypes: [],
      hotelContactPositionTypes: [],
      hotelContactInfos: [],
      hotelTranslateInfos: [],
      loading: false,
      clickTabValue: 1,
      roomImageLists: [],
      htlRomPricingLists: [],
      htlRomInformationLists: [],
      fixedDateStatus: false,
      imageTypeLists: []
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
    this.hotelList();
    this.propertyTypeList();
    this.roomTypeList();
    this.bedTypeList();
    this.cancelationPolicyList();
    this.roomPriceTypeList();
    this.hotelFacilityList();
    this.imageTitleList();
  },
  methods: {
    imageTitleList: function imageTitleList() {
      var _this = this;

      var uri = "htl_image_title";
      axios.get(uri).then(function (response) {
        _this.imageTypeLists = response.data.data;
      });
    },
    dayPriceType: function dayPriceType() {
      if (this.form.day_price_type_id == 2) {
        this.fixedDateStatus = true;
      } else {
        this.fixedDateStatus = false;
      }
    },
    clickintab: function clickintab() {
      if (this.clickTabValue == 1) {
        $('#pills-profile-tab').click();
        this.clickTabValue = 2;
      } else if (this.clickTabValue == 2) {
        $('#pills-policy-tab').click();
        this.clickTabValue = 3;
      } else if (this.clickTabValue == 3) {
        $('#pills-translate-tab').click();
        $('.formSubmitButton').show();
        $('.formNextButton').hide();
      }
    },
    setTabInfo: function setTabInfo(e) {
      this.clickTabValue = e;

      if (e == 4) {
        $('.formSubmitButton').show();
        $('.formNextButton').hide();
      } else {
        $('.formSubmitButton').hide();
        $('.formNextButton').show();
      }
    },
    htlRomInformationEntry: function htlRomInformationEntry() {
      var _this2 = this;

      this.form.facilities = this.selected;
      this.form.post("htl_rom_information").then(function (response) {
        if (response.data.changePurchaseType) {
          _this2.exit = true;
          _this2.mess = response.data.changePurchaseType; // Toast.fire({
          //     icon: 'error',
          //     title: 'Change Your Admin Type Name'
          // })
        } else {
          Toast.fire({
            icon: "success",
            title: "Data Entry Successful"
          }), _this2.form.reset();

          _this2.$router.push('/hotel@room@setup');
        }
      })["catch"](function (res) {
        _this2.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    htlRomInformationShow: function htlRomInformationShow() {
      var _this3 = this;

      this.form.get("/htl_rom_information").then(function (res) {
        _this3.htlRomInformationLists = res.data.data;
      });
    },
    htlRomPricingEntry: function htlRomPricingEntry() {
      var _this4 = this;

      this.form.post("htl_rom_pricing").then(function (response) {
        if (response.data.changePurchaseType) {
          _this4.exit = true;
          _this4.mess = response.data.changePurchaseType; // Toast.fire({
          //     icon: 'error',
          //     title: 'Change Your Admin Type Name'
          // })
        } else {
          Toast.fire({
            icon: "success",
            title: "Data Entry Successful"
          }), _this4.form.day_price_type_id = '';
          _this4.form.agent_price = '';
          _this4.form.vendor_price = '';
          _this4.form.customer_price = '';
          _this4.form.showing_price = '';

          _this4.htlRomPricingShow();
        }
      })["catch"](function (res) {
        _this4.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    htlRomPricingShow: function htlRomPricingShow() {
      var _this5 = this;

      this.form.get("/htl_rom_pricing_list/" + this.form.hotel_id + '/' + this.form.room_type_id + '/' + this.form.bed_type_id).then(function (res) {
        _this5.htlRomPricingLists = res.data.data;
      });
    },
    htlRomPricingDelete: function htlRomPricingDelete($id) {
      var _this6 = this;

      axios["delete"]("/htl_rom_pricing/" + $id).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Data Deleted  successfully"
        });

        _this6.htlRomPricingShow();
      });
    },
    hotelTranslateUpdate: function hotelTranslateUpdate() {
      var _this7 = this;

      //alert(selected);
      this.loading = true;
      this.form.post("/htl_translate_update/" + this.form.hotel_id).then(function (res) {
        _this7.loading = false;

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
          _this7.form.language_id = '';
          _this7.form.trans_hotel_name = '';
          _this7.form.trans_hotel_description = '';
          _this7.form.trans_meta_title = '';
          _this7.form.trans_meta_keyword = '';
          _this7.form.trans_meta_description = '';
        }

        _this7.getHotelTranslateList();

        $('#translateInfoForm').modal('hide');
      })["catch"](function (res) {
        _this7.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    },
    getHotelTranslateList: function getHotelTranslateList() {
      var _this8 = this;

      var uri = "hotel_translate_list/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        _this8.hotelTranslateInfos = response.data.data;
      });
    },
    changeImage: function changeImage(event) {
      var _this9 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this9.form.logo = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file); // $('.imgSaveButton').click();
    },
    hotelFacilityList: function hotelFacilityList() {
      var _this10 = this;

      var uri = "htl_rom_facility";
      axios.get(uri).then(function (response) {
        _this10.users = response.data.data;
      });
    },
    hotelList: function hotelList() {
      var _this11 = this;

      var uri = "hotel_list";
      axios.get(uri).then(function (response) {
        _this11.hotelLists = response.data.data;
      });
    },
    propertyTypeList: function propertyTypeList() {
      var _this12 = this;

      var uri = "htl_property_type";
      axios.get(uri).then(function (response) {
        _this12.propertyTypeLists = response.data.data;
      });
    },
    roomTypeList: function roomTypeList() {
      var _this13 = this;

      var uri = "htl_rom_type";
      axios.get(uri).then(function (response) {
        _this13.roomTypeLists = response.data.data;
      });
    },
    bedTypeList: function bedTypeList() {
      var _this14 = this;

      var uri = "htl_rom_bed_type";
      axios.get(uri).then(function (response) {
        _this14.bedTypeLists = response.data.data;
      });
    },
    cancelationPolicyList: function cancelationPolicyList() {
      var _this15 = this;

      var uri = "htl_cancelation_policy";
      axios.get(uri).then(function (response) {
        _this15.cancelationPolicyLists = response.data.data;
      });
    },
    roomPriceTypeList: function roomPriceTypeList() {
      var _this16 = this;

      var uri = "htl_rom_price_type";
      axios.get(uri).then(function (response) {
        _this16.dayPriceTypeLists = response.data.data;
      });
    },
    getHotelInfo: function getHotelInfo() {
      var _this17 = this;

      this.selected = [];
      var uri = "room_info_by_hotel/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        //this.form.fill(response.data.data);
        //this.form.hotel_id = response.data.data.hotel_info_id;
        _this17.form.hotel_code = response.data.hotel.hotel_code;
        _this17.form.hotel_name = response.data.hotel.hotel_name;
      });
    },
    currencyList: function currencyList() {
      var _this18 = this;

      var uri = "currencyList";
      axios.get(uri).then(function (response) {
        _this18.currencyLists = response.data.currencyList;
      });
    },
    getRoomImageList: function getRoomImageList() {
      var _this19 = this;

      var uri = "imageByHotel/" + this.form.hotel_id;
      axios.get(uri).then(function (response) {
        _this19.roomImageLists = response.data.data;
      });
    },
    roomGalleryInsert: function roomGalleryInsert() {
      var _this20 = this;

      this.loading = true;
      this.form.post("/htl_rom_image", {
        logo: this.form.logo,
        hotel_id: this.form.hotel_id
      }).then(function (res) {
        _this20.loading = false;
        Toast.fire({
          icon: "success",
          title: "Save Successful"
        });

        _this20.getRoomImageList();

        _this20.form.logo = '';
      })["catch"](function (res) {
        _this20.loading = false;
        Toast.fire({
          icon: "error",
          title: "Something Missing"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=template&id=240e4240&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=template&id=240e4240& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                attrs: { to: "/hotel@room@setup" }
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
                return _vm.htlRomInformationEntry()
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-10 px-lg-5 col-sm-10 offset-sm-1 col-12 pb-2 pt-2 mb-3 supplier-border comm-form-box-back-color\n              "
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
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-header card-header-tab-animation mb-2" },
                  [
                    _c("ul", { staticClass: "nav nav-justified" }, [
                      _c("li", { staticClass: "nav-item border-right" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link active",
                            attrs: {
                              id: "pills-home-tab",
                              "data-toggle": "pill",
                              href: "#pills-home",
                              role: "tab",
                              "aria-controls": "pills-home",
                              "aria-selected": "true"
                            },
                            on: {
                              click: function($event) {
                                return _vm.setTabInfo(1)
                              }
                            }
                          },
                          [_vm._v("General")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item border-right" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              id: "pills-profile-tab",
                              "data-toggle": "pill",
                              href: "#pills-profile",
                              role: "tab",
                              "aria-controls": "pills-profile",
                              "aria-selected": "false"
                            },
                            on: {
                              click: function($event) {
                                return _vm.setTabInfo(2)
                              }
                            }
                          },
                          [_vm._v("Amenities")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item border-right" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              id: "pills-policy-tab",
                              "data-toggle": "pill",
                              href: "#pills-policy",
                              role: "tab",
                              "aria-controls": "pills-policy",
                              "aria-selected": "false"
                            },
                            on: {
                              click: function($event) {
                                return _vm.setTabInfo(3)
                              }
                            }
                          },
                          [_vm._v(" Room Gallery ")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "nav-item border-right" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              id: "pills-translate-tab",
                              "data-toggle": "pill",
                              href: "#pills-translate",
                              role: "tab",
                              "aria-controls": "pills-translate",
                              "aria-selected": "false"
                            },
                            on: {
                              click: function($event) {
                                return _vm.setTabInfo(4)
                              }
                            }
                          },
                          [_vm._v(" Translate")]
                        )
                      ])
                    ])
                  ]
                ),
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
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.room_type_id,
                                    expression: "form.room_type_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "room_type_id"
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
                                      "room_type_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(" Select Room Type ")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.roomTypeLists, function(
                                  roomTypeList
                                ) {
                                  return _c(
                                    "option",
                                    { domProps: { value: roomTypeList.id } },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(roomTypeList.room_type_name) +
                                          "    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "room_type_id" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", [_vm._v(" Room Title ")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.room_title,
                                  expression: "form.room_title"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.form.room_title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "room_title",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "room_title" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(3),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bed_type_id,
                                    expression: "form.bed_type_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "bed_type_id"
                                  )
                                },
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
                                        "bed_type_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      _vm.htlRomPricingShow(),
                                        _vm.getRoomImageList()
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v(" Select Bed Type ")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.bedTypeLists, function(bedTypeList) {
                                  return _c(
                                    "option",
                                    { domProps: { value: bedTypeList.id } },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(bedTypeList.bed_type_name) +
                                          "    "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "bed_type_id" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.room_description,
                                  expression: "form.room_description"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "room_description"
                                )
                              },
                              attrs: { placeholder: "Enter Room Description" },
                              domProps: { value: _vm.form.room_description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "room_description",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.form,
                                field: "room_description"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("hr"),
                          _vm._v(" "),
                          _vm._m(5),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.htlRomPricingEntry()
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "col-12" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "table",
                                    { staticClass: "table table-bordered" },
                                    [
                                      _c("tr", [
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(6),
                                              _vm._v(" "),
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.form
                                                          .day_price_type_id,
                                                      expression:
                                                        "form.day_price_type_id"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid": _vm.form.errors.has(
                                                      "day_price_type_id"
                                                    )
                                                  },
                                                  attrs: {
                                                    placeholder:
                                                      "Enter Day price type"
                                                  },
                                                  on: {
                                                    change: [
                                                      function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                          "day_price_type_id",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      },
                                                      function($event) {
                                                        return _vm.dayPriceType()
                                                      }
                                                    ]
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [_vm._v(" ----- ")]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.dayPriceTypeLists,
                                                    function(dayPriceTypeList) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          domProps: {
                                                            value:
                                                              dayPriceTypeList.id
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                dayPriceTypeList.room_price_type_name
                                                              ) +
                                                              " "
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              ),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "day_price_type_id"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(7),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.vendor_price,
                                                    expression:
                                                      "form.vendor_price"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "vendor_price"
                                                  )
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Vendor price"
                                                },
                                                domProps: {
                                                  value: _vm.form.vendor_price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.form,
                                                      "vendor_price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "vendor_price"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(8),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.customer_price,
                                                    expression:
                                                      "form.customer_price"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "customer_price"
                                                  )
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "B2C Price"
                                                },
                                                domProps: {
                                                  value: _vm.form.customer_price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.form,
                                                      "customer_price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "customer_price"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(9),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.form.agent_price,
                                                    expression:
                                                      "form.agent_price"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "agent_price"
                                                  )
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "B2B price"
                                                },
                                                domProps: {
                                                  value: _vm.form.agent_price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.form,
                                                      "agent_price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "agent_price"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._m(10),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.showing_price,
                                                    expression:
                                                      "form.showing_price"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "showing_price"
                                                  )
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "Showing price"
                                                },
                                                domProps: {
                                                  value: _vm.form.showing_price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.form,
                                                      "showing_price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "showing_price"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "4" } }, [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm.fixedDateStatus
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "input-group mb-3"
                                                    },
                                                    [
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .fixedDateFrom,
                                                            expression:
                                                              "form.fixedDateFrom"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: { type: "date" },
                                                        domProps: {
                                                          value:
                                                            _vm.form
                                                              .fixedDateFrom
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "fixedDateFrom",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _vm._m(11),
                                                      _vm._v(" "),
                                                      _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.form
                                                                .fixedDateTo,
                                                            expression:
                                                              "form.fixedDateTo"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: { type: "date" },
                                                        domProps: {
                                                          value:
                                                            _vm.form.fixedDateTo
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.form,
                                                              "fixedDateTo",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(12)
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group" }, [
                            _c(
                              "table",
                              { staticClass: "table table-bordered" },
                              [
                                _vm._m(13),
                                _vm._v(" "),
                                _vm._l(_vm.htlRomPricingLists, function(
                                  htlRomPricingList,
                                  index
                                ) {
                                  return _c("tr", [
                                    _c("td", [
                                      _vm._v(" " + _vm._s(++index) + " ")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            htlRomPricingList.price_type
                                              .room_price_type_name
                                          ) +
                                          "\n                                  "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      htlRomPricingList.day_price_type_id == 2
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                  " +
                                                _vm._s(
                                                  htlRomPricingList.fixed_date_from
                                                ) +
                                                " to \n                                  " +
                                                _vm._s(
                                                  htlRomPricingList.fixed_date_to
                                                ) +
                                                "  \n                                "
                                            )
                                          ])
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            htlRomPricingList.vendor_price
                                          ) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            htlRomPricingList.customer_price
                                          ) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            htlRomPricingList.agent_price
                                          ) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            htlRomPricingList.showing_price
                                          ) +
                                          " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.htlRomPricingDelete(
                                                htlRomPricingList.id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v(" Delete ")]
                                      )
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("hr")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Room Quantity ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.quantity,
                                      expression: "form.quantity"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "quantity"
                                    )
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter Room Quantity"
                                  },
                                  domProps: { value: _vm.form.quantity },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "quantity",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "quantity" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Maximum Stay  ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.minimum_stay,
                                      expression: "form.minimum_stay"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "minimum_stay"
                                    )
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Night(s)"
                                  },
                                  domProps: { value: _vm.form.minimum_stay },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "minimum_stay",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "minimum_stay"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "custom-control custom-checkbox mt-2"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.free_breakfast_status,
                                        expression: "form.free_breakfast_status"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "free_breakfast_status"
                                      )
                                    },
                                    attrs: {
                                      type: "checkbox",
                                      id: "customCheckfb"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.form.free_breakfast_status
                                      )
                                        ? _vm._i(
                                            _vm.form.free_breakfast_status,
                                            null
                                          ) > -1
                                        : _vm.form.free_breakfast_status
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a =
                                            _vm.form.free_breakfast_status,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.form,
                                                "free_breakfast_status",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.form,
                                                "free_breakfast_status",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.form,
                                            "free_breakfast_status",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "free_breakfast_status"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: "customCheckfb" }
                                    },
                                    [_vm._v(" Free Breakfast ")]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Max Adults ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.max_adult,
                                      expression: "form.max_adult"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "max_adult"
                                    )
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter Max adult"
                                  },
                                  domProps: { value: _vm.form.max_adult },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "max_adult",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "max_adult" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "custom-control custom-checkbox mt-2"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.re_schedule_status,
                                        expression: "form.re_schedule_status"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "re_schedule_status"
                                      )
                                    },
                                    attrs: {
                                      type: "checkbox",
                                      id: "reschedul"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.form.re_schedule_status
                                      )
                                        ? _vm._i(
                                            _vm.form.re_schedule_status,
                                            null
                                          ) > -1
                                        : _vm.form.re_schedule_status
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.form.re_schedule_status,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.form,
                                                "re_schedule_status",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.form,
                                                "re_schedule_status",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.form,
                                            "re_schedule_status",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "re_schedule_status"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: "reschedul" }
                                    },
                                    [_vm._v("  Re-scheduleable ")]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Max Children")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.max_child,
                                      expression: "form.max_child"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "max_child"
                                    )
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter Max child"
                                  },
                                  domProps: { value: _vm.form.max_child },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "max_child",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "max_child" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._m(14)
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Child Age ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.child_age,
                                        expression: "form.child_age"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "child_age"
                                      )
                                    },
                                    on: {
                                      change: function($event) {
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
                                          "child_age",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v(" Select Child Age ")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(18, function(n) {
                                      return _c(
                                        "option",
                                        { domProps: { value: n } },
                                        [
                                          n > 1
                                            ? _c("span", [
                                                _vm._v(" " + _vm._s(n) + " ")
                                              ])
                                            : _vm._e()
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "child_age" }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" No. of Extra Beds ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.no_of_extra_bed,
                                      expression: "form.no_of_extra_bed"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "no_of_extra_bed"
                                    )
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter No of extra bed"
                                  },
                                  domProps: { value: _vm.form.no_of_extra_bed },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "no_of_extra_bed",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "no_of_extra_bed"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "custom-control custom-checkbox mt-2"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.form.extra_bed_payment_status,
                                        expression:
                                          "form.extra_bed_payment_status"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "extra_bed_payment_status"
                                      )
                                    },
                                    attrs: {
                                      type: "checkbox",
                                      id: "cardpayment"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.form.extra_bed_payment_status
                                      )
                                        ? _vm._i(
                                            _vm.form.extra_bed_payment_status,
                                            null
                                          ) > -1
                                        : _vm.form.extra_bed_payment_status
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a =
                                            _vm.form.extra_bed_payment_status,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.form,
                                                "extra_bed_payment_status",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.form,
                                                "extra_bed_payment_status",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.form,
                                            "extra_bed_payment_status",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "extra_bed_payment_status"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: "cardpayment" }
                                    },
                                    [_vm._v(" Without credit card or payment")]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Extra Bed Charges ")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-6" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.extra_bed_charge,
                                      expression: "form.extra_bed_charge"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "no_of_extra_bed"
                                    )
                                  },
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.form.extra_bed_charge
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "extra_bed_charge",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "extra_bed_charge"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "custom-control custom-checkbox mt-2"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.extra_bed_charge_status,
                                        expression:
                                          "form.extra_bed_charge_status"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "extra_bed_charge_status"
                                      )
                                    },
                                    attrs: {
                                      type: "checkbox",
                                      id: "extra_charge"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.form.extra_bed_charge_status
                                      )
                                        ? _vm._i(
                                            _vm.form.extra_bed_charge_status,
                                            null
                                          ) > -1
                                        : _vm.form.extra_bed_charge_status
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a =
                                            _vm.form.extra_bed_charge_status,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.form,
                                                "extra_bed_charge_status",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.form,
                                                "extra_bed_charge_status",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.form,
                                            "extra_bed_charge_status",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "extra_bed_charge_status"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: "extra_charge" }
                                    },
                                    [
                                      _vm._v(
                                        " Installment is available for credit card holders"
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "pills-profile",
                          role: "tabpanel",
                          "aria-labelledby": "pills-profile-tab"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "custom-control custom-checkbox"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.selectAll,
                                        expression: "selectAll"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    attrs: {
                                      type: "checkbox",
                                      id: "customCheck"
                                    },
                                    domProps: {
                                      checked: Array.isArray(_vm.selectAll)
                                        ? _vm._i(_vm.selectAll, null) > -1
                                        : _vm.selectAll
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.selectAll,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.selectAll = $$a.concat([
                                                $$v
                                              ]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.selectAll = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.selectAll = $$c
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._m(15),
                                  _vm._v(" "),
                                  _c("hr")
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.users, function(user) {
                              return _c(
                                "div",
                                { staticClass: "col-md-4 mb-2" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-checkbox"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.selected,
                                            expression: "selected"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "checkbox",
                                          id: "customCheck" + user.id,
                                          number: ""
                                        },
                                        domProps: {
                                          value: user.id,
                                          checked: Array.isArray(_vm.selected)
                                            ? _vm._i(_vm.selected, user.id) > -1
                                            : _vm.selected
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$a = _vm.selected,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = user.id,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.selected = $$a.concat([
                                                    $$v
                                                  ]))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.selected = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.selected = $$c
                                            }
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: {
                                            for: "customCheck" + user.id
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(user.room_facility_name)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "pills-policy",
                          role: "tabpanel",
                          "aria-labelledby": "pills-policy-tab"
                        }
                      },
                      [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.roomGalleryInsert()
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group row" },
                              [
                                _vm._l(_vm.roomImageLists, function(
                                  roomImageList
                                ) {
                                  return _c(
                                    "div",
                                    { staticClass: "col-md-3 border p-0" },
                                    [
                                      _c("div", { staticClass: "col-md-12" }, [
                                        _c("img", {
                                          staticClass: "img img-responsive p-1",
                                          staticStyle: { width: "100%" },
                                          attrs: {
                                            src:
                                              "images/room_image/" +
                                              roomImageList.image_name
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "input-group p-2 bg-light border"
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    roomImageList.image_title
                                                      .type_name
                                                  ) +
                                                  " "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _vm.form.logo
                                  ? _c(
                                      "div",
                                      { staticClass: "col-md-3 border p-0" },
                                      [
                                        _c("img", {
                                          staticClass: "img img-responsive p-1",
                                          staticStyle: { width: "100%" },
                                          attrs: { src: _vm.form.logo }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "input-group p-2 bg-light border"
                                          },
                                          [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form.image_title_id,
                                                    expression:
                                                      "form.image_title_id"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: { id: "" },
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
                                                      "image_title_id",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  { attrs: { value: "" } },
                                                  [_vm._v(" ----- ")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  _vm.imageTypeLists,
                                                  function(imageTypeList) {
                                                    return _c(
                                                      "option",
                                                      {
                                                        domProps: {
                                                          value:
                                                            imageTypeList.id
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              imageTypeList.type_name
                                                            ) +
                                                            " "
                                                        )
                                                      ]
                                                    )
                                                  }
                                                )
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary imgSaveButton",
                                                attrs: { type: "submit" }
                                              },
                                              [_vm._v(" Save ")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-4" },
                                  [
                                    _c("img", {
                                      staticStyle: {
                                        width: "222px",
                                        height: "127px",
                                        position: "absolute"
                                      },
                                      attrs: {
                                        src:
                                          "dashboard/assets/images/image-input.png"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticStyle: {
                                        width: "222px",
                                        height: "127px",
                                        opacity: "0",
                                        cursor: "pointer"
                                      },
                                      attrs: { type: "file", id: "logo" },
                                      on: {
                                        change: function($event) {
                                          return _vm.changeImage($event)
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: { form: _vm.form, field: "logo" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              2
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "pills-translate",
                          role: "tabpanel",
                          "aria-labelledby": "pills-translate-tab"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _vm._l(_vm.hotelTranslateInfos, function(
                              hotelTranslateInfo
                            ) {
                              return _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-bordered" },
                                  [
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [_vm._v(" Language ")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        hotelTranslateInfo.language
                                          ? _c("span", [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    hotelTranslateInfo.language
                                                      .language_name
                                                  ) +
                                                  " "
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [_vm._v(" Hotel Name ")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                hotelTranslateInfo.hotel_name
                                              ) +
                                              " "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [_vm._v(" Hotel Description ")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                hotelTranslateInfo.hotel_description
                                              ) +
                                              " "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [_vm._v(" Meta Title ")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                hotelTranslateInfo.meta_title
                                              ) +
                                              " "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [_vm._v(" Meta Keyword ")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                hotelTranslateInfo.meta_keyword
                                              ) +
                                              " "
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "small",
                                          { staticClass: "text-muted" },
                                          [_vm._v(" Meta Description ")]
                                        ),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                hotelTranslateInfo.meta_description
                                              ) +
                                              " "
                                          )
                                        ])
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            }),
                            _vm._v(" "),
                            _vm._m(16)
                          ],
                          2
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
                staticClass: "d-block p-0 pt-3 pb-4 card-footer overflow-hidden"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12"
                  },
                  [
                    _vm._m(17),
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
                        _vm._m(18)
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
        )
      ])
    ]),
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
              _vm._m(19),
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
                                domProps: { value: _vm.form.trans_hotel_name },
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
                                    expression: "form.trans_hotel_description"
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
                                domProps: { value: _vm.form.trans_meta_title },
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
                                    expression: "form.trans_meta_description"
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
                            "\n                    mr-2\n                    btn-pill btn-hover-shine btn btn-primary\n                  ",
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
                          _vm._v("Submit\n                ")
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
      _vm._v(" New Room \n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
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
        [
          _c("i", { staticClass: "fa fa-eye" }),
          _vm._v(" Overview\n                     ")
        ]
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
                    [_vm._v("Modal title")]
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
                  _vm._v(
                    "\n                                    ...\n                                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" Room Type\n                        "),
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
      _vm._v(" Bed Type\n                        "),
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
      _vm._v("  Room Description "),
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
    return _c("h4", { staticClass: "text-center" }, [
      _c("u", [_vm._v(" Room Pricing ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _vm._v(" price type "),
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
      _vm._v(" Vendor price "),
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
      _vm._v(" Customer price "),
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
      _vm._v(" Agent price "),
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
      _vm._v(" Showing price "),
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon1" } },
        [_vm._v(" To ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary float-right",
            attrs: { type: "submit" }
          },
          [_vm._v(" Add ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v(" SL ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Price Type ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Vendor price ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Customer price ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Agent price ")]),
      _vm._v(" "),
      _c("th", [_vm._v(" Showing price ")]),
      _vm._v(" "),
      _c("th")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("div", { staticClass: "custom-control custom-checkbox mt-2" }, [
        _c("input", {
          staticClass: "custom-control-input",
          attrs: { type: "checkbox", id: "payinhotel" }
        }),
        _vm._v(" "),
        _c(
          "label",
          { staticClass: "custom-control-label", attrs: { for: "payinhotel" } },
          [_vm._v("  Pay at Hotel ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "custom-control-label text-primary",
        attrs: { for: "customCheck" }
      },
      [_c("b", [_vm._v(" Select All ")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c(
        "table",
        {
          staticClass: "table table-bordered",
          staticStyle: { cursor: "pointer" },
          attrs: { "data-toggle": "modal", "data-target": "#translateInfoForm" }
        },
        [
          _c("tr", [
            _c("td", { staticClass: "text-center pt-3 pb-3" }, [
              _c("i", { staticClass: "fa fa-3x fa-plus text-muted mt-4 mb-4" })
            ])
          ])
        ]
      )
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
        [_vm._v("\n              Add Translate Information\n            ")]
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

/***/ "./resources/js/admin/hotel/roomSetup/add@new@room.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/hotel/roomSetup/add@new@room.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_new_room_vue_vue_type_template_id_240e4240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add@new@room.vue?vue&type=template&id=240e4240& */ "./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=template&id=240e4240&");
/* harmony import */ var _add_new_room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add@new@room.vue?vue&type=script&lang=js& */ "./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_new_room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_new_room_vue_vue_type_template_id_240e4240___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_new_room_vue_vue_type_template_id_240e4240___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/hotel/roomSetup/add@new@room.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_new_room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add@new@room.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_new_room_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=template&id=240e4240&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=template&id=240e4240& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_new_room_vue_vue_type_template_id_240e4240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add@new@room.vue?vue&type=template&id=240e4240& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/hotel/roomSetup/add@new@room.vue?vue&type=template&id=240e4240&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_new_room_vue_vue_type_template_id_240e4240___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_new_room_vue_vue_type_template_id_240e4240___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);