import { Component, OnInit,Input,Output,EventEmitter,ChangeDetectorRef } from '@angular/core';
import { JoblistService } from 'src/app/shared/service/joblist.service';
import { MatDialog } from '@angular/material/dialog';
import { Popup6Component } from '../popups/popup6/popup6.component';
import { PopupJobApplyer } from '../popups/popup_job_applyer/popup_job_applyer.component';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applicant-details-list',
  templateUrl: './applicant-details-list.component.html',
  styleUrls: ['./applicant-details-list.component.scss']
})
export class ApplicantDetailsListComponent implements OnInit {
  public jobApplyers:any=[];
  public jobApplyersDetails:any=[];
  jobDetailDetails:any=[];
  originalsApplyer:any=[];
  public jobId:any;
  public jobDetail:any;
  public activeIndex:number=0;
  public performAction:any=[];
  constructor(private snapRoute : ActivatedRoute, private joblistService:JoblistService,public dialog: MatDialog,public chDRef:ChangeDetectorRef) {
   
  
    this.snapRoute.params.subscribe((paramsResponse)=>{
      console.log("paramsResponse:",paramsResponse['id']);
      this.jobId = paramsResponse['id'];
      this.getApplyersList(this.jobId);
    });
    
   }
   @Output() getMessage=new EventEmitter<any>();

  ngOnInit(): void {
  }
  opentab(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }

  getApplyersList(jobId){
      var requestBody = {
        jobId:jobId
      }
    this.joblistService.getAllJobApplyer(requestBody).subscribe((responseBody)=>{
        if(responseBody['success']){
          this.jobApplyers = responseBody['data']['AllJobApplyer'];
          this.originalsApplyer = responseBody['data']['AllJobApplyer'];
          if(responseBody['data']['AllJobApplyer'].length==0){
              // this.getMessage.emit("No more applyer found.")
              // this.performAction={show_btn:false,action:"applyer",data:"No more applyer found."};
              // this.chDRef.detectChanges();
              const dialogRef = this.dialog.open(PopupJobApplyer, {
                width: '600px',
                height: '360px',
                data: {
                  msg: "No more job applyer are found.",
                  active:"activeStatus"
                },
                backdropClass: 'backdropBackground'
              });
          
              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
              });
      
          }
          console.log(this.jobApplyers);
          this.jobDetail = responseBody['data']['job_details'];
          this.getUserDetails(0);
        }
    })
  }

  getUserDetails(index){
    this.jobApplyersDetails=[];
    this.jobApplyersDetails =  this.jobApplyers[index];
    console.log(" Applyers Details : ",this.jobApplyersDetails)
    this.jobApplyersDetails['job_title']=this.jobDetail[0]['jobTitle']['title'];
    //alert(this.jobApplyersDetails.length)
    this.activeIndex=index
    var getdate = this.jobApplyersDetails.updated_on;
    console.log(getdate);
    var date1 = new Date("06/30/2019");
    // var date2 = new Date();
    // console.log(date2);
    // var Difference_In_Time = date2.getTime() - date1.getTime();
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  }

  updateStartRating(startRating,id){
    var index=  this.activeIndex;
    var requestBody =  {
        "id":id,
        "startRating":startRating
        }
        console.log(requestBody)
    this.joblistService.updateRating(requestBody).subscribe((responseBody)=>{
      console.log("Applyer List:",responseBody)
      if(responseBody['success']){
        this.getApplyersList(this.jobId)
        this.getUserDetails(index);
      }
  })
  }

  recruiterAction(id,action){
    var index=  this.activeIndex;
    var requestBody =  {
        "id":id,
        "rerecruiterAction":action
        }
        console.log(requestBody)
    this.joblistService.updateRecruiterAction(requestBody).subscribe((responseBody)=>{
      console.log("Applyer List:",responseBody)
      if(responseBody['success']){
        this.getApplyersList(this.jobId);
        this.getUserDetails(index);
      }
  })
  }

  filterByName(event){
    //console.log("Values of input :",event.target.value.length);
    const filteredEmails = this.jobApplyers.filter((e) =>{
        if(e.userDetails.firstName.toUpperCase() ==event.target.value.toUpperCase()){
          return e;
        }
    });

    if(event.target.value.length!=0){
      if(filteredEmails.length!=0){
        this.jobApplyers = filteredEmails;
        this.getUserDetails(0);
      }else{
        this.jobApplyers = this.originalsApplyer;
        this.getUserDetails(0);
      }
    }else{
      this.jobApplyers = this.originalsApplyer;
      this.getUserDetails(0);
    }
  }
}
