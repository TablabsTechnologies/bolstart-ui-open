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
    return this.http.get(this.jobPostBaseUrl + `jobpost/getbycompanyid?id=2`)
  }
}