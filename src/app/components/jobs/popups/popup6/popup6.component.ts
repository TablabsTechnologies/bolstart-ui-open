import { Component, Inject, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JoblistService } from 'src/app/shared/service/joblist.service';

@Component({
  selector: 'app-popup6',
  templateUrl: './popup6.component.html',
  styleUrls: ['./popup6.component.scss']
})
export class Popup6Component implements OnInit {
  public popupMessage:String= "Are You Sure you want to deactivate this job post for java Developer";
  constructor(public joblistService:JoblistService,public dialogRef: MatDialogRef<Popup6Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    @Input() getMessage:String='';
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnChanges():void{
      this.popupMessage=this.getMessage;
      console.log("Popup message : ",this.popupMessage)

  }
  ngOnInit(): void {
   console.log(this.data)
  }

  updateJob(){
    var requestBody = {
      "active": this.data.active,
      "id":this.data.id
      }
      this.joblistService.setJobStatusResponse({
        "message" : "",
        "data" : "",
        "success" : false
      });
      this.joblistService.updateJobStatus(requestBody).subscribe((responseBody)=>{
        console.log("responseBody : ",responseBody);
        this.dialogRef.close();
        this.joblistService.setJobStatusResponse(responseBody);
      })
  }

}
