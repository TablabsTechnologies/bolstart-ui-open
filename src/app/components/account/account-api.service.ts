import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  register(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'user', obj)

  }
  sendEmail(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'authLogin/mailSned', obj)
  }
  authLoginUsingEmail(obj): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'authLogin/emailId', obj);
  }
  authLoginUsingMobile(obj): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'authLogin/mobileNumber', obj);
  }
  getUserInfoByID(requestId, userId): Observable<any> {
    return this.http.get<any>(this.baseUrl + `user/id?id=${requestId}&userId=${userId}`);
  }
  verifyAccount(obj): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'user', obj);
  }

  generateOTP(obj): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'user/SendOTP', obj);
  }
  verifyOTP(obj): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'user/verifyOtp', obj)
  }
  resetPassword(obj): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'user/resetPassword', obj)
  }
  addToCometChat(obj): Observable<any> {
    return this.http.post<any>('https://api-us.cometchat.io/v2.0/users', obj)
  }
  getAllCities(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/cities');
  }
  geAllState(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/cities');
  }
  verifyGstNumber(gst): Observable<any> {
    return this.http.get<any>(`https://cleartax.in/f/compliance-report/27FQWPS8917K1ZI/`);
  }
  getStateListBasedOnCountry(countryId): Observable<any> {
    return this.http.get<any>(this.baseUrl + `user/states?countryId=${countryId}`);
  }
  getCityListBasedOnState(stateId): Observable<any> {
    return this.http.get<any>(this.baseUrl + `user/cities?stateId=${stateId}`);
  }
  getUniversityList(): Observable<any> {
    return this.http.get<any>(this.baseUrl + `post/univeristy`);
  }
  getAllCompanyList(companyName): Observable<any> {
    return this.http.get<any>(this.baseUrl + `company/searchByCompanyName?companyName=${companyName}`);
  }
  getCityList(keyword): Observable<any> {
    return this.http.get<any>(this.baseUrl + `user/cities/filter?cityName=${keyword}`);
  }
}


