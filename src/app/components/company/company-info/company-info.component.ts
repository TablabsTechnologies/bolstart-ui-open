import * as $ from 'jquery';
import * as CryptoJS from 'crypto-js';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CompanyApiService } from '../company-api.service';
import { ProfileService } from '../../profile/profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  companyUpdateForm: FormGroup;
  userDetail: any = {};
  companyDetail: any;
  imageEditorType: number;
  imageChangedEvent;
  serviceList: any = [];
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private companyApiService: CompanyApiService,
    private toaster: ToastrService,



  ) { }

  ngOnInit(): void {
    this.getInfo()
    this.initializeForm();
  }

  getInfo() {
    this.userDetail = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8));
    this.route.queryParams.subscribe(param => {
      this.getCompanyDetail(param.companyId)
    })
  }


  initializeForm() {
    this.companyUpdateForm = this.fb.group({
      contactEmail: ["", [Validators.required]],
      description: ["", [Validators.required]],
      profile_url: ["", [Validators.required, Validators.pattern(common.urlRegex)]],
      id: ["", [Validators.required]],
      services: [""],
      user_id: ["", [Validators.required]],
    })

  }

  setFormValue(company) {
    this.companyUpdateForm.patchValue({
      contactEmail: company.contactEmail,
      description: company.description,
      profile_url: company.profile_url,
      id: company.id,
      user_id: this.userDetail.id,
    })
    this.serviceList = this.companyDetail.services == null ? [] : this.companyDetail.services
  }
  getCompanyDetail(companyId) {
    this.companyApiService.getCompanyDetail(companyId).subscribe(res => {
      if (res.success) {
        // this.companyDetail = res.data;
        this.companyDetail = res.data;
        this.setFormValue(this.companyDetail)
      }
    })
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
      }
      this.companyApiService.updateCompany(obj).subscribe(res => {
        if (res.success) {
          this.toaster.success(res.message);
          $("#aboutModel .close").click();
          this.companyDetail = res.data;
          this.setFormValue(this.companyDetail)
        }
      })
    }
  }
  /* ===============  Add Service  ==================== */
  addService() {
    if (this.companyUpdateForm.value.services != "") {
      this.serviceList.push(this.companyUpdateForm.value.services);
    }
  }
  removeTag(index) {
    this.serviceList.splice(index, 1)
  }



}
