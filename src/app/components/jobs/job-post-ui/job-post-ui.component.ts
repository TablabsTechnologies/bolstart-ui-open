import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobService } from '../job.service';
import { Popup6Component } from '../popups/popup6/popup6.component';
// import { Popup12Component } from '../popups/popup12/popup12.component';
// import { Popup13Component } from '../popups/popup13/popup13.component';

@Component({
  selector: 'app-job-post-ui',
  templateUrl: './job-post-ui.component.html',
  styleUrls: ['./job-post-ui.component.scss']
})
export class JobPostUIComponent implements OnInit {
  jobPostList: [] = [] as any
  constructor(private jobService: JobService, public dialog: MatDialog) {
 
  }
  arr: any = [
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
  ];
  ngOnInit(): void {
    this.jobService.getJobPostByCompanyId().subscribe((res: any) => {
      this.jobPostList = res.data
      debugger
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

}
