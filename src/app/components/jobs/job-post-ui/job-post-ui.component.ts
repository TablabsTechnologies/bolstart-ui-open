import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobService } from '../job.service';
import { JoblistService } from 'src/app/shared/service/joblist.service';
import { Popup6Component } from '../popups/popup6/popup6.component';
import { Router } from '@angular/router';
// import { Popup12Component } from '../popups/popup12/popup12.component';
// import { Popup13Component } from '../popups/popup13/popup13.component';

@Component({
  selector: 'app-job-post-ui',
  templateUrl: './job-post-ui.component.html',
  styleUrls: ['./job-post-ui.component.scss']
})
export class JobPostUIComponent implements OnInit {
  jobPostList: [] = [] as any
  joblist:any=[];
  constructor(private router:Router,private jobService: JobService, private joblistService:JoblistService,public dialog: MatDialog) {
 
  }
  arr: any = [
   
  ];
  ngOnInit(): void {
    this.jobService.getJobPostByCompanyId().subscribe((res: any) => {
      this.joblist=res;
      this.jobPostList = res.data
    })
  }

  opendia12(): void {
    const dialogRef = this.dialog.open(Popup6Component, {
      width: '600px',
      height: '360px',
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  setJobDetails(id){
    var jobDetails = this.joblist.data.filter(obj => obj.id == id);
    if(jobDetails.length>0){
        this.joblistService.setJobDetails(jobDetails[0]);
        this.router.navigate(['jobs/ApplicationDetails'])
    }
  }
}
