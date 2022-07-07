import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs-list-details',
  templateUrl: './jobs-list-details.component.html',
  styleUrls: ['./jobs-list-details.component.scss']
})
export class JobsListDetailsComponent implements OnInit {
  jobPostList: [] = [] as any
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobPostByCompanyId().subscribe((res: any) => {
      this.jobPostList = res.data
      debugger
    })
  }

}
