import { Component, OnInit } from '@angular/core';

import { NetworkApiService } from './../network-api.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  followingList: any = [];
  followerList: any = [];
  selectedType: number = 1;
  userId: number;
  constructor(
    private networkService: NetworkApiService
  ) { }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('member'));
    this.selectType(this.selectedType)
  }
  selectType(type) {
    this.selectedType = type;
    switch (this.selectedType) {
      case 1:
        this.getFollowerList();
        break;
      case 2:
        this.getFolloweingList();
        break;
    }
  }


  getFollowerList() {
    this.networkService.getFollowers(this.userId).subscribe(res => {
      if (res.success) {
        this.followerList = res.data
      }
    })
  }
  getFolloweingList() {
    this.networkService.getFollowing(this.userId).subscribe(res => {
      if (res.success) {
        this.followingList = res.data
      }
    })
  }


  /* ================ Request ================ */
  sendFollowBack(item, index) {
    let obj = {
      connectedUserId: item.userId,
      isFollowed: 'true',
      userId: this.userId
    }
    this.networkService.followRequest(obj).subscribe(res => {
      if (res.success) {
        this.followerList[index].isFollowed = 'true';
      }
    })
  }
  unfollowRequest(item, index) {
    let obj = {
      connectedUserId: item.userId,
      isFollowed: 'false',
      userId: this.userId
    }
    this.networkService.followRequest(obj).subscribe(res => {
      if (res.success) {
        this.followingList[index].isFollowed = 'false';
        this.followingList.splice(index, 1)
      }
    })
  }
}
