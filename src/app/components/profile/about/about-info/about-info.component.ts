import * as $ from 'jquery';

import { Component, Input, OnInit } from '@angular/core';

import { ProfileService } from '../../profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss']
})
export class AboutInfoComponent implements OnInit {
  @Input() userInfo: any;
  aboutContent: string;
  constructor(private toastr: ToastrService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    if (this.userInfo != undefined) {
    } else {

    }
    this.aboutContent = this.userInfo.bio

  }
  updateAbout() {
    if (this.aboutContent != "") {
      let obj = {
        id: this.userInfo.id,
        bio: this.aboutContent
      }
      this.profileService.updateProfileInfo(obj).subscribe(res => {
        if (res.success) {
          this.aboutContent = res.data.bio;
          this.toastr.success(res.message);
          $("#aboutModel .close").click();
        } else {
          this.toastr.error(res.message);
        }
      })
    }
  }

}
