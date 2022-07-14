(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-account-account-module"], {
    /***/
    "++XS":
    /*!*********************************************************!*\
      !*** ./src/app/components/account/account.component.ts ***!
      \*********************************************************/

    /*! exports provided: AccountComponent */

    /***/
    function XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return AccountComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AccountComponent = /*#__PURE__*/function () {
        function AccountComponent() {
          _classCallCheck(this, AccountComponent);
        }

        _createClass(AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccountComponent;
      }();

      AccountComponent.ɵfac = function AccountComponent_Factory(t) {
        return new (t || AccountComponent)();
      };

      AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccountComponent,
        selectors: [["app-account"]],
        decls: 1,
        vars: 0,
        template: function AccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-account',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "+/aG":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/account/forgotpassword/forgotpassword.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ForgotpasswordComponent */

    /***/
    function aG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function () {
        return ForgotpasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _account_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../account-api.service */
      "q4D8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgotpasswordComponent_div_1_h2_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forget Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotpasswordComponent_div_1_h2_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotpasswordComponent_div_1_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotpasswordComponent_div_1_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.generate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotpasswordComponent_div_1_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0\xA0Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotpasswordComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotpasswordComponent_div_1_h2_3_Template, 2, 0, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotpasswordComponent_div_1_h2_4_Template, 2, 0, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotpasswordComponent_div_1_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.emailId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgotpasswordComponent_div_1_button_9_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgotpasswordComponent_div_1_button_10_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isPwdChange);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isPwdChange);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.emailId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
        }
      }

      function ForgotpasswordComponent_div_2_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotpasswordComponent_div_2_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.goToReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verify OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotpasswordComponent_div_2_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0\xA0Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotpasswordComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Your OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotpasswordComponent_div_2_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.otp = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgotpasswordComponent_div_2_button_9_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgotpasswordComponent_div_2_button_10_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotpasswordComponent_div_2_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.backToGenerate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.otp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
        }
      }

      function ForgotpasswordComponent_div_3_button_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r18.resetForm.valid);
        }
      }

      function ForgotpasswordComponent_div_3_button_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0\xA0Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "fa-eye-slash": a0,
          "fa-eye": a1
        };
      };

      function ForgotpasswordComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotpasswordComponent_div_3_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.resetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Password \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotpasswordComponent_div_3_Template_i_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Invalid! at least one number.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Invalid! at least one number.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ForgotpasswordComponent_div_3_button_23_Template, 2, 1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ForgotpasswordComponent_div_3_button_24_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.resetForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, !ctx_r2.fieldTextType, ctx_r2.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r2.resetForm.get("newPassword").valid || ctx_r2.resetForm.get("newPassword").untouched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r2.fieldTextType ? "text" : "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r2.resetForm.get("confirmPassword").valid || ctx_r2.resetForm.get("confirmPassword").untouched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r2.fieldTextType ? "text" : "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
        }
      }

      var showModel;

      (function (showModel) {
        showModel[showModel["isgenerate"] = 1] = "isgenerate";
        showModel[showModel["isVerifiy"] = 2] = "isVerifiy";
        showModel[showModel["isReset"] = 3] = "isReset";
      })(showModel || (showModel = {}));

      var ForgotpasswordComponent = /*#__PURE__*/function () {
        function ForgotpasswordComponent(userService, toastr, router, route) {
          _classCallCheck(this, ForgotpasswordComponent);

          this.userService = userService;
          this.toastr = toastr;
          this.router = router;
          this.route = route;
          this.fieldTextType = false;
          this.isLoading = false;
          this.isPwdChange = false;
        }

        _createClass(ForgotpasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.state = showModel.isgenerate;
            this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
            this.getPWDFlag();
          }
        }, {
          key: "toggleFieldTextType",
          value: function toggleFieldTextType() {
            this.fieldTextType = !this.fieldTextType;
          }
        }, {
          key: "getPWDFlag",
          value: function getPWDFlag() {
            var _this = this;

            this.route.queryParams.subscribe(function (param) {
              _this.isPwdChange = param.isPasswordChange;
            });
          }
        }, {
          key: "generate",
          value: function generate() {
            var _this2 = this;

            if (this.emailId != null || this.emailId != undefined) {
              var formData = new FormData();
              formData.append('mobileNumber', this.emailId);
              this.isLoading = true;
              this.userService.generateOTP(formData).subscribe(function (res) {
                _this2.isLoading = false;

                if (res.success) {
                  _this2.state = showModel.isVerifiy;
                  _this2.otpkey = JSON.parse(res.data).Details;

                  _this2.toastr.success(res.message, "Success..!");
                } else {
                  _this2.toastr.error(res.message, "Error..!");
                }
              });
            } else {
              this.toastr.warning("Please Enter emailId", 'Warning..!');
            }
          }
        }, {
          key: "backToGenerate",
          value: function backToGenerate() {
            this.state = showModel.isgenerate;
          }
        }, {
          key: "goToReset",
          value: function goToReset() {
            var _this3 = this;

            if (this.otp != null || this.otp != undefined) {
              var formData = new FormData();
              formData.append('mobileNumber', this.emailId);
              formData.append('otp', this.otp);
              this.isLoading = true;
              this.userService.verifyOTP(formData).subscribe(function (res) {
                _this3.isLoading = false;

                if (res.success) {
                  _this3.state = showModel.isReset;

                  _this3.toastr.success(res.message, "Success..!");
                } else {
                  _this3.toastr.error(res.message, "Error..!");
                }
              });
            }
          }
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            var _this4 = this;

            if (this.resetForm.valid) {
              if (this.resetForm.value.newPassword == this.resetForm.value.confirmPassword) {
                var formData = new FormData();
                formData.append('mobileNumber', this.emailId);
                formData.append('password', this.resetForm.value.newPassword);
                this.isLoading = true;
                this.userService.resetPassword(formData).subscribe(function (res) {
                  _this4.isLoading = false;

                  if (res.success) {
                    _this4.toastr.success(res.message, "Success..!");

                    _this4.router.navigate(['/account/login']);
                  } else {
                    _this4.toastr.error(res.message, "Error..!");
                  }
                });
              } else {
                this.toastr.warning("New Password and Confirm Password does not match", 'Warning..!');
              }
            }
          }
        }]);

        return ForgotpasswordComponent;
      }();

      ForgotpasswordComponent.ɵfac = function ForgotpasswordComponent_Factory(t) {
        return new (t || ForgotpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_api_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      ForgotpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotpasswordComponent,
        selectors: [["app-forgotpassword"]],
        decls: 4,
        vars: 3,
        consts: [[1, "pwd-page"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [4, "ngIf"], [1, "theme-form", "text-center"], [1, "form-row"], [1, "col-md-12"], ["type", "text", "id", "email", "placeholder", "abc@domain.com", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 4, "ngIf"], [1, "form-group"], ["routerLink", "/account/login"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"], [1, "theme-form"], ["type", "text", "placeholder", "******", 1, "form-control", "otp", 2, "font-size", "large", "font-weight", "bold", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "theme-form", 3, "formGroup", "ngSubmit"], [1, "fa", 3, "ngClass", "click"], [1, "text-danger"], ["formControlName", "newPassword", "placeholder", "****", 1, "form-control", 3, "type"], ["formControlName", "confirmPassword", "placeholder", "****", 1, "form-control", 3, "type"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
        template: function ForgotpasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotpasswordComponent_div_1_Template, 16, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotpasswordComponent_div_2_Template, 16, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotpasswordComponent_div_3_Template, 25, 13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == 3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotpasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgotpassword',
            templateUrl: './forgotpassword.component.html',
            styleUrls: ['./forgotpassword.component.scss']
          }]
        }], function () {
          return [{
            type: _account_api_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/vG3":
    /*!**************************************************************!*\
      !*** ./src/app/components/account/account-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: AccountRoutingModule */

    /***/
    function vG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
        return AccountRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgotpassword/forgotpassword.component */
      "+/aG");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "LkZ5");
      /* harmony import */


      var _new_profile_new_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-profile/new-profile.component */
      "U897");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'profile-new',
        component: _new_profile_new_profile_component__WEBPACK_IMPORTED_MODULE_3__["NewProfileComponent"]
      }, {
        path: 'forget/password',
        component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_1__["ForgotpasswordComponent"]
      }];

      var AccountRoutingModule = function AccountRoutingModule() {
        _classCallCheck(this, AccountRoutingModule);
      };

      AccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AccountRoutingModule
      });
      AccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AccountRoutingModule_Factory(t) {
          return new (t || AccountRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AccountRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LkZ5":
    /*!*************************************************************!*\
      !*** ./src/app/components/account/login/login.component.ts ***!
      \*************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function LkZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! crypto-js */
      "NFKh");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/common/validator */
      "GwNG");
      /* harmony import */


      var _account_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../account-api.service */
      "q4D8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_17_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_17_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_17_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_17_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0\xA0Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "fa-eye-slash": a0,
          "fa-eye": a1
        };
      };

      function LoginComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_17_Template_i_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Forgot Password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_div_17_button_13_Template, 2, 0, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_div_17_button_14_Template, 3, 0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginFrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.fieldTextType ? "text" : "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, !ctx_r0.fieldTextType, ctx_r0.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
        }
      }

      function LoginComponent_div_18_small_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter First Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_small_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Last Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_small_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Code.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_small_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Valid Mobile Number.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_small_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Valid Email Id.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_small_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_small_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Confirm Password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_button_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Agree & Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_button_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0\xA0Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_div_18_Template_form_submit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.onRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginComponent_div_18_small_6_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_18_small_10_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "+91");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "+1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_small_18_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_div_18_small_21_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_div_18_small_25_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_div_18_small_29_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_18_Template_i_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginComponent_div_18_small_35_Template, 2, 0, "small", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " By Clicking Agree & join, you agree to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Bolstart User Agreement");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Privacy Policy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, LoginComponent_div_18_button_46_Template, 2, 0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, LoginComponent_div_18_button_47_Template, 3, 0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.newUserFrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("firstName").invalid && ctx_r1.newUserFrom.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("lastName").invalid && ctx_r1.newUserFrom.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("countryCode").invalid && ctx_r1.newUserFrom.get("countryCode").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("mobileNumber").invalid && ctx_r1.newUserFrom.get("mobileNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("emailId").invalid && ctx_r1.newUserFrom.get("emailId").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.fieldTextType ? "text" : "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("password").invalid && ctx_r1.newUserFrom.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, !ctx_r1.fieldTextType, ctx_r1.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r1.fieldTextType ? "text" : "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.newUserFrom.get("confirmPassword").invalid && ctx_r1.newUserFrom.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.termsLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.termsLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, apiService, toastr, router, authService) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.apiService = apiService;
          this.toastr = toastr;
          this.router = router;
          this.authService = authService;
          this.toggle = 2;
          this.termsLink = "https://bolstartimages.s3.ap-south-1.amazonaws.com/Terms+of+Use_Bolstart_End+Users_15122020.pdf";
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            localStorage.clear();
            this.register();
            this.loginUser();
            this.link = location.href.slice(0, -5) + "profile-new?userId=";
          }
        }, {
          key: "switch",
          value: function _switch(number) {
            this.toggle = number;
            this.newUserFrom.reset();
            this.loginFrom.reset();
            this.newUserFrom.patchValue({
              countryCode: "+91"
            });

            if (this.toggle == 2) {
              document.documentElement.scrollTop = 12;
            }
          }
        }, {
          key: "register",
          value: function register() {
            this.newUserFrom = this.fb.group({
              emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].onlyAlphabetRegex)]],
              mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].onlyAlphabetRegex)]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              policy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              countryCode: ['+91', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }, {
          key: "loginUser",
          value: function loginUser() {
            this.loginFrom = this.fb.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
          /* ========================= Registartion Module =================================== */

        }, {
          key: "onRegister",
          value: function onRegister() {
            var _this5 = this;

            this.newUserFrom.markAllAsTouched();

            if (this.newUserFrom.value.password == this.newUserFrom.value.confirmPassword) {
              if (this.newUserFrom.value.policy == true) {
                if (this.newUserFrom.valid) {
                  var obj = {
                    emailId: this.newUserFrom.value.emailId,
                    firstName: this.newUserFrom.value.firstName,
                    lastName: this.newUserFrom.value.lastName,
                    mobileNumber: this.newUserFrom.value.mobileNumber,
                    password: this.newUserFrom.value.password,
                    isEmailVerified: "false"
                  };
                  this.isLoading = true;
                  this.apiService.register(obj).subscribe(function (res) {
                    _this5.isLoading = false;

                    if (res.success) {
                      _this5.toggle = 2;

                      _this5.sendEmail(res.data);
                    } else {
                      _this5.toastr.warning(res.message);
                    }
                  });
                }
              } else {
                this.toastr.error("Please accept Bolstart Policies");
              }
            } else {
              this.toastr.error("Password and Confirm Password dosen't match.");
            }
          }
        }, {
          key: "sendEmail",
          value: function sendEmail(obj) {
            var _this6 = this;

            var formData = new FormData();
            formData.append('toemailId', this.newUserFrom.value.emailId);
            formData.append('subject', 'Bolstart account verification');
            formData.append('message', "".concat(this.link + obj.id));
            this.apiService.sendEmail(formData).subscribe(function (res) {
              if (res.success) {
                _this6.toastr.success(res.message);
              } else {
                _this6.toastr.warning(res.message);
              }
            });
          }
          /* ========================================================== */

          /* ========================= Login Module =================================== */

        }, {
          key: "onLogin",
          value: function onLogin() {
            var _this7 = this;

            var formData = new FormData();
            formData.append("password", this.loginFrom.value.password);
            formData.append("os", "web");
            formData.append("deviceId", "89ABCDEF-01234567-89ABCDEF");
            var email_pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            var mobile_pattern = /^[0-9]/;

            if (email_pattern.test(this.loginFrom.value.username)) {
              formData.append("emailId", this.loginFrom.value.username);
              this.isLoading = true;
              this.apiService.authLoginUsingEmail(formData).subscribe(function (res) {
                _this7.isLoading = false;

                if (res.data != null) {
                  if (res.data.isEmailVerified == 'true') {
                    var encrypt = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(JSON.stringify(res.data), "Bollstart").toString();
                    localStorage.setItem('member', res.data.id);
                    localStorage.setItem("company_id", res.data.company_id);
                    localStorage.setItem('Bolstart', encrypt);

                    _this7.router.navigate(['/home']);
                  } else {
                    _this7.toastr.error("Please Verify Account");
                  }
                } else {
                  _this7.toastr.error(res.message);
                }
              });
            } else if (mobile_pattern.test(this.loginFrom.value.username)) {
              formData.append("mobileNumber", this.loginFrom.value.username);
              this.isLoading = true;
              this.apiService.authLoginUsingMobile(formData).subscribe(function (res) {
                _this7.isLoading = false;

                if (res.data != null) {
                  if (res.data.isEmailVerified == 'true') {
                    var encrypt = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(JSON.stringify(res.data), "Bollstart").toString();
                    localStorage.setItem('member', res.data.id);
                    localStorage.setItem('Bolstart', encrypt);

                    _this7.router.navigate(['./home']);
                  } else {
                    _this7.toastr.error("Please Verify Account");
                  }
                } else {
                  _this7.toastr.error(res.message);
                }
              });
            } else {
              this.toastr.warning('Enter Valid Credentials');
            }
          }
          /* ========================================================== */

          /* ========================= Social login =================================== */

        }, {
          key: "gmailSignUp",
          value: function gmailSignUp() {
            var _this8 = this;

            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID).then(function (res) {
              var obj = {
                emailId: res.email,
                firstName: res.firstName,
                lastName: res.lastName,
                isGoogleLogged: "true"
              };
              _this8.isLoading = true;

              _this8.apiService.register(obj).subscribe(function (res) {
                _this8.isLoading = false;

                if (res.success) {
                  _this8.isLoading = false;

                  if (res.success) {
                    _this8.toggle = 2;

                    _this8.sendEmail(res.data);
                  } else {
                    _this8.toastr.warning(res.message);
                  }
                }
              });
            });
          }
        }, {
          key: "toggleFieldTextType",
          value: function toggleFieldTextType() {
            this.fieldTextType = !this.fieldTextType;
          }
        }, {
          key: "scrollTop",
          value: function scrollTop() {
            document.documentElement.scrollTop = 0;
            this.toggle = 1;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_api_service__WEBPACK_IMPORTED_MODULE_5__["AccountApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 151,
        vars: 2,
        consts: [[1, "logo-header"], ["src", "assets/img/bslogo_1.png", 2, "height", "55px", "width", "190px"], [1, "sign-wrap"], [3, "click"], [1, "btn", "btn-primary", "outline", 3, "click"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-12"], [2, "color", "#293266"], ["class", "inner-wrap", 4, "ngIf"], [1, "col-lg-6", "d-none", "d-lg-block"], ["src", "assets/img/login/img1.png", 1, "first-img"], [1, "second-wrap"], [1, "col-7"], ["src", "assets/img/login/img2.png", 1, "signUp-img"], [1, "col-5"], [1, "btn", "btn-primary", 3, "click"], [1, "third-wrap"], [1, "content"], ["src", "assets/img/login/img2.png", 1, "img-second"], [1, "fourth-wrap"], ["src", "assets/img/login/gipy_1.gif", 1, "img-third"], [1, "col-lg-7", "d-none", "d-lg-block", "text-center", 2, "padding", "13rem"], [1, "col-lg-5", "col-md-12"], ["src", "assets/img/activity1.gif", 1, "signUp-img"], [1, "footer", "bg-footer"], [1, "col-6", "col-md-6", "text-center"], [1, "col-2", "col-md-2"], ["href", "https://www.facebook.com/bolstart/", "target", "_blank"], ["href", "https://www.instagram.com/bolstart_/", "target", "_blank"], ["href", "https://twitter.com/bolstart", "target", "_blank"], ["href", "https://medium.com/bolstart", "target", "_blank"], ["href", "mailto:reachout@bolstart.com", "target", "_blank"], [1, "text-center"], [1, "inner-wrap"], [1, "form-wrap"], [3, "formGroup"], [1, "col", "col-12", "p-2"], ["type", "text", "placeholder", "Email / Phone Number", "formControlName", "username", 1, "form-control"], [1, "row", "p-2"], [1, "form-control"], ["placeholder", "Password", "formControlName", "password", 1, "col", "col-11", 3, "type"], [1, "fa", 3, "ngClass", "click"], [1, "text-left"], ["href", "javascript:void(0)", "data-dismiss", "modal", "routerLink", "/account/forget/password"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"], [1, "form-wrap", 3, "formGroup", "submit"], ["type", "text", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col", "col-xl-12", "p-2"], ["type", "text", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control"], [1, "col", "col-xl-2", "p-2"], ["formControlName", "countryCode", 1, "form-control"], ["value", "+91", "selected", ""], ["value", "+1"], [1, "col", "col-xl-10", "p-2"], ["type", "number", "placeholder", "Mobile Number", "formControlName", "mobileNumber", 1, "form-control"], ["type", "email", "placeholder", "Email", "formControlName", "emailId", 1, "form-control"], ["formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "type"], [2, "text-align", "right"], ["formControlName", "confirmPassword", "placeholder", "Confirm Password", 1, "form-control", 3, "type"], ["type", "checkbox", "name", "policy", "formControlName", "policy"], ["target", "_blank", 3, "href"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf"], ["class", "btn btn-primary", 4, "ngIf"], [1, "text-danger"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-primary"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_label_click_4_listener() {
              return ctx["switch"](1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Join Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() {
              return ctx["switch"](2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Bolstering the Startup Community");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "A social network for founders, investors, students, freelancers and everyone else interested in joining the startup community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 15, 8, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 48, 18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Why Bolstart?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Conveniently targeted social network with multiple features that enables you to build strong relations and save time. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() {
              return ctx.scrollTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "01 Build investor Relationship");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Write structured updates that directly reach investor's email inbox.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "02 Keep Everyone in loop");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Share email updates with your team members, mentors, and stakeholders.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "03 Keep track of your success");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Find all your updates in your timeline and keep track of your success.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Build Strong Network");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Investor Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "01 One View Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Investors and Mentors can view all updates from startups they are interested in on one single screen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "02 Startup Traction Metrics");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Analyze a startup's traction metrics and make an informed investment decision.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "And so many more features coming soon.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_li_click_95_listener() {
              return ctx.scrollTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Press");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Blogs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Careers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "On Bolstart");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Q&A Forums ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "FaceBook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Terms of Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toggle == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toggle == 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]],
        styles: [".logo-header[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n  margin-right: 10px !important;\n}\n\n.bg-footer[_ngcontent-%COMP%] {\n  background-color: #f4f7fa;\n}\n\nh5[_ngcontent-%COMP%] {\n  color: #5a5a5a;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n}\n\n.razor[_ngcontent-%COMP%]:before, .razor[_ngcontent-%COMP%]:after {\n  box-shadow: 0 0.5px 0 black;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.divider[_ngcontent-%COMP%]:before, .divider[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0em;\n}\n\n.line[_ngcontent-%COMP%]:before, .line[_ngcontent-%COMP%]:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\na[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  color: var(--info) !important;\n}\n\n.google[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid;\n  color: black;\n  border-radius: 20px;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1% 10% 1% 10% !important;\n  margin: 0% !important;\n}\n\n.display[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n}\n\n.inner-wrap[_ngcontent-%COMP%] {\n  transition: transform 450ms;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  color: #645f88;\n}\n\n.login-second[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n.form-wrap[_ngcontent-%COMP%] {\n  margin-right: 25%;\n}\n\n.second-wrap[_ngcontent-%COMP%] {\n  background-color: #f4f7fa;\n  padding: 50px;\n  height: 36rem;\n  margin-top: 5rem;\n}\n\n.signUp-img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #969191;\n  height: 27rem;\n}\n\n.first-img[_ngcontent-%COMP%] {\n  height: 33rem;\n}\n\n.img-second[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #969191;\n}\n\n.img-third[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #969191;\n  height: 27rem;\n}\n\n.logo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.sign-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.third-wrap[_ngcontent-%COMP%] {\n  padding: 50px;\n  height: 48rem;\n}\n\n.fourth-wrap[_ngcontent-%COMP%] {\n  background-color: #f4f7fa;\n  padding: 50px;\n  height: 40rem;\n  margin-top: 5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n@media only screen and (max-width: 600px) {\n  .form-wrap[_ngcontent-%COMP%] {\n    margin-right: 0%;\n  }\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(19, 18, 18, 0.57) !important;\n}\n\n.outline[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #293266;\n  color: #293266;\n}\n\n.and-label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n@media only screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%] {\n    padding: 1% 3% 1% 3% !important;\n  }\n\n  .second-wrap[_ngcontent-%COMP%] {\n    background-color: #f4f7fa;\n    padding: 17px;\n    height: 26rem;\n    margin-top: 5rem;\n  }\n  .second-wrap[_ngcontent-%COMP%]   .col-5[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n  .second-wrap[_ngcontent-%COMP%]   .signUp-img[_ngcontent-%COMP%] {\n    height: 20rem;\n  }\n\n  .third-wrap[_ngcontent-%COMP%] {\n    height: 30rem;\n    font-size: 8px;\n    padding: 17px;\n  }\n  .third-wrap[_ngcontent-%COMP%]   .img-second[_ngcontent-%COMP%] {\n    height: 40%;\n  }\n\n  .fourth-wrap[_ngcontent-%COMP%] {\n    font-size: 8px;\n    padding: 13px;\n    height: 30rem;\n  }\n  .fourth-wrap[_ngcontent-%COMP%]   .img-third[_ngcontent-%COMP%] {\n    height: 20rem;\n  }\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 10px 5px 5px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0FBSUY7O0FBRkE7O0VBRUUsbUJBQUE7RUFDQSxXQUFBO0FBS0Y7O0FBRkU7RUFFRSwyQkFBQTtBQUlKOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURFO0VBRUUsV0FBQTtFQUNBLE9BQUE7QUFFSjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFFO0VBRUUsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsMkJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFKQTtFQUNFLG9DQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBU0Y7O0FBUEE7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUFZRjs7QUFWQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBYUY7O0FBWEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFjRjs7QUFaQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWVGOztBQWJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFnQkY7O0FBZEE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxVQUFBO0FBa0JGOztBQWhCQTtFQUNFO0lBQ0UsZ0JBQUE7RUFtQkY7QUFDRjs7QUFqQkE7RUFDRSx1REFBQTtBQW1CRjs7QUFqQkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQW9CRjs7QUFsQkE7RUFDRSxrQkFBQTtBQXFCRjs7QUFuQkE7RUFDRTtJQUNFLCtCQUFBO0VBc0JGOztFQXBCQTtJQUNFLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQXVCRjtFQXRCRTtJQUNFLGNBQUE7RUF3Qko7RUF0QkU7SUFDRSxhQUFBO0VBd0JKOztFQXJCQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFQXdCRjtFQXZCRTtJQUNFLFdBQUE7RUF5Qko7O0VBdEJBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VBeUJGO0VBeEJFO0lBQ0UsYUFBQTtFQTBCSjtBQUNGOztBQXZCQTtFQUNFLG9DQUFBO0FBeUJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taGVhZGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmE7XHJcbn1cclxuaDUge1xyXG4gIGNvbG9yOiAjNWE1YTVhO1xyXG59XHJcbmgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnksXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucmF6b3Ige1xyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVweCAwIGJsYWNrOyAvLyBDaHJvbWVcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGJsYWNrOyAvLyBTYWZhcmlcclxuICB9XHJcbn1cclxuLmRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcbi5saW5lIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMmVtIC0gMmVtO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwIDFlbTtcclxuICB9XHJcbn1cclxuYSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0taW5mbykgIWltcG9ydGFudDtcclxufVxyXG4uZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxJSAxMCUgMSUgMTAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlubmVyLXdyYXAge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0NTBtcztcclxufVxyXG4udGl0bGUtc2VjdGlvbiB7XHJcbiAgY29sb3I6ICM2NDVmODg7XHJcbn1cclxuLmxvZ2luLXNlY29uZCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS13cmFwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxufVxyXG4uc2Vjb25kLXdyYXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmE7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBoZWlnaHQ6IDM2cmVtO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuLnNpZ25VcC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUwLCAxNDUsIDE0NSk7XHJcbiAgaGVpZ2h0OiAyN3JlbTtcclxufVxyXG4uZmlyc3QtaW1nIHtcclxuICBoZWlnaHQ6IDMzcmVtO1xyXG59XHJcbi5pbWctc2Vjb25kIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MCwgMTQ1LCAxNDUpO1xyXG59XHJcbi5pbWctdGhpcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MCwgMTQ1LCAxNDUpO1xyXG4gIGhlaWdodDogMjdyZW07XHJcbn1cclxuLmxvZ28taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc2lnbi13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRoaXJkLXdyYXAge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgaGVpZ2h0OiA0OHJlbTtcclxufVxyXG4uZm91cnRoLXdyYXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmE7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBoZWlnaHQ6IDQwcmVtO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5mb3JtLXdyYXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICB9XHJcbn1cclxuaHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTkgMTggMTggLyA1NyUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLm91dGxpbmUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyOTMyNjY7XHJcbiAgY29sb3I6ICMyOTMyNjY7XHJcbn1cclxuLmFuZC1sYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDElIDMlIDElIDMlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zZWNvbmQtd3JhcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2ZhO1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICAgIGhlaWdodDogMjZyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgLmNvbC01IHtcclxuICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICB9XHJcbiAgICAuc2lnblVwLWltZyB7XHJcbiAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aGlyZC13cmFwIHtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgICAuaW1nLXNlY29uZCB7XHJcbiAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm91cnRoLXdyYXAge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIC5pbWctdGhpcmQge1xyXG4gICAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5saSB7XHJcbiAgcGFkZGluZzogMTBweCA1cHggNXB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _account_api_service__WEBPACK_IMPORTED_MODULE_5__["AccountApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "U897":
    /*!*************************************************************************!*\
      !*** ./src/app/components/account/new-profile/new-profile.component.ts ***!
      \*************************************************************************/

    /*! exports provided: NewProfileComponent */

    /***/
    function U897(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewProfileComponent", function () {
        return NewProfileComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_CONSTS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/CONSTS */
      "7EmX");
      /* harmony import */


      var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @cometchat-pro/chat */
      "mtpe");
      /* harmony import */


      var _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var bs_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! bs-stepper */
      "BYMX");
      /* harmony import */


      var bs_stepper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/common/validator */
      "GwNG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _account_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../account-api.service */
      "q4D8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["model"];

      function NewProfileComponent_small_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter First Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_small_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Middle Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_small_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Last Name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_117_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r38);
        }
      }

      function NewProfileComponent_div_117_small_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Month.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Birthday");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "select Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NewProfileComponent_div_117_option_6_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NewProfileComponent_div_117_small_7_Template, 2, 0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.monthList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.informationForm.get("month").invalid && ctx_r3.informationForm.get("month").touched);
        }
      }

      function NewProfileComponent_div_118_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r41);
        }
      }

      function NewProfileComponent_div_118_small_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Day.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "select", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "select Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NewProfileComponent_div_118_option_5_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NewProfileComponent_div_118_small_6_Template, 2, 0, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.dayList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.informationForm.get("day").invalid && ctx_r4.informationForm.get("day").touched);
        }
      }

      function NewProfileComponent_small_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Short Headline.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_option_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42);
        }
      }

      function NewProfileComponent_small_137_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_option_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r43.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r43.name, " ");
        }
      }

      function NewProfileComponent_small_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Country.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_option_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r44.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r44.name, " ");
        }
      }

      function NewProfileComponent_small_154_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select States/Union territories.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_option_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r45.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r45.name, " ");
        }
      }

      function NewProfileComponent_small_162_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Location.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_small_168_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add About Information..");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_181_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_div_181_Template_i_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

            var i_r47 = ctx.index;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r48.deleteSchool(i_r47);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r46.institutionLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r46.institutionName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r46.stream, " ", item_r46.startDate, "-", item_r46.endDate, "");
        }
      }

      function NewProfileComponent_div_198_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_div_198_Template_i_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);

            var i_r51 = ctx.index;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r52.deleteExp(i_r51);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r50.companyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r50.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", item_r50.title, " ", item_r50.startYear, "-", item_r50.endYear, "");
        }
      }

      function NewProfileComponent_button_201_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_button_201_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r54.addUserToCometChat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Verify Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_button_202_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \xA0\xA0Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_small_223_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select School Name / college.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_224_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_div_224_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59);

            var item_r57 = ctx.$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r58.selectItem(1, item_r57);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\xA0", item_r57.name, "");
        }
      }

      function NewProfileComponent_div_224_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewProfileComponent_div_224_li_1_Template, 3, 1, "li", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r20.searchList);
        }
      }

      function NewProfileComponent_div_230_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_div_230_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

            var item_r61 = ctx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r62.selectItem(2, item_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r61);
        }
      }

      function NewProfileComponent_div_230_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewProfileComponent_div_230_li_1_Template, 2, 1, "li", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.searchList);
        }
      }

      function NewProfileComponent_div_236_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_div_236_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

            var item_r65 = ctx.$implicit;

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r66.selectItem(3, item_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r65 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r65);
        }
      }

      function NewProfileComponent_div_236_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewProfileComponent_div_236_li_1_Template, 2, 1, "li", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.searchList);
        }
      }

      function NewProfileComponent_option_244_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r68 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r68);
        }
      }

      function NewProfileComponent_option_251_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r69);
        }
      }

      function NewProfileComponent_small_287_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Tittle.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_288_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Employment Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Employment Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Full-time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Part-Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Self-Employed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Freelance");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Trainee");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Internship");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_small_298_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Company.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_div_299_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_div_299_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

            var item_r71 = ctx.$implicit;

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r72.selectItem(4, item_r71);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r71.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\xA0", item_r71.name, "");
        }
      }

      function NewProfileComponent_div_299_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewProfileComponent_div_299_li_1_Template, 3, 2, "li", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r28.searchList);
        }
      }

      function NewProfileComponent_small_307_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Location.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NewProfileComponent_option_322_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r74 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r74);
        }
      }

      function NewProfileComponent_option_328_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r75);
        }
      }

      function NewProfileComponent_div_329_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r77);
        }
      }

      function NewProfileComponent_div_329_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "End Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select End year");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NewProfileComponent_div_329_option_8_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.yeaList);
        }
      }

      function NewProfileComponent_div_330_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r79 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r79);
        }
      }

      function NewProfileComponent_div_330_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "select", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "End Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NewProfileComponent_div_330_option_5_Template, 2, 2, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r33.monthList);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "selected": a0
        };
      };

      var NewProfileComponent = /*#__PURE__*/function () {
        function NewProfileComponent(fb, router, route, accountService, toastr) {
          _classCallCheck(this, NewProfileComponent);

          this.fb = fb;
          this.router = router;
          this.route = route;
          this.accountService = accountService;
          this.toastr = toastr;
          this.showList = 0;
          this.type = 2;
          this.monthList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].month;
          this.dayList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].day;
          this.stateList = [];
          this.cityList = [];
          this.industryList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].industries;
          this.countryList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].country;
          this.yeaList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].years();
          this.schooleList = [];
          this.experianceList = [];
          this.searchList = [];
          this.isLoader = false;
          this.dummyIcon = "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/unversity.png";
        }

        _createClass(NewProfileComponent, [{
          key: "next",
          value: function next() {
            this.stepper.next();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return false;
          }
        }, {
          key: "selectType",
          value: function selectType(value) {
            /* Investors and StartUP   type = 1*/

            /* Freelancer , Mentor And Start Up Enthusiast  type = 2*/
            this.selectedType = value;

            switch (this.selectedType) {
              case 'Startups':
                this.type = 1;
                this.roleType = 1;
                break;

              case 'Investors':
                this.type = 1;
                this.roleType = 2;
                break;

              case 'Mentor':
                this.type = 2;
                this.roleType = 3;
                break;

              case 'Freelancer':
                this.type = 2;
                this.roleType = 4;
                break;

              case 'Startup Enthusiast':
                this.type = 2;
                this.roleType = 5;
                break;
            }

            this.initializedInfoForm();
            this.informationForm.patchValue({
              id: this.userInfo.id,
              firstName: this.userInfo.firstName,
              lastName: this.userInfo.lastName
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getParams();
            this.initializeEduForm();
            this.initializeExpForm();
            this.initializedInfoForm();
            this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_5___default.a(document.querySelector('#stepper1'), {
              linear: false,
              animation: true
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _this9 = this;

            this.route.queryParams.subscribe(function (params) {
              _this9.getUserInfo(params.userId);
            });
          }
          /* ================ UserData ======================*/

        }, {
          key: "getUserInfo",
          value: function getUserInfo(userId) {
            var _this10 = this;

            this.accountService.getUserInfoByID(userId, userId).subscribe(function (res) {
              if (res.success) {
                _this10.userInfo = res.data;

                if (_this10.userInfo.isEmailVerified == 'true') {
                  _this10.model.nativeElement.click();
                }
              } else {
                _this10.toastr.error(res.message);

                _this10.router.navigate(['./account/login']);
              }
            });
          }
          /* ================ Information Form ======================*/

        }, {
          key: "initializedInfoForm",
          value: function initializedInfoForm() {
            this.informationForm = this.fb.group({
              id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].onlyAlphabetRegex)]],
              middleNmae: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].onlyAlphabetRegex)]],
              lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].onlyAlphabetRegex)]],
              headline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              industry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              state: [''],
              location: [''],
              country: [''],
              month: [''],
              day: [''],
              aboutMe: ['']
            });
          }
        }, {
          key: "infoSubmit",
          value: function infoSubmit() {
            this.informationForm.markAllAsTouched();

            if (this.informationForm.valid) {
              if (this.type == 1) {
                this.stepper.to(3);
              } else {
                this.stepper.to(4);
              }
            }
          }
          /* ================= Education Form =========================*/

        }, {
          key: "initializeEduForm",
          value: function initializeEduForm() {
            this.educationForm = this.fb.group({
              institutionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              institutionLogo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              institutionName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              activities: [''],
              degree: [''],
              endDate: [''],
              grade: [''],
              societies: [''],
              startDate: [''],
              stream: [''],
              userId: ['']
            });
          }
        }, {
          key: "eduSubmit",
          value: function eduSubmit() {
            this.educationForm.markAllAsTouched();

            if (this.educationForm.valid) {
              this.schooleList.push(this.educationForm.value);
              jquery__WEBPACK_IMPORTED_MODULE_0__('#eductionModel').hide();
              jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-backdrop').hide();
            }
          }
          /* =============== Experiance Form ============================*/

        }, {
          key: "initializeExpForm",
          value: function initializeExpForm() {
            this.experianceForm = this.fb.group({
              companyId: [''],
              companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              companyLogo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              startYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              startMonth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              jobLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              isWorking: [false],
              endMonth: [''],
              endYear: [''],
              description: ['']
            });
          }
        }, {
          key: "onsetValue",
          value: function onsetValue() {
            this.experianceForm.patchValue({
              companyLogo: this.dummyIcon,
              userId: this.userInfo.id
            });
          }
        }, {
          key: "expSubmit",
          value: function expSubmit() {
            this.onsetValue();
            this.experianceForm.markAllAsTouched();

            if (this.experianceForm.valid) {
              var obj = {
                companyId: this.experianceForm.value.companyId,
                companyName: this.experianceForm.value.companyName,
                companyLogo: this.experianceForm.value.companyLogo,
                description: this.experianceForm.value.description,
                jobLocation: this.experianceForm.value.jobLocation,
                endMonth: this.experianceForm.value.endMonth,
                endYear: this.experianceForm.value.endYear,
                isWorking: this.experianceForm.value.isWorking,
                startMonth: this.experianceForm.value.startMonth,
                startYear: this.experianceForm.value.startYear,
                title: this.experianceForm.value.title,
                userId: this.experianceForm.value.userId
              };
              this.experianceList.push(obj);
              jquery__WEBPACK_IMPORTED_MODULE_0__('#experianceModel').hide();
              jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-backdrop').hide();
            }
          }
        }, {
          key: "verifyAccount",
          value: function verifyAccount() {
            var _this11 = this;

            var obj = {
              adhaarCard: this.informationForm.value.adhar,
              bio: this.informationForm.value.aboutMe,
              day: this.informationForm.value.day,
              education: this.schooleList,
              experience: this.experianceList,
              firstName: this.informationForm.value.firstName,
              headline: this.informationForm.value.headline,
              gst: this.informationForm.value.gst,
              id: this.userInfo.id,
              isEmailVerified: "true",
              lastName: this.informationForm.value.lastName,
              location: this.informationForm.value.location,
              country: this.informationForm.value.country,
              month: this.informationForm.value.month,
              state: this.informationForm.value.state,
              typeOfUser: this.roleType,
              industryName: this.informationForm.value.industry,
              uid: this.userInfo.isPriority == 'true' ? this.userInfo.firstName.toLowerCase() + this.userInfo.id : ""
            };
            this.accountService.verifyAccount(obj).subscribe(function (res) {
              _this11.isLoader = false;

              if (res.success) {
                _this11.toastr.success("User Verified Successfully");

                _this11.router.navigate(['/account/login']);

                setTimeout(function () {
                  location.reload();
                }, 0.100);
              }
            });
          }
        }, {
          key: "addUserToCometChat",
          value: function addUserToCometChat() {
            var _this12 = this;

            this.isLoader = true;

            if (this.userInfo.isPriority == 'true') {
              var user = new _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__["CometChat"].User(this.userInfo.firstName.toLowerCase() + this.userInfo.id);
              user.setName(this.userInfo.firstName + " " + this.userInfo.lastName);
              user.setAvatar("https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/profile_avater.png");

              _cometchat_pro_chat__WEBPACK_IMPORTED_MODULE_4__["CometChat"].createUser(user, src_CONSTS__WEBPACK_IMPORTED_MODULE_3__["COMETCHAT_CONSTANTS"].AUTH_KEY).then(function (user) {
                _this12.verifyAccount();
              }, function (error) {
                _this12.isLoader = false;
              });
            } else {
              this.verifyAccount();
            }
          }
          /* =============== Inpuut Focus ============================ */

        }, {
          key: "onFocus",
          value: function onFocus(value) {
            switch (value) {
              case 1:
                this.showList = 1;
                break;

              case 2:
                this.showList = 2;
                break;

              case 3:
                this.showList = 3;
                break;

              case 4:
                this.showList = 4;
                break;
            }
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            var _this13 = this;

            setTimeout(function () {
              _this13.showList = 0;
              _this13.searchList = [];
            }, 500);
          }
        }, {
          key: "search",
          value: function search(event) {
            switch (this.showList) {
              case 1:
                this.getUniversityList();
                break;

              case 2:
                this.searchList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].degree;
                break;

              case 3:
                this.searchList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_6__["common"].field;
                break;

              case 4:
                this.getAllCompanyList(event.target.value);
                break;
            }
          }
        }, {
          key: "selectItem",
          value: function selectItem(event, item) {
            switch (event) {
              case 1:
                this.educationForm.patchValue({
                  institutionId: item.id,
                  institutionLogo: this.dummyIcon,
                  institutionName: item.name,
                  userId: this.userInfo.id
                });
                this.searchList = [];
                break;

              case 2:
                this.educationForm.patchValue({
                  degree: item
                });
                this.searchList = [];
                break;

              case 3:
                this.educationForm.patchValue({
                  stream: item
                });
                this.searchList = [];
                break;

              case 4:
                this.experianceForm.patchValue({
                  companyId: item.id,
                  companyName: item.name,
                  companyLogo: item.logo,
                  userId: this.userInfo.id
                });
                break;
            }

            this.showList = 0;
          }
        }, {
          key: "deleteSchool",
          value: function deleteSchool(index) {
            this.schooleList.splice(index, 1);
          }
        }, {
          key: "deleteExp",
          value: function deleteExp(index) {
            this.experianceList.splice(index, 1);
          }
          /* ===================== country select  =========================== */

        }, {
          key: "selectCountry",
          value: function selectCountry() {
            var _this14 = this;

            var country = this.informationForm.value.country;
            this.countryList.map(function (res) {
              if (res.name == country) {
                _this14.getStateList(res.id);
              }
            });
          }
        }, {
          key: "getStateList",
          value: function getStateList(countryID) {
            var _this15 = this;

            this.accountService.getStateListBasedOnCountry(countryID).subscribe(function (res) {
              if (res.success) {
                _this15.stateList = res.data;
              }
            });
          }
        }, {
          key: "selectState",
          value: function selectState() {
            var _this16 = this;

            var state = this.informationForm.value.state;
            this.stateList.map(function (res) {
              if (res.name == state) {
                _this16.getCityList(res.id);
              }
            });
          }
        }, {
          key: "getCityList",
          value: function getCityList(stateID) {
            var _this17 = this;

            this.accountService.getCityListBasedOnState(stateID).subscribe(function (res) {
              if (res.success) {
                _this17.cityList = res.data;
              }
            });
          }
          /* ==================== University ====================== */

        }, {
          key: "getUniversityList",
          value: function getUniversityList() {
            var _this18 = this;

            this.accountService.getUniversityList().subscribe(function (res) {
              if (res.success) {
                _this18.searchList = res.data;
              }
            });
          }
          /* =============== Company List =============== */

        }, {
          key: "getAllCompanyList",
          value: function getAllCompanyList(keyWord) {
            var _this19 = this;

            this.accountService.getAllCompanyList(keyWord).subscribe(function (res) {
              if (res.success) {
                _this19.searchList = res.data;
              }
            });
          }
          /* ========================= */

        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['/account/login']);
            setTimeout(function () {
              location.reload();
            }, 100);
          }
        }]);

        return NewProfileComponent;
      }();

      NewProfileComponent.ɵfac = function NewProfileComponent_Factory(t) {
        return new (t || NewProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_api_service__WEBPACK_IMPORTED_MODULE_8__["AccountApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]));
      };

      NewProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NewProfileComponent,
        selectors: [["app-new-profile"]],
        viewQuery: function NewProfileComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.model = _t.first);
          }
        },
        decls: 356,
        vars: 65,
        consts: [[1, "container"], ["src", "assets/img/bslogo_1.png", "alt", "", 1, "img-fluid", "mb-4", "d-block", "m-3", 2, "height", "50px", "width", "190px"], ["id", "stepper1", 1, "bs-stepper"], [1, "bs-stepper-header", "m-4"], ["data-target", "#test-l-1", 1, "step"], [1, "step-trigger"], [1, "bs-stepper-circle"], [1, "bs-stepper-label"], [1, "line"], ["data-target", "#test-l-2", 1, "step"], [1, "step-trigger", 3, "disabled"], [1, "line", 3, "hidden"], [3, "hidden"], ["data-target", "#test-l-4", 1, "step"], ["data-target", "#test-l-3", 1, "step"], [1, "bs-stepper-content"], [1, "text-center", "mb-5"], [1, "row"], [1, "col-md-2"], [1, "col-md-8"], ["id", "test-l-1", 1, "card", "content"], [1, "card-header"], [1, "card-body", "text-center"], [1, "col-md-4"], [1, "card", "type", 3, "ngClass", "click"], [1, "card-body"], [1, "fa", "fa-building"], [1, "fa", "fa-sitemap"], [1, "fa", "fa-binoculars"], [1, "fa", "fa-briefcase"], [1, "fa", "fa-black-tie"], [1, "text-right"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], ["id", "test-l-2", 1, "card", "content"], [3, "formGroup", "submit"], [1, "col", "col-md-4", "p-2"], [1, "mandatory"], ["type", "text", "placeholder", "eg. First Name", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "eg. Middle Name", "formControlName", "middleNmae", 1, "form-control"], ["type", "text", "placeholder", "eg. Last Name", "formControlName", "lastName", 1, "form-control"], ["class", "col col-md-4 p-2", 4, "ngIf"], [1, "col", "col-md-12", "p-2"], ["type", "text", "placeholder", "eg. Assistant manager", "formControlName", "headline", 1, "form-control"], ["formControlName", "industry", 1, "form-control"], ["value", "", "selected", "", "hidden", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "country", 1, "form-control", 3, "change"], ["formControlName", "state", 1, "form-control", 3, "change"], ["formControlName", "location", 1, "form-control"], ["rows", "4", "type", "text", "placeholder", "eg. About Me", "formControlName", "aboutMe", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-primary"], ["id", "test-l-3", 1, "card", "content"], [1, "add-icon"], ["aria-hidden", "true", "data-target", "#eductionModel", "data-toggle", "modal", 1, "fa", "fa-plus-circle"], [1, "list-group"], ["class", "row", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"], ["id", "test-l-4", 1, "card", "content"], ["aria-hidden", "true", "data-target", "#experianceModel", "data-toggle", "modal", 1, "fa", "fa-plus-circle"], [1, "text-right", 2, "position", "absolute", "bottom", "-70%", "right", "0px"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 4, "ngIf"], ["id", "eductionModel", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-Custheader", "p-2"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body"], [1, "p-2", 3, "formGroup", "submit"], [1, "form-control"], [2, "width", "20px", 3, "src"], ["type", "text", "placeholder", "eg. shivaji university", "formControlName", "institutionName", 1, "school", 3, "blur", "focus", "keyup"], ["class", "card list", 4, "ngIf"], ["type", "text", "placeholder", "eg. Bachelor", "formControlName", "degree", 1, "form-control", 3, "blur", "focus", "keyup"], ["class", "card", 4, "ngIf"], ["type", "text", "placeholder", "eg. Business", "formControlName", "stream", 1, "form-control", 3, "blur", "focus", "keyup"], [1, "col", "col-xl-6", "p-2"], ["formControlName", "startDate", 1, "form-control"], ["value", "", "selected", "", "disabled", "", "hidden", ""], ["formControlName", "endDate", 1, "form-control"], ["type", "text", "formControlName", "grade", "placeholder", "Grade", 1, "form-control"], ["type", "text", "formControlName", "activities", "placeholder", "Activities and societies", 1, "form-control"], ["formControlName", "activities", "type", "text", "placeholder", "Description", 1, "form-control"], ["id", "experianceModel", "role", "dialog", 1, "modal", "fade"], ["type", "text", "placeholder", "eg. Sales Manager", "formControlName", "title", 1, "form-control"], ["class", "row", 4, "ngIf"], ["type", "text", "placeholder", "eg. Tablabs Technology", "formControlName", "companyName", 1, "school", 3, "blur", "focus", "keyup"], ["type", "text", "placeholder", "Location", "formControlName", "jobLocation", 1, "form-control"], ["type", "checkbox", "formControlName", "isWorking", 2, "width", "30px"], [1, "col", "col-xl-3", "p-2"], ["formControlName", "startYear", 1, "form-control"], [1, "col", "col-xl-3", "p-3"], ["formControlName", "startMonth", 1, "form-control"], ["class", "col col-xl-3 p-2", 4, "ngIf"], ["class", "col col-xl-3 p-3", 4, "ngIf"], ["formControlName", "description", "type", "text", "placeholder", "Description", 1, "form-control"], ["id", "verifyModel", "data-backdrop", "static", "data-keyboard", "false", "role", "dialog", 1, "modal", "fade"], ["content", ""], [1, "modal-body", "text-center"], ["src", "assets/img/tenor.gif"], [1, "btn", "btn-primary", 3, "click"], ["hidden", "", "type", "button", "data-toggle", "modal", "data-target", "#verifyModel", 1, "btn", "btn-primary"], ["model", ""], [1, "text-danger"], ["formControlName", "month", 1, "form-control"], [3, "value"], ["formControlName", "day", 1, "form-control"], [1, "col-xl-1", "pt-1"], [2, "width", "40px", 3, "src"], [1, "col-xl-10"], [1, "col-xl-1"], [1, "fa", "fa-trash", 3, "click"], [1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"], [1, "card", "list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["src", "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/unversity.png", 2, "width", "25px"], [1, "card"], ["selected", "", "disabled", "", "hidden", ""], ["value", "Full-time"], ["value", "Part-Time"], ["value", "Self-Employed"], ["value", "Freelance"], ["value", "Trainee"], ["value", "Internship"], [2, "width", "25px", 3, "src"], ["formControlName", "endYear", 1, "form-control"], ["formControlName", "endMonth", 1, "form-control"]],
        template: function NewProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Experiance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Experiance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Your Profile helps you discover new people and opportunities");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Select Profile Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_div_click_55_listener() {
              return ctx.selectType("Startups");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " \xA0 Startup Founder");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_div_click_61_listener() {
              return ctx.selectType("Investors");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\xA0Investor");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_div_click_67_listener() {
              return ctx.selectType("Mentor");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\xA0 Mentor");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_div_click_74_listener() {
              return ctx.selectType("Freelancer");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " \xA0 Freelancer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_div_click_80_listener() {
              return ctx.selectType("Startup Enthusiast");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " \xA0 Startup Enthusiast-Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_button_click_87_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "form", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function NewProfileComponent_Template_form_submit_95_listener() {
              return ctx.infoSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "First Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, NewProfileComponent_small_103_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Middle Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, NewProfileComponent_small_108_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Last Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, NewProfileComponent_small_115_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, NewProfileComponent_div_117_Template, 8, 2, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, NewProfileComponent_div_118_Template, 7, 2, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Headline ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, NewProfileComponent_small_126_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Industry ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "select", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "select industry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, NewProfileComponent_option_136_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, NewProfileComponent_small_137_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "select", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewProfileComponent_Template_select_change_142_listener() {
              return ctx.selectCountry();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "select country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, NewProfileComponent_option_145_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, NewProfileComponent_small_146_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "States/Union territories");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "select", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NewProfileComponent_Template_select_change_150_listener() {
              return ctx.selectState();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "select States/Union territory ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, NewProfileComponent_option_153_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](154, NewProfileComponent_small_154_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "City/Location/Landmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "select", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "select States/Union territory ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, NewProfileComponent_option_161_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, NewProfileComponent_small_162_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "textarea", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, NewProfileComponent_small_168_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Education Detail ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](181, NewProfileComponent_div_181_Template, 12, 5, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_a_click_184_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Skip");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_button_click_187_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Experience Detail ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](198, NewProfileComponent_div_198_Template, 12, 5, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](201, NewProfileComponent_button_201_Template, 2, 0, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](202, NewProfileComponent_button_202_Template, 3, 0, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "h6", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Add Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "form", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function NewProfileComponent_Template_form_submit_213_listener() {
              return ctx.eduSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "School Name / college ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "input", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function NewProfileComponent_Template_input_blur_222_listener() {
              return ctx.onBlur();
            })("focus", function NewProfileComponent_Template_input_focus_222_listener() {
              return ctx.onFocus(1);
            })("keyup", function NewProfileComponent_Template_input_keyup_222_listener($event) {
              return ctx.search($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](223, NewProfileComponent_small_223_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](224, NewProfileComponent_div_224_Template, 2, 1, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Degree");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "input", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function NewProfileComponent_Template_input_blur_229_listener() {
              return ctx.onBlur();
            })("focus", function NewProfileComponent_Template_input_focus_229_listener() {
              return ctx.onFocus(2);
            })("keyup", function NewProfileComponent_Template_input_keyup_229_listener($event) {
              return ctx.search($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](230, NewProfileComponent_div_230_Template, 2, 1, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "input", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function NewProfileComponent_Template_input_blur_235_listener() {
              return ctx.onBlur();
            })("focus", function NewProfileComponent_Template_input_focus_235_listener() {
              return ctx.onFocus(3);
            })("keyup", function NewProfileComponent_Template_input_keyup_235_listener($event) {
              return ctx.search($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](236, NewProfileComponent_div_236_Template, 2, 1, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Start Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "select", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "option", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Select Start year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](244, NewProfileComponent_option_244_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "End Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "select", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "option", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Select End year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](251, NewProfileComponent_option_251_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Grade");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "input", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Activities and societies");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "textarea", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "textarea", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "h6", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Add Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "form", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function NewProfileComponent_Template_form_submit_279_listener() {
              return ctx.expSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "input", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](287, NewProfileComponent_small_287_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](288, NewProfileComponent_div_288_Template, 19, 0, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Company Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "input", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function NewProfileComponent_Template_input_blur_297_listener() {
              return ctx.onBlur();
            })("focus", function NewProfileComponent_Template_input_focus_297_listener() {
              return ctx.onFocus(4);
            })("keyup", function NewProfileComponent_Template_input_keyup_297_listener($event) {
              return ctx.search($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](298, NewProfileComponent_small_298_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](299, NewProfileComponent_div_299_Template, 2, 1, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "input", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](307, NewProfileComponent_small_307_Template, 2, 0, "small", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](310, "input", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "I am currently Working");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Start Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "select", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "option", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Select Start year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](322, NewProfileComponent_option_322_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "select", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Start Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](328, NewProfileComponent_option_328_Template, 2, 2, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](329, NewProfileComponent_div_329_Template, 9, 1, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](330, NewProfileComponent_div_330_Template, 6, 1, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "textarea", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 99, 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](342, "img", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Hello ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, " You already verified your account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewProfileComponent_Template_button_click_352_listener() {
              return ctx.goToLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Back to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "button", 104, 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.selectedType == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.type != 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.type != 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.type != 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.type != 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.informationForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.type != 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.type != 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](55, _c1, ctx.selectedType == "Startups"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](57, _c1, ctx.selectedType == "Investors"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](59, _c1, ctx.selectedType == "Mentor"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](61, _c1, ctx.selectedType == "Freelancer"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](63, _c1, ctx.selectedType == "Startup Enthusiast"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.selectedType == undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.informationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("firstName").invalid && ctx.informationForm.get("firstName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("middleNmae").invalid && ctx.informationForm.get("middleNmae").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("lastName").invalid && ctx.informationForm.get("lastName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("headline").invalid && ctx.informationForm.get("headline").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.industryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("industry").invalid && ctx.informationForm.get("industry").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("country").invalid && ctx.informationForm.get("country").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("state").invalid && ctx.informationForm.get("state").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cityList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("location").invalid && ctx.informationForm.get("location").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.informationForm.get("aboutMe").invalid && ctx.informationForm.get("aboutMe").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.schooleList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.experianceList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.educationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.educationForm.value.institutionLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.educationForm.get("institutionName").invalid && ctx.educationForm.get("institutionName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showList == 1 && ctx.searchList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showList == 2 && ctx.searchList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showList == 3 && ctx.searchList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.yeaList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.yeaList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.experianceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.experianceForm.get("title").invalid && ctx.experianceForm.get("title").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.experianceForm.value.companyLogo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.experianceForm.get("companyName").invalid && ctx.experianceForm.get("companyName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showList == 4 && ctx.searchList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.experianceForm.get("jobLocation").invalid && ctx.experianceForm.get("jobLocation").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.yeaList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monthList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.experianceForm.value.isWorking);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.experianceForm.value.isWorking);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.userInfo == null ? null : ctx.userInfo.firstName, " ", ctx.userInfo == null ? null : ctx.userInfo.lastName, "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
        styles: ["@media (max-width: 520px) {\n  .bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 5px;\n    font-size: 12px !important;\n  }\n}\n.list[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow-y: auto;\n}\n.type[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--primary);\n  color: var(--primary);\n  cursor: pointer;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n  color: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-y: auto;\n}\n.line[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, blue 50%, darkgray 50%);\n  background-size: 200% 100%;\n  background-position: bottom right;\n  transition: all 0.7s ease-out;\n}\n.line1[_ngcontent-%COMP%]:active {\n  min-height: 2px;\n  background-position: bottom left;\n}\n.line2[_ngcontent-%COMP%]:active {\n  min-height: 2px;\n  background-position: bottom left;\n}\n.line3[_ngcontent-%COMP%]:active {\n  min-height: 2px;\n  background-position: bottom left;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 750px;\n    margin: 1.75rem auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L25ldy1wcm9maWxlL25ldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQUE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBR0Y7QUFEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUlGO0FBRkE7RUFDRSw2REFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUtGO0FBSEE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFNRjtBQUpBO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FBT0Y7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQVFGO0FBTkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esb0JBQUE7RUFTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L25ldy1wcm9maWxlL25ldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmJzLXN0ZXBwZXIgLnN0ZXAtdHJpZ2dlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5saXN0IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnR5cGU6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ubGluZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibHVlIDUwJSwgZGFya2dyYXkgNTAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbn1cclxuLmxpbmUxOmFjdGl2ZSB7XHJcbiAgbWluLWhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xyXG59XHJcbi5saW5lMjphY3RpdmUge1xyXG4gIG1pbi1oZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcclxufVxyXG4ubGluZTM6YWN0aXZlIHtcclxuICBtaW4taGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-new-profile',
            templateUrl: './new-profile.component.html',
            styleUrls: ['./new-profile.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _account_api_service__WEBPACK_IMPORTED_MODULE_8__["AccountApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
          }];
        }, {
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['model']
          }]
        });
      })();
      /***/

    },

    /***/
    "ahC7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js ***!
      \*******************************************************************************************/

    /*! exports provided: AmazonLoginProvider, BaseLoginProvider, DummyLoginProvider, FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialLoginModule, SocialUser, VKLoginProvider */

    /***/
    function ahC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmazonLoginProvider", function () {
        return AmazonLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseLoginProvider", function () {
        return BaseLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DummyLoginProvider", function () {
        return DummyLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function () {
        return FacebookLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function () {
        return GoogleLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MicrosoftLoginProvider", function () {
        return MicrosoftLoginProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialAuthService", function () {
        return SocialAuthService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function () {
        return SocialLoginModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialUser", function () {
        return SocialUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VKLoginProvider", function () {
        return VKLoginProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var BaseLoginProvider = /*#__PURE__*/function () {
        function BaseLoginProvider() {
          _classCallCheck(this, BaseLoginProvider);
        }

        _createClass(BaseLoginProvider, [{
          key: "loadScript",
          value: function loadScript(id, src, onload) {
            var parentElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            // get document if platform is only browser
            if (typeof document !== 'undefined' && !document.getElementById(id)) {
              var signInJS = document.createElement('script');
              signInJS.async = true;
              signInJS.src = src;
              signInJS.onload = onload;

              if (!parentElement) {
                parentElement = document.head;
              }

              parentElement.appendChild(signInJS);
            }
          }
        }]);

        return BaseLoginProvider;
      }();

      var SocialUser = function SocialUser() {
        _classCallCheck(this, SocialUser);
      };

      var GoogleLoginProvider = /*#__PURE__*/function (_BaseLoginProvider) {
        _inherits(GoogleLoginProvider, _BaseLoginProvider);

        var _super = _createSuper(GoogleLoginProvider);

        function GoogleLoginProvider(clientId) {
          var _this20;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'email'
          };

          _classCallCheck(this, GoogleLoginProvider);

          _this20 = _super.call(this);
          _this20.clientId = clientId;
          _this20.initOptions = initOptions;
          return _this20;
        }

        _createClass(GoogleLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this21 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this21.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', function () {
                  gapi.load('auth2', function () {
                    _this21.auth2 = gapi.auth2.init(Object.assign(Object.assign({}, _this21.initOptions), {
                      client_id: _this21.clientId
                    }));

                    _this21.auth2.then(function () {
                      resolve();
                    })["catch"](function (err) {
                      reject(err);
                    });
                  });
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus(loginStatusOptions) {
            var _this22 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), loginStatusOptions);
            return new Promise(function (resolve, reject) {
              if (_this22.auth2.isSignedIn.get()) {
                var user = new SocialUser();

                var profile = _this22.auth2.currentUser.get().getBasicProfile();

                var authResponse = _this22.auth2.currentUser.get().getAuthResponse(true); // get complete authResponse object


                user.id = profile.getId();
                user.name = profile.getName();
                user.email = profile.getEmail();
                user.photoUrl = profile.getImageUrl();
                user.firstName = profile.getGivenName();
                user.lastName = profile.getFamilyName();
                user.response = authResponse;

                var resolveUser = function resolveUser(authResponse) {
                  user.authToken = authResponse.access_token;
                  user.idToken = authResponse.id_token;
                  resolve(user);
                };

                if (options.refreshToken) {
                  _this22.auth2.currentUser.get().reloadAuthResponse().then(resolveUser);
                } else {
                  var _authResponse = _this22.auth2.currentUser.get().getAuthResponse(true);

                  resolveUser(_authResponse);
                }
              } else {
                reject("No user is currently logged in with ".concat(GoogleLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var _this23 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              var offlineAccess = options && options.offline_access;
              var promise = !offlineAccess ? _this23.auth2.signIn(signInOptions) : _this23.auth2.grantOfflineAccess(signInOptions);
              promise.then(function (response) {
                var user = new SocialUser();

                if (response && response.code) {
                  user.authorizationCode = response.code;
                } else {
                  var profile = _this23.auth2.currentUser.get().getBasicProfile();

                  var authResponse = _this23.auth2.currentUser.get().getAuthResponse(true);

                  var token = authResponse.access_token;
                  var backendToken = authResponse.id_token;
                  user.id = profile.getId();
                  user.name = profile.getName();
                  user.email = profile.getEmail();
                  user.photoUrl = profile.getImageUrl();
                  user.firstName = profile.getGivenName();
                  user.lastName = profile.getFamilyName();
                  user.authToken = token;
                  user.idToken = backendToken;
                  user.response = authResponse;
                }

                resolve(user);
              }, function (closed) {
                reject(closed);
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              var signOutPromise;

              if (revoke) {
                signOutPromise = _this24.auth2.disconnect();
              } else {
                signOutPromise = _this24.auth2.signOut();
              }

              signOutPromise.then(function (err) {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              })["catch"](function (err) {
                reject(err);
              });
            });
          }
        }]);

        return GoogleLoginProvider;
      }(BaseLoginProvider);

      GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';
      /**
       * The service encapsulating the social login functionality. Exposes methods like
       * `signIn`, `signOut`. Also, exposes an `authState` `Observable` that one can
       * subscribe to get the current logged in user information.
       *
       * @dynamic
       */

      var SocialAuthService = /*#__PURE__*/function () {
        /**
         * @param config A `SocialAuthServiceConfig` object or a `Promise` that resolves to a `SocialAuthServiceConfig` object
         */
        function SocialAuthService(config) {
          var _this25 = this;

          _classCallCheck(this, SocialAuthService);

          this.providers = new Map();
          this.autoLogin = false;
          this._user = null;
          this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          /* Consider making this an enum comprising LOADING, LOADED, FAILED etc. */

          this.initialized = false;
          this._initState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          if (config instanceof Promise) {
            config.then(function (config) {
              _this25.initialize(config);
            });
          } else {
            this.initialize(config);
          }
        }
        /** An `Observable` that one can subscribe to get the current logged in user information */


        _createClass(SocialAuthService, [{
          key: "authState",
          get: function get() {
            return this._authState.asObservable();
          }
          /** An `Observable` to communicate the readiness of the service and associated login providers */

        }, {
          key: "initState",
          get: function get() {
            return this._initState.asObservable();
          }
        }, {
          key: "initialize",
          value: function initialize(config) {
            var _this26 = this;

            this.autoLogin = config.autoLogin !== undefined ? config.autoLogin : false;
            var _config$onError = config.onError,
                onError = _config$onError === void 0 ? console.error : _config$onError;
            config.providers.forEach(function (item) {
              _this26.providers.set(item.id, item.provider);
            });
            Promise.all(Array.from(this.providers.values()).map(function (provider) {
              return provider.initialize();
            })).then(function () {
              if (_this26.autoLogin) {
                var loginStatusPromises = [];
                var loggedIn = false;

                _this26.providers.forEach(function (provider, key) {
                  var promise = provider.getLoginStatus();
                  loginStatusPromises.push(promise);
                  promise.then(function (user) {
                    user.provider = key;
                    _this26._user = user;

                    _this26._authState.next(user);

                    loggedIn = true;
                  })["catch"](console.debug);
                });

                Promise.all(loginStatusPromises)["catch"](function () {
                  if (!loggedIn) {
                    _this26._user = null;

                    _this26._authState.next(null);
                  }
                });
              }
            })["catch"](function (error) {
              onError(error);
            })["finally"](function () {
              _this26.initialized = true;

              _this26._initState.next(_this26.initialized);

              _this26._initState.complete();
            });
          }
        }, {
          key: "refreshAuthToken",
          value: function refreshAuthToken(providerId) {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              if (!_this27.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else if (providerId !== GoogleLoginProvider.PROVIDER_ID) {
                reject(SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);
              } else {
                var providerObject = _this27.providers.get(providerId);

                if (providerObject) {
                  providerObject.getLoginStatus({
                    refreshToken: true
                  }).then(function (user) {
                    user.provider = providerId;
                    _this27._user = user;

                    _this27._authState.next(user);

                    resolve();
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
          /**
           * A method used to sign in a user with a specific `LoginProvider`.
           *
           * @param providerId Id with which the `LoginProvider` has been registered with the service
           * @param signInOptions Optional `LoginProvider` specific arguments
           * @returns A `Promise` that resolves to the authenticated user information
           */

        }, {
          key: "signIn",
          value: function signIn(providerId, signInOptions) {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              if (!_this28.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else {
                var providerObject = _this28.providers.get(providerId);

                if (providerObject) {
                  providerObject.signIn(signInOptions).then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this28._user = user;

                    _this28._authState.next(user);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
          /**
           * A method used to sign out the currently loggen in user.
           *
           * @param revoke Optional parameter to specify whether a hard sign out is to be performed
           * @returns A `Promise` that resolves if the operation is successful, rejects otherwise
           */

        }, {
          key: "signOut",
          value: function signOut() {
            var _this29 = this;

            var revoke = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return new Promise(function (resolve, reject) {
              if (!_this29.initialized) {
                reject(SocialAuthService.ERR_NOT_INITIALIZED);
              } else if (!_this29._user) {
                reject(SocialAuthService.ERR_NOT_LOGGED_IN);
              } else {
                var providerId = _this29._user.provider;

                var providerObject = _this29.providers.get(providerId);

                if (providerObject) {
                  providerObject.signOut(revoke).then(function () {
                    resolve();
                    _this29._user = null;

                    _this29._authState.next(null);
                  })["catch"](function (err) {
                    reject(err);
                  });
                } else {
                  reject(SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
              }
            });
          }
        }]);

        return SocialAuthService;
      }();

      SocialAuthService.ɵfac = function SocialAuthService_Factory(t) {
        return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('SocialAuthServiceConfig'));
      };

      SocialAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SocialAuthService,
        factory: SocialAuthService.ɵfac
      });
      SocialAuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
      SocialAuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
      SocialAuthService.ERR_NOT_INITIALIZED = 'Login providers not ready yet. Are there errors on your console?';
      SocialAuthService.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN = 'Chosen login provider is not supported for refreshing a token';

      SocialAuthService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['SocialAuthServiceConfig']
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ['SocialAuthServiceConfig']
            }]
          }];
        }, null);
      })();
      /**
       * The main module of angularx-social-login library.
       */


      var SocialLoginModule = /*#__PURE__*/function () {
        function SocialLoginModule(parentModule) {
          _classCallCheck(this, SocialLoginModule);

          if (parentModule) {
            throw new Error('SocialLoginModule is already loaded. Import it in the AppModule only');
          }
        }

        _createClass(SocialLoginModule, null, [{
          key: "initialize",
          value: function initialize(config) {
            return {
              ngModule: SocialLoginModule,
              providers: [SocialAuthService, {
                provide: 'SocialAuthServiceConfig',
                useValue: config
              }]
            };
          }
        }]);

        return SocialLoginModule;
      }();

      SocialLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SocialLoginModule
      });
      SocialLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SocialLoginModule_Factory(t) {
          return new (t || SocialLoginModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SocialLoginModule, 12));
        },
        providers: [SocialAuthService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      SocialLoginModule.ctorParameters = function () {
        return [{
          type: SocialLoginModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialLoginModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [SocialAuthService]
          }]
        }], function () {
          return [{
            type: SocialLoginModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }];
        }, null);
      })(); // Simulates login / logout without actually requiring an Internet connection.
      //
      // Useful for certain development situations.
      //
      // For example, if you want to simulate the greatest football referee England has ever produced:
      //
      //  const dummyUser: SocialUser = {
      //     id: '0123456789',
      //     name: 'Howard Webb',
      //     email: 'howard@webb.com',
      //     firstName: 'Howard',
      //     lastName: 'Webb',
      //     authToken: 'dummyAuthToken',
      //     photoUrl: 'https://en.wikipedia.org/wiki/Howard_Webb#/media/File:Howard_Webb_march11.jpg',
      //     provider: 'DUMMY',
      //     idToken: 'dummyIdToken',
      //     authorizationCode: 'dummyAuthCode'
      // };
      //
      //  let config = new AuthServiceConfig([
      //  { ... },
      //  {
      //       id: DummyLoginProvider.PROVIDER_ID,
      //       provider: new DummyLoginProvider(dummyUser)  // Pass your user into the constructor
      //   },
      //  { ... }
      //  ]);


      var DummyLoginProvider = /*#__PURE__*/function (_BaseLoginProvider2) {
        _inherits(DummyLoginProvider, _BaseLoginProvider2);

        var _super2 = _createSuper(DummyLoginProvider);

        function DummyLoginProvider(dummy) {
          var _this30;

          _classCallCheck(this, DummyLoginProvider);

          _this30 = _super2.call(this);

          if (dummy) {
            _this30.dummy = dummy;
          } else {
            _this30.dummy = DummyLoginProvider.DEFAULT_USER;
          } // Start not logged in


          _this30.loggedIn = false;
          return _this30;
        }

        _createClass(DummyLoginProvider, [{
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this31 = this;

            return new Promise(function (resolve, reject) {
              if (_this31.loggedIn) {
                resolve(_this31.dummy);
              } else {
                reject('No user is currently logged in.');
              }
            });
          }
        }, {
          key: "initialize",
          value: function initialize() {
            return new Promise(function (resolve, reject) {
              resolve();
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              _this32.loggedIn = true;
              resolve(_this32.dummy);
            });
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _this33 = this;

            return new Promise(function (resolve, reject) {
              _this33.loggedIn = false;
              resolve();
            });
          }
        }]);

        return DummyLoginProvider;
      }(BaseLoginProvider);

      DummyLoginProvider.PROVIDER_ID = 'DUMMY';
      DummyLoginProvider.DEFAULT_USER = {
        id: '1234567890',
        name: 'Mickey Mouse',
        email: 'mickey@mouse.com',
        firstName: 'Mickey',
        lastName: 'Mouse',
        authToken: 'dummyAuthToken',
        photoUrl: 'https://en.wikipedia.org/wiki/File:Mickey_Mouse.png',
        provider: 'DUMMY',
        idToken: 'dummyIdToken',
        authorizationCode: 'dummyAuthCode',
        response: {}
      };

      var FacebookLoginProvider = /*#__PURE__*/function (_BaseLoginProvider3) {
        _inherits(FacebookLoginProvider, _BaseLoginProvider3);

        var _super3 = _createSuper(FacebookLoginProvider);

        function FacebookLoginProvider(clientId) {
          var _this34;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'email,public_profile',
            locale: 'en_US',
            fields: 'name,email,picture,first_name,last_name',
            version: 'v4.0'
          };

          _classCallCheck(this, FacebookLoginProvider);

          _this34 = _super3.call(this);
          _this34.clientId = clientId;
          _this34.initOptions = initOptions;
          return _this34;
        }

        _createClass(FacebookLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this35 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this35.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/".concat(_this35.initOptions.locale, "/sdk.js"), function () {
                  FB.init({
                    appId: _this35.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: _this35.initOptions.version
                  });
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this36 = this;

            return new Promise(function (resolve, reject) {
              FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                  var authResponse = response.authResponse;
                  FB.api("/me?fields=".concat(_this36.initOptions.fields), function (fbUser) {
                    var user = new SocialUser();
                    user.id = fbUser.id;
                    user.name = fbUser.name;
                    user.email = fbUser.email;
                    user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal&access_token=' + authResponse.accessToken;
                    user.firstName = fbUser.first_name;
                    user.lastName = fbUser.last_name;
                    user.authToken = authResponse.accessToken;
                    user.response = fbUser;
                    resolve(user);
                  });
                } else {
                  reject("No user is currently logged in with ".concat(FacebookLoginProvider.PROVIDER_ID));
                }
              });
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              FB.login(function (response) {
                if (response.authResponse) {
                  var authResponse = response.authResponse;
                  FB.api("/me?fields=".concat(options.fields), function (fbUser) {
                    var user = new SocialUser();
                    user.id = fbUser.id;
                    user.name = fbUser.name;
                    user.email = fbUser.email;
                    user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                    user.firstName = fbUser.first_name;
                    user.lastName = fbUser.last_name;
                    user.authToken = authResponse.accessToken;
                    user.response = fbUser;
                    resolve(user);
                  });
                } else {
                  reject('User cancelled login or did not fully authorize.');
                }
              }, options);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return new Promise(function (resolve, reject) {
              FB.logout(function (response) {
                resolve();
              });
            });
          }
        }]);

        return FacebookLoginProvider;
      }(BaseLoginProvider);

      FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';

      var AmazonLoginProvider = /*#__PURE__*/function (_BaseLoginProvider4) {
        _inherits(AmazonLoginProvider, _BaseLoginProvider4);

        var _super4 = _createSuper(AmazonLoginProvider);

        function AmazonLoginProvider(clientId) {
          var _this37;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            scope: 'profile',
            scope_data: {
              profile: {
                essential: false
              }
            },
            redirect_uri: location.origin
          };

          _classCallCheck(this, AmazonLoginProvider);

          _this37 = _super4.call(this);
          _this37.clientId = clientId;
          _this37.initOptions = initOptions;
          return _this37;
        }

        _createClass(AmazonLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this38 = this;

            var amazonRoot = null;

            if (document) {
              amazonRoot = document.createElement('div');
              amazonRoot.id = 'amazon-root';
              document.body.appendChild(amazonRoot);
            }

            window.onAmazonLoginReady = function () {
              amazon.Login.setClientId(_this38.clientId);
            };

            return new Promise(function (resolve, reject) {
              try {
                _this38.loadScript('amazon-login-sdk', 'https://assets.loginwithamazon.com/sdk/na/login1.js', function () {
                  resolve();
                }, amazonRoot);
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this39 = this;

            return new Promise(function (resolve, reject) {
              var token = _this39.retrieveToken();

              if (token) {
                amazon.Login.retrieveProfile(token, function (response) {
                  if (response.success) {
                    var user = new SocialUser();
                    user.id = response.profile.CustomerId;
                    user.name = response.profile.Name;
                    user.email = response.profile.PrimaryEmail;
                    user.response = response.profile;
                    resolve(user);
                  } else {
                    reject(response.error);
                  }
                });
              } else {
                reject("No user is currently logged in with ".concat(AmazonLoginProvider.PROVIDER_ID));
              }
            });
          }
        }, {
          key: "signIn",
          value: function signIn(signInOptions) {
            var _this40 = this;

            var options = Object.assign(Object.assign({}, this.initOptions), signInOptions);
            return new Promise(function (resolve, reject) {
              amazon.Login.authorize(options, function (authResponse) {
                if (authResponse.error) {
                  reject(authResponse.error);
                } else {
                  amazon.Login.retrieveProfile(authResponse.access_token, function (response) {
                    var user = new SocialUser();
                    user.id = response.profile.CustomerId;
                    user.name = response.profile.Name;
                    user.email = response.profile.PrimaryEmail;
                    user.authToken = authResponse.access_token;
                    user.response = response.profile;

                    _this40.persistToken(authResponse.access_token);

                    resolve(user);
                  });
                }
              });
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this41 = this;

            return new Promise(function (resolve, reject) {
              try {
                amazon.Login.logout();

                _this41.clearToken();

                resolve();
              } catch (err) {
                reject(err.message);
              }
            });
          }
        }, {
          key: "persistToken",
          value: function persistToken(token) {
            localStorage.setItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"), token);
          }
        }, {
          key: "retrieveToken",
          value: function retrieveToken() {
            return localStorage.getItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"));
          }
        }, {
          key: "clearToken",
          value: function clearToken() {
            localStorage.removeItem("".concat(AmazonLoginProvider.PROVIDER_ID, "_token"));
          }
        }]);

        return AmazonLoginProvider;
      }(BaseLoginProvider);

      AmazonLoginProvider.PROVIDER_ID = 'AMAZON';

      var VKLoginProvider = /*#__PURE__*/function (_BaseLoginProvider5) {
        _inherits(VKLoginProvider, _BaseLoginProvider5);

        var _super5 = _createSuper(VKLoginProvider);

        function VKLoginProvider(clientId) {
          var _this42;

          var initOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            fields: 'photo_max,contacts',
            version: '5.124'
          };

          _classCallCheck(this, VKLoginProvider);

          _this42 = _super5.call(this);
          _this42.clientId = clientId;
          _this42.initOptions = initOptions;
          _this42.VK_API_URL = '//vk.com/js/api/openapi.js';
          _this42.VK_API_GET_USER = 'users.get';
          return _this42;
        }

        _createClass(VKLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this43 = this;

            return new Promise(function (resolve, reject) {
              try {
                _this43.loadScript(VKLoginProvider.PROVIDER_ID, _this43.VK_API_URL, function () {
                  VK.init({
                    apiId: _this43.clientId
                  });
                  resolve();
                });
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            var _this44 = this;

            return new Promise(function (resolve, reject) {
              return _this44.getLoginStatusInternal(resolve, reject);
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            var _this45 = this;

            return new Promise(function (resolve, reject) {
              return _this45.signInInternal(resolve, reject);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return new Promise(function (resolve, reject) {
              VK.Auth.logout(function (response) {
                resolve();
              });
            });
          }
        }, {
          key: "signInInternal",
          value: function signInInternal(resolve, reject) {
            var _this46 = this;

            VK.Auth.login(function (loginResponse) {
              if (loginResponse.status === 'connected') {
                _this46.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
              }
            });
          }
        }, {
          key: "getUser",
          value: function getUser(userId, token, resolve) {
            var _this47 = this;

            VK.Api.call(this.VK_API_GET_USER, {
              user_id: userId,
              fields: this.initOptions.fields,
              v: this.initOptions.version
            }, function (userResponse) {
              resolve(_this47.createUser(Object.assign({}, {
                token: token
              }, userResponse.response[0])));
            });
          }
        }, {
          key: "getLoginStatusInternal",
          value: function getLoginStatusInternal(resolve, reject) {
            var _this48 = this;

            VK.Auth.getLoginStatus(function (loginResponse) {
              if (loginResponse.status === 'connected') {
                _this48.getUser(loginResponse.session.mid, loginResponse.session.sid, resolve);
              }
            });
          }
        }, {
          key: "createUser",
          value: function createUser(response) {
            var user = new SocialUser();
            user.id = response.id;
            user.name = "".concat(response.first_name, " ").concat(response.last_name);
            user.photoUrl = response.photo_max;
            user.authToken = response.token;
            return user;
          }
        }]);

        return VKLoginProvider;
      }(BaseLoginProvider);

      VKLoginProvider.PROVIDER_ID = 'VK';
      /**
       * Protocol modes supported by MSAL.
       */

      var ProtocolMode;

      (function (ProtocolMode) {
        ProtocolMode["AAD"] = "AAD";
        ProtocolMode["OIDC"] = "OIDC";
      })(ProtocolMode || (ProtocolMode = {}));

      var COMMON_AUTHORITY = 'https://login.microsoftonline.com/common/';
      /**
       * Microsoft Authentication using MSAL v2: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser
       */

      var MicrosoftLoginProvider = /*#__PURE__*/function (_BaseLoginProvider6) {
        _inherits(MicrosoftLoginProvider, _BaseLoginProvider6);

        var _super6 = _createSuper(MicrosoftLoginProvider);

        function MicrosoftLoginProvider(clientId, initOptions) {
          var _this49;

          _classCallCheck(this, MicrosoftLoginProvider);

          _this49 = _super6.call(this);
          _this49.clientId = clientId;
          _this49.initOptions = {
            authority: COMMON_AUTHORITY,
            scopes: ['openid', 'email', 'profile', 'User.Read'],
            knownAuthorities: [],
            protocolMode: ProtocolMode.AAD,
            clientCapabilities: [],
            cacheLocation: 'sessionStorage'
          };
          _this49.initOptions = Object.assign(Object.assign({}, _this49.initOptions), initOptions);
          return _this49;
        }

        _createClass(MicrosoftLoginProvider, [{
          key: "initialize",
          value: function initialize() {
            var _this50 = this;

            return new Promise(function (resolve, reject) {
              _this50.loadScript(MicrosoftLoginProvider.PROVIDER_ID, 'https://alcdn.msauth.net/browser/2.13.1/js/msal-browser.js', function () {
                var _a;

                try {
                  var config = {
                    auth: {
                      clientId: _this50.clientId,
                      redirectUri: (_a = _this50.initOptions.redirect_uri) !== null && _a !== void 0 ? _a : location.origin,
                      authority: _this50.initOptions.authority,
                      knownAuthorities: _this50.initOptions.knownAuthorities,
                      protocolMode: _this50.initOptions.protocolMode,
                      clientCapabilities: _this50.initOptions.clientCapabilities
                    },
                    cache: !_this50.initOptions.cacheLocation ? null : {
                      cacheLocation: _this50.initOptions.cacheLocation
                    }
                  };
                  _this50._instance = new msal.PublicClientApplication(config);
                  resolve();
                } catch (e) {
                  reject(e);
                }
              });
            });
          }
        }, {
          key: "getSocialUser",
          value: function getSocialUser(loginResponse) {
            return new Promise(function (resolve, reject) {
              //After login, use Microsoft Graph API to get user info
              var meRequest = new XMLHttpRequest();

              meRequest.onreadystatechange = function () {
                if (meRequest.readyState == 4) {
                  try {
                    if (meRequest.status == 200) {
                      var userInfo = JSON.parse(meRequest.responseText);
                      var user = new SocialUser();
                      user.provider = MicrosoftLoginProvider.PROVIDER_ID;
                      user.id = loginResponse.idToken;
                      user.authToken = loginResponse.accessToken;
                      user.name = loginResponse.idTokenClaims.name;
                      user.email = loginResponse.account.username;
                      user.idToken = loginResponse.idToken;
                      user.response = loginResponse;
                      user.firstName = userInfo.givenName;
                      user.lastName = userInfo.surname;
                      resolve(user);
                    } else {
                      reject("Error retrieving user info: ".concat(meRequest.status));
                    }
                  } catch (err) {
                    reject(err);
                  }
                }
              }; //Microsoft Graph ME Endpoint: https://docs.microsoft.com/en-us/graph/api/user-get?view=graph-rest-1.0&tabs=http


              meRequest.open('GET', 'https://graph.microsoft.com/v1.0/me');
              meRequest.setRequestHeader('Authorization', "Bearer ".concat(loginResponse.accessToken));

              try {
                meRequest.send();
              } catch (err) {
                reject(err);
              }
            });
          }
        }, {
          key: "getLoginStatus",
          value: function getLoginStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var accounts, loginResponse;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      accounts = this._instance.getAllAccounts();

                      if (!((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0)) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 4;
                      return this._instance.ssoSilent({
                        scopes: this.initOptions.scopes,
                        loginHint: accounts[0].username
                      });

                    case 4:
                      loginResponse = _context.sent;
                      _context.next = 7;
                      return this.getSocialUser(loginResponse);

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 10:
                      throw "No user is currently logged in with ".concat(MicrosoftLoginProvider.PROVIDER_ID);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loginResponse;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._instance.loginPopup({
                        scopes: this.initOptions.scopes
                      });

                    case 2:
                      loginResponse = _context2.sent;
                      _context2.next = 5;
                      return this.getSocialUser(loginResponse);

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut(revoke) {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var accounts;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      accounts = this._instance.getAllAccounts();

                      if (!((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0)) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 4;
                      return this._instance.logoutPopup({
                        account: accounts[0],
                        postLogoutRedirectUri: (_b = (_a = this.initOptions.logout_redirect_uri) !== null && _a !== void 0 ? _a : this.initOptions.redirect_uri) !== null && _b !== void 0 ? _b : location.href
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return MicrosoftLoginProvider;
      }(BaseLoginProvider);

      MicrosoftLoginProvider.PROVIDER_ID = 'MICROSOFT';
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angularx-social-login.js.map

      /***/
    },

    /***/
    "nDdO":
    /*!******************************************************!*\
      !*** ./src/app/components/account/account.module.ts ***!
      \******************************************************/

    /*! exports provided: AccountModule */

    /***/
    function nDdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
        return AccountModule;
      });
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _account_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-api.service */
      "q4D8");
      /* harmony import */


      var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.component */
      "++XS");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./account-routing.module */
      "/vG3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgotpassword/forgotpassword.component */
      "+/aG");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "LkZ5");
      /* harmony import */


      var _new_profile_new_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./new-profile/new-profile.component */
      "U897");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccountModule = function AccountModule() {
        _classCallCheck(this, AccountModule);
      };

      AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AccountModule
      });
      AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function AccountModule_Factory(t) {
          return new (t || AccountModule)();
        },
        providers: [_account_api_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"], {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]('761689346542-r4m604edknk2jmuq99cr9tssm7j5r7ut.apps.googleusercontent.com')
            }, {
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"]('419759909345362')
            }]
          }
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialLoginModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AccountModule, {
          declarations: [_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordComponent"], _new_profile_new_profile_component__WEBPACK_IMPORTED_MODULE_8__["NewProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialLoginModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AccountModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
          args: [{
            declarations: [_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordComponent"], _new_profile_new_profile_component__WEBPACK_IMPORTED_MODULE_8__["NewProfileComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialLoginModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]],
            providers: [_account_api_service__WEBPACK_IMPORTED_MODULE_2__["AccountApiService"], {
              provide: 'SocialAuthServiceConfig',
              useValue: {
                autoLogin: false,
                providers: [{
                  id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
                  provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]('761689346542-r4m604edknk2jmuq99cr9tssm7j5r7ut.apps.googleusercontent.com')
                }, {
                  id: angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID,
                  provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"]('419759909345362')
                }]
              }
            }]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-account-account-module-es5.js.map