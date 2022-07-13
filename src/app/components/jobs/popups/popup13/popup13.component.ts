import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JoblistService } from 'src/app/shared/service/joblist.service';

@Component({
  selector: 'app-popup13',
  templateUrl: './popup13.component.html',
  styleUrls: ['./popup13.component.scss']
})
export class Popup13Component {

 

  
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  
  constructor(
    private jobservice:JoblistService,
    public dialogRef: MatDialogRef<Popup13Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.jobservice.setUploadResponse({'status':"",'message':""})
      this.getUploadResponse()
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getUploadResponse(){
    this.jobservice.getUploadResponse().subscribe((response)=>{
      console.log(response,"Type:",typeof(response))
        if(response['status']){
          alert(response['message'])
        }else{
          if(response['status']!=''){
           alert(response['message'])
          }
        }
    });
  }
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    let user_id = localStorage.getItem('member');
    var jobDetails =  this.jobservice.getJobDetails();

    var requestBody = 
    {
      "job_id":jobDetails['id'],
      //"user_id":parseInt("2")
      "user_id":parseInt(user_id)
    }
    var responseBody=this.jobservice.applyToJob(requestBody).subscribe((responseBody)=>{
      if(responseBody['success']){
        alert(responseBody['message']);
      }
    }); 

  // var responseBody=this.jobservice.applyToJob(this.file); 
   console.log(jobDetails['id'],user_id);

  }

  
  onChangeFileInput1(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    console.log(files)
    //const file = event.target.files[0];
    // this.jobservice.applyToJob(file).subscribe(responseBody =>{
    //   console.log("responseBody:",responseBody);
    // }); 

  }

  }


