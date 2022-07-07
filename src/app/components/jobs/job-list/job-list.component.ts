import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../profile/profile.service';
import { Router } from '@angular/router';
import { JobService } from '../job.service';
import { map, shareReplay, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UploadDocumentComponent } from '../upload-document/upload-document.component';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  getAllJobPost$ = this.jobService.getAllJobPost$.pipe(
    map((res: any) => {
      if (res.success) {
        this.jobList = res.data
      }
    })
  )
  add: any = "assets/img/Add1.png";
  userInfo: any;
  currentPage: number = 0;
  throttle = 300;
  scrollDistance = 1;
  selectedTab: number = 1;
  jobList = [
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "closed", noApplicant: "223" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Mumbai", status: "Active", noApplicant: "10" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "120" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: null },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "closed", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "closed", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },
    { jobTitle: "Job Title", companyName: "Technomonk Solution", location: "Pune", status: "Active", noApplicant: "20" },

  ]

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private jobService: JobService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));
    this.getUserInfo();
  }

  getUserInfo() {
    this.profileService.getUserInfo(this.userInfo.id, this.userInfo.id).subscribe(res => {
      if (res.success) {
        this.userInfo = res.data;
      }
    })
  }
  uploadDocument(job){
    debugger
    const dialogRef = this.dialog.open(UploadDocumentComponent, {
      disableClose: true,
      width: '400px',
      data: {
        heading: "Upload your resume here.",
        isCloseIcon: true,
        isDownloadURL: true,
        isActionButtons: true,
        buttonAlignment: "right",
        noButton: "Cancel",
        yesButton: "Upload",
        yesAsLink: "",
      },
    });
  }
  GoToOwnerProfile() {
    let userId = parseInt(localStorage.getItem('member'))
    this.router.navigate(['./profile/timeline'], { queryParams: { visit: userId } });

  }

  onScrollDown() {
    this.currentPage += 1
    if (this.selectedTab == 1) {
      // this.getPostList(this.currentPage);
    } else {

    }

  }
}
