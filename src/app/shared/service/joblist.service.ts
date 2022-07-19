import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class JoblistService{
 joburl = environment.jobPostBaseUrl;
 JobDetails:any;
 setJobStatus:any;
 base_url = environment.jobPostBaseUrl;
 uploadResponse:BehaviorSubject<object>=new BehaviorSubject<object>({})
 
 constructor(private http:HttpClient){}

 getAllJobsList(){
   // return this.http.get('assets/getAllJobs.json');
    var requestUrl = this.base_url+"jobpost/job/getAll"
    return this.http.get(requestUrl);
 }

 
 createNewJob(requestBody){
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  var requestUrl = this.base_url;

    requestUrl = this.base_url+"jobpost/save";
    return this.http.post<any>(requestUrl, requestBody, { headers });
  
   
}

updateJob(requestBody){
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  var requestUrl = this.base_url;

    requestUrl = this.base_url+"jobpost/jobpost/update";
    return this.http.put<any>(requestUrl, requestBody, { headers });
  
   
}

getJob(requestBody){
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  var requestUrl = this.base_url+"jobpost/getbyjobPostId?id="+requestBody['id']
   return this.http.get<any>(requestUrl, requestBody);
}

 setJobDetails(jobDetails){
    this.JobDetails=[]
    this.JobDetails = jobDetails
 }

 getJobDetails(){
   return this.JobDetails;
 }

 
 applyToJob(requestBody){
   const headers = { 'Authorization': 'Bearer my-token'};
   this.joburl = this.base_url;
   var requestUrl = this.base_url+"jobpost/job/applyJob";
   return this.http.post<any>(requestUrl, requestBody, { headers });
  // const headers = { 'Authorization': 'Bearer my-token', 'Content-Type': 'multipart/form-data' };
  //  return this.http.post<any>(this.joburl+'/jobpost/uploadImage?id=4', requestBody, { headers });
    var response:any=[]
    var apiUrl = this.joburl+'/jobpost/uploadImage?id=4';
    var formData:any = new FormData();

    formData.append("files", requestBody, requestBody.name);
    let me = this;
    var request = new XMLHttpRequest();
    request.open("POST", apiUrl);
    request.onload = function () {
      var uploadResponse=JSON.parse(this.responseText)
      var res = {'status':uploadResponse['success'],'message':uploadResponse['message']}
      me.setUploadResponse(res);
      return res;
    };
    request.onerror = function () {
      var uploadResponse=JSON.parse(this.responseText)
      var res = {'status':uploadResponse['success'],'message':uploadResponse['message']}
      me.setUploadResponse(res);
      return res;
    };
    request.send(formData);
    // return this.http.post<any>(this.APIConstants.API_URL+this.APIConstants.s3BucketUploadURL, formData,{
    //   headers:{'Content-Type':"multipart/form-data; boundary=multipart-form-boundary"}
    // });
}

setUploadResponse(res){
   this.uploadResponse.next(res);
}

getUploadResponse(){
  return this.uploadResponse.asObservable();
}

addToSaveList(requestBody){
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
   return this.http.post<any>(this.base_url+'jobpost/job/saveJos', requestBody, { headers });
}

getAllJobApplyer(requestBody){
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  var requestUrl = this.base_url+"jobpost/job/getJobApplyer?jobId="+requestBody['jobId']
   return this.http.post<any>(requestUrl, requestBody, { headers });
}


updateRating(requestBody){
  const headers = {};
  var requestUrl = this.base_url+"jobpost/jobpost/applyedJobStarRating"
   return this.http.put<any>(requestUrl, requestBody, { headers });
}


updateRecruiterAction(requestBody){
  const headers = {};
  var requestUrl = this.base_url+"jobpost/jobpost/updateRecruiterAction"
   return this.http.put<any>(requestUrl, requestBody, { headers });
}


updateJobStatus(requestBody){
  const headers = {};
  var requestUrl =  this.base_url+"jobpost/jobpost/deActiveJobPost"
   return this.http.put<any>(requestUrl, requestBody, { headers });
}

setJobStatusResponse(setJobStatus){
  this.setJobStatus = setJobStatus
}

getJobStatusResponse(){
 return this.setJobStatus;
}


getAllJobTitles(){
  const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  var requestUrl = this.base_url+"jobtitle/job/getAll"
   return this.http.get<any>(requestUrl);
}

}