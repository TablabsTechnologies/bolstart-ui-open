import * as $ from 'jquery';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PerksService } from './perks.service';
import { ProfileService } from './../profile/profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.scss']
})
export class PerksComponent implements OnInit {
  @ViewChild('model') model: ElementRef;
  userDetail: any;
  constructor(
    private profileService: ProfileService,
    private toastr: ToastrService,
    private perksService: PerksService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('member');
    this.profileService.getUserInfo(userId, userId).subscribe(res => {
      if (res.success) {
        this.userDetail = res.data;
      }
    })
  }

  onRedeem(name, price) {
    if (this.userDetail.company_id != null) {
      this.perksService.redeemPerk(this.userDetail.id, name, price).subscribe(res => {
        if (res != "") {
          this.model.nativeElement.click();
        }
      })
    } else {
      this.toastr.warning('only company Owner and admin having the action')
    }
  }

}
