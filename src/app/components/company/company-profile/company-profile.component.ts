import * as $ from 'jquery';
import * as CryptoJS from 'crypto-js';

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from '../../account/account-api.service';
import { ActivatedRoute } from '@angular/router';
import { AwsService } from 'src/app/shared/AWS-Service/aws.service';
import { CompanyApiService } from '../company-api.service';
import { CroppedEvent } from 'ngx-photo-editor';
import { ProfileService } from '../../profile/profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';
import { environment } from './../../../../environments/environment.prod';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  @ViewChild("imagePicker", { static: false }) imagePicker: ElementRef;
  add: any = "assets/img/Add3.png"
  userDetail: any = {}
  companyDetail;
  companyUpdateForm: FormGroup;
  imageEditorType: number;
  imageChangedEvent;
  industryList: any = common.industries;
  countryList: any = common.country;
  stateList: any = [];
  cityList: any = [];
  timelineImage: string = environment.defaultTimlineImage;
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private companyApiService: CompanyApiService,
    private accountApiService: AccountApiService,
    private toaster: ToastrService,
    private awsService: AwsService,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.getInfo()
    this.initializeForm();
  }
  initializeForm() {
    this.companyUpdateForm = this.fb.group({
      city: ["", [Validators.required]],
      contactNumber: ["", [Validators.required, Validators.pattern(common.phoneNumberRegex)]],
      country: ["", [Validators.required]],
      industry: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      name: ["", [Validators.required]],
      state: ["", [Validators.required]],
      stages: ["", [Validators.required]],
      websiteLink: ["", [Validators.required, Validators.pattern(common.urlRegex)]],
      company_type: ["", [Validators.required]],
      id: ["", [Validators.required]],
    })

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
    })
    this.selectCountry();
  }

  getInfo() {
    this.userDetail = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8));
    console.log(this.userDetail);
    this.route.queryParams.subscribe(param => {
      this.getCompanyDetail(param.companyId)
    })
  }

  companyVerify() {
    if (this.userDetail.isOwener) {
      let obj = {
        id: this.companyDetail.id,
        isVerified: "false"
      }
      this.profileService.updateProfileInfo(obj).subscribe(res => {
        if (res.success) {
          this.companyDetail.isMobileVerified = "true";
        }
      })
    };
  }
  getCompanyDetail(companyId) {
    this.companyApiService.getCompanyDetail(companyId).subscribe(res => {
      if (res.success) {
        // this.companyDetail = res.data;
        this.companyDetail = res.data;
        console.log(this.companyDetail)
        this.setFormValue(this.companyDetail)
      }
    })
  }

  getImage(type) {
    try {
      this.imageEditorType = type
      this.imagePicker.nativeElement.click();
    } catch (error) {
    }
  }

  fileChangeEvent(event: any) {
    if (this.imageEditorType == 1) {
      this.imageChangedEvent = event;
    } else {
      this.imageChangedEvent = event
    }
  }

  imageCropped(event: CroppedEvent) {
    if (this.imageEditorType == 1) {
      this.awsService.uploadFile(event.file, "profile").then(res => {
        this.companyUpdateForm.patchValue({
          profile_url: res
        })
      })

    } else {
      this.awsService.uploadFile(event.file, "company").then(res => {
        this.companyUpdateForm.patchValue({
          logo: res
        })
        let obj = {
          id: this.companyUpdateForm.value.id,
          logo: this.companyUpdateForm.value.logo,
          user_id: this.userDetail.id
        }
        this.companyApiService.updateCompany(obj).subscribe(res => {
          if (res.success) {
            this.toaster.success(res.message);
            this.companyDetail = res.data;
            this.setFormValue(this.companyDetail)
          } else {
            this.toaster.error(res.message);
          }
        })
      })
    }
  }
  /* ===================== country select  =========================== */
  selectCountry() {
    let country = this.companyUpdateForm.value.country;
    this.countryList.map(res => {
      if (res.name == country) {
        this.getStateList(res.id)
      }
    })
  }

  getStateList(countryID) {
    this.accountApiService.getStateListBasedOnCountry(countryID).subscribe(res => {
      if (res.success) {
        this.stateList = res.data;
        this.selectState();
      }
    })
  }

  selectState() {
    let state = this.companyUpdateForm.value.state;
    this.stateList.map(res => {
      if (res.name == state) {
        this.getCityList(res.id);
      }
    })
  }

  getCityList(stateID) {
    this.accountApiService.getCityListBasedOnState(stateID).subscribe(res => {
      if (res.success) {
        this.cityList = res.data;
      }
    })
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
      }
      this.companyApiService.updateCompany(obj).subscribe(res => {
        if (res.success) {
          this.toaster.success(res.message);
          $("#UpdateModel .close").click();
          this.companyDetail = res.data;
          this.setFormValue(this.companyDetail)
        } else {
          this.toaster.error(res.message);
        }
      })
    }
  }
}
