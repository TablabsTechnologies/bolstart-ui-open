import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup6',
  templateUrl: './popup6.component.html',
  styleUrls: ['./popup6.component.scss']
})
export class Popup6Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Popup6Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
