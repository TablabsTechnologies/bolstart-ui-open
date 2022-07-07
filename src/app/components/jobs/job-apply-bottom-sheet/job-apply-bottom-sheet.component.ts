import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Popup13Component } from '../popups/popup13/popup13.component';
import { JoblistService } from 'src/app/shared/service/joblist.service';

@Component({
  selector: 'app-job-apply-bottom-sheet',
  templateUrl: './job-apply-bottom-sheet.component.html',
  styleUrls: ['./job-apply-bottom-sheet.component.scss']
})
export class JobApplyBottomSheetComponent implements OnInit {
  public jobDetails:any;
  constructor( private dialog:MatDialog,private jobservice:JoblistService) { }

  ngOnInit(): void {
    this.jobDetails = this.jobservice.getJobDetails()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Popup13Component, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

   addToSaveList(jobId){
    var requestBody = {
      'jobId':jobId,
      'saveStatus':1
    }
      this.jobservice.addToSaveList(requestBody).subscribe((responseBody)=>{
        console.log("responseBody:",responseBody)
      })
    }

}
