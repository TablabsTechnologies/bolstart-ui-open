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
 JobDetails:any
 uploadResponse:BehaviorSubject<object>=new BehaviorSubject<object>({})
 
 constructor(private http:HttpClient){}

 getAllJobsList(){
    return this.http.get('assets/getAllJobs.json')
    // return this.http.get(this.joburl+'/jobpost/job/getAll');
 }

 
 createNewJob(requestBody){
   const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post<any>(this.joburl+'/jobpost/job/getAll', requestBody, { headers });
}

 setJobDetails(jobDetails){
    this.JobDetails=[]
    this.JobDetails = jobDetails
 }

 getJobDetails(){
   return this.JobDetails;
 }

 
 applyToJob(requestBody){
   const headers = { 'Authorization': 'Bearer my-token', 'Content-Type': 'multipart/form-data' };
  //  return this.http.post<any>(this.joburl+'/jobpost/uploadImage?id=4', requestBody, { headers });
    var response:any=[]
    var apiUrl = this.joburl+'/jobpost/uploadImage?id=4';
    var formData:any = new FormData();

    formData.append("files", requestBody, requestBody.name);
    let me = this;
    var request = new XMLHttpRequest();
    request.open("POST", apiUrl);
   // request.setRequestHeader("Authorization", "Bearer "+localStorage.getItem('access_token'));
    request.onload = function () {
     // var uploadResponse: BehaviorSubject<object> = new BehaviorSubject<object>([]);
      var uploadResponse=JSON.parse(this.responseText)
      var res = {'status':uploadResponse['success'],'message':uploadResponse['message']}
      me.setUploadResponse(res);
      return res;
    };
    request.onerror = function () {
    //var uploadResponse: BehaviorSubject<object> = new BehaviorSubject<object>([]);
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
   return this.http.post<any>(this.joburl+'/jobpost/job/saveJos', requestBody, { headers });
}

}