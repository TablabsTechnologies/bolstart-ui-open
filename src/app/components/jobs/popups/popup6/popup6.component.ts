import { Component, Inject, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-popup6',
  templateUrl: './popup6.component.html',
  styleUrls: ['./popup6.component.scss']
})
export class Popup6Component implements OnInit {
  public popupMessage:String= "Are You Sure you want to deactivate this job post for java Developer";
  constructor(public dialogRef: MatDialogRef<Popup6Component>,
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
  }

}
