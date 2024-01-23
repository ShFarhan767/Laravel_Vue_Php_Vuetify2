(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this,
        _ref;

    var currentDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
    return _ref = {
      date: '',
      dateFormatted: this.formatDate(''),
      menu1: false,
      menu2: false,
      agreement: false,
      bio: 'Discribe us about yourself',
      dialog: false,
      email: undefined,
      confirmEmail: undefined,
      form: false,
      isLoading: false
    }, _defineProperty(_ref, "dialog", false), _defineProperty(_ref, "password", ''), _defineProperty(_ref, "confirmPassword", ''), _defineProperty(_ref, "formattedPhone", '(+)'), _defineProperty(_ref, "formattedSalary", ''), _defineProperty(_ref, "valid", false), _defineProperty(_ref, "firstname", ''), _defineProperty(_ref, "lastname", ''), _defineProperty(_ref, "country", ''), _defineProperty(_ref, "nameRules", [function (v) {
      return !!v || 'Name is required';
    }, function (v) {
      return v.length <= 10 || 'Name must be less than 10 characters';
    }]), _defineProperty(_ref, "countryRules", [function (v) {
      return !!v || 'This field is required';
    }, function (v) {
      return v.length <= 20 || 'Name must be less than 10 characters';
    }]), _defineProperty(_ref, "email", ''), _defineProperty(_ref, "emailRules", [function (v) {
      return !!v || 'E-mail is required';
    }, function (v) {
      return /.+@.+/.test(v) || 'E-mail must be valid';
    }]), _defineProperty(_ref, "confirmEmail", ''), _defineProperty(_ref, "confirmEmailRules", [function (v) {
      return v === _this.email || 'Emails should match';
    }]), _defineProperty(_ref, "select", []), _defineProperty(_ref, "items", ['Male', 'Female', 'Custom']), _defineProperty(_ref, "items1", ['Bangladesh', 'Palestine', 'Iran']), _defineProperty(_ref, "selectedCountry", ''), _defineProperty(_ref, "countryModal", false), _defineProperty(_ref, "editingCountry", false), _defineProperty(_ref, "countryName", ''), _defineProperty(_ref, "items2", ['Dhaka', 'California', 'Ley Ladak']), _defineProperty(_ref, "selectedCity", ''), _defineProperty(_ref, "cityName", ''), _defineProperty(_ref, "email", ''), _defineProperty(_ref, "confirmEmail", ''), _defineProperty(_ref, "rules", {
      email: function email(v) {
        return !!(v || '').match(/@/) || 'Please enter a valid email';
      },
      confirmEmail: function confirmEmail(v) {
        return v === _this.email || 'Emails should match';
      },
      length: function length(len) {
        return function (v) {
          return (v || '').length >= len || "Invalid character length, required ".concat(len);
        };
      },
      password: function password(v) {
        return !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) || 'Password must contain an upper case letter, a numeric character, and a special character';
      },
      confirmPassword: [function (v) {
        return !!v || 'Confirm Password is required';
      }],
      matchPassword: function matchPassword(v) {
        return v === _this.password || 'Passwords do not match';
      },
      onlyNumbers: function onlyNumbers(value) {
        return /^[0-9,]+$/.test(value) || 'Only numbers are allowed';
      },
      validPhoneNumber: function validPhoneNumber(value) {
        return /^\(\+\d{3}\) \d{4} \d{4} \d{2}$/.test(value) || 'Invalid phone number';
      },
      required: function required(v) {
        return !!v || 'This field is required';
      }
    }), _defineProperty(_ref, "tab", null), _defineProperty(_ref, "items", ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']), _defineProperty(_ref, "text", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'), _ref;
  },
  mounted: function mounted() {
    // Load countries from local storage when the component is mounted
    var storedCountries = localStorage.getItem('countries');
    this.items1 = storedCountries ? JSON.parse(storedCountries) : [];
  },
  // mounted() {
  //     // Load countries from local storage when the component is mounted
  //     const storedCity = localStorage.getItem('cities');
  //     this.items2 = storedCity ? JSON.parse(storedCity) : [];
  // },
  methods: {
    openCountryModal: function openCountryModal() {
      this.countryName = '';
      this.editingCountry = false;
      this.countryModal = true;
    },
    closeCountryModal: function closeCountryModal() {
      this.countryModal = false;
    },
    saveCountry: function saveCountry() {
      if (this.editingCountry) {// Update logic
        // ...
      } else {
        this.items1.push(this.countryName); // Save the updated list to local storage

        localStorage.setItem('countries', JSON.stringify(this.items1));
      }

      this.closeCountryModal();
    },
    deleteCountry: function deleteCountry(index) {
      // Implement delete logic
      this.items1.splice(index, 1); // Save the updated list to local storage

      localStorage.setItem('countries', JSON.stringify(this.items1));
    },
    formatDate: function formatDate(date) {
      if (!date) return null;

      var _date$split = date.split('-'),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      return "".concat(month, "/").concat(day, "/").concat(year);
    },
    parseDate: function parseDate(date) {
      if (!date) return null;

      var _date$split3 = date.split('/'),
          _date$split4 = _slicedToArray(_date$split3, 3),
          month = _date$split4[0],
          day = _date$split4[1],
          year = _date$split4[2];

      return "".concat(year, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'));
    },
    formatPhoneNumber: function formatPhoneNumber() {
      // Extract only numeric characters from the input
      var numericValue = this.formattedPhone.replace(/\D/g, ''); // Add "(+)" if the input is empty

      var countryCode = numericValue.length === 0 ? '(+)' : "(+".concat(numericValue.slice(0, 3), ")"); // Apply the desired format

      this.formattedPhone = "".concat(countryCode, " ").concat(numericValue.slice(3, 7), " ").concat(numericValue.slice(7, 11), " ").concat(numericValue.slice(11, 13));
    },
    formatSalary: function formatSalary() {
      // Extract only numeric characters from the input
      var numericValue = this.formattedSalary.replace(/\D/g, ''); // Apply comma formatting to the numeric value

      this.formattedSalary = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  watch: {
    date: function date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  computed: {
    computedDateFormatted: function computedDateFormatted() {
      return this.formatDate(this.date);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.custom-row[data-v-28b8d9a9] {\r\n  height: 90px; /* Set your desired height */\n}\n.countryNames[data-v-28b8d9a9]{\r\n    width: 90%;\r\n    margin-left: 25px;\r\n    padding-bottom: 25px;\n}\n.Names[data-v-28b8d9a9]{\r\n    background-color: #e9e9e9;\n}\n.Text[data-v-28b8d9a9]{\r\n    height: 60px;\n}\n.basil[data-v-28b8d9a9] {\r\n  background-color: #FFFBE6 !important;\n}\n.basil--text[data-v-28b8d9a9] {\r\n  color: #356859 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "h3",
            [
              _c(
                "v-icon",
                {
                  staticClass:
                    "header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"
                },
                [_vm._v("mdi-pencil-outline")]
              ),
              _vm._v("\n                Create A New Account\n            ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "btn-actions-pane-right text-capitalize" },
            [
              _c(
                "router-link",
                { attrs: { to: "/visa@type@entry" } },
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
                    [_vm._v("Back\n                    ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "bg-white p-3" },
          [
            _c(
              "v-container",
              [
                _c(
                  "v-form",
                  {
                    ref: "form",
                    staticClass: "pa-4 pt-6",
                    model: {
                      value: _vm.form,
                      callback: function($$v) {
                        _vm.form = $$v
                      },
                      expression: "form"
                    }
                  },
                  [
                    _c(
                      "v-row",
                      { staticClass: "custom-row" },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                rules: _vm.nameRules,
                                counter: 10,
                                label: "First name",
                                required: "",
                                outlined: "",
                                filled: "",
                                dense: ""
                              },
                              model: {
                                value: _vm.firstname,
                                callback: function($$v) {
                                  _vm.firstname = $$v
                                },
                                expression: "firstname"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                rules: _vm.nameRules,
                                counter: 10,
                                label: "Last name",
                                required: "",
                                outlined: "",
                                filled: "",
                                dense: ""
                              },
                              model: {
                                value: _vm.lastname,
                                callback: function($$v) {
                                  _vm.lastname = $$v
                                },
                                expression: "lastname"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { staticClass: "custom-row" },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                rules: [_vm.rules.email],
                                filled: "",
                                outlined: "",
                                dense: "",
                                color: "deep-purple",
                                label: "Email Address",
                                type: "email"
                              },
                              model: {
                                value: _vm.email,
                                callback: function($$v) {
                                  _vm.email = $$v
                                },
                                expression: "email"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                rules: [_vm.rules.confirmEmail],
                                filled: "",
                                outlined: "",
                                dense: "",
                                color: "deep-purple",
                                label: "Confirm Email",
                                type: "email"
                              },
                              model: {
                                value: _vm.confirmEmail,
                                callback: function($$v) {
                                  _vm.confirmEmail = $$v
                                },
                                expression: "confirmEmail"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { staticClass: "custom-row" },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              staticStyle: { "min-height": "96px" },
                              attrs: {
                                rules: [
                                  _vm.rules.password,
                                  _vm.rules.length(8)
                                ],
                                filled: "",
                                outlined: "",
                                dense: "",
                                color: "deep-purple",
                                label: "Password",
                                type: "password"
                              },
                              model: {
                                value: _vm.password,
                                callback: function($$v) {
                                  _vm.password = $$v
                                },
                                expression: "password"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              staticStyle: { "min-height": "96px" },
                              attrs: {
                                rules: [
                                  _vm.rules.confirmPassword,
                                  _vm.rules.length(8),
                                  _vm.rules.matchPassword
                                ],
                                filled: "",
                                outlined: "",
                                dense: "",
                                color: "deep-purple",
                                label: "Confirm Password",
                                type: "password"
                              },
                              model: {
                                value: _vm.confirmPassword,
                                callback: function($$v) {
                                  _vm.confirmPassword = $$v
                                },
                                expression: "confirmPassword"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      { staticClass: "custom-row" },
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "Phone number",
                                required: "",
                                outlined: "",
                                dense: "",
                                filled: "",
                                rules: [_vm.rules.validPhoneNumber]
                              },
                              on: { input: _vm.formatPhoneNumber },
                              model: {
                                value: _vm.formattedPhone,
                                callback: function($$v) {
                                  _vm.formattedPhone = $$v
                                },
                                expression: "formattedPhone"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "3" } },
                          [
                            _c("v-combobox", {
                              attrs: {
                                items: _vm.items,
                                label: "Gender",
                                multiple: "",
                                filled: "",
                                outlined: "",
                                dense: "",
                                color: "deep-purple"
                              },
                              model: {
                                value: _vm.select,
                                callback: function($$v) {
                                  _vm.select = $$v
                                },
                                expression: "select"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "3" } },
                          [
                            _c(
                              "v-menu",
                              {
                                ref: "menu1",
                                attrs: {
                                  "close-on-content-click": false,
                                  transition: "scale-transition",
                                  "offset-y": "",
                                  "max-width": "290px",
                                  "min-width": "auto"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-text-field",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  label: "Date",
                                                  filled: "",
                                                  outlined: "",
                                                  dense: "",
                                                  "persistent-hint": "",
                                                  color: "deep-purple",
                                                  "prepend-icon": "mdi-calendar"
                                                },
                                                on: {
                                                  blur: function($event) {
                                                    _vm.date = _vm.parseDate(
                                                      _vm.dateFormatted
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value: _vm.dateFormatted,
                                                  callback: function($$v) {
                                                    _vm.dateFormatted = $$v
                                                  },
                                                  expression: "dateFormatted"
                                                }
                                              },
                                              "v-text-field",
                                              attrs,
                                              false
                                            ),
                                            on
                                          )
                                        )
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.menu1,
                                  callback: function($$v) {
                                    _vm.menu1 = $$v
                                  },
                                  expression: "menu1"
                                }
                              },
                              [
                                _vm._v(" "),
                                _c("v-date-picker", {
                                  attrs: { "no-title": "" },
                                  on: {
                                    input: function($event) {
                                      _vm.menu1 = false
                                    }
                                  },
                                  model: {
                                    value: _vm.date,
                                    callback: function($$v) {
                                      _vm.date = $$v
                                    },
                                    expression: "date"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "4" } },
                          [
                            _c(
                              "v-label",
                              {
                                staticClass: "ma-2",
                                attrs: { for: "country" }
                              },
                              [
                                _vm._v(
                                  "\n                                Country\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  color: "primary",
                                  dark: "",
                                  "x-small": ""
                                },
                                on: { click: _vm.openCountryModal }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { dark: "", "x-small": "" } },
                                  [
                                    _vm._v(
                                      "\n                                    mdi-pencil-outline\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                id: "country",
                                items: _vm.items1,
                                label: "Country",
                                color: "deep-purple",
                                outlined: "",
                                filled: "",
                                dense: ""
                              },
                              model: {
                                value: _vm.selectedCountry,
                                callback: function($$v) {
                                  _vm.selectedCountry = $$v
                                },
                                expression: "selectedCountry"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-dialog",
                              {
                                attrs: { "max-width": "500" },
                                model: {
                                  value: _vm.countryModal,
                                  callback: function($$v) {
                                    _vm.countryModal = $$v
                                  },
                                  expression: "countryModal"
                                }
                              },
                              [
                                _c(
                                  "v-card",
                                  [
                                    _c("v-card-title", [
                                      _c("span", { staticClass: "headline" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.editingCountry ? "Edit" : "Add"
                                          ) + " Country"
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-text",
                                      { staticClass: "Text" },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Country Name",
                                            filled: "",
                                            outlined: "",
                                            dense: "",
                                            color: "deep-purple"
                                          },
                                          model: {
                                            value: _vm.countryName,
                                            callback: function($$v) {
                                              _vm.countryName = $$v
                                            },
                                            expression: "countryName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-actions",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "ma-2",
                                            attrs: {
                                              color: "primary",
                                              dark: "",
                                              small: ""
                                            },
                                            on: { click: _vm.saveCountry }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Save\n                                        "
                                            ),
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { dark: "", right: "" }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            mdi-check-circle\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "ma-2",
                                            attrs: {
                                              color: "red",
                                              dark: "",
                                              small: ""
                                            },
                                            on: { click: _vm.closeCountryModal }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Close\n                                        "
                                            ),
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { dark: "", right: "" }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            mdi-cancel\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "countryNames" },
                                      [
                                        _c("h4", [_vm._v("Country Names")]),
                                        _vm._v(" "),
                                        _vm.items1.length > 0
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.items1,
                                                            function(
                                                              country,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "tr",
                                                                { key: index },
                                                                [
                                                                  _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "Names"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          country
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          attrs: {
                                                                            color:
                                                                              "error",
                                                                            small:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.deleteCountry(
                                                                                index
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-delete"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                false,
                                                1180535478
                                              )
                                            })
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "4" } },
                          [
                            _c(
                              "v-label",
                              { staticClass: "ma-2", attrs: { for: "city" } },
                              [
                                _vm._v(
                                  "\n                                City\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  color: "primary",
                                  dark: "",
                                  "x-small": ""
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { dark: "", "x-small": "" } },
                                  [
                                    _vm._v(
                                      "\n                                    mdi-pencil-outline\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                id: "city",
                                items: _vm.items2,
                                label: "City",
                                color: "deep-purple",
                                outlined: "",
                                filled: "",
                                dense: ""
                              },
                              model: {
                                value: _vm.selectedCity,
                                callback: function($$v) {
                                  _vm.selectedCity = $$v
                                },
                                expression: "selectedCity"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "4" } },
                          [
                            _c(
                              "v-label",
                              { staticClass: "ma-2", attrs: { for: "Salary" } },
                              [
                                _vm._v(
                                  "\n                                Salary\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  color: "primary",
                                  dark: "",
                                  "x-small": ""
                                }
                              },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { dark: "", "x-small": "" } },
                                  [
                                    _vm._v(
                                      "\n                                    mdi-pencil-outline\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-text-field", {
                              ref: "salary",
                              attrs: {
                                label: "Salary",
                                required: "",
                                placeholder: "10,000",
                                outlined: "",
                                dense: "",
                                filled: "",
                                rules: [_vm.rules.onlyNumbers]
                              },
                              on: { input: _vm.formatSalary },
                              model: {
                                value: _vm.formattedSalary,
                                callback: function($$v) {
                                  _vm.formattedSalary = $$v
                                },
                                expression: "formattedSalary"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", md: "12" } },
                          [
                            _c("v-textarea", {
                              attrs: {
                                name: "input-7-1",
                                filled: "",
                                outlined: "",
                                dense: "",
                                label: "Bio",
                                "auto-grow": "",
                                rows: "4",
                                color: "deep-purple",
                                counter: 300,
                                maxlength: 300
                              },
                              model: {
                                value: _vm.bio,
                                callback: function($$v) {
                                  _vm.bio = $$v
                                },
                                expression: "bio"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-checkbox", {
                      attrs: {
                        rules: [_vm.rules.required],
                        color: "deep-purple"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "label",
                          fn: function() {
                            return [
                              _vm._v(
                                "\n                        I agree to the \n                        "
                              ),
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      _vm.dialog = true
                                    }
                                  }
                                },
                                [_vm._v("Terms of Service")]
                              ),
                              _vm._v(
                                "\n                         and \n                        "
                              ),
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      _vm.dialog = true
                                    }
                                  }
                                },
                                [_vm._v("Privacy Policy")]
                              ),
                              _vm._v("*\n                        ")
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.agreement,
                        callback: function($$v) {
                          _vm.agreement = $$v
                        },
                        expression: "agreement"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "" },
                            on: {
                              click: function($event) {
                                return _vm.$refs.form.reset()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Clear\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "white--text",
                            attrs: {
                              disabled: !_vm.form,
                              loading: _vm.isLoading,
                              color: "deep-purple accent-4",
                              depressed: ""
                            },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                _vm.dialog = true
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Submit\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            staticClass: "bg-white",
                            attrs: { "max-width": "290" },
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _c(
                              "v-card-title",
                              { staticClass: "text-h5" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-2",
                                    attrs: {
                                      fab: "",
                                      dark: "",
                                      small: "",
                                      color: "primary"
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { dark: "" } }, [
                                      _vm._v(
                                        "\n                                            mdi-check-outline\n                                        "
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(
                                  "\n                                    Registration Sucessfully\n                                "
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "12" } },
                [
                  [
                    _c(
                      "v-card",
                      { attrs: { color: "basil" } },
                      [
                        _c(
                          "v-card-title",
                          { staticClass: "text-center justify-center py-6" },
                          [
                            _c(
                              "h1",
                              {
                                staticClass:
                                  "font-weight-bold text-h2 basil--text"
                              },
                              [
                                _vm._v(
                                  "\n                            BASiL\n                        "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tabs",
                          {
                            attrs: {
                              "background-color": "transparent",
                              color: "green darken-2",
                              grow: ""
                            },
                            model: {
                              value: _vm.tab,
                              callback: function($$v) {
                                _vm.tab = $$v
                              },
                              expression: "tab"
                            }
                          },
                          _vm._l(_vm.items, function(item) {
                            return _c("v-tab", { key: item }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(item) +
                                  "\n                            "
                              )
                            ])
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tabs-items",
                          {
                            model: {
                              value: _vm.tab,
                              callback: function($$v) {
                                _vm.tab = $$v
                              },
                              expression: "tab"
                            }
                          },
                          _vm._l(_vm.items, function(item) {
                            return _c(
                              "v-tab-item",
                              { key: item },
                              [
                                _c(
                                  "v-card",
                                  { attrs: { color: "basil", flat: "" } },
                                  [
                                    _c("v-card-text", [
                                      _vm._v(_vm._s(_vm.text))
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ]
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue":
/*!********************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@form@validation.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visa_form_validation_vue_vue_type_template_id_28b8d9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true& */ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true&");
/* harmony import */ var _visa_form_validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visa@form@validation.vue?vue&type=script&lang=js& */ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css& */ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _visa_form_validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _visa_form_validation_vue_vue_type_template_id_28b8d9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _visa_form_validation_vue_vue_type_template_id_28b8d9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28b8d9a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/visa/visaSetup/visa@form@validation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@form@validation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=style&index=0&id=28b8d9a9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_style_index_0_id_28b8d9a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_template_id_28b8d9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/visa/visaSetup/visa@form@validation.vue?vue&type=template&id=28b8d9a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_template_id_28b8d9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_visa_form_validation_vue_vue_type_template_id_28b8d9a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);