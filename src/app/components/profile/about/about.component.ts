import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userInfo: any;
  ishow: boolean = false;
  constructor(private profileService: ProfileService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserInfo()
  }

  getUserInfo() {
    this.routes.queryParams.subscribe(param => {
      let member = parseInt(localStorage.getItem('member'))
      this.profileService.getUserInfo(param.visit, member).subscribe(res => {
        if (res.success) {
          this.userInfo = res.data;
          if (this.userInfo.id == member) {
            this.userInfo['isOwener'] = true;
          } else {
            this.userInfo['isOwener'] = false;
          }
          this.ishow = true;
        }
      })
    })
  }

}
