import * as CryptoJS from 'crypto-js';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from '../../account/account-api.service';
import { AwsService } from './../../../shared/AWS-Service/aws.service';
import { CompanyApiService } from './../company-api.service';
import { CroppedEvent } from 'ngx-photo-editor';
import { ProfileService } from './../../../components/profile/profile.service';
import { Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  @ViewChild("imagePicker", { static: false }) imagePicker: ElementRef;
  type: number = 2;
  userDetail: any;
  companyForm: FormGroup;
  imageEditorType: number;
  imageChangedEvent;
  industryList: any = common.industries;
  countryList: any = common.country;
  stateList: any = [];
  cityList: any = [];
  serviceList: any = [];
  defaultLogo = "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/enterprise.png";

  private stepper: Stepper

  constructor(
    private fb: FormBuilder,
    private awsService: AwsService,
    private accountApiService: AccountApiService,
    private companyApiService: CompanyApiService,
    private profileService: ProfileService,
    private toaster: ToastrService,
    private router: Router
  ) { }
  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.getInfo();
    this.initializeForm();
    this.setDefault();

  }


  getInfo() {
    this.userDetail = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8));
  }

  initializeForm() {
    this.companyForm = this.fb.group({
      city: ["", [Validators.required]],
      contactEmail: ["", [Validators.required, Validators.email]],
      contactNumber: ["", [Validators.required, Validators.pattern(common.phoneNumberRegex)]],
      country: ["", [Validators.required]],
      description: ["", [Validators.required]],
      industry: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      name: ["", [Validators.required]],
      profile_url: ["", [Validators.required, Validators.pattern(common.urlRegex)]],
      registrationType: [""],
      state: ["", [Validators.required]],
      websiteLink: ["", [Validators.required, Validators.pattern(common.urlRegex)]],
      stages: ["", [Validators.required]],
      company_type: ["", [Validators.required]],
      services: [""]
    })
    this.initializeCompanyValues()
    this.selectCountry();
  }

  initializeCompanyValues() {
    this.companyForm.patchValue({
      city: this.userDetail.location,
      contactNumber: this.userDetail.mobileNumber,
      country: this.userDetail.country,
      state: this.userDetail.state,
    })
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
      }
      this.companyApiService.registerCompany(obj).subscribe(res => {
        if (res.success) {
          this.toaster.success(res.message);
          this.userDetail["company_id"] = res.data.id;
          this.userDetail["companyName"] = res.data.name;
          this.userDetail["compnayLogo"] = res.data.logo;
          let encrypt = CryptoJS.AES.encrypt(JSON.stringify(this.userDetail), "Bollstart").toString();
          localStorage.setItem('Bolstart', encrypt);
          this.profileService.emitEvent();
          this.router.navigate(['./company/companyinfo/publish'], { queryParams: { companyId: res.data.id } });
        } else {
          this.toaster.error(res.message);
        }
      })
    }
  }

  setDefault() {
    this.companyForm.patchValue({
      logo: this.defaultLogo,
    })
  }

  fileChangeEvent(event: any) {
    if (this.imageEditorType == 1) {
      this.imageChangedEvent = event;
    } else {
      this.imageChangedEvent = event
    }
  }

  getImage(type) {
    try {
      this.imageEditorType = type
      this.imagePicker.nativeElement.click();
    } catch (error) {
    }
  }

  imageCropped(event: CroppedEvent) {
    // this.img = `url(${event.base64})`
    if (this.imageEditorType == 1) {
      this.awsService.uploadFile(event.file, "profile").then(res => {
        this.companyForm.patchValue({
          profile_url: res
        })
      })

    } else {
      this.awsService.uploadFile(event.file, "company").then(res => {
        this.companyForm.patchValue({
          logo: res
        })
      })
    }
  }

  /* ===================== country select  =========================== */
  selectCountry() {
    let country = this.companyForm.value.country;
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
        this.selectState()
      }
    })
  }

  selectState() {
    let state = this.companyForm.value.state;
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
  /* ===============  Add Service  ==================== */
  addService() {
    if (this.companyForm.value.services != "") {
      this.serviceList.push(this.companyForm.value.services);
      this.companyForm.patchValue({
        services: ''
      })
    }
  }
  removeTag(index) {
    this.serviceList.splice(index, 1)
  }


}
