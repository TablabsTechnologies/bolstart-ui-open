import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';

import { InvestorService } from './investor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {
  companyList: any = [];
  userInfo: any;

  constructor(private investorApi: InvestorService, private router: Router) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));

    this.getCompanyList();
  }

  getCompanyList() {
    this.investorApi.getAllCompanyListByInvestorId(this.userInfo.id).subscribe(response => {
      if (response.success) {
        this.companyList = response.data;
      }
    })
  }

  goToCompanyDetail(companyId) {
    this.router.navigate(['./investor/companyDetail/publish'], { queryParams: { companyId: companyId } });

  }


}
