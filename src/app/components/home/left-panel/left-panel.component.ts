import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';

import { CompanyApiService } from '../../company/company-api.service';
import { ProfileService } from './../../profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'left-Panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  userInfo: any;
  companyDetail: any;
  constructor(private profileService: ProfileService, private router: Router, private companyApiService: CompanyApiService,
  ) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));
    this.getUserInfo();
    if (this.userInfo.company_id != null) {
      this.getCompanyDetail(this.userInfo.company_id)
    }
    this.profileService.emitEvent()

  }

  getUserInfo() {
    this.profileService.getUserInfo(this.userInfo.id, this.userInfo.id).subscribe(res => {
      if (res.success) {
        this.userInfo = res.data;
      }
    })
  }

  GoToOwnerProfile() {
    let userId = parseInt(localStorage.getItem('member'))
    this.router.navigate(['./profile/timeline'], { queryParams: { visit: userId } });

  }

  getCompanyDetail(companyId) {
    this.companyApiService.getCompanyDetail(companyId).subscribe(res => {
      if (res.success) {
        this.companyDetail = res.data;
      }
    })
  }
  GoToCompanyDetail() {
    this.router.navigate(['./company/companyinfo/publish'], { queryParams: { companyId: this.userInfo.company_id } });
  }
}
