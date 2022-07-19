import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';

import { NetworkApiService } from 'src/app/components/network/network-api.service';
import { ProfileService } from './../../components/profile/profile.service';
import { Router } from '@angular/router';

declare var window: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyWord: string;
  userList: any = [];
  isShow: boolean;
  userInfo: any;
  requestCount: any;
  perksLink = "http://bolstart-perks.s3-website.ap-south-1.amazonaws.com"
  constructor(private router: Router, private profileService: ProfileService, private networkService: NetworkApiService) { }

  ngOnInit(): void {
    this.profileService.event
      .subscribe(data => {
        let encrypt = localStorage.getItem('Bolstart');
        this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));
      });

    this.networkService.event.subscribe(data => {
      this.getRequestList()
    });
    if(localStorage.getItem('member')=='' || localStorage.getItem('member')==null){
        this.logOut();
    }
  }

  getRequestList() {
    this.networkService.getConnectionRequest(this.userInfo.id).subscribe(res => {
      if (res.data != null) {
        this.requestCount = res.data.length > 99 ? res.data.length + "+" : res.data.length
      } else {
        this.requestCount = 0
      }
    })
  }

  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    window.logOut();
    setTimeout(() => {
      location.reload();
    }, 200)
    this.router.navigate(['/account/login']);
  }

  GoToOwnerProfile() {
    let userId = parseInt(localStorage.getItem('member'))
    this.router.navigate(['./profile/timeline'], { queryParams: { visit: userId } });

  }
  goToPasswordChange() {
    localStorage.clear();
    sessionStorage.clear();
    window.logOut();
    this.router.navigate(['/account/forget/password'], { queryParams: { isPasswordChange: true } });

  }
  goToNewCompany() {
    this.router.navigate(['./company/createCompany']);
  }
  goToMyCompany() {
    this.router.navigate(['./company/companyinfo/publish'], { queryParams: { companyId: this.userInfo.company_id } });
  }
  getList() {
    if (this.keyWord != "") {
      let userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
      this.profileService.searchUser(this.keyWord, userId).subscribe(res => {
        if (res.success) {
          this.userList = res.data;
          this.isShow = true;
        }
      })
    } else {
      this.userList = [];
      this.isShow = false;
    }
  }
  selectUser(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['./profile/timeline'], { queryParams: { visit: id } });
    setTimeout(() => {
      this.isShow = false
    }, 300)
  }

  goToCompany(id) {
    this.router.navigate(['../company/companyinfo/publish'], { queryParams: { companyId: id } });
    setTimeout(() => {
      this.isShow = false
    }, 300)
  }
  focusOut() {
    setTimeout(() => {
      this.isShow = false
    }, 300)

  }
  goToInvestingPage() {
    let userId = parseInt(localStorage.getItem('member'))
    this.router.navigate(['./investor'], { queryParams: { visit: userId } });
  }



}
