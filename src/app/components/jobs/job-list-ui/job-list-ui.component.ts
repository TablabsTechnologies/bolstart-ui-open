import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { FilterSearchComponent } from 'src/app/shared/popup/filter-search/filter-search.component';
import { JobPostCancelComponent } from 'src/app/shared/popup/job-post-cancel/job-post-cancel.component';
import { JobApplyBottomSheetComponent } from '../job-apply-bottom-sheet/job-apply-bottom-sheet.component';
import { Popup11Component } from '../popups/popup11/popup11.component';
import { Popup13Component } from '../popups/popup13/popup13.component';
import { JoblistService } from 'src/app/shared/service/joblist.service';

@Component({
  selector: 'app-job-list-ui',
  templateUrl: './job-list-ui.component.html',
  styleUrls: ['./job-list-ui.component.scss']
})
export class JobListUiComponent implements OnInit {
  animal: string;
  name: string;
  public joblist:any=[];
  arr: any = [
   
  ];
  isDisplay = true;
  isDisplay2 = true;
  isDisplay3 = true;
  isDisplay4 = false;
  isDisplay5 = true;
  isDisplay6 = true;
  isDisplay7 = true;
  ngOnInit(): void { }
  constructor(private _bottomSheet: MatBottomSheet,public dialog: MatDialog,private jobservice:JoblistService) { 
    // this.dialog.open(JobPostCancelComponent,{
    //   width:'600px',
    //   height:'360px'    })
    this.getallJobsList();
  }

  openBottomSheet(id): void {
    var jobDetails = this.joblist.data.filter(obj => obj.id == id);
    if(jobDetails.length>0){
        this.jobservice.setJobDetails(jobDetails[0])
    }
    const dialogRef = this._bottomSheet.open(JobApplyBottomSheetComponent,{
      backdropClass: 'backdropBackground'
    });
  }
  toggle() {
    this.isDisplay = !this.isDisplay;
    this.isDisplay2 = true;
    this.isDisplay3 = true;
    // this.isDisplay4 = true;
    this.isDisplay5 = true;
    this.isDisplay6 = true;
    this.isDisplay7 = true;
  }

  toggle2() {
    this.isDisplay2 = !this.isDisplay2;
    this.isDisplay = true;
    this.isDisplay3 = true;
    // this.isDisplay4 = true;
    this.isDisplay5 = true;
    this.isDisplay6 = true;
    this.isDisplay7 = true;
  }
  toggle3() {
    this.isDisplay3 = !this.isDisplay3;
    this.isDisplay2 = true;
    // this.isDisplay3 = true;
    // this.isDisplay4 = true;
    this.isDisplay5 = true;
    this.isDisplay6 = true;
    this.isDisplay7 = true;
  }
  toggle4() {
    
    this.isDisplay4 = !this.isDisplay4;
    this.isDisplay2 = true;
    this.isDisplay3 = true;
    // this.isDisplay4 = true;
    this.isDisplay5 = true;
    this.isDisplay6 = true;
    this.isDisplay7 = true;
  }

  toggle5() {
    this.isDisplay5 = !this.isDisplay5;
    this.isDisplay2 = true;
    this.isDisplay3 = true;
    this.isDisplay4 = true;
    // this.isDisplay5 = true;
    this.isDisplay6 = true;
    this.isDisplay7 = true;
  }

  toggle6() {
    this.isDisplay6 = !this.isDisplay6;
    this.isDisplay2 = true;
    this.isDisplay3 = true;
    this.isDisplay4 = true;
    this.isDisplay5 = true;
    // this.isDisplay6 = true;
    this.isDisplay7 = true;
  }
  toggle7() {
    this.isDisplay7 = !this.isDisplay7;
    this.isDisplay2 = true;
    this.isDisplay3 = true;
    this.isDisplay4 = true;
    this.isDisplay5 = true;
    this.isDisplay6 = true;
    // this.isDisplay7 = true;
  }

  createJob(){

  }
  openDialog(id): void {
    var jobDetails = this.joblist.data.filter(obj => obj.id == id);
    if(jobDetails.length>0){
        this.jobservice.setJobDetails(jobDetails[0])
    }
    const dialogRef = this.dialog.open(Popup13Component, {
      // width: '250px',
      data: {name: this.name, animal: this.animal},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  getallJobsList(){
    this.jobservice.getAllJobsList().subscribe(joblist =>{
        this.joblist=joblist;
        console.log('joblistjoblist:',joblist);
    });
  }

  getDateDifference(startDate){
    if(startDate==''){
      startDate = new Date();
    }
    var d1 = new Date(startDate);   
    var d2 = new Date(); 
    var diff;  
     diff = d2.getTime() - d1.getTime();
     console.log("diff:",diff)     
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
