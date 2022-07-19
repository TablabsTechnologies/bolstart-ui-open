import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoblistService } from 'src/app/shared/service/joblist.service';
import { routingComponents } from '../jobs-routing.module';
import { Router,ActivatedRoute } from '@angular/router';
import { Popup6Component } from '../popups/popup6/popup6.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-job-post-form',
  templateUrl: './job-post-form.component.html',
  styleUrls: ['./job-post-form.component.scss']
})
export class JobPostFormComponent implements OnInit {

  dbJobTitle = [];
  
  selected = 1
  form = new FormGroup({
    jobId: new FormControl('', Validators.required),
    jobTitle: new FormControl(),
    jobPeriod: new FormControl('', Validators.required),
    jobDuration: new FormControl('', Validators.required),
    jobDescription: new FormControl('', Validators.required),
    jobStipend: new FormControl('', Validators.required),
    jobLocation : new FormControl('', Validators.required),
    jobResponsibilities  : new FormControl('', Validators.required),
    jobRequirements : new FormControl('', Validators.required),
    titlevalue: new FormControl(''),
    placeholderValue:  new FormControl(''),
    // jobBoostPost: new FormControl('', Validators.required),
    // jobBoostPeriod: new FormControl('', Validators.required),
    // jobBoostDuration:new FormControl('', Validators.required),
    jobBenifits:new FormControl('', Validators.required),
    jobType:new FormControl()
   // firstName: new FormControl('', Validators.required),
   // lastName: new FormControl('', Validators.required)
   });
    constructor(private jobservice:JoblistService, private router:Router,private snapRoute:ActivatedRoute,public dialog: MatDialog) { 
      this.form.controls.jobType.setValue("Full Time");
      this.form.controls.jobId.setValue("0");
      this.snapRoute.params.subscribe((paramsResponse)=>{
        console.log("paramsResponse:",paramsResponse['name']);
        if(parseInt(paramsResponse['name'])!=0){
          this.getJobDetails(parseInt(paramsResponse['name']));
        }
      });
      this.getJobTitles();
    }
  
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
    }
  
    stepper(value:any){
      this.form.markAllAsTouched();
      if(parseInt(value)==1){
        if(!(this.form.controls.titlevalue.errors.status=="INVALID" || this.form.controls.jobPeriod.errors.status=="INVALID" || this.form.controls.jobDuration.errors.status=="INVALID" ||  this.form.controls.jobDescription.errors.status=="INVALID" ||this.form.controls.jobStipend.errors.status=="INVALID" || this.form.controls.jobLocation.errors.status=="INVALID" || this.form.controls.jobResponsibilities.errors.status=="INVALID" || this.form.controls.jobResponsibilities.errors.status=="INVALID"))
        {
          this.selected = value
        }
      }else{
        this.selected = value
      }
      if(parseInt(value) == 4){
        if(this.form.valid){
          console.log(this.form);
          var res = {
            "active": true,
            "applicant_type": "Full time",
            "assissmentId": "string",
            "benifit":  this.form.controls.jobBenifits.value,
            "bond": "NA",
            "city": "Pune",
            "companyId": parseInt(localStorage.getItem('company_id')),
            "country": "India",
            "created": parseInt(localStorage.getItem('member')).toString(),
            "createdBy": parseInt(localStorage.getItem('member')).toString(),
            "domain": "www.tablabs.in",
            "duration": this.form.controls.jobDuration.value,
            "image": "string",
            "industry": "IT Softwares",
            "isAssissmentRequired": true,
            "isResumeRequired": true,
            "jobCategeory": "string",
            "jobDescription": this.form.controls.jobDescription.value,
            "jobtitle": this.form.controls.titlevalue.value,
            "jobtitleId": 1,
            "location": this.form.controls.jobLocation.value,
            "maxExperiance": "1",
            "minExperiance": "3",
            "noOfApplication": "5",
            "noticePeriod": "1",
            "qualification": this.form.controls.jobResponsibilities.value,
            "recruiter": parseInt(localStorage.getItem('member')),
            "requirements": this.form.controls.jobResponsibilities.value,
            "responsiblitie": this.form.controls.jobResponsibilities.value,
            "salaryMax": "12000",
            "salaryMin": "5000",
            "skills": "Java,Spring Boot",
            "startDate":this.form.controls.jobPeriod.value,
            "state": "string",
            "status": true,
            "stipend":  this.form.controls.jobStipend.value.toString(),
            "typeofJob":this.form.controls.jobType.value,
            "updated": "string",
            "updatedBy": "string"
          }
          var rs = {
            "active": true,
            "applicant_type": "Full time",
            "assissmentId": "string",
            "benifit": "Insaurance",
            "bond": "NA",
            "city": "Pune",
            "companyId": parseInt(localStorage.getItem('company_id')),
            "country": "India",
            "created": parseInt(localStorage.getItem('member')).toString(),
            "createdBy":parseInt(localStorage.getItem('member')).toString(),
            "domain": "www.tablabs.in",
            "duration": this.form.controls.jobDuration.value,
            "image": "string",
            "industry": "IT Softwares",
            "isAssissmentRequired": true,
            "isResumeRequired": true,
            "jobCategeory": "string",
            "jobDescription": this.form.controls.jobDescription.value,
            "jobtitle": this.form.controls.titlevalue.value,
            "jobtitleId": 1,
            "location": this.form.controls.jobLocation.value,
            "maxExperiance": "1",
            "minExperiance": "3",
            "noOfApplication": "5",
            "noticePeriod": "1",
            "qualification": "BE",
            "recruiter": parseInt(localStorage.getItem('member')).toString(),
            "requirements": this.form.controls.jobResponsibilities.value,
            "responsiblitie":this.form.controls.jobResponsibilities.value,
            "salaryMax": "12000",
            "salaryMin": "5000",
            "skills": "Java,Spring Boot",
            "startDate": this.form.controls.jobPeriod.value,
            "state": "string",
            "status": true,
            "stipend": this.form.controls.jobStipend.value.toString(),
            "typeofJob": this.form.controls.jobType.value,
            "updated": "string",
            "updatedBy": "string"
          }
          console.log(res);
          if(parseInt(this.form.controls.jobId.value)!=0){
            res['id']=parseInt(this.form.controls.jobId.value)
           
            this.jobservice.updateJob(res).subscribe(responseBody =>{
              if(responseBody['success']){
                var activeMsg = responseBody['message']
                const dialogRef = this.dialog.open(Popup6Component, {
                  width: '600px',
                  height: '360px',
                  data: {
                    msg: activeMsg,
                    id:0
                  },
                  backdropClass: 'backdropBackground'
                });
            
                dialogRef.afterClosed().subscribe(result => {
                  console.log('The dialog was closed');
                });
                this.router.navigate(['jobs/job-post-ui'])
              }
              this.selected = 1;
            }); 
          }else{
            this.selected = 1;
            this.jobservice.createNewJob(rs).subscribe(responseBody =>{
              if(responseBody['success']){
                var activeMsg = responseBody['message']
                const dialogRef = this.dialog.open(Popup6Component, {
                  width: '600px',
                  height: '360px',
                  data: {
                    msg: activeMsg,
                    id:0
                  },
                  backdropClass: 'backdropBackground'
                });
            
                dialogRef.afterClosed().subscribe(result => {
                  console.log('The dialog was closed');
                });

                this.router.navigate(['jobs/job-post-ui'])
              }
              this.selected = 1;
            }); 
          }
        }
       
       
      }
    }
    getJobType(x:any){
      if(x.currentTarget.checked){
        this.form.controls.jobType.setValue("Part Time")
      }else{
        this.form.controls.jobType.setValue("Full Time")
      }
    }

    
  inputChange() {
     this.form.controls.placeholderValue.setValue('');
    //const valueSplit = this.value.split(' ');
    // const domain = valueSplit && valueSplit.length > 1 ? valueSplit[1] : null;
    const domain = this.form.controls.titlevalue.value;
    if (domain) {
      const filteredEmails = this.dbJobTitle.filter((e) => e.toUpperCase().indexOf(domain.toUpperCase()) === 0);
      if (filteredEmails && filteredEmails.length > 0) {
         var placeholderValue = this.form.controls.titlevalue.value + filteredEmails[0].substring(domain.length);
         this.form.controls.placeholderValue.setValue(placeholderValue);
        }
    }
    console.log(this.form.controls.placeholderValue.value);
  }


  tabKeyPressed() {
    if (this.form.controls.placeholderValue.value) {
      var value = this.form.controls.placeholderValue.value.toUpperCase();
      this.form.controls.titlevalue.setValue(value);
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
          this.form.controls.titlevalue.setValue(responseBody['data'].jobtitle)
          // alert(responseBody['message'])
          // this.router.navigate(['jobs/job-list-ui'])
        }
        this.selected = 1;
      });
    }

  getJobTitles(){
    this.jobservice.getAllJobTitles().subscribe(responseBody =>{
      if(responseBody['success']){
        console.log("Data :",responseBody['data'])
        for(let i=0; i<responseBody['data'].length;i++){
          this.dbJobTitle.push(responseBody['data'][i]['title']);
        }
      }
  });
}
}
