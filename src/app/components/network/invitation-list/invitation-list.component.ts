import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NetworkApiService } from './../network-api.service';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss']
})
export class InvitationListComponent implements OnInit {
  requestList = [];
  constructor(
    private networkService: NetworkApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRequestList();
  }

  getRequestList() {
    this.route.queryParams.subscribe(param => {
      this.networkService.getConnectionRequest(param.visit).subscribe(res => {
        if (res.success) {
          this.requestList = [];
          this.requestList = res.data
        }
      })
    })
  }

  rejectRequest(item, index) {
    let obj = {
      connectedUserId: item.userId,
      id: item.id,
      isConnected: null,
      userId: item.connectedUser.userId,
      isFollowed: "false"
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
      isFollowed: "false"
    }
    this.networkService.acceptRequest(obj).subscribe(res => {
      if (res.success) {
        this.requestList[index].isConnected = 'true';
        this.requestList.splice(index, 1);
        this.networkService.updateCountEvent();
      }
    })
  }

  selectUser(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
  }
}
