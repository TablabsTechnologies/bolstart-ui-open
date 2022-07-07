import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  add: any = "assets/img/add.jpg"
  userInfo: any;
  ishow: boolean = false;
  constructor(private profileService: ProfileService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSkillInfo()
  }

  getSkillInfo() {
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
