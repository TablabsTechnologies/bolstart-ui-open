import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CompanyApiService } from 'src/app/components/company/company-api.service';
import { ProfileService } from '../../profile/profile.service';
import { postService } from './../../../shared/post-container/post-container.service';

@Component({
  selector: 'app-company-publish',
  templateUrl: './company-publish.component.html',
  styleUrls: ['./company-publish.component.scss']
})
export class CompanyPublishComponent implements OnInit {
  companyId: any;
  publishPostList: any = [];
  userDetail: any;

  currentPage: number = 0;
  throttle = 150;
  scrollDistance = 2;

  constructor(
    private routes: ActivatedRoute,
    private companyService: CompanyApiService,
  ) { }

  ngOnInit(): void {
    this.getInfo();

    /*    this.postService.deleteEvent.subscribe(data => {
         this.publishPostList.map((post, index) => {
           if (data == post.id) {
             this.publishPostList.splice(index, 1)
           }
         })
       })
       this.postService.updateEvent.subscribe(data => {
         this.publishPostList.map((post) => {
           if (data.id == post.id) {
             return [post.description = data.description, post.image = data.image]
           }
         })
       }) */
  }

  getInfo() {
    this.userDetail = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8));
    this.routes.queryParams.subscribe(param => {
      this.companyId = param.companyId
    })

    this.getPublishPostList(this.currentPage)
  }
  getPublishPostList(currentPage) {
    this.companyService.getCompanyPublishPost(this.companyId, currentPage, this.userDetail.id).subscribe(res => {
      if (res.success) {
        this.publishPostList = res.data.content;
      }
    })
  }

  onChangeDateFormat(oldDate) {
    let day = oldDate.substring(0, 2);
    let month = moment.monthsShort(oldDate.substring(3, 5) - 1);
    let year = oldDate.substring(6, 10);
    return `${day}-${month}-${year}`
  }


  /* ======================  infinite Scroll  =========================== */
  onScrollDown() {
    this.currentPage += 1
    this.getPublishPostList(this.currentPage);

  }

}