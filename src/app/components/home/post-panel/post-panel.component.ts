import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';

import { HomeService } from './../service/home.service';
import { PublishContainerService } from 'src/app/shared/publish-container/publish-container.service';
import { postService } from './../../../shared/post-container/post-container.service';

@Component({
  selector: 'post-Panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.scss']
})
export class PostPanelComponent implements OnInit {
  userInfo: any;
  postList: any = [];
  selectedTab: number = 1;
  currentPage: number = 0;
  throttle = 300;
  scrollDistance = 1;

  publishList: any = [];
  constructor(
    private apiService: HomeService,
    private postService: postService,
    private publishService: PublishContainerService
  ) {

  }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));
    // this.getPostList(this.currentPage);

    this.apiService.event
      .subscribe(data => {
        if (this.selectedTab == 1) {
          this.getPostList(this.currentPage);
        } else {
          this.getPublishList(this.currentPage)
        }

      });
    this.postService.updateEvent.subscribe(data => {
      this.postList.map((post) => {
        if (data.id == post.id) {
          return [post.description = data.description, post.image = data.image]
        }
      })
    })

    this.postService.deleteEvent.subscribe(data => {
      this.postList.map((post, index) => {
        if (data == post.id) {
          this.postList.splice(index, 1)
        }
      })
    })

    this.publishService.deleteEvent.subscribe(data => {
      this.publishList.map((post, index) => {
        if (data == post.id) {
          this.postList.splice(index, 1)
        }
      })
    })

    this.publishService.updateEvent.subscribe(data => {
      this.publishList.map((post) => {
        if (data.id == post.id) {
          return [post.description = data.description, post.image = data.image]
        }
      })
    })

  }

  getPostList(currentPage) {
    this.apiService.getPostListByConnection(this.userInfo.id, currentPage).subscribe(res => {
      if (res.success) {
        this.postList = res.data.content;
      }
    })
  }

  getPublishList(currentPage) {
    this.apiService.getPublishPostByConnection(this.userInfo.id, currentPage).subscribe(res => {
      if (res.success) {
        this.publishList = res.data.content;
      }
    })
  }

  getList(number) {
    this.selectedTab = number;
    switch (number) {
      case 1:
        this.getPostList(this.currentPage)
        break;
      case 2:
        this.getPublishList(this.currentPage)
        break;

    }
  }

  /* ======================  infinite Scroll  =========================== */
  onScrollDown() {
    this.currentPage += 1
    if (this.selectedTab == 1) {
      this.getPostList(this.currentPage);
    } else {

    }

  }




}
