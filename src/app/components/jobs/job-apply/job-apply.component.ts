import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss'],
})
export class JobApplyComponent implements OnInit {
  add =
    'https://bolstartimages.s3.ap-south-1.amazonaws.com/profile/default/profile_avater.png';
  applicationList = [
    {
      title: 'Applicant Title',
      companyName: 'Unviversity name',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '223',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Mumbai',
      status: 'Applied',
      noApplicant: '10',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '120',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: null,
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
    {
      title: 'Applicant Title',
      companyName: 'Technomonk Solution',
      location: 'Pune',
      status: 'Applied',
      noApplicant: '20',
    },
  ];

  applicantProfile = {
    title: 'Applicant Title',
    companyName: 'Unviversity name',
    location: 'Pune',
    status: 'Applied',
    noApplicant: '20',
    experiance: [{
      companyName: "Technomonk",
      companyLogo: "https://bolstartimages.s3.ap-south-1.amazonaws.com/company/1641472716928.png",
      title: "Sales manager",
      jobLocation: "Delhi",
      startYear: "2021",
      startMonth: "January",
      endYear: "2022",
      endMonth: "January",
    }],
    education: [{
      companyName: "Shivaji university",
      companyLogo: "https://bolstartimages.s3.ap-south-1.amazonaws.com/company/1641472716928.png",
      title: "Information technology",
      jobLocation: "Delhi",
      startYear: "2011",
      startMonth: "January",
      endYear: "2016",
      endMonth: "January",
    }]
  };
  constructor() { }

  ngOnInit(): void { }
}
