import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoblistService } from 'src/app/shared/service/joblist.service';
import { routingComponents } from '../jobs-routing.module';
import { Router } from '@angular/router';

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
    // jobBoostPost: new FormControl('', Validators.required),
    // jobBoostPeriod: new FormControl('', Validators.required),
    // jobBoostDuration:new FormControl('', Validators.required),
    jobBenifits:new FormControl('', Validators.required),
    jobType:new FormControl()
   // firstName: new FormControl('', Validators.required),
   // lastName: new FormControl('', Validators.required)
   });
    constructor(private jobservice:JoblistService, private router:Router) { 
      this.form.controls.jobType.setValue("Full Time")
    }
  
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
      }else{
        this.selected = value
      }
      if(parseInt(value) == 4){
        if(this.form.valid){
         var requestBody ={
          "benifit": this.form.controls.jobBenifits.value,
          "duration": this.form.controls.jobDuration.value,
          "id": 0,
          "jobCategeory": "job Categeory",
          "jobDescription": this.form.controls.jobDescription.value,
          "jobStipend": this.form.controls.jobStipend.value.toString(),
          "jobtitleId": 1,
          "location": this.form.controls.jobLocation.value,
          "qualification": this.form.controls.jobResponsibilities.value,
          "requirements": this.form.controls.jobResponsibilities.value,
          "responsiblitie": this.form.controls.jobResponsibilities.value,
          "startDate": this.form.controls.jobPeriod.value,
          "created": parseInt(localStorage.getItem('member')),
          "typeof_job":this.form.controls.jobType.value
      } 
          this.selected = 1;
          console.log("requestBody:",requestBody)
          this.jobservice.createNewJob(requestBody).subscribe(responseBody =>{
            if(responseBody['success']){
              alert(responseBody['message'])
              this.router.navigate(['jobs/job-list-ui'])
            }
            this.selected = 1;
          }); 
        }
        console.log(this.form);
      }
    }
    getJobType(x:any){
      if(x.currentTarget.checked){
        this.form.controls.jobType.setValue("Part Time")
      }else{
        this.form.controls.jobType.setValue("Full Time")
      }
    }
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}
