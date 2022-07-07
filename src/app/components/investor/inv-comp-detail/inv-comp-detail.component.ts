import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { InvestorService } from './../investor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inv-comp-detail',
  templateUrl: './inv-comp-detail.component.html',
  styleUrls: ['./inv-comp-detail.component.scss']
})
export class InvCompDetailComponent implements OnInit {
  companyDetail: any;
  timelineImage: string = environment.defaultTimlineImage;

  constructor(
    private routes: ActivatedRoute,
    private investorApi: InvestorService
  ) { }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(response => {
      this.getCompanyDetailById(response.companyId);
    })
  }


  getCompanyDetailById(companyId) {
    this.investorApi.getCompanyDetailById(companyId).subscribe(res => {
      if (res.success) {
        this.companyDetail = res.data;
      }
    })
  }

}
