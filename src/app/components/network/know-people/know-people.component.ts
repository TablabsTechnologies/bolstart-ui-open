import { map } from 'rxjs/operators';
import { NetworkApiService } from './../network-api.service';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'know-people',
  templateUrl: './know-people.component.html',
  styleUrls: ['./know-people.component.scss']
})
export class KnowPeopleComponent implements OnInit {
  suggestList: any = [];
  userId: number;
  currentpage: number = 0;
  config: any;
  constructor(
    private networkService: NetworkApiService
  ) { }

  ngOnInit(): void {
    this.userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
    this.config = {
      itemsPerPage: 16,
      currentPage: 0,
      totalItems: 0
    }
    this.getSucggestedList(this.currentpage, this.userId)
  }



  /* =========== Get Suugetion List ====================*/
  getSucggestedList(pageNo, UserId) {
    this.networkService.getSugestionList(UserId, pageNo).subscribe(res => {
      if (res.success) {
        this.suggestList = [];
        this.suggestList = res.data.content;
      }
    })
  }
  pageChanged(event) {
    this.getSucggestedList(event - 1, this.userId);
    this.currentpage = event;
  }

  remove(index) {
    this.suggestList.splice(index, 1)
  }


  /* ===================== Send Request ==================== */


  sendRequest(item, index) {
    let obj = {
      connectedUserId: item.id,
      isConnected: 'false',
      userId: this.userId
    }
    this.networkService.sendRequest(obj).subscribe(res => {
      if (res.success) {
        this.suggestList[index].isConnected = 'false';
        this.remove(index)
      }
    })
  }

  sendFollowRquest(item, index) {
    let obj = {
      connectedUserId: item.id,
      isFollowed: 'true',
      userId: this.userId
    }
    this.networkService.followRequest(obj).subscribe(res => {
      if (res.success) {
        this.suggestList[index].isFollowed = 'true';
      }
    })
  }
  sendUnfollowRquest(item, index) {
    let obj = {
      connectedUserId: item.id,
      isFollowed: null,
      userId: this.userId
    }
    this.networkService.followRequest(obj).subscribe(res => {
      if (res.success) {
        this.suggestList[index].isFollowed = null;
      }
    })
  }

}
