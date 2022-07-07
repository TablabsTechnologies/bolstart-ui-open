import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoblistService } from 'src/app/shared/service/joblist.service';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './job-post-form.component.html',
  styleUrls: ['./job-post-form.component.scss']
})
export class JobPostFormComponent implements OnInit {

  selected = 1
  form = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    jobPeriod: new FormControl('', Validators.required),
    jobDuration: new FormControl('', Validators.required),
    jobDescription: new FormControl('', Validators.required),
    jobStipend: new FormControl('', Validators.required),
    jobLocation : new FormControl('', Validators.required),
    jobResponsibilities  : new FormControl('', Validators.required),
    jobRequirements : new FormControl('', Validators.required),
    jobBoostPost: new FormControl('', Validators.required),
    jobBoostPeriod: new FormControl('', Validators.required),
    jobBoostDuration:new FormControl('', Validators.required),
   // firstName: new FormControl('', Validators.required),
   // lastName: new FormControl('', Validators.required)
   });
    constructor(private jobservice:JoblistService) { }
  
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
    }
  
    stepper(value:any){
      this.form.markAllAsTouched();
      if(parseInt(value)==1){
        if(!(this.form.controls.jobTitle.errors.status=="INVALID" || this.form.controls.jobPeriod.errors.status=="INVALID" || this.form.controls.jobDuration.errors.status=="INVALID" ||  this.form.controls.jobDescription.errors.status=="INVALID" ||this.form.controls.jobStipend.errors.status=="INVALID" || this.form.controls.jobLocation.errors.status=="INVALID" || this.form.controls.jobResponsibilities.errors.status=="INVALID" || this.form.controls.jobResponsibilities.errors.status=="INVALID"))
        {
          this.selected = value
        }
      }else if(parseInt(value)==2){
        if(!(this.form.controls.jobBoostPost.errors.status=="INVALID" || this.form.controls.jobBoostPeriod.errors.status=="INVALID" || this.form.controls.jobBoostDuration.errors.status=="INVALID"))
        {
          this.selected = value
        }
      }else{
        this.selected = value
      }
      if(parseInt(value) == 4){
        if(this.form.valid){
          var requestBody = {
          "jobTitle":this.form.controls.jobTitle.value,
          "jobPeriod":this.form.controls.jobPeriod.value,
          "jobDuration":this.form.controls.jobDuration.value,
          "jobDescription":this.form.controls.jobDescription.value,
          "jobStipend":this.form.controls.jobStipend.value,
          "jobLocation":this.form.controls.jobLocation.value,
          "jobResponsibilities":this.form.controls.jobResponsibilities.value,
          "jobRequirements":this.form.controls.jobResponsibilities.value,
          "jobBoostPost":this.form.controls.jobBoostPost.value,
          "jobBoostPeriod":this.form.controls.jobBoostPeriod.value,
          "jobBoostDuratio":this.form.controls.jobBoostDuration.value
          }  
          this.selected = 1;
          this.jobservice.createNewJob(requestBody).subscribe(responseBody =>{
            console.log("responseBody:",responseBody);
            this.selected = 1;
          }); 
        }
        console.log(this.form);
      }
    }
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}
