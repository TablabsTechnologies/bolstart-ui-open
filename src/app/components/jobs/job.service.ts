import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobPostBaseUrl = environment.jobPostBaseUrl
  getAllJobPost$ = localStorage.getItem('userRole') == 'admin' ? this.http.get(this.jobPostBaseUrl + 'jobpost/job/getAll') : this.http.get(this.jobPostBaseUrl + 'jobpost/job/getAll');
  constructor(private http: HttpClient) { }
  getJobPostByCompanyId() {
    // ${localStorage.getItem('company_id')}
    return this.http.get(this.jobPostBaseUrl + 'jobpost/getbycompanyid?id='+localStorage.getItem('company_id'))
  }

  getAllJobTitles(){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    var requestUrl = this.jobPostBaseUrl+"jobtitle/job/getAll"
     return this.http.get<any>(requestUrl);
  }

}