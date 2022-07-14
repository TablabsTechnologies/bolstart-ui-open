import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoblistService } from 'src/app/shared/service/joblist.service';
import { routingComponents } from '../jobs-routing.module';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-post-form',
  templateUrl: './job-post-form.component.html',
  styleUrls: ['./job-post-form.component.scss']
})
export class JobPostFormComponent implements OnInit {

  selected = 1
  form = new FormGroup({
    jobId: new FormControl('', Validators.required),
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
    constructor(private jobservice:JoblistService, private router:Router,private snapRoute:ActivatedRoute) { 
      this.form.controls.jobType.setValue("Full Time");
      this.form.controls.jobId.setValue("0");
      this.snapRoute.params.subscribe((paramsResponse)=>{
        console.log("paramsResponse:",paramsResponse['name']);
        if(parseInt(paramsResponse['name'])!=0){
          this.getJobDetails(parseInt(paramsResponse['name']));
        }
      });
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
          "id": parseInt(this.form.controls.jobId.value),
          "jobCategeory": "job Categeory",
          "jobDescription": this.form.controls.jobDescription.value,
          "stipend": this.form.controls.jobStipend.value.toString(),
          "jobtitleId": 1,
          "location": this.form.controls.jobLocation.value,
          "qualification": this.form.controls.jobResponsibilities.value,
          "requirements": this.form.controls.jobResponsibilities.value,
          "responsiblitie": this.form.controls.jobResponsibilities.value,
          "startDate": this.form.controls.jobPeriod.value,
          "created": parseInt(localStorage.getItem('member')),
          "typeofJob":this.form.controls.jobType.value,
          "companyId":parseInt(localStorage.getItem('company_id')),

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

    getJobDetails(jobid){
      var requestBody ={
        id:jobid
      }
     
      this.jobservice.getJob(requestBody).subscribe(responseBody =>{
        if(responseBody['success']){
          console.log("responseBody:",responseBody['data'].benifit)
          this.form.controls.jobBenifits.setValue(responseBody['data'].benifit)
          this.form.controls.jobResponsibilities.setValue(responseBody['data'].requirements)
          this.form.controls.jobLocation.setValue(responseBody['data'].location)
          this.form.controls.jobRequirements.setValue(responseBody['data'].requirements)
          this.form.controls.jobDescription.setValue(responseBody['data'].jobDescription)
          this.form.controls.jobDuration.setValue(responseBody['data'].duration)
          this.form.controls.jobId.setValue(responseBody['data'].id)
          this.form.controls.jobResponsibilities.setValue(responseBody['data'].responsiblitie)
          this.form.controls.jobPeriod.setValue(responseBody['data'].startDate)
          this.form.controls.jobStipend.setValue(responseBody['data'].stipend)
          // alert(responseBody['message'])
          // this.router.navigate(['jobs/job-list-ui'])
        }
        this.selected = 1;
      });
    }
}
