import * as $ from 'jquery'

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from './../../../account/account-api.service';
import { ProfileService } from '../../profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {
  @Input() userInfo: any;
  public experianceForm: FormGroup;
  type: number;
  monthList: any = common.month;
  dayList: any = common.day;
  stateList: any = common.state;
  industryList: any = common.industries;
  yeaList: any = common.years();
  searchList: any = [];
  showList: number = 0
  experianceList: any = [];
  index: number;
  dummyIcon = "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/unversity.png"

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private profileService: ProfileService,
    private accountService: AccountApiService
  ) { }

  ngOnInit(): void {
    this.initializeExpForm();
    if (this.userInfo.typeOfUser == 1 || this.userInfo.typeOfUser == 2) {
      this.type = 1
    } else {
      this.type = 2
    }
    this.experianceList = this.userInfo.experience;

  }

  /* =============== Experiance Form ============================*/
  initializeExpForm() {
    this.experianceForm = this.fb.group({
      companyId: [''],
      companyName: ['', [Validators.required]],
      companyLogo: ['', [Validators.required]],
      title: ['', [Validators.required]],
      userId: ['', [Validators.required]],
      startYear: ['', [Validators.required]],
      startMonth: ['', [Validators.required]],
      jobLocation: ['', [Validators.required]],
      isWorking: [false],
      endMonth: [''],
      endYear: [''],
      description: [''],
      id: ['']
    })
  }
  onsetValue() {
    this.experianceForm.patchValue({
      companyLogo: this.dummyIcon,
      userId: this.userInfo.id
    })
  }
  selectItem(item) {
    this.experianceForm.patchValue({
      companyId: item.id,
      companyName: item.name,
      companyLogo: item.logo,
      userId: this.userInfo.id,
    })
  }

  selectedCity(item) {
    this.experianceForm.patchValue({
      jobLocation: item.name,
    })
  }

  expSubmit() {
    this.experianceForm.markAllAsTouched();
    // this.onsetValue()
    if (this.experianceForm.valid) {
      let obj = {
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
        userId: this.experianceForm.value.userId,
        id: this.experianceForm.value.id,
      }
      this.profileService.updateExperiance(obj).subscribe(res => {
        if (res.success) {
          debugger;
          this.toastr.success(res.message);
          if (this.index != null || this.index != undefined) {
            this.experianceList.splice(this.index, 1);
            this.experianceList.unshift(res.data)
          } else {
            this.experianceList.unshift(res.data)
          }
          this.experianceForm.reset();
          this.index = null;
          $("#experianceModel .close").click();
        } else {
          this.toastr.error(res.message);
        }
      })

    }
  }
  /* ============================== selected Item ===================== */

  selecetedItem(item, index) {
    this.experianceForm.patchValue({
      companyId: item.companyId,
      companyLogo: item.companyLogo,
      companyName: item.companyName,
      description: item.description,
      endMonth: item.endMonth,
      endYear: item.endYear,
      id: item.id,
      isWorking: item.isWorking,
      jobLocation: item.jobLocation,
      startMonth: item.startMonth,
      startYear: item.startYear,
      title: item.title,
      userId: item.userId
    })
    this.index = index;
  }

  /* =============== Inpuut Focus ============================ */
  onFocus(value) {
    switch (value) {
      case 4:
        this.showList = 4
        break;
      case 5:
        this.showList = 5
        break;
    }
  }

  onBlur() {
    setTimeout(() => {
      this.showList = 0
      this.searchList = [];
    }, 500)
  }
  search(event) {
    switch (this.showList) {
      case 4:
        this.getAllCompanyList(event.target.value)
        break;
      case 5:
        if (event.target.value.length > 2) {
          this.getCityList(event.target.value)
        }
        break;
    }
  }


  deleteExp(item, index) {
    this.profileService.deleteExperiance(item.id).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
        this.experianceList.splice(index, 1);
      }
    })
  }
  newOpen() {
    this.experianceForm.reset();
    this.index = null;
  }
  /* =========== Company List =========== */
  getAllCompanyList(keyWord) {
    this.accountService.getAllCompanyList(keyWord).subscribe(res => {
      if (res.success) {
        this.searchList = res.data;
      }
    })
  }

  getCityList(keyWord) {
    this.accountService.getCityList(keyWord).subscribe(res => {
      if (res.success) {
        this.searchList = res.data;
      }
    })
  }
}
