(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-company-company-module~components-investor-investor-module"],{

/***/ "3EEX":
/*!***************************************************************************!*\
  !*** ./src/app/components/company/company-info/company-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoComponent", function() { return CompanyInfoComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/validator */ "GwNG");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile/profile.service */ "ZMY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../company-api.service */ "+U+C");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CompanyInfoComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 31);
} }
function CompanyInfoComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7, " ");
} }
function CompanyInfoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CompanyInfoComponent_div_10_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.companyDetail == null ? null : ctx_r1.companyDetail.services);
} }
function CompanyInfoComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Short Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyInfoComponent_small_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Valid Email id.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyInfoComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Valid Social Media URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyInfoComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyInfoComponent_div_64_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.removeTag(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r8, " \u00A0 ");
} }
class CompanyInfoComponent {
    constructor(profileService, route, fb, companyApiService, toaster) {
        this.profileService = profileService;
        this.route = route;
        this.fb = fb;
        this.companyApiService = companyApiService;
        this.toaster = toaster;
        this.userDetail = {};
        this.serviceList = [];
    }
    ngOnInit() {
        this.getInfo();
        this.initializeForm();
    }
    getInfo() {
        this.userDetail = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8));
        this.route.queryParams.subscribe(param => {
            this.getCompanyDetail(param.companyId);
        });
    }
    initializeForm() {
        this.companyUpdateForm = this.fb.group({
            contactEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            profile_url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].urlRegex)]],
            id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            services: [""],
            user_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    setFormValue(company) {
        this.companyUpdateForm.patchValue({
            contactEmail: company.contactEmail,
            description: company.description,
            profile_url: company.profile_url,
            id: company.id,
            user_id: this.userDetail.id,
        });
        this.serviceList = this.companyDetail.services == null ? [] : this.companyDetail.services;
    }
    getCompanyDetail(companyId) {
        this.companyApiService.getCompanyDetail(companyId).subscribe(res => {
            if (res.success) {
                // this.companyDetail = res.data;
                this.companyDetail = res.data;
                this.setFormValue(this.companyDetail);
            }
        });
    }
    onSubmit() {
        if (this.companyUpdateForm.valid) {
            let obj = {
                contactEmail: this.companyUpdateForm.value.contactEmail,
                description: this.companyUpdateForm.value.description,
                id: this.companyUpdateForm.value.id,
                services: this.serviceList,
                user_id: this.userDetail.id,
                profile_url: this.companyUpdateForm.value.profile_url
            };
            this.companyApiService.updateCompany(obj).subscribe(res => {
                if (res.success) {
                    this.toaster.success(res.message);
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#aboutModel .close").click();
                    this.companyDetail = res.data;
                    this.setFormValue(this.companyDetail);
                }
            });
        }
    }
    /* ===============  Add Service  ==================== */
    addService() {
        if (this.companyUpdateForm.value.services != "") {
            this.serviceList.push(this.companyUpdateForm.value.services);
        }
    }
    removeTag(index) {
        this.serviceList.splice(index, 1);
    }
}
CompanyInfoComponent.ɵfac = function CompanyInfoComponent_Factory(t) { return new (t || CompanyInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_company_api_service__WEBPACK_IMPORTED_MODULE_7__["CompanyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CompanyInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyInfoComponent, selectors: [["app-company-info"]], decls: 69, vars: 10, consts: [[1, "card", "p-4"], [1, "row"], [1, "col-11"], [1, "col-1"], ["class", "pencil", "src", "assets/logo/pen.svg", "data-target", "#aboutModel", "data-toggle", "modal", "style", "width: 25px;", 4, "ngIf"], [1, "break-line"], [4, "ngIf"], ["target", "blank", 3, "href"], ["id", "aboutModel", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "p-3"], [1, "modal-Custheader", "p-2"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [3, "formGroup"], [1, "row", "pt-2"], [1, "col", "col-md-12"], [1, "mandatory"], ["cols", "10", "placeholder", "description", "formControlName", "description", 1, "form-control", "description"], ["class", "text-danger", 4, "ngIf"], [1, "col", "col-md-6"], ["placeholder", "Enter Email", "formControlName", "contactEmail", 1, "form-control"], ["placeholder", "Enter Email", "formControlName", "profile_url", 1, "form-control"], [1, "col", "col-6"], ["placeholder", "Enter Service", "formControlName", "services", 1, "form-control"], [1, "col", "col-2", "pt-4"], [1, "btn", "btn-secondary", 3, "click"], [1, "col", "col-md-12", "pt-5"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mt-5", 3, "click"], ["src", "assets/logo/pen.svg", "data-target", "#aboutModel", "data-toggle", "modal", 1, "pencil", 2, "width", "25px"], [1, "chip"], [1, "text-danger"], ["aria-hidden", "true", 1, "fa", "fa-times", 3, "click"]], template: function CompanyInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CompanyInfoComponent_img_6_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CompanyInfoComponent_div_10_Template, 7, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Social Media URL.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Update Company Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Short Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, CompanyInfoComponent_small_38_Template, 2, 0, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, CompanyInfoComponent_small_46_Template, 2, 0, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Social Media URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, CompanyInfoComponent_small_53_Template, 2, 0, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyInfoComponent_Template_button_click_61_listener() { return ctx.addService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CompanyInfoComponent_div_64_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyInfoComponent_Template_button_click_67_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.company_id) == (ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.companyDetail == null ? null : ctx.companyDetail.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.companyDetail == null ? null : ctx.companyDetail.services == null ? null : ctx.companyDetail.services.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "//", ctx.companyDetail == null ? null : ctx.companyDetail.profile_url, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.companyDetail == null ? null : ctx.companyDetail.profile_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.companyUpdateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("description").invalid && ctx.companyUpdateForm.get("description").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("contactEmail").invalid && ctx.companyUpdateForm.get("contactEmail").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("profile_url").invalid && ctx.companyUpdateForm.get("profile_url").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.serviceList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: [".pencil[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.break-line[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nul.bullets[_ngcontent-%COMP%] {\n  list-style-type: circle;\n}\n\n.description[_ngcontent-%COMP%] {\n  min-height: 125px;\n}\n\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 20px;\n  height: 30px;\n  font-size: 16px;\n  line-height: 30px;\n  border-radius: 25px;\n  margin: 2px;\n  border: 1px solid var(--primary);\n  background-color: #f1f1f1;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktaW5mby9jb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRTtJQUNFLGNBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktaW5mby9jb21wYW55LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVuY2lsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJyZWFrLWxpbmUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG51bC5idWxsZXRzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEyNXB4O1xyXG59XHJcbi5jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company-info',
                templateUrl: './company-info.component.html',
                styleUrls: ['./company-info.component.scss']
            }]
    }], function () { return [{ type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _company_api_service__WEBPACK_IMPORTED_MODULE_7__["CompanyApiService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "9IWr":
/*!*********************************************************************************!*\
  !*** ./src/app/components/company/company-publish/company-publish.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPublishComponent", function() { return CompanyPublishComponent; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_company_company_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/company/company-api.service */ "+U+C");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_publish_container_publish_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/publish-container/publish-container.component */ "QL3Z");









function CompanyPublishComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "publish-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.onChangeDateFormat(item_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("publish", item_r1)("userInfo", ctx_r0.userDetail);
} }
class CompanyPublishComponent {
    constructor(routes, companyService) {
        this.routes = routes;
        this.companyService = companyService;
        this.publishPostList = [];
        this.currentPage = 0;
        this.throttle = 150;
        this.scrollDistance = 2;
    }
    ngOnInit() {
        this.getInfo();
        /*    this.postService.deleteEvent.subscribe(data => {
             this.publishPostList.map((post, index) => {
               if (data == post.id) {
                 this.publishPostList.splice(index, 1)
               }
             })
           })
           this.postService.updateEvent.subscribe(data => {
             this.publishPostList.map((post) => {
               if (data.id == post.id) {
                 return [post.description = data.description, post.image = data.image]
               }
             })
           }) */
    }
    getInfo() {
        this.userDetail = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8));
        this.routes.queryParams.subscribe(param => {
            this.companyId = param.companyId;
        });
        this.getPublishPostList(this.currentPage);
    }
    getPublishPostList(currentPage) {
        this.companyService.getCompanyPublishPost(this.companyId, currentPage, this.userDetail.id).subscribe(res => {
            if (res.success) {
                this.publishPostList = res.data.content;
            }
        });
    }
    onChangeDateFormat(oldDate) {
        let day = oldDate.substring(0, 2);
        let month = moment__WEBPACK_IMPORTED_MODULE_1__["monthsShort"](oldDate.substring(3, 5) - 1);
        let year = oldDate.substring(6, 10);
        return `${day}-${month}-${year}`;
    }
    /* ======================  infinite Scroll  =========================== */
    onScrollDown() {
        this.currentPage += 1;
        this.getPublishPostList(this.currentPage);
    }
}
CompanyPublishComponent.ɵfac = function CompanyPublishComponent_Factory(t) { return new (t || CompanyPublishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_components_company_company_api_service__WEBPACK_IMPORTED_MODULE_4__["CompanyApiService"])); };
CompanyPublishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyPublishComponent, selectors: [["app-company-publish"]], decls: 3, vars: 4, consts: [["infinite-scroll", "", 1, "search-results", 3, "infiniteScrollDistance", "scrollWindow", "infiniteScrollThrottle", "scrolled"], [1, "events"], ["class", "list", 4, "ngFor", "ngForOf"], [1, "list"], [1, "content"], [3, "publish", "userInfo"]], template: function CompanyPublishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function CompanyPublishComponent_Template_div_scrolled_0_listener() { return ctx.onScrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CompanyPublishComponent_li_2_Template, 6, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infiniteScrollDistance", ctx.scrollDistance)("scrollWindow", false)("infiniteScrollThrottle", ctx.throttle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.publishPostList);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_publish_container_publish_container_component__WEBPACK_IMPORTED_MODULE_7__["PublishContainerComponent"]], styles: [".events[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin: 0px !important;\n}\n.events[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 0em 0.5em 1.5em !important;\n  width: 100%;\n}\n.img[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.search-results[_ngcontent-%COMP%] {\n  height: 100rem;\n  overflow-y: scroll;\n  padding: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktcHVibGlzaC9jb21wYW55LXB1Ymxpc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUVKO0FBRUE7RUFDRSw2QkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDQTtFQUNFLFVBQUE7RUFBWSxrQ0FBQTtBQUdkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktcHVibGlzaC9jb21wYW55LXB1Ymxpc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnRzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMGVtIDAuNWVtIDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gIGhlaWdodDogMTAwcmVtO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDsgLyogd2lkdGggb2YgdGhlIGVudGlyZSBzY3JvbGxiYXIgKi9cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyPublishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company-publish',
                templateUrl: './company-publish.component.html',
                styleUrls: ['./company-publish.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_components_company_company_api_service__WEBPACK_IMPORTED_MODULE_4__["CompanyApiService"] }]; }, null); })();


/***/ }),

/***/ "YXRX":
/*!*******************************************************************************!*\
  !*** ./src/app/components/company/create-company/create-company.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bs-stepper */ "BYMX");
/* harmony import */ var bs_stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bs_stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/validator */ "GwNG");
/* harmony import */ var _shared_AWS_Service_aws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/AWS-Service/aws.service */ "jn2c");
/* harmony import */ var _account_account_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../account/account-api.service */ "q4D8");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../company-api.service */ "+U+C");
/* harmony import */ var _components_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../components/profile/profile.service */ "ZMY+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-photo-editor */ "kUS0");















const _c0 = ["imagePicker"];
function CreateCompanyComponent_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Company Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_small_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Website URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_small_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Stages.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_small_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Social Media URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_small_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Short Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_option_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r18);
} }
function CreateCompanyComponent_small_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_small_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Company Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCompanyComponent_div_142_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const i_r20 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.removeTag(i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19, " \u00A0 ");
} }
function CreateCompanyComponent_small_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Valid Email id.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_small_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Mobile Number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_option_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r23.name, " ");
} }
function CreateCompanyComponent_small_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Country.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_option_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r24.name, " ");
} }
function CreateCompanyComponent_small_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select States/Union territories.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateCompanyComponent_option_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r25.name, " ");
} }
function CreateCompanyComponent_small_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateCompanyComponent {
    constructor(fb, awsService, accountApiService, companyApiService, profileService, toaster, router) {
        this.fb = fb;
        this.awsService = awsService;
        this.accountApiService = accountApiService;
        this.companyApiService = companyApiService;
        this.profileService = profileService;
        this.toaster = toaster;
        this.router = router;
        this.type = 2;
        this.industryList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].industries;
        this.countryList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].country;
        this.stateList = [];
        this.cityList = [];
        this.serviceList = [];
        this.defaultLogo = "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/enterprise.png";
    }
    next() {
        this.stepper.next();
    }
    onSubmit() {
        return false;
    }
    ngOnInit() {
        this.stepper = new bs_stepper__WEBPACK_IMPORTED_MODULE_3___default.a(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        });
        this.getInfo();
        this.initializeForm();
        this.setDefault();
    }
    getInfo() {
        this.userDetail = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8));
    }
    initializeForm() {
        this.companyForm = this.fb.group({
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            contactEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            contactNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].phoneNumberRegex)]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            industry: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            logo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            profile_url: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].urlRegex)]],
            registrationType: [""],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            websiteLink: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].urlRegex)]],
            stages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            company_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            services: [""]
        });
        this.initializeCompanyValues();
        this.selectCountry();
    }
    initializeCompanyValues() {
        this.companyForm.patchValue({
            city: this.userDetail.location,
            contactNumber: this.userDetail.mobileNumber,
            country: this.userDetail.country,
            state: this.userDetail.state,
        });
    }
    savCompany() {
        if (this.companyForm.valid) {
            let obj = {
                city: this.companyForm.value.city,
                contactEmail: this.companyForm.value.contactEmail,
                contactNumber: this.companyForm.value.contactNumber,
                country: this.companyForm.value.country,
                description: this.companyForm.value.description,
                industry: this.companyForm.value.industry,
                isVerified: "false",
                logo: this.companyForm.value.logo,
                name: this.companyForm.value.name,
                profile_url: this.companyForm.value.profile_url,
                services: this.serviceList,
                stages: this.companyForm.value.stages,
                state: this.companyForm.value.state,
                user_id: this.userDetail.id,
                websiteLink: this.companyForm.value.websiteLink,
                company_type: this.companyForm.value.company_type
            };
            this.companyApiService.registerCompany(obj).subscribe(res => {
                if (res.success) {
                    this.toaster.success(res.message);
                    this.userDetail["company_id"] = res.data.id;
                    this.userDetail["companyName"] = res.data.name;
                    this.userDetail["compnayLogo"] = res.data.logo;
                    let encrypt = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(JSON.stringify(this.userDetail), "Bollstart").toString();
                    localStorage.setItem('Bolstart', encrypt);
                    this.profileService.emitEvent();
                    this.router.navigate(['./company/companyinfo/publish'], { queryParams: { companyId: res.data.id } });
                }
                else {
                    this.toaster.error(res.message);
                }
            });
        }
    }
    setDefault() {
        this.companyForm.patchValue({
            logo: this.defaultLogo,
        });
    }
    fileChangeEvent(event) {
        if (this.imageEditorType == 1) {
            this.imageChangedEvent = event;
        }
        else {
            this.imageChangedEvent = event;
        }
    }
    getImage(type) {
        try {
            this.imageEditorType = type;
            this.imagePicker.nativeElement.click();
        }
        catch (error) {
        }
    }
    imageCropped(event) {
        // this.img = `url(${event.base64})`
        if (this.imageEditorType == 1) {
            this.awsService.uploadFile(event.file, "profile").then(res => {
                this.companyForm.patchValue({
                    profile_url: res
                });
            });
        }
        else {
            this.awsService.uploadFile(event.file, "company").then(res => {
                this.companyForm.patchValue({
                    logo: res
                });
            });
        }
    }
    /* ===================== country select  =========================== */
    selectCountry() {
        let country = this.companyForm.value.country;
        this.countryList.map(res => {
            if (res.name == country) {
                this.getStateList(res.id);
            }
        });
    }
    getStateList(countryID) {
        this.accountApiService.getStateListBasedOnCountry(countryID).subscribe(res => {
            if (res.success) {
                this.stateList = res.data;
                this.selectState();
            }
        });
    }
    selectState() {
        let state = this.companyForm.value.state;
        this.stateList.map(res => {
            if (res.name == state) {
                this.getCityList(res.id);
            }
        });
    }
    getCityList(stateID) {
        this.accountApiService.getCityListBasedOnState(stateID).subscribe(res => {
            if (res.success) {
                this.cityList = res.data;
            }
        });
    }
    /* ===============  Add Service  ==================== */
    addService() {
        if (this.companyForm.value.services != "") {
            this.serviceList.push(this.companyForm.value.services);
            this.companyForm.patchValue({
                services: ''
            });
        }
    }
    removeTag(index) {
        this.serviceList.splice(index, 1);
    }
}
CreateCompanyComponent.ɵfac = function CreateCompanyComponent_Factory(t) { return new (t || CreateCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_AWS_Service_aws_service__WEBPACK_IMPORTED_MODULE_5__["AwsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_account_api_service__WEBPACK_IMPORTED_MODULE_6__["AccountApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_company_api_service__WEBPACK_IMPORTED_MODULE_7__["CompanyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
CreateCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateCompanyComponent, selectors: [["app-create-company"]], viewQuery: function CreateCompanyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imagePicker = _t.first);
    } }, decls: 207, vars: 25, consts: [[1, "container"], [1, "card", "p-4"], ["id", "stepper1", 1, "bs-stepper"], [1, "bs-stepper-header"], ["data-target", "#test-l-1", 1, "step"], [1, "step-trigger"], [1, "bs-stepper-circle"], [1, "bs-stepper-label"], [1, "line"], ["data-target", "#test-l-2", 1, "step"], ["data-target", "#test-l-3", 1, "step"], [1, "bs-stepper-content"], [3, "formGroup"], ["id", "test-l-1", 1, "content"], [1, "row", "pt-2"], [1, "col", "col-md-6"], [1, "mandatory"], ["placeholder", "Company Name", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "url", "placeholder", "Website Url", "formControlName", "websiteLink", 1, "form-control"], ["formControlName", "stages", 1, "form-control"], ["value", "", "selected", "", "hidden", "", "disabled", ""], ["value", "Bootstrapped"], ["value", "Pre-Seed"], ["value", "Seed"], ["value", "Series A"], ["value", "Series B"], ["value", "Series c"], ["value", "Series D"], ["value", "Series E"], ["value", "Series F"], ["value", "Series G"], ["value", "Pre-IPO"], ["value", "IPO"], ["value", "Pre series"], ["type", "url", "placeholder", "Social Media URL", "formControlName", "profile_url", 1, "form-control"], ["placeholder", "description", "formControlName", "description", 1, "form-control", 2, "max-height", "125px"], [1, "col", "col-md-3"], [1, "logo", 3, "src"], [1, "fa", "fa-camera", "fab", "center", 3, "click"], [1, "text-right"], [1, "btn", "btn-primary", 3, "click"], ["id", "test-l-2", 1, "content"], ["formControlName", "industry", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "company_type", 1, "form-control"], ["value", "Public"], ["value", "Private"], [1, "col", "col-3"], ["placeholder", "Enter Service", "formControlName", "services", 1, "form-control"], [1, "col", "col-2", "pt-4"], [1, "btn", "btn-secondary", 3, "click"], [1, "col", "col-md-7", "pt-5"], ["class", "chip", 4, "ngFor", "ngForOf"], ["id", "test-l-3", 1, "content"], ["placeholder", "Enter Email", "formControlName", "contactEmail", 1, "form-control"], [2, "display", "flex"], [1, "form-control", 2, "width", "65px"], ["placeholder", "Enter mobile number", "formControlName", "contactNumber", 1, "form-control"], [1, "col", "col-md-4"], ["formControlName", "country", 1, "form-control", 3, "change"], ["formControlName", "state", 1, "form-control", 3, "change"], ["formControlName", "city", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-5", 3, "click"], [3, "imageChanedEvent", "viewMode", "aspectRatio", "darkTheme", "resizeToWidth", "resizeToHeight", "imageCropped"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["imagePicker", ""], [1, "text-danger"], [3, "value"], [1, "chip"], ["aria-hidden", "true", 1, "fa", "fa-times", 3, "click"]], template: function CreateCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Startup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Company Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CreateCompanyComponent_small_34_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Website Url ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CreateCompanyComponent_small_41_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "stages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Select Stages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Bootstrapped");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Pre-Seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Series A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Series B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Series C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Series D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Series E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Series F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Series G");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Pre-IPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " IPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Pre series");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, CreateCompanyComponent_small_79_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Social Media URL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CreateCompanyComponent_small_87_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Short Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, CreateCompanyComponent_small_95_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Company Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_i_click_103_listener() { return ctx.getImage(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_105_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Industry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Select Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, CreateCompanyComponent_option_117_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CreateCompanyComponent_small_118_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Company Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Company Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, CreateCompanyComponent_small_131_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_139_listener() { return ctx.addService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, CreateCompanyComponent_div_142_Template, 3, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_145_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, CreateCompanyComponent_small_155_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "select", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "+91");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "+1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, CreateCompanyComponent_small_169_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateCompanyComponent_Template_select_change_176_listener() { return ctx.selectCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "select country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](179, CreateCompanyComponent_option_179_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, CreateCompanyComponent_small_180_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "States/Union territories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "select", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateCompanyComponent_Template_select_change_186_listener() { return ctx.selectState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "select States/Union territory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, CreateCompanyComponent_option_189_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, CreateCompanyComponent_small_190_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "select States/Union territory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](199, CreateCompanyComponent_option_199_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, CreateCompanyComponent_small_200_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateCompanyComponent_Template_button_click_202_listener() { return ctx.savCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "ngx-photo-editor", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function CreateCompanyComponent_Template_ngx_photo_editor_imageCropped_204_listener($event) { return ctx.imageCropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "input", 65, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateCompanyComponent_Template_input_change_205_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.companyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("name").invalid && ctx.companyForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("websiteLink").invalid && ctx.companyForm.get("websiteLink").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("stages").invalid && ctx.companyForm.get("stages").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("profile_url").invalid && ctx.companyForm.get("profile_url").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("description").invalid && ctx.companyForm.get("description").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.companyForm.value.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.industryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("industry").invalid && ctx.companyForm.get("industry").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("company_type").invalid && ctx.companyForm.get("company_type").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.serviceList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("contactEmail").invalid && ctx.companyForm.get("contactEmail").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("contactNumber").invalid && ctx.companyForm.get("contactNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("country").invalid && ctx.companyForm.get("country").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("state").invalid && ctx.companyForm.get("state").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.get("city").invalid && ctx.companyForm.get("city").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageChanedEvent", ctx.imageChangedEvent)("viewMode", 1)("aspectRatio", 1 / 1)("darkTheme", false)("resizeToWidth", 200)("resizeToHeight", 200);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_12__["NgxPhotoEditorComponent"]], styles: ["@media (max-width: 520px) {\n  .bs-stepper[_ngcontent-%COMP%]   .step-trigger[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 5px;\n    font-size: 12px !important;\n  }\n}\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  border: 2px solid var(--primary);\n}\n.logo[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 1%;\n  width: 120px;\n  height: 120px;\n  border: 2px dotted var(--primary);\n}\n.center[_ngcontent-%COMP%] {\n  transform: translate(-35px, -6px);\n  position: absolute;\n}\n.fab[_ngcontent-%COMP%] {\n  color: #293266;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 20px;\n  height: 30px;\n  font-size: 16px;\n  line-height: 30px;\n  border-radius: 25px;\n  background-color: #f1f1f1;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NyZWF0ZS1jb21wYW55L2NyZWF0ZS1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUNBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQUVGO0FBQUE7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FBR0Y7QUFEQTtFQUNFLGNBQUE7QUFJRjtBQUZBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnkvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuYnMtc3RlcHBlciAuc3RlcC10cmlnZ2VyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4ubG9nbyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMSU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLXByaW1hcnkpO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNXB4LCAtNnB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZhYiB7XHJcbiAgY29sb3I6ICMyOTMyNjY7XHJcbn1cclxuLmNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-company',
                templateUrl: './create-company.component.html',
                styleUrls: ['./create-company.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_AWS_Service_aws_service__WEBPACK_IMPORTED_MODULE_5__["AwsService"] }, { type: _account_account_api_service__WEBPACK_IMPORTED_MODULE_6__["AccountApiService"] }, { type: _company_api_service__WEBPACK_IMPORTED_MODULE_7__["CompanyApiService"] }, { type: _components_profile_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { imagePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["imagePicker", { static: false }]
        }] }); })();


/***/ }),

/***/ "afDC":
/*!*********************************************************************************!*\
  !*** ./src/app/components/company/company-profile/company-profile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfileComponent", function() { return CompanyProfileComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/validator */ "GwNG");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../profile/profile.service */ "ZMY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../company-api.service */ "+U+C");
/* harmony import */ var _account_account_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../account/account-api.service */ "q4D8");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_shared_AWS_Service_aws_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/AWS-Service/aws.service */ "jn2c");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/advertisement/advertisement.component */ "cwmD");
/* harmony import */ var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-photo-editor */ "kUS0");
/* harmony import */ var _company_top_member_company_top_member_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../company-top-member/company-top-member.component */ "bqrc");
/* harmony import */ var _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../address-book/address-book.component */ "wi5A");




















const _c0 = ["imagePicker"];
function CompanyProfileComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyProfileComponent_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.getImage(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_h6_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_h6_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 79);
} }
function CompanyProfileComponent_app_company_top_member_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-company-top-member", 80);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("companyId", ctx_r4.companyDetail == null ? null : ctx_r4.companyDetail.id)("userDetail", ctx_r4.userDetail);
} }
function CompanyProfileComponent_app_address_book_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-address-book", 80);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("companyId", ctx_r5.companyDetail == null ? null : ctx_r5.companyDetail.id)("userDetail", ctx_r5.userDetail);
} }
function CompanyProfileComponent_small_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Company Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_small_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Website URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_small_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Stages.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_small_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Mobile Number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_option_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r23);
} }
function CompanyProfileComponent_small_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_small_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Company Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_option_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r24.name, " ");
} }
function CompanyProfileComponent_small_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Country.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_option_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r25.name, " ");
} }
function CompanyProfileComponent_small_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select States/Union territories.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyProfileComponent_option_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r26.name, " ");
} }
function CompanyProfileComponent_small_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { companyId: a0 }; };
class CompanyProfileComponent {
    constructor(profileService, route, companyApiService, accountApiService, toaster, awsService, fb) {
        this.profileService = profileService;
        this.route = route;
        this.companyApiService = companyApiService;
        this.accountApiService = accountApiService;
        this.toaster = toaster;
        this.awsService = awsService;
        this.fb = fb;
        this.add = "assets/img/Add3.png";
        this.userDetail = {};
        this.industryList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].industries;
        this.countryList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].country;
        this.stateList = [];
        this.cityList = [];
        this.timelineImage = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultTimlineImage;
    }
    ngOnInit() {
        this.getInfo();
        this.initializeForm();
    }
    initializeForm() {
        this.companyUpdateForm = this.fb.group({
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            contactNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].phoneNumberRegex)]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            industry: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            logo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            stages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            websiteLink: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].urlRegex)]],
            company_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    setFormValue(company) {
        this.companyUpdateForm.patchValue({
            city: company.city,
            contactNumber: company.contactNumber,
            country: company.country,
            industry: company.industry,
            logo: company.logo,
            name: company.name,
            state: company.state,
            websiteLink: company.websiteLink,
            company_type: company.company_type,
            stages: company.stages,
            id: company.id
        });
        this.selectCountry();
    }
    getInfo() {
        this.userDetail = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8));
        console.log(this.userDetail);
        this.route.queryParams.subscribe(param => {
            this.getCompanyDetail(param.companyId);
        });
    }
    companyVerify() {
        if (this.userDetail.isOwener) {
            let obj = {
                id: this.companyDetail.id,
                isVerified: "false"
            };
            this.profileService.updateProfileInfo(obj).subscribe(res => {
                if (res.success) {
                    this.companyDetail.isMobileVerified = "true";
                }
            });
        }
        ;
    }
    getCompanyDetail(companyId) {
        this.companyApiService.getCompanyDetail(companyId).subscribe(res => {
            if (res.success) {
                // this.companyDetail = res.data;
                this.companyDetail = res.data;
                console.log(this.companyDetail);
                this.setFormValue(this.companyDetail);
            }
        });
    }
    getImage(type) {
        try {
            this.imageEditorType = type;
            this.imagePicker.nativeElement.click();
        }
        catch (error) {
        }
    }
    fileChangeEvent(event) {
        if (this.imageEditorType == 1) {
            this.imageChangedEvent = event;
        }
        else {
            this.imageChangedEvent = event;
        }
    }
    imageCropped(event) {
        if (this.imageEditorType == 1) {
            this.awsService.uploadFile(event.file, "profile").then(res => {
                this.companyUpdateForm.patchValue({
                    profile_url: res
                });
            });
        }
        else {
            this.awsService.uploadFile(event.file, "company").then(res => {
                this.companyUpdateForm.patchValue({
                    logo: res
                });
                let obj = {
                    id: this.companyUpdateForm.value.id,
                    logo: this.companyUpdateForm.value.logo,
                    user_id: this.userDetail.id
                };
                this.companyApiService.updateCompany(obj).subscribe(res => {
                    if (res.success) {
                        this.toaster.success(res.message);
                        this.companyDetail = res.data;
                        this.setFormValue(this.companyDetail);
                    }
                    else {
                        this.toaster.error(res.message);
                    }
                });
            });
        }
    }
    /* ===================== country select  =========================== */
    selectCountry() {
        let country = this.companyUpdateForm.value.country;
        this.countryList.map(res => {
            if (res.name == country) {
                this.getStateList(res.id);
            }
        });
    }
    getStateList(countryID) {
        this.accountApiService.getStateListBasedOnCountry(countryID).subscribe(res => {
            if (res.success) {
                this.stateList = res.data;
                this.selectState();
            }
        });
    }
    selectState() {
        let state = this.companyUpdateForm.value.state;
        this.stateList.map(res => {
            if (res.name == state) {
                this.getCityList(res.id);
            }
        });
    }
    getCityList(stateID) {
        this.accountApiService.getCityListBasedOnState(stateID).subscribe(res => {
            if (res.success) {
                this.cityList = res.data;
            }
        });
    }
    onSubmit() {
        if (this.companyUpdateForm.valid) {
            let obj = {
                city: this.companyUpdateForm.value.city,
                contactNumber: this.companyUpdateForm.value.contactNumber,
                country: this.companyUpdateForm.value.country,
                description: this.companyUpdateForm.value.description,
                id: this.companyUpdateForm.value.id,
                industry: this.companyUpdateForm.value.industry,
                logo: this.companyUpdateForm.value.logo,
                name: this.companyUpdateForm.value.name,
                profile_url: this.companyUpdateForm.value.profile_url,
                state: this.companyUpdateForm.value.state,
                stages: this.companyUpdateForm.value.state,
                user_id: this.userDetail.id,
                websiteLink: this.companyUpdateForm.value.websiteLink,
            };
            this.companyApiService.updateCompany(obj).subscribe(res => {
                if (res.success) {
                    this.toaster.success(res.message);
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#UpdateModel .close").click();
                    this.companyDetail = res.data;
                    this.setFormValue(this.companyDetail);
                }
                else {
                    this.toaster.error(res.message);
                }
            });
        }
    }
}
CompanyProfileComponent.ɵfac = function CompanyProfileComponent_Factory(t) { return new (t || CompanyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_company_api_service__WEBPACK_IMPORTED_MODULE_8__["CompanyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_account_account_api_service__WEBPACK_IMPORTED_MODULE_9__["AccountApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_AWS_Service_aws_service__WEBPACK_IMPORTED_MODULE_11__["AwsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
CompanyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyProfileComponent, selectors: [["app-company-profile"]], viewQuery: function CompanyProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.imagePicker = _t.first);
    } }, decls: 182, vars: 45, consts: [[1, "container"], [1, "row"], [1, "col-md-8", "mb-2"], [1, "card"], [1, "bg"], [1, "inner"], [1, "profile-image"], [1, "profile", 3, "src"], ["class", "fa fa-camera fab profile-edit", "data-target", "#VerifyModel", "data-toggle", "modal", 3, "click", 4, "ngIf"], [1, "custom-padding"], [1, "col-8"], [1, "name", 2, "display", "inline-flex"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Not Verified", "style", "color: #F0541E;", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Verified", "style", "color: #009944;", 4, "ngIf"], ["target", "_blank", 1, "connection", 3, "href"], [1, "name_second"], [1, "col-4"], ["class", "pencil m-2", "src", "assets/logo/edit.svg", "data-target", "#UpdateModel", "data-toggle", "modal", 4, "ngIf"], [2, "display", "inline-flex"], ["routerLink", "./publish", "routerLinkActive", "active-link", 1, "btn-1", 3, "queryParams"], ["routerLink", "./detail", "routerLinkActive", "active-link", 1, "btn-1", 3, "queryParams"], ["routerLink", "./employee", "routerLinkActive", "active-link", 1, "btn-1", 3, "queryParams"], [2, "padding-top", "5px", "cursor", "pointer"], [1, "d-none", "d-md-block", "col-md-4", "mb-2"], [3, "companyId", "userDetail", 4, "ngIf"], [3, "image"], ["id", "UpdateModel", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "p-3"], [1, "modal-Custheader", "p-2"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [3, "formGroup"], [1, "content"], [1, "row", "pt-2"], [1, "col", "col-md-6"], [1, "mandatory"], ["placeholder", "Company Name", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["placeholder", "Website Url", "formControlName", "websiteLink", 1, "form-control"], ["formControlName", "stages", 1, "form-control"], ["value", "Bootstrapped"], ["value", "Pre-Seed"], ["value", "Seed"], ["value", "Series A"], ["value", "Series B"], ["value", "Series c"], ["value", "Series D"], ["value", "Series E"], ["value", "Series F"], ["value", "Series G"], ["value", "Pre-IPO"], ["value", "IPO"], ["value", "Pre series"], [2, "display", "flex"], [1, "form-control", 2, "width", "65px"], ["placeholder", "Enter mobile number", "formControlName", "contactNumber", 1, "form-control"], ["formControlName", "industry", 1, "form-control"], ["value", "", "selected", "", "hidden", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "company_type", 1, "form-control"], ["value", "Public"], ["value", "Private"], ["value", "etc"], [1, "col", "col-md-4"], ["formControlName", "country", 1, "form-control", 3, "change"], ["formControlName", "state", 1, "form-control", 3, "change"], ["formControlName", "city", 1, "form-control"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary", "mt-5", 3, "click"], [3, "imageChanedEvent", "viewMode", "aspectRatio", "darkTheme", "imageCropped"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["imagePicker", ""], ["data-target", "#VerifyModel", "data-toggle", "modal", 1, "fa", "fa-camera", "fab", "profile-edit", 3, "click"], ["VerifyModel", ""], ["data-toggle", "tooltip", "data-placement", "right", "title", "Not Verified", 2, "color", "#F0541E"], [1, "fa", "fa-exclamation-circle"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Verified", 2, "color", "#009944"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], ["src", "assets/logo/edit.svg", "data-target", "#UpdateModel", "data-toggle", "modal", 1, "pencil", "m-2"], [3, "companyId", "userDetail"], [1, "text-danger"], [3, "value"]], template: function CompanyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CompanyProfileComponent_i_9_Template, 2, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CompanyProfileComponent_h6_15_Template, 3, 0, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CompanyProfileComponent_h6_16_Template, 3, 0, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CompanyProfileComponent_img_26_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, CompanyProfileComponent_app_company_top_member_40_Template, 1, 2, "app-company-top-member", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, CompanyProfileComponent_app_address_book_41_Template, 1, 2, "app-address-book", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "advertisement", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Update Company Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Company Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, CompanyProfileComponent_small_61_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Website Url ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, CompanyProfileComponent_small_68_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "stages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Bootstrapped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Pre-Seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Series A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Series B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Series C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Series D");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Series E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Series F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Series G");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Pre-IPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " IPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Pre series");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, CompanyProfileComponent_small_104_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "+91");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "+1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, CompanyProfileComponent_small_118_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Industry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "select", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Select Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, CompanyProfileComponent_option_128_Template, 2, 2, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, CompanyProfileComponent_small_129_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Company Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Company Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "etc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](144, CompanyProfileComponent_small_144_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CompanyProfileComponent_Template_select_change_151_listener() { return ctx.selectCountry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "select country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, CompanyProfileComponent_option_154_Template, 2, 2, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, CompanyProfileComponent_small_155_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "States/Union territories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "select", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CompanyProfileComponent_Template_select_change_161_listener() { return ctx.selectState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "select States/Union territory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](164, CompanyProfileComponent_option_164_Template, 2, 2, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](165, CompanyProfileComponent_small_165_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "select", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "select States/Union territory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](174, CompanyProfileComponent_option_174_Template, 2, 2, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](175, CompanyProfileComponent_small_175_Template, 2, 0, "small", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyProfileComponent_Template_button_click_177_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "ngx-photo-editor", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageCropped", function CompanyProfileComponent_Template_ngx_photo_editor_imageCropped_179_listener($event) { return ctx.imageCropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "input", 71, 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CompanyProfileComponent_Template_input_change_180_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", ctx.timelineImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.companyDetail == null ? null : ctx.companyDetail.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.company_id) == (ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.companyDetail == null ? null : ctx.companyDetail.name, " (", ctx.companyDetail == null ? null : ctx.companyDetail.company_type, ")\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.companyDetail == null ? null : ctx.companyDetail.isVerified) == "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.companyDetail == null ? null : ctx.companyDetail.isVerified) == "approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "//", ctx.companyDetail == null ? null : ctx.companyDetail.websiteLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.companyDetail == null ? null : ctx.companyDetail.websiteLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.companyDetail == null ? null : ctx.companyDetail.industry);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx.companyDetail == null ? null : ctx.companyDetail.city, ", ", ctx.companyDetail == null ? null : ctx.companyDetail.state, ",", ctx.companyDetail == null ? null : ctx.companyDetail.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.company_id) == (ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c1, ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c1, ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c1, ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyDetail != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.companyDetail == null ? null : ctx.companyDetail.id) != null && ((ctx.userDetail == null ? null : ctx.userDetail.company_id) == (ctx.companyDetail == null ? null : ctx.companyDetail.id) && (ctx.userDetail.userRole == "owner" || ctx.userDetail.userRole == "Admin")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("image", ctx.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.companyUpdateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("name").invalid && ctx.companyUpdateForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("websiteLink").invalid && ctx.companyUpdateForm.get("websiteLink").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("stages").invalid && ctx.companyUpdateForm.get("stages").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("contactNumber").invalid && ctx.companyUpdateForm.get("contactNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.industryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("industry").invalid && ctx.companyUpdateForm.get("industry").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("company_type").invalid && ctx.companyUpdateForm.get("company_type").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("country").invalid && ctx.companyUpdateForm.get("country").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("state").invalid && ctx.companyUpdateForm.get("state").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companyUpdateForm.get("city").invalid && ctx.companyUpdateForm.get("city").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("imageChanedEvent", ctx.imageChangedEvent)("viewMode", 1)("aspectRatio", 1 / 1)("darkTheme", false);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_14__["AdvertisementComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ngx_photo_editor__WEBPACK_IMPORTED_MODULE_15__["NgxPhotoEditorComponent"], _company_top_member_company_top_member_component__WEBPACK_IMPORTED_MODULE_16__["CompanyTopMemberComponent"], _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_17__["AddressBookComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n\n.fab-close[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 50px;\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 5px;\n  font-size: 13px;\n  padding: 3px;\n}\n\n.fab-check[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 50px;\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 5px;\n  font-size: 13px;\n  padding: 3px;\n}\n\n.btn-1[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: white;\n  cursor: pointer;\n  color: #293266;\n  font-weight: bold;\n  border: 1px solid #293266;\n  border-top-right-radius: 18px;\n  border-bottom-left-radius: 6px;\n  padding: 5px 25px 2px 25px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 6px;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  background: #293266;\n  border: 1px solid #293266;\n  color: white;\n  outline: none !important;\n  transition: 0.8s all;\n}\n\n.inner[_ngcontent-%COMP%] {\n  background: white;\n  border-top-right-radius: 120px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  margin-top: 50px;\n}\n\n.custom-padding[_ngcontent-%COMP%] {\n  padding: 10rem 1.3rem 1.5rem !important;\n}\n\n.pencil[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 25px;\n  bottom: 0px;\n  right: 25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  padding-top: 3%;\n  padding-bottom: 3%;\n  padding-left: 3%;\n}\n\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10%;\n  width: 150px;\n  height: 150px;\n  border: 2px solid var(--info);\n  position: absolute;\n  z-index: 1;\n  margin-top: -50px;\n  background: white;\n}\n\n.profile-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.logo-Image[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n  height: 50px;\n  border: 1px solid darkgray;\n  background: white;\n  margin-top: -5px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.work[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-weight: bold;\n}\n\n.name_second[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n}\n\n.connection[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary);\n  width: 30%;\n}\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n@media (max-width: 450px) and (min-width: 300px) {\n  .profile[_ngcontent-%COMP%] {\n    bottom: 60%;\n  }\n}\n\n\n\nngb-modal-window[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\nngb-modal-window[_ngcontent-%COMP%]   .ngx-photo-editor-icons-container[_ngcontent-%COMP%] {\n  background: white !important;\n}\n\nngb-modal-window[_ngcontent-%COMP%]   .ngx-photo-editor-icons-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  fill: black;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n}\n\n.content[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  border: 2px solid var(--primary);\n}\n\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 1%;\n  width: 120px;\n  height: 120px;\n  border: 2px dotted var(--primary);\n}\n\n.content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  transform: translate(-35px, -6px);\n  position: absolute;\n}\n\n.content[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  color: #293266;\n}\n\n.content[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 20px;\n  height: 30px;\n  font-size: 16px;\n  line-height: 30px;\n  border-radius: 25px;\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktcHJvZmlsZS9jb21wYW55LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLHVDQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU9GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQVNGOztBQVBBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtBQWFGOztBQVhBO0VBQ0UscUNBQUE7VUFBQSxvQ0FBQTtBQWNGOztBQVpBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFlRjs7QUFiQTtFQUNFLG1CQUFBO0FBZ0JGOztBQWRBO0VBQ0U7SUFDRSxXQUFBO0VBaUJGO0FBQ0Y7O0FBZkEsdUNBQUE7O0FBRUU7RUFDRSw0QkFBQTtBQWdCSjs7QUFkRTtFQUNFLDRCQUFBO0FBZ0JKOztBQWRFO0VBQ0UsV0FBQTtBQWdCSjs7QUFiQTtFQUNFO0lBQ0UsY0FBQTtFQWdCRjtBQUNGOztBQWJFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQWVKOztBQWJFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQWVKOztBQWJFO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQWVKOztBQWJFO0VBQ0UsY0FBQTtBQWVKOztBQWJFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFlSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3RpbWxpbmUuanBnXCIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmZhYi1jbG9zZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuLmZhYi1jaGVjayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuLmJ0bi0xIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzI5MzI2NjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkzMjY2O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMjVweCAycHggMjVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG59XHJcbi5hY3RpdmUtbGluayB7XHJcbiAgYmFja2dyb3VuZDogIzI5MzI2NjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkzMjY2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC44cyBhbGw7XHJcbn1cclxuLmlubmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uY3VzdG9tLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDEwcmVtIDEuM3JlbSAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGVuY2lsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmZvKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4ucHJvZmlsZS1lZGl0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ubG9nby1JbWFnZSB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLndvcmsge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hbWVfc2Vjb25kIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG51bCB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb25uZWN0aW9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAucHJvZmlsZSB7XHJcbiAgICBib3R0b206IDYwJTtcclxuICB9XHJcbn1cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5uZ2ItbW9kYWwtd2luZG93IHtcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmd4LXBob3RvLWVkaXRvci1pY29ucy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5neC1waG90by1lZGl0b3ItaWNvbnMtY29udGFpbmVyID4gc3ZnIHtcclxuICAgIGZpbGw6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG4uY29udGVudCB7XHJcbiAgLnByb2ZpbGUtcGljIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gIH1cclxuICAubG9nbyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDElO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1wcmltYXJ5KTtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzVweCwgLTZweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5mYWIge1xyXG4gICAgY29sb3I6ICMyOTMyNjY7XHJcbiAgfVxyXG4gIC5jaGlwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company-profile',
                templateUrl: './company-profile.component.html',
                styleUrls: ['./company-profile.component.scss']
            }]
    }], function () { return [{ type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _company_api_service__WEBPACK_IMPORTED_MODULE_8__["CompanyApiService"] }, { type: _account_account_api_service__WEBPACK_IMPORTED_MODULE_9__["AccountApiService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }, { type: src_app_shared_AWS_Service_aws_service__WEBPACK_IMPORTED_MODULE_11__["AwsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, { imagePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["imagePicker", { static: false }]
        }] }); })();


/***/ }),

/***/ "bqrc":
/*!***************************************************************************************!*\
  !*** ./src/app/components/company/company-top-member/company-top-member.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CompanyTopMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyTopMemberComponent", function() { return CompanyTopMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company-api.service */ "+U+C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CompanyTopMemberComponent_li_7_b_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r1.userRole, ")");
} }
function CompanyTopMemberComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyTopMemberComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checkProfile(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CompanyTopMemberComponent_li_7_b_4_Template, 2, 1, "b", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A0", item_r1.firstName, " ", item_r1.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.userRole != null);
} }
const _c0 = function (a0) { return { companyId: a0 }; };
class CompanyTopMemberComponent {
    constructor(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.memberList = [];
        this.currentPage = 0;
    }
    ngOnInit() {
        this.getInfo();
    }
    getInfo() {
        this.getMemberList(this.currentPage, 5);
    }
    viewAll() {
    }
    getMemberList(currentPage, size) {
        this.companyService.getMemberList(this.companyId, currentPage, size).subscribe(res => {
            if (res.success) {
                this.memberList = res.data;
            }
        });
    }
    checkProfile(id) {
        localStorage.setItem("visit", id);
        this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
    }
}
CompanyTopMemberComponent.ɵfac = function CompanyTopMemberComponent_Factory(t) { return new (t || CompanyTopMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_api_service__WEBPACK_IMPORTED_MODULE_1__["CompanyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CompanyTopMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyTopMemberComponent, selectors: [["app-company-top-member"]], inputs: { companyId: "companyId", userDetail: "userDetail" }, decls: 8, vars: 4, consts: [[1, "card"], [1, "card-header"], [1, "head"], ["routerLink", "./employee", "routerLinkActive", "active-link", 1, "view", "pointer", 3, "queryParams"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "profile", 3, "src"], ["style", "color:#293266 ;", 4, "ngIf"], [2, "color", "#293266"]], template: function CompanyTopMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Company Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyTopMemberComponent_li_7_Template, 5, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.companyId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memberList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".card-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.card-header[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: bold;\n}\nli[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 5px !important;\n}\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  border: 2px solid #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktdG9wLW1lbWJlci9jb21wYW55LXRvcC1tZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxPQUFBO0FBRUo7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNBO0VBQ0UsbUNBQUE7QUFFRjtBQUFBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktdG9wLW1lbWJlci9jb21wYW55LXRvcC1tZW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIC5oZWFkIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIC52aWV3IHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5saSB7XHJcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyTopMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-top-member',
                templateUrl: './company-top-member.component.html',
                styleUrls: ['./company-top-member.component.scss']
            }]
    }], function () { return [{ type: _company_api_service__WEBPACK_IMPORTED_MODULE_1__["CompanyApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { companyId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cBWy":
/*!*******************************************************************************!*\
  !*** ./src/app/components/company/company-member/company-member.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanyMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMemberComponent", function() { return CompanyMemberComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/common/validator */ "GwNG");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../profile/profile.service */ "ZMY+");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../company-api.service */ "+U+C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CompanyMemberComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 32);
} }
function CompanyMemberComponent_div_8_div_1_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.userRole);
} }
function CompanyMemberComponent_div_8_div_1_select_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompanyMemberComponent_div_8_div_1_select_14_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return item_r8.userRole = $event; })("change", function CompanyMemberComponent_div_8_div_1_select_14_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.addEmployeeRole(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select Employee Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r8.userRole);
} }
function CompanyMemberComponent_div_8_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyMemberComponent_div_8_div_1_div_16_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const item_r8 = ctx_r21.$implicit; const i_r9 = ctx_r21.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.deleteMember(item_r8, i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyMemberComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyMemberComponent_div_8_div_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const item_r8 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.checkProfile(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyMemberComponent_div_8_div_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const item_r8 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.checkProfile(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CompanyMemberComponent_div_8_div_1_label_12_Template, 5, 1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CompanyMemberComponent_div_8_div_1_select_14_Template, 7, 1, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CompanyMemberComponent_div_8_div_1_div_16_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r8.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r8.firstName, " ", item_r8.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r8.userRole != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r7.userDetail == null ? null : ctx_r7.userDetail.company_id) == ctx_r7.companyDetail.id && item_r8.userRole != "owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r7.userDetail == null ? null : ctx_r7.userDetail.company_id) == ctx_r7.companyDetail.id && item_r8.userRole != "owner");
} }
function CompanyMemberComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyMemberComponent_div_8_div_1_Template, 17, 7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.memberList);
} }
function CompanyMemberComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select Employee.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyMemberComponent_div_31_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyMemberComponent_div_31_li_2_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const item_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.selectEmployee(item_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r27.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r27.firstName, "\u00A0", item_r27.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r27.headline);
} }
function CompanyMemberComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CompanyMemberComponent_div_31_li_2_Template, 10, 4, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.searchList);
} }
function CompanyMemberComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Title.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyMemberComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r30);
} }
function CompanyMemberComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r31);
} }
class CompanyMemberComponent {
    constructor(profileService, fb, companyService, router, route, toastr) {
        this.profileService = profileService;
        this.fb = fb;
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.userList = [];
        this.isShow = false;
        this.role = "";
        this.memberList = [];
        this.userDetail = {};
        this.currentPage = 0;
        this.throttle = 150;
        this.scrollDistance = 1;
        this.scrollUpDistance = 1.5;
        this.yeaList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].years();
        this.monthList = src_app_shared_common_validator__WEBPACK_IMPORTED_MODULE_4__["common"].month;
        this.isShowList = true;
        this.searchList = [];
    }
    ngOnInit() {
        this.getInfo();
        this.initializeExpForm();
    }
    initializeExpForm() {
        this.addEmployeeForm = this.fb.group({
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            startYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            startMonth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            isWorking: [true],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            profileImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    getInfo() {
        this.userDetail = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8));
        this.route.queryParams.subscribe(param => {
            console.log(param);
            this.getCompanyDetail(param.companyId);
        });
    }
    getMemberList(currentPage, size) {
        this.companyService.getMemberList(this.companyDetail.id, currentPage, size).subscribe(res => {
            if (res.success) {
                this.memberList = res.data;
            }
        });
    }
    deleteMember(item, index) {
        this.companyService.removeMember(item.id, this.companyDetail.id).subscribe(res => {
            if (res.success) {
                this.memberList.splice(index, 1);
            }
        });
    }
    addEmployeeRole(item) {
        this.companyService.assignEmployeeRole(item.id, item.userRole, this.companyDetail.id).subscribe(res => {
            if (!res.success) {
                this.toastr.warning(res.message);
            }
        });
    }
    checkProfile(id) {
        localStorage.setItem("visit", id);
        this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
    }
    onAddEmployee() {
        let obj = {
            companyId: this.companyDetail.id,
            companyName: this.companyDetail.name,
            companyLogo: this.companyDetail.logo,
            startMonth: this.addEmployeeForm.value.startMonth,
            startYear: this.addEmployeeForm.value.startYear,
            title: this.addEmployeeForm.value.title,
            userId: this.addEmployeeForm.value.userId,
            working: true
        };
        this.companyService.addEmployeeByAdmin(obj).subscribe(res => {
            if (res.success) {
                this.getMemberList(this.currentPage, 20);
                this.addEmployeeForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#addEmployee .close").click();
            }
        });
    }
    selectEmployee(item) {
        this.addEmployeeForm.patchValue({
            userId: item.id,
            userName: item.firstName + " " + item.lastName,
            profileImage: item.profilePicture,
        });
    }
    onFocus() {
        this.isShowList = true;
    }
    search() {
        if (this.addEmployeeForm.value.userName.length > 2) {
            this.profileService.searchOnlyUser(this.addEmployeeForm.value.userName, this.userDetail.id).subscribe(res => {
                if (res.success) {
                    this.searchList = res.data;
                }
            });
        }
        else {
            this.addEmployeeForm.patchValue({
                profileImage: "",
                userId: ""
            });
            return;
        }
    }
    onBlur() {
        setTimeout(() => {
            this.isShowList = false;
            this.searchList = [];
        }, 500);
    }
    getCompanyDetail(companyId) {
        this.companyService.getCompanyDetail(companyId).subscribe(res => {
            if (res.success) {
                this.companyDetail = res.data;
                this.getMemberList(this.currentPage, 20);
            }
        });
    }
}
CompanyMemberComponent.ɵfac = function CompanyMemberComponent_Factory(t) { return new (t || CompanyMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_company_api_service__WEBPACK_IMPORTED_MODULE_6__["CompanyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CompanyMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyMemberComponent, selectors: [["app-company-member"]], decls: 59, vars: 10, consts: [[1, "card", "custom-height"], [1, "card-body"], [1, "row"], [1, "col-11"], [1, "col-1"], ["class", "pencil", "src", "assets/logo/plus.svg", "data-target", "#addEmployee", "data-toggle", "modal", "style", "width: 25px;", 4, "ngIf"], ["class", "emp-list", 4, "ngIf"], ["id", "addEmployee", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "p-3"], [1, "modal-Custheader", "p-2"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body"], [1, "p-2", 3, "formGroup", "submit"], [1, "col", "col-md-12", "p-2"], [1, "mandatory"], [1, "form-control"], [2, "width", "23px", 3, "src"], ["type", "text", "placeholder", "eg. Adam Smith", "formControlName", "userName", 1, "school", 3, "blur", "focus", "keyup"], ["class", "text-danger", 4, "ngIf"], ["class", "card list", 4, "ngIf"], ["type", "text", "placeholder", "eg. Sales Manager", "formControlName", "title", 1, "form-control"], [1, "col", "col-xl-3", "p-2"], ["formControlName", "startYear", 1, "form-control"], ["value", "", "selected", "", "disabled", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col", "col-xl-3", "p-3"], ["formControlName", "startMonth", 1, "form-control"], ["value", "", "selected", "", "hidden", "", "disabled", ""], [1, "text-right"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["src", "assets/logo/plus.svg", "data-target", "#addEmployee", "data-toggle", "modal", 1, "pencil", 2, "width", "25px"], [1, "emp-list"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "row", "mb-2"], [1, "col-7"], [2, "display", "flex"], [1, "profile", 3, "src", "click"], [1, "pt-2"], [3, "click"], [2, "color", "darkgray"], ["class", "text-primary", 4, "ngIf"], [1, "col-4"], ["class", "form-control", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["class", "col-1 mb-2", 4, "ngIf"], [1, "text-primary"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "null", "selected", "", "hidden", "", "disabled", ""], ["value", "Admin"], ["value", "Employee"], [1, "col-1", "mb-2"], [1, "add-trash"], [1, "fa", "fa-trash", 3, "click"], [1, "text-danger"], [1, "card", "list"], [4, "ngFor", "ngForOf"], [2, "display", "flex", 3, "click"], [1, "profile", 3, "src"], [3, "value"]], template: function CompanyMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Company Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CompanyMemberComponent_img_7_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CompanyMemberComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Add Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CompanyMemberComponent_Template_form_submit_20_listener() { return ctx.onAddEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Employee Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function CompanyMemberComponent_Template_input_blur_29_listener() { return ctx.onBlur(); })("focus", function CompanyMemberComponent_Template_input_focus_29_listener() { return ctx.onFocus(); })("keyup", function CompanyMemberComponent_Template_input_keyup_29_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CompanyMemberComponent_small_30_Template, 2, 0, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CompanyMemberComponent_div_31_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CompanyMemberComponent_small_39_Template, 2, 0, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Start year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CompanyMemberComponent_option_49_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Start Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CompanyMemberComponent_option_55_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Add Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.userDetail == null ? null : ctx.userDetail.company_id) == (ctx.companyDetail == null ? null : ctx.companyDetail.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.memberList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addEmployeeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.addEmployeeForm.value.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.addEmployeeForm.get("userName").invalid && ctx.addEmployeeForm.get("userName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowList && ctx.searchList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.addEmployeeForm.get("title").invalid && ctx.addEmployeeForm.get("title").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.yeaList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.monthList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addEmployeeForm.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".card-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.card-header[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: bold;\n}\n.add-trash[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.position[_ngcontent-%COMP%] {\n  margin: 90px 0px 0px 0px;\n  z-index: 999;\n  position: fixed;\n  width: 50%;\n  height: 500px !important;\n  overflow-y: auto;\n}\nli[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 5px !important;\n}\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  border: 2px solid #ffff;\n}\n.select-wrap[_ngcontent-%COMP%] {\n  border: 1px solid darkgray;\n  border-radius: 5px;\n  padding: 10px;\n}\n.emp-list[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 96%;\n}\n@media (min-width: 576px) {\n  .search[_ngcontent-%COMP%] {\n    width: 31rem !important;\n  }\n\n  .position[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n.custom-height[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktbWVtYmVyL2NvbXBhbnktbWVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjtBQUFFO0VBQ0UsT0FBQTtBQUVKO0FBQUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFBQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUdGO0FBREE7RUFDRSxtQ0FBQTtBQUlGO0FBRkE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBS0Y7QUFIQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBTUY7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFRRjtBQU5BO0VBQ0U7SUFDRSx1QkFBQTtFQVNGOztFQU5BO0lBQ0UsVUFBQTtFQVNGO0FBQ0Y7QUFQQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQVNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktbWVtYmVyL2NvbXBhbnktbWVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAuaGVhZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAudmlldyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuLmFkZC10cmFzaCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4ucG9zaXRpb24ge1xyXG4gIG1hcmdpbjogOTBweCAwcHggMHB4IDBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxubGkge1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9maWxlIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmO1xyXG59XHJcbi5zZWxlY3Qtd3JhcCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmVtcC1saXN0IHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5saXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogOTYlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5zZWFyY2gge1xyXG4gICAgd2lkdGg6IDMxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucG9zaXRpb24ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbn1cclxuLmN1c3RvbS1oZWlnaHQge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompanyMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-company-member',
                templateUrl: './company-member.component.html',
                styleUrls: ['./company-member.component.scss']
            }]
    }], function () { return [{ type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _company_api_service__WEBPACK_IMPORTED_MODULE_6__["CompanyApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    //baseUrl: "http://ec2-13-233-64-33.ap-south-1.compute.amazonaws.com:8080/BolStart/api/",
    baseUrl: "https://api.bolstart.com/bolstart/api/",
    jobPostBaseUrl: "https://api.bolstart.com/bolstart/",
    //baseUrl: "https://tablabs-dialindia.herokuapp.com/api/",
    defaultPic: "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/profile_avater.png",
    defaultTimlineImage: "url(https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/timline.jpg)"
};


/***/ }),

/***/ "pPPa":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CompanyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html',
                styleUrls: ['./company.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sCIA":
/*!******************************************************!*\
  !*** ./src/app/components/company/company.module.ts ***!
  \******************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-book/address-book.component */ "wi5A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-api.service */ "+U+C");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "pPPa");
/* harmony import */ var _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-info/company-info.component */ "3EEX");
/* harmony import */ var _company_member_company_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-member/company-member.component */ "cBWy");
/* harmony import */ var _company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-profile/company-profile.component */ "afDC");
/* harmony import */ var _company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-publish/company-publish.component */ "9IWr");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-routing.module */ "zCqA");
/* harmony import */ var _company_top_member_company_top_member_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company-top-member/company-top-member.component */ "bqrc");
/* harmony import */ var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-company/create-company.component */ "YXRX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_photo_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-photo-editor */ "kUS0");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../shared/shared.module */ "PCNd");
















class CompanyModule {
}
CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, providers: [_company_api_service__WEBPACK_IMPORTED_MODULE_2__["CompanyApiService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_8__["CompanyRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            ngx_photo_editor__WEBPACK_IMPORTED_MODULE_13__["NgxPhotoEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"], _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_10__["CreateCompanyComponent"], _company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_6__["CompanyProfileComponent"], _company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_7__["CompanyPublishComponent"], _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_4__["CompanyInfoComponent"], _company_member_company_member_component__WEBPACK_IMPORTED_MODULE_5__["CompanyMemberComponent"], _company_top_member_company_top_member_component__WEBPACK_IMPORTED_MODULE_9__["CompanyTopMemberComponent"], _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_0__["AddressBookComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _company_routing_module__WEBPACK_IMPORTED_MODULE_8__["CompanyRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        ngx_photo_editor__WEBPACK_IMPORTED_MODULE_13__["NgxPhotoEditorModule"]], exports: [_company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_7__["CompanyPublishComponent"], _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_4__["CompanyInfoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
        args: [{
                declarations: [_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"], _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_10__["CreateCompanyComponent"], _company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_6__["CompanyProfileComponent"], _company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_7__["CompanyPublishComponent"], _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_4__["CompanyInfoComponent"], _company_member_company_member_component__WEBPACK_IMPORTED_MODULE_5__["CompanyMemberComponent"], _company_top_member_company_top_member_component__WEBPACK_IMPORTED_MODULE_9__["CompanyTopMemberComponent"], _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_0__["AddressBookComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _company_routing_module__WEBPACK_IMPORTED_MODULE_8__["CompanyRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                    ngx_photo_editor__WEBPACK_IMPORTED_MODULE_13__["NgxPhotoEditorModule"]
                ],
                providers: [_company_api_service__WEBPACK_IMPORTED_MODULE_2__["CompanyApiService"]],
                exports: [_company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_7__["CompanyPublishComponent"], _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_4__["CompanyInfoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wi5A":
/*!***************************************************************************!*\
  !*** ./src/app/components/company/address-book/address-book.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddressBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookComponent", function() { return AddressBookComponent; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/profile.service */ "ZMY+");
/* harmony import */ var _company_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../company-api.service */ "+U+C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function AddressBookComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.selectGroup(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r3.groupName, " ");
} }
const _c0 = function (a0) { return { selectedLabel: a0 }; };
function AddressBookComponent_div_25_li_2_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_25_li_2_label_1_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.selectGroup(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r7.groupName == (ctx_r9.selectedGroup == null ? null : ctx_r9.selectedGroup.groupName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.groupName);
} }
function AddressBookComponent_div_25_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddressBookComponent_div_25_li_2_span_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return item_r7.groupName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_25_li_2_span_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.updateGroupName(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_25_li_2_span_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.onEditGroupName(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r7.groupName);
} }
function AddressBookComponent_div_25_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_25_li_2_span_3_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.deleteGroup(item_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_25_li_2_span_3_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.onEditGroupName(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddressBookComponent_div_25_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddressBookComponent_div_25_li_2_label_1_Template, 2, 4, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddressBookComponent_div_25_li_2_span_2_Template, 5, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddressBookComponent_div_25_li_2_span_3_Template, 4, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedForEdit != i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedForEdit == i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedForEdit != i_r8);
} }
function AddressBookComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddressBookComponent_div_25_li_2_Template, 4, 3, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.groupList);
} }
function AddressBookComponent_div_31_div_9_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_31_div_9_li_2_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const item_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r33.selectUser(item_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r32.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r32.firstName, "\u00A0", item_r32.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r32.headline);
} }
function AddressBookComponent_div_31_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddressBookComponent_div_31_div_9_li_2_Template, 10, 4, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.memberList);
} }
function AddressBookComponent_div_31_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_31_li_12_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const i_r36 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.deleteMember(i_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r35.profile_piture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u00A0", item_r35.firstName, " ", item_r35.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", item_r35.emailid, ")");
} }
function AddressBookComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddressBookComponent_div_31_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.firstName = $event; })("focusout", function AddressBookComponent_div_31_Template_input_focusout_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.hide(); })("keyup", function AddressBookComponent_div_31_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.getList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddressBookComponent_div_31_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddressBookComponent_div_31_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.emailId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_div_31_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.addGuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddressBookComponent_div_31_div_9_Template, 3, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddressBookComponent_div_31_li_12_Template, 8, 4, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isShow && ctx_r2.memberList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.selectedUserList);
} }
class AddressBookComponent {
    constructor(profileService, companyService, router, route) {
        this.profileService = profileService;
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.groupName = "";
        this.groupList = [];
        this.emailId = "";
        this.firstName = "";
        this.lastName = "";
        this.selectedUserList = [];
    }
    ngOnInit() {
        this.getInfo();
    }
    ngAfterContentInit() {
        this.getAddresssBookByComId();
    }
    getInfo() {
        let encrypt = localStorage.getItem('Bolstart');
        this.userDetail = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(encrypt, "Bollstart").toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8));
    }
    submitGroup() {
        if (this.groupName != "") {
            let obj = {
                companyId: this.companyId,
                emailId: [],
                groupName: this.groupName,
            };
            this.companyService.createAddressBook(obj).subscribe(res => {
                if (res.success) {
                    this.groupName = "";
                    this.selectedGroup = res.data;
                    console.log(this.userDetail);
                    this.selectUser(this.userDetail);
                    this.getAddresssBookByComId();
                    this.selectedGroup = {};
                }
            });
        }
    }
    getAddresssBookByComId() {
        this.companyService.getAddressBookByCompanyId(this.companyId).subscribe(res => {
            if (res.success) {
                this.groupList = res.data;
            }
        });
    }
    onEditGroupName(index) {
        if (this.selectedForEdit !== index) {
            this.selectedForEdit = index;
        }
        else {
            this.selectedForEdit = null;
        }
    }
    updateGroupName(item) {
        let obj = {
            companyId: item.companyId,
            groupName: item.groupName,
            emailId: item.emailId,
            id: item.id
        };
        this.companyService.updateAddressBook(obj).subscribe(res => {
            if (res.success) {
                this.getAddresssBookByComId();
                this.selectedForEdit = null;
            }
        });
    }
    deleteGroup(groupId) {
        this.selectedGroupID = groupId;
    }
    confirmDelete() {
        this.companyService.deleteAddressBook(this.selectedGroupID).subscribe(res => {
            if (res.success) {
                this.selectedGroup = {};
                this.selectedUserList = [];
                this.getAddresssBookByComId();
            }
        });
    }
    /* Member List */
    selectGroup(item) {
        this.selectedGroup = item;
        this.getAddressBookById(item.id);
    }
    getList() {
        if (this.firstName != "") {
            this.profileService.searchOnlyUser(this.firstName, this.userDetail.id).subscribe(res => {
                if (res.success) {
                    this.memberList = res.data;
                    this.isShow = true;
                }
                else {
                    this.memberList = [];
                    this.isShow = false;
                }
            });
        }
        else {
            this.memberList = [];
            this.isShow = false;
        }
    }
    selectUser(item) {
        let newUser = [];
        newUser.push({ user_id: item.id, emailid: item.emailId, profile_piture: item.profilePicture, firstName: `${item.firstName}`, lastName: `${item.lastName}` });
        console.log(newUser);
        this.companyService.addMemberInGroup(newUser, this.userDetail.id, this.selectedGroup.id).subscribe(res => {
            if (res.success) {
                this.getAddresssBookByComId();
                this.getAddressBookById(this.selectedGroup.id);
            }
        });
        this.isShow = false;
    }
    getAddressBookById(id) {
        this.companyService.getAddressBookById(id).subscribe(res => {
            if (res.success) {
                this.selectedUserList = [];
                this.selectedUserList = res.data.emailId;
            }
        });
    }
    deleteMember(index) {
        this.selectedUserList.splice(index, 1);
        let obj = {
            emailId: this.selectedUserList,
            id: this.selectedGroup.id
        };
        this.companyService.updateAddressBook(obj).subscribe(res => {
            if (res.success) {
                this.getAddresssBookByComId();
                this.getAddressBookById(this.selectedGroup.id);
            }
        });
    }
    addGuest() {
        if (this.firstName != "" && this.lastName != "" && this.emailId != "") {
            let newUser = [];
            newUser.push({ user_id: null, emailid: this.emailId, profile_piture: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultPic, firstName: this.firstName, lastName: this.lastName });
            this.companyService.addMemberInGroup(newUser, this.userDetail.id, this.selectedGroup.id).subscribe(res => {
                if (res.success) {
                    this.firstName = "";
                    this.lastName = "";
                    this.emailId = "";
                    this.getAddresssBookByComId();
                    this.getAddressBookById(this.selectedGroup.id);
                }
            });
            this.isShow = false;
        }
    }
    hide() {
        setTimeout(() => {
            this.isShow = false;
        }, 1000);
    }
}
AddressBookComponent.ɵfac = function AddressBookComponent_Factory(t) { return new (t || AddressBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_company_api_service__WEBPACK_IMPORTED_MODULE_4__["CompanyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
AddressBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddressBookComponent, selectors: [["app-address-book"]], inputs: { companyId: "companyId", userDetail: "userDetail" }, decls: 49, vars: 5, consts: [[1, "card"], [1, "card-header"], [1, "head"], ["data-target", "#memberList", "data-toggle", "modal", 1, "view", "pointer"], [1, "card-body"], ["class", "groupLabel pointer", "data-target", "#memberList", "data-toggle", "modal", 3, "click", 4, "ngFor", "ngForOf"], ["id", "memberList", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "md-lg"], [1, "modal-content", "p-3"], [1, "modal-Custheader", "p-2"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body"], [1, "row"], [1, "col-4", "group-section"], [1, "add-group"], ["placeholder", "Enter New Group", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-plus", "fab-add", 3, "click"], [4, "ngIf"], [1, "col-8"], [2, "padding-top", "11px"], [1, "groupLabel"], ["id", "deleteModel", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], [1, "text-right"], ["data-dismiss", "modal", "aria-label", "Close", 1, "text-info"], ["data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["data-target", "#memberList", "data-toggle", "modal", 1, "groupLabel", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "groupLabel pointer", 3, "ngClass", "click", 4, "ngIf"], ["class", "group-edit", 4, "ngIf"], ["class", "add-trash", 4, "ngIf"], [1, "groupLabel", "pointer", 3, "ngClass", "click"], [1, "group-edit"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-check", "fab-add", 3, "click"], [1, "fa", "fa-close", "fab-add", 3, "click"], [1, "add-trash"], ["data-toggle", "modal", "data-target", "#deleteModel", 1, "fa", "fa-window-close", 3, "click"], [1, "fa", "fa-edit", 3, "click"], [1, "add-member"], ["placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange", "focusout", "keyup"], ["placeholder", "Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Email Id", 1, "form-control", 2, "width", "20rem", 3, "ngModel", "ngModelChange"], ["class", "card position", 4, "ngIf"], [1, "card", "position"], [2, "display", "flex", 3, "click"], [1, "profile", 3, "src"], [1, "pt-2"], [2, "color", "darkgray"], [2, "color", "#293266"], [1, "add-trash", "second"], [1, "fa", "fa-trash", 3, "click"]], template: function AddressBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddressBookComponent_li_8_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Address Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddressBookComponent_Template_input_ngModelChange_21_listener($event) { return ctx.groupName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_Template_i_click_23_listener() { return ctx.submitGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddressBookComponent_div_25_Template, 3, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddressBookComponent_div_31_Template, 13, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Delete Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Are sure want to delete group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddressBookComponent_Template_button_click_47_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groupList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.groupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedGroup == null ? null : ctx.selectedGroup.groupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedGroup != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".card-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.card-header[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: bold;\n}\nli[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 5px !important;\n}\n.profile[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  border: 2px solid #ffff;\n}\n.position[_ngcontent-%COMP%] {\n  margin: 10px 0px 0px 0px;\n  z-index: 999;\n  height: 500px !important;\n  overflow-y: auto;\n}\n.second[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.fa-edit[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.groupLabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary);\n}\n.group-section[_ngcontent-%COMP%] {\n  border-right: 1px solid darkgray;\n}\n.fab-add[_ngcontent-%COMP%] {\n  padding: 11px;\n  border: 1px solid;\n  border-radius: 32%;\n  font-weight: bold;\n  background: #293266;\n  color: white;\n  cursor: pointer;\n}\n.group-edit[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.add-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.add-member[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.selectedLabel[_ngcontent-%COMP%] {\n  color: #293266;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 950px;\n    margin: 1.75rem auto;\n    margin-top: 2%;\n  }\n\n  .position[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .modal-sm[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxPQUFBO0FBRUo7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNBO0VBQ0UsbUNBQUE7QUFFRjtBQUFBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUdGO0FBQUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFEQTtFQUNFLGlCQUFBO0FBSUY7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7QUFIQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFNRjtBQUpBO0VBQ0UsZ0NBQUE7QUFPRjtBQUxBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFRRjtBQU5BO0VBQ0Usb0JBQUE7QUFTRjtBQVBBO0VBQ0Usb0JBQUE7QUFVRjtBQVJBO0VBQ0Usb0JBQUE7QUFXRjtBQVRBO0VBQ0UsY0FBQTtBQVlGO0FBVEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0VBWUY7O0VBVkE7SUFDRSxVQUFBO0VBYUY7O0VBWEE7SUFDRSxVQUFBO0VBY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAuaGVhZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAudmlldyB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxubGkge1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9maWxlIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmO1xyXG59XHJcblxyXG4ucG9zaXRpb24ge1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLnNlY29uZCB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLmZhLWVkaXQge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4uZ3JvdXBMYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcbi5ncm91cC1zZWN0aW9uIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxufVxyXG4uZmFiLWFkZCB7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAzMiU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIzI5MzI2NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ncm91cC1lZGl0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uYWRkLWdyb3VwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uYWRkLW1lbWJlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLnNlbGVjdGVkTGFiZWwge1xyXG4gIGNvbG9yOiAjMjkzMjY2O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogOTUwcHg7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAucG9zaXRpb24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLm1vZGFsLXNtIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddressBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-address-book',
                templateUrl: './address-book.component.html',
                styleUrls: ['./address-book.component.scss']
            }]
    }], function () { return [{ type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _company_api_service__WEBPACK_IMPORTED_MODULE_4__["CompanyApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, { companyId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "zCqA":
/*!**************************************************************!*\
  !*** ./src/app/components/company/company-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.component */ "pPPa");
/* harmony import */ var _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-info/company-info.component */ "3EEX");
/* harmony import */ var _company_member_company_member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-member/company-member.component */ "cBWy");
/* harmony import */ var _company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-profile/company-profile.component */ "afDC");
/* harmony import */ var _company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-publish/company-publish.component */ "9IWr");
/* harmony import */ var _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-company/create-company.component */ "YXRX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        component: _company_component__WEBPACK_IMPORTED_MODULE_1__["CompanyComponent"],
        children: [
            {
                path: 'createCompany',
                component: _create_company_create_company_component__WEBPACK_IMPORTED_MODULE_6__["CreateCompanyComponent"]
            }
        ],
    },
    {
        path: "companyinfo",
        component: _company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_4__["CompanyProfileComponent"],
        children: [
            {
                path: 'publish',
                component: _company_publish_company_publish_component__WEBPACK_IMPORTED_MODULE_5__["CompanyPublishComponent"]
            },
            {
                path: 'detail',
                component: _company_info_company_info_component__WEBPACK_IMPORTED_MODULE_2__["CompanyInfoComponent"]
            },
            {
                path: 'employee',
                component: _company_member_company_member_component__WEBPACK_IMPORTED_MODULE_3__["CompanyMemberComponent"]
            }
        ]
    }
];
class CompanyRoutingModule {
}
CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CompanyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~components-company-company-module~components-investor-investor-module-es2015.js.map