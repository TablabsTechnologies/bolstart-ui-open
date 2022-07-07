import { Component, OnInit } from '@angular/core';

import { NetworkApiService } from './network-api.service';
import { ProfileService } from 'src/app/components/profile/profile.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  add: any = "assets/img/Add2.png"
  followrCount: number;
  networkCount: number;
  constructor(private networkService: NetworkApiService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getFollowerList();
    this.getFriendList();
  }
  getFollowerList() {
    let userId = localStorage.getItem('member');
    this.networkService.getFollowers(userId).subscribe(res => {
      if (res.success) {
        this.followrCount = res.data.length;
      } else {
        this.followrCount = 0
      }
    })
  }

  getFriendList() {
    let userId = localStorage.getItem('member');
    this.profileService.getUserInfo(userId, userId).subscribe(res => {
      if (res.success) {
        this.networkCount = res.data.connectionCount;
      } else {
        this.networkCount = 0
      }
    })
  }

}
