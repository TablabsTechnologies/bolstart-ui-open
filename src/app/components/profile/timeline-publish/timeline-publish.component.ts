import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../home/service/home.service';
import { ProfileService } from '../profile.service';
import { PublishContainerService } from './../../../shared/publish-container/publish-container.service';

@Component({
  selector: 'app-timeline-publish',
  templateUrl: './timeline-publish.component.html',
  styleUrls: ['./timeline-publish.component.scss']
})
export class TimelinePublishComponent implements OnInit {
  userInfo: any;
  postList: any = [];

  currentPage: number = 0;
  throttle = 150;
  scrollDistance = 2;
  constructor(
    private profileService: ProfileService,
    private routes: ActivatedRoute,
    private homeService: HomeService,
    private PublishService: PublishContainerService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();

    /* this.postService.deleteEvent.subscribe(data => {
      this.postList.map((post, index) => {
        if (data == post.id) {
          this.postList.splice(index, 1)
        }
      })
    })
    this.postService.updateEvent.subscribe(data => {
      this.postList.map((post) => {
        if (data.id == post.id) {
          return [post.description = data.description, post.image = data.image]
        }
      })
    }) */
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
          };
          this.getPublishList(this.currentPage)

        }
      })
    })
  }
  getPublishList(currentPage) {
    this.homeService.getPublishListByUserId(this.userInfo.id, currentPage).subscribe(res => {
      if (res.success) {
        this.postList = res.data.content;
      }
    })
  }

  /* ======================  infinite Scroll  =========================== */
  onScrollDown() {
    this.currentPage += 1
    this.getPublishList(this.currentPage);

  }

}
