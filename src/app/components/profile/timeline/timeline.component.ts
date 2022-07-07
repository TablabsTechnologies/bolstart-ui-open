import * as $ from 'jquery';
import * as CryptoJS from 'crypto-js';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from './../../account/account-api.service';
import { ActivatedRoute } from '@angular/router';
import { AwsService } from 'src/app/shared/AWS-Service/aws.service';
import { CroppedEvent } from 'ngx-photo-editor';
import { ProfileService } from '../profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @ViewChild("imagePicker", { static: false }) imagePicker: ElementRef;
  @ViewChild("VerifyModel", { static: false }) VerifyModel: ElementRef;

  public informationForm: FormGroup;
  userDetail: any;
  type: number;
  role: any;
  monthList: any = common.month;
  dayList: any = common.day;
  stateList: any = [];
  industryList: any = common.industries;
  countryList: any = common.country
  yeaList: any = common.years();
  isLoading: boolean = false;
  cityList: any = [];
  timelineImageChangedEvent: any;
  profileImageChangedEvent
  imageEditorType: number;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private awsService: AwsService,
    private accountService: AccountApiService
  ) { }

  ngOnInit(): void {
    this.initializedInfoForm();
    this.getInfo();

  }

  openVerifyAccount() {
    if (this.userDetail.isOwener) {
      let obj = {
        id: this.userDetail.id,
        isMobileVerified: "false"
      }
      this.profileService.updateProfileInfo(obj).subscribe(res => {
        if (res.success) {
          this.userDetail.isMobileVerified = "false";
          let encrypt = CryptoJS.AES.encrypt(JSON.stringify(res.data), "Bollstart").toString();
          localStorage.setItem('Bolstart', encrypt);
        }
      })
    };
  }

  getInfo() {
    this.route.queryParams.subscribe(param => {
      let member = parseInt(localStorage.getItem('member'))
      this.profileService.getUserInfo(param.visit, member).subscribe(res => {
        if (res.success) {
          this.userDetail = res.data;
          this.setInfoForm();
          if (this.userDetail.id == member) {
            this.userDetail['isOwener'] = true;
          } else {
            this.userDetail['isOwener'] = false;
          }
          this.selectRoletype(this.userDetail.typeOfUser);
          if (this.userDetail.typeOfUser == 1 || this.userDetail.typeOfUser == 2) {
            this.type = 1
          } else {
            this.type = 2
          }
        }
      })
    })
  }

  selectRoletype(roleType) {
    switch (roleType) {
      case 1:
        this.role = "Startup";
        break;
      case 2:
        this.role = "Investor";
        break;
      case 3:
        this.role = "Mentor";
        break;
      case 4:
        this.role = "Freelancer";
        break;
      case 5:
        this.role = "Startup Enthusiast";
        break;
    }
  }
  initializedInfoForm() {
    this.informationForm = this.fb.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern(common.onlyAlphabetRegex)]],
      middleNmae: ['', [Validators.pattern(common.onlyAlphabetRegex)]],
      lastName: ['', [Validators.required, Validators.pattern(common.onlyAlphabetRegex)]],
      headline: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      // adhar: [''],
      // gst: ['', this.type == 1 || this.type == 2 ? [Validators.pattern(common.gstRegex)] : [Validators.pattern(common.gstRegex)]],
      state: [''],
      location: [''],
      month: [''],
      day: [''],
      country: [''],
    })
  }

  setInfoForm() {

    this.informationForm.patchValue({
      id: this.userDetail.id,
      firstName: this.userDetail.firstName,
      lastName: this.userDetail.lastName,
      headline: this.userDetail.headline,
      industry: this.userDetail.industryName,
      state: this.userDetail.state,
      location: this.userDetail.location,
      month: this.userDetail.month,
      day: this.userDetail.day,
      country: this.userDetail.country
    })
    this.selectCountry();
  }

  updateProfile() {
    this.informationForm.markAllAsTouched();
    if (this.informationForm.valid) {
      let obj = {
        adhaarCard: this.informationForm.value.adhar,
        country: this.informationForm.value.country,
        day: this.informationForm.value.day,
        firstName: this.informationForm.value.firstName,
        gst: this.informationForm.value.gst,
        headline: this.informationForm.value.headline,
        id: this.informationForm.value.id,
        lastName: this.informationForm.value.lastName,
        industryName: this.informationForm.value.industry,
        location: this.informationForm.value.location,
        month: this.informationForm.value.month,
        state: this.informationForm.value.state,
        connectionCount: this.userDetail.connectionCount
      }
      this.profileService.updateProfileInfo(obj).subscribe(res => {
        if (res.success) {
          if (res.success) {
            this.toastr.success(res.message);
            this.userDetail = res.data
            this.userDetail['isOwener'] = true;
            $("#UpdateModel .close").click();
          } else {
            this.toastr.error(res.message);
          }
        }
      })
    }
  }

  /* ================================  Send Request ======================== */
  sendRequest(requestId) {
    let userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
    let obj = {
      connectedUserId: requestId,
      isConnected: 'false',
      userId: userId
    }
    this.isLoading = true;
    this.profileService.sendRequest(obj).subscribe(res => {
      this.isLoading = false;
      if (res.success) {
        this.userDetail.isConnected = res.data.isConnected
      }
    })
  }

  cancelRequest(requestId) {
    let userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
    let obj = {
      connectedUserId: requestId,
      isConnected: null,
      userId: userId
    }
    this.profileService.sendRequest(obj).subscribe(res => {
      if (res.success) {
        this.userDetail.isConnected = res.data.isConnected
      }
    })
  }
  deleteConnection(requestId) {
    let userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
    this.profileService.deleteConnection(userId, requestId).subscribe(res => {
      this.userDetail.isConnected = null
    })

  }
  /* ================================ Follow Request ========================== */

  followRequest(requestId) {
    let userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;

    let obj = {
      connectedUserId: requestId,
      isFollowed: 'true',
      userId: userId
    }
    this.profileService.followRequest(obj).subscribe(res => {
      if (res.success) {
        this.userDetail.isFollowed = 'true';
      }
    })
  }

  unfollowRequest(requestId) {
    let userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
    let obj = {
      connectedUserId: requestId,
      isFollowed: 'false',
      userId: userId
    }
    this.profileService.followRequest(obj).subscribe(res => {
      if (res.success) {
        this.userDetail.isFollowed = 'false';
      }
    })
  }


  /* ==================== Profile Image ================== */


  getImage(type) {
    try {
      this.imageEditorType = type;
      //$("#VerifyModel .open").click();
      //this.imagePicker.nativeElement.click();
    } catch (error) {
    }
  }
  onEditImage() {
    this.imagePicker.nativeElement.click();
  }
  onRemoveImage() {
    if (this.imageEditorType == 1) {
      let obj = {
        id: this.userDetail.id,
        profilePicture: environment.defaultPic
      }
      this.profileService.updateProfileInfo(obj).subscribe(res => {
        this.userDetail.profilePicture = res.data.profilePicture;
        let encrypt = CryptoJS.AES.encrypt(JSON.stringify(res.data), "Bollstart").toString();
        localStorage.setItem('Bolstart', encrypt);
        this.profileService.emitEvent();
        $("#VerifyModel .close").click();
      })
    } else {
      let obj = {
        id: this.userDetail.id,
        timlineImage: environment.defaultTimlineImage
      }
      this.profileService.updateProfileInfo(obj).subscribe(res => {
        this.userDetail.timlineImage = res.data.timlineImage;
        $("#VerifyModel .close").click();
      })
    }
  }

  fileChangeEvent(event: any) {
    if (this.imageEditorType == 1) {
      this.profileImageChangedEvent = event;
    } else {
      this.timelineImageChangedEvent = event
    }
  }

  imageCropped(event: CroppedEvent) {
    // this.img = `url(${event.base64})`
    this.awsService.uploadFile(event.file, "profile").then(res => {
      if (this.imageEditorType == 1) {
        let obj = {
          id: this.userDetail.id,
          profilePicture: res
        }
        this.profileService.updateProfileInfo(obj).subscribe(res => {
          this.userDetail.profilePicture = res.data.profilePicture;
          let encrypt = CryptoJS.AES.encrypt(JSON.stringify(res.data), "Bollstart").toString();
          localStorage.setItem('Bolstart', encrypt);
          this.profileService.emitEvent();
          $("#VerifyModel .close").click();
        })
      } else {
        let obj = {
          id: this.userDetail.id,
          timlineImage: `url(${res})`
        }
        this.profileService.updateProfileInfo(obj).subscribe(res => {
          this.userDetail.timlineImage = res.data.timlineImage;
          $("#VerifyModel .close").click();
        })
      }
    })
  }

  /* =-============== */

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
        this.selectState();
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

}
