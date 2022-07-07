import * as $ from 'jquery';
import * as CryptoJS from 'crypto-js';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CompanyApiService } from './../company-api.service';
import { ProfileService } from './../../profile/profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'app-company-member',
  templateUrl: './company-member.component.html',
  styleUrls: ['./company-member.component.scss']
})
export class CompanyMemberComponent implements OnInit {
  public addEmployeeForm: FormGroup;
  keyWord: string;
  userList: any = [];
  isShow: boolean = false;
  selectedUser: any;
  role: string = "";
  memberList: any = [];
  userDetail: any = {};
  currentPage: number = 0;
  throttle = 150;
  scrollDistance = 1;
  scrollUpDistance = 1.5;
  yeaList: any = common.years();
  monthList: any = common.month;
  isShowList: boolean = true
  searchList = [];
  companyDetail: any
  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder,
    private companyService: CompanyApiService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
    this.initializeExpForm();
  }

  initializeExpForm() {
    this.addEmployeeForm = this.fb.group({
      userId: ['', [Validators.required]],
      startYear: ['', [Validators.required]],
      startMonth: ['', [Validators.required]],
      isWorking: [true],
      userName: ['', [Validators.required]],
      profileImage: ['', Validators.required],
      title: ['', [Validators.required]],

    })
  }

  getInfo() {
    this.userDetail = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8));
    this.route.queryParams.subscribe(param => {
      console.log(param)
      this.getCompanyDetail(param.companyId)
    })


  }

  getMemberList(currentPage, size) {
    this.companyService.getMemberList(this.companyDetail.id, currentPage, size).subscribe(res => {
      if (res.success) {
        this.memberList = res.data;
      }
    })
  }

  deleteMember(item, index) {
    this.companyService.removeMember(item.id, this.companyDetail.id).subscribe(res => {
      if (res.success) {
        this.memberList.splice(index, 1)
      }
    })
  }

  addEmployeeRole(item) {
    this.companyService.assignEmployeeRole(item.id, item.userRole, this.companyDetail.id).subscribe(res => {
      if (!res.success) {
        this.toastr.warning(res.message)
      }
    })
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
    }
    this.companyService.addEmployeeByAdmin(obj).subscribe(res => {
      if (res.success) {
        this.getMemberList(this.currentPage, 20);
        this.addEmployeeForm.reset();
        $("#addEmployee .close").click();

      }
    })
  }

  selectEmployee(item) {
    this.addEmployeeForm.patchValue({
      userId: item.id,
      userName: item.firstName + " " + item.lastName,
      profileImage: item.profilePicture,
    })
  }

  onFocus() {
    this.isShowList = true
  }

  search() {
    if (this.addEmployeeForm.value.userName.length > 2) {
      this.profileService.searchOnlyUser(this.addEmployeeForm.value.userName, this.userDetail.id).subscribe(res => {
        if (res.success) {
          this.searchList = res.data;
        }
      })
    } else {
      this.addEmployeeForm.patchValue({
        profileImage: "",
        userId: ""
      })
      return
    }
  }

  onBlur() {
    setTimeout(() => {
      this.isShowList = false;
      this.searchList = [];
    }, 500)
  }
  getCompanyDetail(companyId) {
    this.companyService.getCompanyDetail(companyId).subscribe(res => {
      if (res.success) {
        this.companyDetail = res.data
        this.getMemberList(this.currentPage, 20)
      }
    })
  }
}
