import * as $ from 'jquery';

import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from '../account-api.service';
import { COMETCHAT_CONSTANTS } from 'src/CONSTS';
import { CometChat } from "@cometchat-pro/chat";
import Stepper from 'bs-stepper';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.scss']
})


export class NewProfileComponent implements OnInit {
  @ViewChild('model') model: ElementRef;
  private stepper: Stepper;
  public informationForm: FormGroup;
  public educationForm: FormGroup;
  public experianceForm: FormGroup;
  userInfo
  showList: number = 0
  type: number = 2;
  roleType: number;
  selectedType: string;
  currentindex: number;
  monthList: any = common.month;
  dayList: any = common.day;
  stateList: any = [];
  cityList: any = [];
  industryList: any = common.industries;
  countryList: any = common.country;
  yeaList: any = common.years();
  schooleList: any = [];
  experianceList: any = [];
  searchList: any = [];
  isLoader: boolean = false;
  dummyIcon = "https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/unversity.png"
  constructor(
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute,
    private accountService: AccountApiService,
    private toastr: ToastrService) { }


  next() {
    this.stepper.next();
  }


  onSubmit() {
    return false;
  }

  selectType(value) {
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
      lastName: this.userInfo.lastName,
    })
  }
  ngOnInit() {
    this.getParams();
    this.initializeEduForm();
    this.initializeExpForm();
    this.initializedInfoForm();

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });

  }

  getParams() {
    this.route.queryParams
      .subscribe(params => {
        this.getUserInfo(params.userId);
      }
      );

  }
  /* ================ UserData ======================*/
  getUserInfo(userId) {
    this.accountService.getUserInfoByID(userId, userId).subscribe(res => {
      if (res.success) {
        this.userInfo = res.data;
        if (this.userInfo.isEmailVerified == 'true') {
          this.model.nativeElement.click();
        }
      } else {
        this.toastr.error(res.message);
        this.router.navigate(['./account/login'])
      }
    })
  }


  /* ================ Information Form ======================*/
  initializedInfoForm() {
    this.informationForm = this.fb.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern(common.onlyAlphabetRegex)]],
      middleNmae: ['', [Validators.pattern(common.onlyAlphabetRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(common.onlyAlphabetRegex)]],
      headline: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      state: [''],
      location: [''],
      country: [''],
      month: [''],
      day: [''],
      aboutMe: [''],
    })
  }

  infoSubmit() {
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
    })
  }
  eduSubmit() {
    this.educationForm.markAllAsTouched();
    if (this.educationForm.valid) {
      this.schooleList.push(this.educationForm.value);
      $('#eductionModel').hide();
      $('.modal-backdrop').hide();
    }
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
    })
  }

  onsetValue() {
    this.experianceForm.patchValue({
      companyLogo: this.dummyIcon,
      userId: this.userInfo.id
    })
  }
  expSubmit() {
    this.onsetValue()
    this.experianceForm.markAllAsTouched();
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

      }

      this.experianceList.push(obj);
      $('#experianceModel').hide();
      $('.modal-backdrop').hide();

    }
  }
  verifyAccount() {
    let obj = {
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
    }
    this.accountService.verifyAccount(obj).subscribe(res => {
      this.isLoader = false;
      if (res.success) {
        this.toastr.success("User Verified Successfully");
        this.router.navigate(['/account/login']);
        setTimeout(() => {
          location.reload();
        }, 0.100)
      }
    })
  }

  addUserToCometChat() {
    this.isLoader = true;
    if (this.userInfo.isPriority == 'true') {
      var user = new CometChat.User(this.userInfo.firstName.toLowerCase() + this.userInfo.id);
      user.setName(this.userInfo.firstName + " " + this.userInfo.lastName);
      user.setAvatar("https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/profile_avater.png")
      CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
        user => {
          this.verifyAccount();
        }, error => {
          this.isLoader = false;
        }
      )
    } else {
      this.verifyAccount()
    }

  }

  /* =============== Inpuut Focus ============================ */
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
      case 4:
        this.showList = 4
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
      case 4:
        this.getAllCompanyList(event.target.value)
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
      case 4:
        this.experianceForm.patchValue({
          companyId: item.id,
          companyName: item.name,
          companyLogo: item.logo,
          userId: this.userInfo.id,
        })
        break;
    }
    this.showList = 0;
  }

  deleteSchool(index) {
    this.schooleList.splice(index, 1)
  }
  deleteExp(index) {
    this.experianceList.splice(index, 1)
  }

  /* ===================== country select  =========================== */
  selectCountry() {
    let country = this.informationForm.value.country;
    this.countryList.map(res => {
      if (res.name == country) {
        this.getStateList(res.id)
      }
    })
  }

  getStateList(countryID) {
    this.accountService.getStateListBasedOnCountry(countryID).subscribe(res => {
      if (res.success) {
        this.stateList = res.data;
      }
    })
  }

  selectState() {
    let state = this.informationForm.value.state;
    this.stateList.map(res => {
      if (res.name == state) {
        this.getCityList(res.id);
      }
    })
  }

  getCityList(stateID) {
    this.accountService.getCityListBasedOnState(stateID).subscribe(res => {
      if (res.success) {
        this.cityList = res.data;
      }
    })
  }

  /* ==================== University ====================== */

  getUniversityList() {
    this.accountService.getUniversityList().subscribe(res => {
      if (res.success) {
        this.searchList = res.data
      }
    })
  }
  /* =============== Company List =============== */
  getAllCompanyList(keyWord) {
    this.accountService.getAllCompanyList(keyWord).subscribe(res => {
      if (res.success) {
        this.searchList = res.data
      }
    })
  }

  /* ========================= */
  goToLogin() {
    this.router.navigate(['/account/login']);
    setTimeout(() => {
      location.reload();
    }, 100)
  }
}
