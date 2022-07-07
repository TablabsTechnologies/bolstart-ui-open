import * as $ from 'jquery';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from './../../../account/account-api.service';
import { ProfileService } from '../../profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() userInfo: any;
  public educationForm: FormGroup;
  monthList: any = common.month;
  dayList: any = common.day;
  stateList: any = common.state;
  industryList: any = common.industries;
  yeaList: any = common.years();
  educationList: any = [];
  searchList: any = [];
  showList: number = 0;
  index: number;
  dummyIcon = "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/unversity.png"

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private profileService: ProfileService,
    private accountService: AccountApiService
  ) { }
  ngOnInit(): void {
    this.educationList = this.userInfo.education != null ? this.userInfo.education : [];;
    this.initializeEduForm();

  }

  initializeEduForm() {
    this.educationForm = this.fb.group({
      institutionId: ['', [Validators.required]],
      institutionLogo: ['', [Validators.required]],
      institutionName: ['', [Validators.required]],
      activities: [''],
      degree: [''],
      endDate: [''],
      grade: [''],
      societies: [''],
      startDate: [''],
      stream: [''],
      userId: [''],
      id: ['']
    })
  }

  /* ============ Selected Item ========== */
  selecetedItem(item, index) {
    this.educationForm.patchValue({
      institutionId: item.institutionId,
      institutionLogo: item.institutionLogo,
      institutionName: item.institutionName,
      activities: item.activities,
      degree: item.degree,
      endDate: item.endDate,
      grade: item.grade,
      societies: item.societies,
      startDate: item.startDate,
      stream: item.stream,
      userId: item.userId,
      id: item.id
    })
    this.index = index;
  }

  /* =============== Inpuut Focus ============================*/
  onFocus(value) {
    switch (value) {
      case 1:
        this.showList = 1
        break;
      case 2:
        this.showList = 2
        break;
      case 3:
        this.showList = 3
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
      case 1:
        this.getUniversityList();
        break;
      case 2:
        this.searchList = common.degree;
        break;
      case 3:
        this.searchList = common.field;
        break;
    }
  }
  selectItem(event, item) {
    switch (event) {
      case 1:
        this.educationForm.patchValue({
          institutionId: item.id,
          institutionLogo: this.dummyIcon,
          institutionName: item.name,
          userId: this.userInfo.id
        })
        this.searchList = []
        break;
      case 2:
        this.educationForm.patchValue({
          degree: item
        })
        this.searchList = []
        break;
      case 3:
        this.educationForm.patchValue({
          stream: item
        })
        this.searchList = []
        break;
    }
    this.showList = 0;
  }
  eduSubmit() {
    this.educationForm.markAllAsTouched();
    if (this.educationForm.valid) {
      let obj = {
        activities: this.educationForm.value.activities,
        degree: this.educationForm.value.degree,
        endDate: this.educationForm.value.endDate,
        grade: this.educationForm.value.grade,
        societies: this.educationForm.value.societies,
        institutionId: this.educationForm.value.institutionId,
        institutionLogo: this.educationForm.value.institutionLogo,
        institutionName: this.educationForm.value.institutionName,
        startDate: this.educationForm.value.startDate,
        stream: this.educationForm.value.stream,
        userId: this.educationForm.value.userId,
        id: this.educationForm.value.id
      }
      this.profileService.updateEducation(obj).subscribe(res => {
        if (res.success) {
          debugger;
          this.toastr.success(res.message);
          if (this.index != null || this.index != undefined) {
            this.educationList.splice(this.index, 1);
            this.educationList.unshift(res.data)
          } else {
            this.educationList.unshift(res.data)
          }
          this.educationForm.reset();
          this.index = null;
          $("#eductionModel .close").click();
        } else {
          this.toastr.error(res.message);
        }
      })


    }
  }
  deleteSchool(item, index) {
    this.profileService.deleteExperiance(item.id).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
        this.educationList.splice(index, 1);
      }
    })
  }
  newOpen() {
    this.educationForm.reset();
    this.index = null;
  }
  /* ==================== University ====================== */

  getUniversityList() {
    this.accountService.getUniversityList().subscribe(res => {
      if (res.success) {
        this.searchList = res.data;
      }
    })
  }
}
