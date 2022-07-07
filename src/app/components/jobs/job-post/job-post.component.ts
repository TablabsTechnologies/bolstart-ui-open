import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from '../../account/account-api.service';
import Stepper from 'bs-stepper';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {
  jobPostForm: FormGroup;
  jobTitle: any;
  countryList: any = common.country;
  stateList: any = [];
  cityList: any = [];
  private stepper: Stepper

  constructor(
    private fb: FormBuilder,
    private accountApiService: AccountApiService,
  ) { }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.initializeForm();
  }

  initializeForm() {
    this.jobPostForm = this.fb.group({
      companyId: ["", [Validators.required]],
      company: [""],
      responsiblitie: ["", [Validators.required]],
      minExperiance: ["", [Validators.required]],
      maxExperiance: ["", [Validators.required]],
      benifit: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      salaryMin: ["", [Validators.required]],
      salaryMax: ["", [Validators.required]],
      location: ["", [Validators.required]],
      country: ["", [Validators.required]],
      state: ["", [Validators.required]],
      created: ["", [Validators.required]],
      createdBy: ["", [Validators.required]],
      active: [true, [Validators.required]],
      jobCategeory: ["", [Validators.required]],
      qualification: ["", [Validators.required]],
      requirements: ["", [Validators.required]],
      bond: ["", [Validators.required]],
      isResumeRequired: [false, [Validators.required]],
      isAssissmentRequired: [false, [Validators.required]],
      assissmentId: [""],
      jobDescription: ["", [Validators.required]],
      jobTitle: [""]

    })
  }
  next() {
    this.stepper.next();
  }
  saveJob() {

  }
  /* ===================== country select  =========================== */
  selectCountry() {
    let country = this.jobPostForm.value.country;
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
    let state = this.jobPostForm.value.state;
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

}