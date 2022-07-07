import { Component, Input, OnInit } from '@angular/core';

import { ProfileService } from '../../profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  @Input() userInfo: any;

  skillList: any = [];
  skill: string;
  constructor(
    private toastr: ToastrService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.skillList = this.userInfo.skill;
  }
  addSkill() {
    if (this.skill != "") {
      let obj = {
        skillName: this.skill,
        userId: this.userInfo.id
      }
      this.profileService.updateSkill(obj).subscribe(res => {
        if (res.success) {
          this.toastr.success(res.message);
          this.skillList.push(res.data);
          this.skill = "";
        } else {
          this.toastr.error(res.message);
        }
      })
    }
  }
  addSkills() {
    if (this.skill != "") {
      let obj = {
        skillName: this.skill,
        userId: this.userInfo.id
      }
      this.profileService.updateSkill(obj).subscribe(res => {
        if (res.success) {
          this.toastr.success(res.message);
          this.skillList.push(res.data)
          this.skill = ""
        } else {
          this.toastr.error(res.message);
        }
      })
    }
  }

  deleteSkill(item, index) {
    this.profileService.deleteSkill(item.id).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
        this.skillList.splice(index, 1);
      }
    })
  }
}
