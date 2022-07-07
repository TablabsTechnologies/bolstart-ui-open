import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import * as CryptoJS from 'crypto-js';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.scss']
})
export class ConnectionListComponent implements OnInit {
  myNetworkList: any = [];
  userInfo: any;
  member: number;
  isShow: boolean = false;
  currentPage: number = 0;
  config: any;
  constructor(private profileService: ProfileService,
    private router: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 16,
      currentPage: 0,
      totalItems: 0
    }
    this.getSkillInfo(this.currentPage);
  }

  getSkillInfo(pageNo) {
    this.routes.queryParams.subscribe(param => {
      this.member = parseInt(localStorage.getItem('member'))
      this.profileService.getMyNetwork(param.visit, pageNo).subscribe(res => {
        if (res.success) {
          this.myNetworkList = res.data.content
          if (this.member == param.visit) {
            this.isShow = true;
          } else {
            this.isShow = false
          }
        }
      })
    })
  }

  pageChanged(event) {
    this.getSkillInfo(event - 1);
    this.currentPage = event;
  }

  goToProfile(userId) {
    this.router.navigate(['./profile/timeline'], { queryParams: { visit: userId } });
  }

}
