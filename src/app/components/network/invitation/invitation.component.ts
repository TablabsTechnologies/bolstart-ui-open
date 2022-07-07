import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';

import { NetworkApiService } from './../network-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  requestList: any = [];
  userId: number;


  constructor(private networkService: NetworkApiService, private router: Router) { }

  ngOnInit(): void {
    this.getRequestList();

  }

  getRequestList() {
    this.userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
    this.networkService.getConnectionRequest(this.userId).subscribe(res => {
      if (res.success) {
        this.requestList = [];
        this.requestList = res.data.slice(0, 5)
      }
    })
  }
  rejectRequest(item, index) {
    let obj = {
      connectedUserId: item.userId,
      id: item.id,
      isConnected: null,
      userId: item.connectedUser.userId,
      isFollowed: 'false'
    }
    this.networkService.sendRequest(obj).subscribe(res => {
      if (res.success) {
        this.requestList[index].isConnected = null;
        this.requestList.splice(index, 1);
        this.networkService.updateCountEvent();
      }
    })
  }

  acceptRequest(item, index) {
    let obj = {
      connectedUserId: item.userId,
      id: item.id,
      isConnected: 'true',
      userId: item.connectedUser.userId,
      isFollowed: 'false'
    }
    this.networkService.acceptRequest(obj).subscribe(res => {
      if (res.success) {
        this.requestList[index].isConnected = 'true';
        this.requestList.splice(index, 1);
        this.networkService.updateCountEvent();
      }
    })
  }

  /* ================== Get Follower list ============== */

  selectUser(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
  }

}
