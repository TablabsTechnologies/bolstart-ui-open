import { Component, Input, OnInit } from '@angular/core';

import { CompanyApiService } from '../company-api.service';
import { ProfileService } from '../../profile/profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company-top-member',
  templateUrl: './company-top-member.component.html',
  styleUrls: ['./company-top-member.component.scss']
})
export class CompanyTopMemberComponent implements OnInit {
  @Input() companyId: any;
  @Input() userDetail: any

  memberList: any = [];
  currentPage: number = 0;

  constructor(
    private companyService: CompanyApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getInfo();

  }
  getInfo() {
    this.getMemberList(this.currentPage, 5)
  }

  viewAll() {

  }

  getMemberList(currentPage, size) {
    this.companyService.getMemberList(this.companyId, currentPage, size).subscribe(res => {
      if (res.success) {
        this.memberList = res.data;
      }
    })
  }

  checkProfile(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
  }
}
