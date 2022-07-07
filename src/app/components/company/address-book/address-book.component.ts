import * as CryptoJS from 'crypto-js';

import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { CompanyApiService } from '../company-api.service';
import { ProfileService } from '../../profile/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  @Input() companyId: any;
  @Input() userDetail: any

  groupName: any = "";
  selectedGroup: any;
  groupList = []
  selectedGroupID: any;
  selectedForEdit: number;

  emailId: any = "";
  firstName: any = "";
  lastName: any = "";
  memberList: any;
  isShow: boolean;
  selectedUserList: any = [];

  constructor(
    private profileService: ProfileService,
    private companyService: CompanyApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getInfo();

  }

  ngAfterContentInit() {
    this.getAddresssBookByComId()
  }

  getInfo() {
    let encrypt = localStorage.getItem('Bolstart');
    this.userDetail = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8))
  }
  submitGroup() {
    if (this.groupName != "") {
      let obj = {
        companyId: this.companyId,
        emailId: [],
        groupName: this.groupName,
      }
      this.companyService.createAddressBook(obj).subscribe(res => {
        if (res.success) {
          this.groupName = "";
          this.selectedGroup = res.data;
          console.log(this.userDetail)
          this.selectUser(this.userDetail);
          this.getAddresssBookByComId();
          this.selectedGroup = {}
        }
      })
    }
  }

  getAddresssBookByComId() {
    this.companyService.getAddressBookByCompanyId(this.companyId).subscribe(res => {
      if (res.success) {
        this.groupList = res.data;
      }
    })
  }
  onEditGroupName(index) {
    if (this.selectedForEdit !== index) {
      this.selectedForEdit = index
    } else {
      this.selectedForEdit = null
    }

  }
  updateGroupName(item) {
    let obj = {
      companyId: item.companyId,
      groupName: item.groupName,
      emailId: item.emailId,
      id: item.id
    }
    this.companyService.updateAddressBook(obj).subscribe(res => {
      if (res.success) {
        this.getAddresssBookByComId()
        this.selectedForEdit = null;
      }
    })
  }

  deleteGroup(groupId) {
    this.selectedGroupID = groupId
  }

  confirmDelete() {
    this.companyService.deleteAddressBook(this.selectedGroupID).subscribe(res => {
      if (res.success) {
        this.selectedGroup = {};
        this.selectedUserList = [];
        this.getAddresssBookByComId();
      }
    })
  }


  /* Member List */
  selectGroup(item) {
    this.selectedGroup = item;
    this.getAddressBookById(item.id)
  }
  getList() {
    if (this.firstName != "") {
      this.profileService.searchOnlyUser(this.firstName, this.userDetail.id).subscribe(res => {
        if (res.success) {
          this.memberList = res.data;
          this.isShow = true;
        } else {
          this.memberList = [];
          this.isShow = false;
        }
      })
    } else {
      this.memberList = [];
      this.isShow = false;
    }
  }

  selectUser(item) {
    let newUser: any = []
    newUser.push({ user_id: item.id, emailid: item.emailId, profile_piture: item.profilePicture, firstName: `${item.firstName}`, lastName: `${item.lastName}` })
    console.log(newUser)
    this.companyService.addMemberInGroup(newUser, this.userDetail.id, this.selectedGroup.id).subscribe(res => {
      if (res.success) {
        this.getAddresssBookByComId()
        this.getAddressBookById(this.selectedGroup.id)

      }
    })
    this.isShow = false;
  }

  getAddressBookById(id) {
    this.companyService.getAddressBookById(id).subscribe(res => {
      if (res.success) {
        this.selectedUserList = [];
        this.selectedUserList = res.data.emailId
      }
    })
  }

  deleteMember(index) {
    this.selectedUserList.splice(index, 1);
    let obj = {
      emailId: this.selectedUserList,
      id: this.selectedGroup.id
    }

    this.companyService.updateAddressBook(obj).subscribe(res => {
      if (res.success) {
        this.getAddresssBookByComId()
        this.getAddressBookById(this.selectedGroup.id)
      }
    })
  }
  addGuest() {
    if (this.firstName != "" && this.lastName != "" && this.emailId != "") {
      let newUser: any = []
      newUser.push({ user_id: null, emailid: this.emailId, profile_piture: environment.defaultPic, firstName: this.firstName, lastName: this.lastName })
      this.companyService.addMemberInGroup(newUser, this.userDetail.id, this.selectedGroup.id).subscribe(res => {
        if (res.success) {
          this.firstName = "";
          this.lastName = "";
          this.emailId = "";
          this.getAddresssBookByComId()
          this.getAddressBookById(this.selectedGroup.id)
        }
      })
      this.isShow = false;
    }
  }
  hide() {
    setTimeout(() => {
      this.isShow = false;
    }, 1000)

  }
}
