import { Component, Inject, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popup_job_applyer',
  templateUrl: './popup_job_applyer.component.html',
  styleUrls: ['./popup_job_applyer.component.scss']
})
export class PopupJobApplyer implements OnInit {
  public popupMessage:String= "No More Applyer found for this job";
  constructor(public router:Router, public dialogRef: MatDialogRef<PopupJobApplyer>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['jobs/job-post-ui'])
    
  }
  ngOnChanges():void{
      // this.popupMessage=this.getMessage;
      // console.log("Popup message : ",this.popupMessage)

  }
  ngOnInit(): void {
  }

}
