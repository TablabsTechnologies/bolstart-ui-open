(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-investor-investor-module"], {
    /***/
    "Gl30":
    /*!****************************************************************!*\
      !*** ./src/app/components/investor/investor-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: InvestorRoutingModule */

    /***/
    function Gl30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestorRoutingModule", function () {
        return InvestorRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _company_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../company/company-info/company-info.component */
      "3EEX");
      /* harmony import */


      var _company_company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../company/company-publish/company-publish.component */
      "9IWr");
      /* harmony import */


      var _inv_comp_detail_inv_comp_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inv-comp-detail/inv-comp-detail.component */
      "eIZT");
      /* harmony import */


      var _investor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./investor.component */
      "bQHq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _investor_component__WEBPACK_IMPORTED_MODULE_4__["InvestorComponent"],
        children: [{
          path: 'companyDetail',
          component: _inv_comp_detail_inv_comp_detail_component__WEBPACK_IMPORTED_MODULE_3__["InvCompDetailComponent"],
          children: [{
            path: 'publish',
            component: _company_company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_2__["CompanyPublishComponent"]
          }, {
            path: 'detail',
            component: _company_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_1__["CompanyInfoComponent"]
          }]
        }]
      }];

      var InvestorRoutingModule = function InvestorRoutingModule() {
        _classCallCheck(this, InvestorRoutingModule);
      };

      InvestorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: InvestorRoutingModule
      });
      InvestorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function InvestorRoutingModule_Factory(t) {
          return new (t || InvestorRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InvestorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](InvestorRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Kl0o":
    /*!********************************************************!*\
      !*** ./src/app/components/investor/investor.module.ts ***!
      \********************************************************/

    /*! exports provided: InvestorModule */

    /***/
    function Kl0o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestorModule", function () {
        return InvestorModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _company_company_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../company/company.module */
      "sCIA");
      /* harmony import */


      var _inv_comp_detail_inv_comp_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inv-comp-detail/inv-comp-detail.component */
      "eIZT");
      /* harmony import */


      var _investor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./investor.component */
      "bQHq");
      /* harmony import */


      var _investor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./investor-routing.module */
      "Gl30");
      /* harmony import */


      var _investor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./investor.service */
      "r+1v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../shared/shared.module */
      "PCNd");

      var InvestorModule = function InvestorModule() {
        _classCallCheck(this, InvestorModule);
      };

      InvestorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: InvestorModule
      });
      InvestorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function InvestorModule_Factory(t) {
          return new (t || InvestorModule)();
        },
        providers: [_investor_service__WEBPACK_IMPORTED_MODULE_5__["InvestorService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _investor_routing_module__WEBPACK_IMPORTED_MODULE_4__["InvestorRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _company_company_module__WEBPACK_IMPORTED_MODULE_1__["CompanyModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InvestorModule, {
          declarations: [_investor_component__WEBPACK_IMPORTED_MODULE_3__["InvestorComponent"], _inv_comp_detail_inv_comp_detail_component__WEBPACK_IMPORTED_MODULE_2__["InvCompDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _investor_routing_module__WEBPACK_IMPORTED_MODULE_4__["InvestorRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _company_company_module__WEBPACK_IMPORTED_MODULE_1__["CompanyModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](InvestorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
          args: [{
            declarations: [_investor_component__WEBPACK_IMPORTED_MODULE_3__["InvestorComponent"], _inv_comp_detail_inv_comp_detail_component__WEBPACK_IMPORTED_MODULE_2__["InvCompDetailComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _investor_routing_module__WEBPACK_IMPORTED_MODULE_4__["InvestorRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _company_company_module__WEBPACK_IMPORTED_MODULE_1__["CompanyModule"]],
            providers: [_investor_service__WEBPACK_IMPORTED_MODULE_5__["InvestorService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bQHq":
    /*!***********************************************************!*\
      !*** ./src/app/components/investor/investor.component.ts ***!
      \***********************************************************/

    /*! exports provided: InvestorComponent */

    /***/
    function bQHq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestorComponent", function () {
        return InvestorComponent;
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


      var _investor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./investor.service */
      "r+1v");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/header/header.component */
      "320Y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function InvestorComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvestorComponent_li_9_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var item_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.goToCompanyDetail(item_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.industry);
        }
      }

      var InvestorComponent = /*#__PURE__*/function () {
        function InvestorComponent(investorApi, router) {
          _classCallCheck(this, InvestorComponent);

          this.investorApi = investorApi;
          this.router = router;
          this.companyList = [];
        }

        _createClass(InvestorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var encrypt = localStorage.getItem('Bolstart');
            this.userInfo = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(encrypt, "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8));
            this.getCompanyList();
          }
        }, {
          key: "getCompanyList",
          value: function getCompanyList() {
            var _this = this;

            this.investorApi.getAllCompanyListByInvestorId(this.userInfo.id).subscribe(function (response) {
              if (response.success) {
                _this.companyList = response.data;
              }
            });
          }
        }, {
          key: "goToCompanyDetail",
          value: function goToCompanyDetail(companyId) {
            this.router.navigate(['./investor/companyDetail/publish'], {
              queryParams: {
                companyId: companyId
              }
            });
          }
        }]);

        return InvestorComponent;
      }();

      InvestorComponent.ɵfac = function InvestorComponent_Factory(t) {
        return new (t || InvestorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_investor_service__WEBPACK_IMPORTED_MODULE_2__["InvestorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      InvestorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InvestorComponent,
        selectors: [["app-investor"]],
        decls: 12,
        vars: 1,
        consts: [[1, "container"], [1, "row"], [1, "col-md-5"], [1, "card"], [1, "card-header"], ["class", "pointer", 4, "ngFor", "ngForOf"], [1, "col-md-7"], [1, "pointer"], [2, "display", "flex", 3, "click"], [1, "profile", 3, "src"], [1, "pt-2"], [2, "color", "darkgray"]],
        template: function InvestorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Company List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InvestorComponent_li_9_Template, 10, 3, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyList);
          }
        },
        directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["li[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 5px !important;\n}\n\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10%;\n  width: 45px;\n  height: 45px;\n  border: 1px solid var(--primary);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlc3Rvci9pbnZlc3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZXN0b3IvaW52ZXN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvestorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-investor',
            templateUrl: './investor.component.html',
            styleUrls: ['./investor.component.scss']
          }]
        }], function () {
          return [{
            type: _investor_service__WEBPACK_IMPORTED_MODULE_2__["InvestorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eIZT":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/investor/inv-comp-detail/inv-comp-detail.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: InvCompDetailComponent */

    /***/
    function eIZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvCompDetailComponent", function () {
        return InvCompDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _investor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../investor.service */
      "r+1v");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function InvCompDetailComponent_h6_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvCompDetailComponent_h6_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          companyId: a0
        };
      };

      var InvCompDetailComponent = /*#__PURE__*/function () {
        function InvCompDetailComponent(routes, investorApi) {
          _classCallCheck(this, InvCompDetailComponent);

          this.routes = routes;
          this.investorApi = investorApi;
          this.timelineImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultTimlineImage;
        }

        _createClass(InvCompDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.routes.queryParams.subscribe(function (response) {
              _this2.getCompanyDetailById(response.companyId);
            });
          }
        }, {
          key: "getCompanyDetailById",
          value: function getCompanyDetailById(companyId) {
            var _this3 = this;

            this.investorApi.getCompanyDetailById(companyId).subscribe(function (res) {
              if (res.success) {
                _this3.companyDetail = res.data;
              }
            });
          }
        }]);

        return InvCompDetailComponent;
      }();

      InvCompDetailComponent.ɵfac = function InvCompDetailComponent_Factory(t) {
        return new (t || InvCompDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_investor_service__WEBPACK_IMPORTED_MODULE_3__["InvestorService"]));
      };

      InvCompDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvCompDetailComponent,
        selectors: [["app-inv-comp-detail"]],
        decls: 28,
        vars: 19,
        consts: [[1, "card"], [1, "bg"], [1, "inner"], [1, "profile-image"], [1, "profile", 3, "src"], [1, "custom-padding"], [1, "row"], [1, "col-8"], [1, "name", 2, "display", "inline-flex"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Not Verified", "style", "color: #F0541E;", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Verified", "style", "color: #009944;", 4, "ngIf"], ["target", "_blank", 1, "connection", 3, "href"], [1, "name_second"], [2, "display", "inline-flex"], ["routerLink", "./publish", "routerLinkActive", "active-link", 1, "btn-1", 3, "queryParams"], ["routerLink", "./detail", "routerLinkActive", "active-link", 1, "btn-1", 3, "queryParams"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Not Verified", 2, "color", "#F0541E"], [1, "fa", "fa-exclamation-circle"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Verified", 2, "color", "#009944"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"]],
        template: function InvCompDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InvCompDetailComponent_h6_10_Template, 3, 0, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InvCompDetailComponent_h6_11_Template, 3, 0, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Updates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.timelineImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.companyDetail == null ? null : ctx.companyDetail.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.companyDetail == null ? null : ctx.companyDetail.name, " (", ctx.companyDetail == null ? null : ctx.companyDetail.company_type, ")\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.companyDetail == null ? null : ctx.companyDetail.isVerified) == "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.companyDetail == null ? null : ctx.companyDetail.isVerified) == "approved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "//", ctx.companyDetail == null ? null : ctx.companyDetail.websiteLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyDetail == null ? null : ctx.companyDetail.websiteLink);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyDetail == null ? null : ctx.companyDetail.industry);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.companyDetail == null ? null : ctx.companyDetail.city, ", ", ctx.companyDetail == null ? null : ctx.companyDetail.state, ",", ctx.companyDetail == null ? null : ctx.companyDetail.country, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.companyDetail == null ? null : ctx.companyDetail.id));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.companyDetail == null ? null : ctx.companyDetail.id));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".bg[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n\n.fab-close[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 50px;\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 5px;\n  font-size: 13px;\n  padding: 3px;\n}\n\n.fab-check[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 50px;\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 5px;\n  font-size: 13px;\n  padding: 3px;\n}\n\n.btn-1[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: white;\n  cursor: pointer;\n  color: #293266;\n  font-weight: bold;\n  border: 1px solid #293266;\n  border-top-right-radius: 18px;\n  border-bottom-left-radius: 6px;\n  padding: 5px 25px 2px 25px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 6px;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  background: #293266;\n  border: 1px solid #293266;\n  color: white;\n  outline: none !important;\n  transition: 0.8s all;\n}\n\n.inner[_ngcontent-%COMP%] {\n  background: white;\n  border-top-right-radius: 120px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  margin-top: 50px;\n}\n\n.custom-padding[_ngcontent-%COMP%] {\n  padding: 10rem 1.3rem 1.5rem !important;\n}\n\n.pencil[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 25px;\n  bottom: 0px;\n  right: 25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  padding-top: 3%;\n  padding-bottom: 3%;\n  padding-left: 3%;\n}\n\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10%;\n  width: 150px;\n  height: 150px;\n  border: 2px solid var(--info);\n  position: absolute;\n  z-index: 1;\n  margin-top: -50px;\n  background: white;\n}\n\n.logo-Image[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n  height: 50px;\n  border: 1px solid darkgray;\n  background: white;\n  margin-top: -5px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.work[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-weight: bold;\n}\n\n.name_second[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n}\n\n.connection[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary);\n  width: 30%;\n}\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n@media (max-width: 450px) and (min-width: 300px) {\n  .profile[_ngcontent-%COMP%] {\n    bottom: 60%;\n  }\n}\n\n\n\nngb-modal-window[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\nngb-modal-window[_ngcontent-%COMP%]   .ngx-photo-editor-icons-container[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\nngb-modal-window[_ngcontent-%COMP%]   .ngx-photo-editor-icons-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  fill: black;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n}\n\n.content[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  border: 2px solid var(--primary);\n}\n\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 1%;\n  width: 120px;\n  height: 120px;\n  border: 2px dotted var(--primary);\n}\n\n.content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  transform: translate(-35px, -6px);\n  position: absolute;\n}\n\n.content[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  color: #293266;\n}\n\n.content[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 20px;\n  height: 30px;\n  font-size: 16px;\n  line-height: 30px;\n  border-radius: 25px;\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlc3Rvci9pbnYtY29tcC1kZXRhaWwvaW52LWNvbXAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSw4QkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSx1Q0FBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFPRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVFGOztBQU5BO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxpQkFBQTtBQVlGOztBQVZBO0VBQ0UscUNBQUE7VUFBQSxvQ0FBQTtBQWFGOztBQVhBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFjRjs7QUFaQTtFQUNFLG1CQUFBO0FBZUY7O0FBYkE7RUFDRTtJQUNFLFdBQUE7RUFnQkY7QUFDRjs7QUFkQSx1Q0FBQTs7QUFFRTtFQUNFLDRCQUFBO0FBZUo7O0FBYkU7RUFDRSw0QkFBQTtBQWVKOztBQWJFO0VBQ0UsV0FBQTtBQWVKOztBQVpBO0VBQ0U7SUFDRSxjQUFBO0VBZUY7QUFDRjs7QUFaRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFjSjs7QUFaRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFjSjs7QUFaRTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUFjSjs7QUFaRTtFQUNFLGNBQUE7QUFjSjs7QUFaRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBY0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludmVzdG9yL2ludi1jb21wLWRldGFpbC9pbnYtY29tcC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdGltbGluZS5qcGdcIik7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uZmFiLWNsb3NlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG4uZmFiLWNoZWNrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG4uYnRuLTEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMjkzMjY2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTMyNjY7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAyNXB4IDJweCAyNXB4O1xyXG59XHJcbi5jYXJkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbn1cclxuLmFjdGl2ZS1saW5rIHtcclxuICBiYWNrZ3JvdW5kOiAjMjkzMjY2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTMyNjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjhzIGFsbDtcclxufVxyXG4uaW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5jdXN0b20tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMTByZW0gMS4zcmVtIDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wZW5jaWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjVweDtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMjVweDtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG4ucHJvZmlsZSB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWluZm8pO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5sb2dvLUltYWdlIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ud29yayB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmFtZV9zZWNvbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbm5lY3Rpb24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbi5idG4tb3V0bGluZS1saWdodCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xyXG4gIC5wcm9maWxlIHtcclxuICAgIGJvdHRvbTogNjAlO1xyXG4gIH1cclxufVxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbm5nYi1tb2RhbC13aW5kb3cge1xyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uZ3gtcGhvdG8tZWRpdG9yLWljb25zLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmd4LXBob3RvLWVkaXRvci1pY29ucy1jb250YWluZXIgPiBzdmcge1xyXG4gICAgZmlsbDogYmxhY2s7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcbi5jb250ZW50IHtcclxuICAucHJvZmlsZS1waWMge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMSU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLXByaW1hcnkpO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNXB4LCAtNnB4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmZhYiB7XHJcbiAgICBjb2xvcjogIzI5MzI2NjtcclxuICB9XHJcbiAgLmNoaXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvCompDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inv-comp-detail',
            templateUrl: './inv-comp-detail.component.html',
            styleUrls: ['./inv-comp-detail.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _investor_service__WEBPACK_IMPORTED_MODULE_3__["InvestorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "r+1v":
    /*!*********************************************************!*\
      !*** ./src/app/components/investor/investor.service.ts ***!
      \*********************************************************/

    /*! exports provided: InvestorService */

    /***/
    function r1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvestorService", function () {
        return InvestorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var InvestorService = /*#__PURE__*/function () {
        function InvestorService(http) {
          _classCallCheck(this, InvestorService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        }

        _createClass(InvestorService, [{
          key: "getAllCompanyListByInvestorId",
          value: function getAllCompanyListByInvestorId(userId) {
            return this.http.get(this.baseUrl + "investorportal/getcompany/byconnection?userid=".concat(userId));
          }
        }, {
          key: "getCompanyDetailById",
          value: function getCompanyDetailById(companyId) {
            return this.http.get(this.baseUrl + "company/getById?id=".concat(companyId));
          }
        }]);

        return InvestorService;
      }();

      InvestorService.ɵfac = function InvestorService_Factory(t) {
        return new (t || InvestorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      InvestorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InvestorService,
        factory: InvestorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-investor-investor-module-es5.js.map