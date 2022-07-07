import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;
  event: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }
  emitEvent() {
    this.event.next(null);
  }
  getUserInfo(requestId, userId): Observable<any> {
    return this.http.get<any>(this.baseUrl + `user/id?id=${requestId}&userId=${userId}`);
  }
  updateProfileInfo(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'user', obj);
  }
  updateEducation(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'user/education', obj);
  }
  updateExperiance(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'user/experience', obj);
  }
  updateAccomplishments(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'user/accomplishment', obj);
  }
  updateSkill(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'user/skills', obj);
  }
  /* Delete Controllers */
  deleteEducation(id): Observable<any> {
    return this.http.delete(this.baseUrl + `user/education/delete?educationId=${id}`);
  }
  deleteExperiance(id): Observable<any> {
    return this.http.delete(this.baseUrl + `user/experienec/delete?experienceId=${id}`);
  }
  deleteSkill(id): Observable<any> {
    return this.http.delete(this.baseUrl + `user/skils/delete?skillId=${id}`);
  }
  deleteAccomplishments(id): Observable<any> {
    return this.http.delete(this.baseUrl + `user/accomplishment/delete?accomplishmentId=${id}`);
  }

  /* Search User */
  searchUser(key, userId): Observable<any> {
    return this.http.get(this.baseUrl + `connection/search?name=${key}&userId=${userId}`);
  }

  searchOnlyUser(keyword, userId): Observable<any> {
    return this.http.get(this.baseUrl + `user/seach/byName?name=${keyword}&userId=${userId}`)
  }

  /* Network Sevice */
  sendRequest(obj): Observable<any> {
    return this.http.post(this.baseUrl + `connection`, obj);
  }
  getMyNetwork(userId, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `connection/userId?page=${pageNo}&size=20&userId=${userId}`);
  }
  followRequest(obj): Observable<any> {
    return this.http.post(this.baseUrl + `connection/follow`, obj);
  }

  deleteConnection(userId, requestID): Observable<any> {
    return this.http.delete(this.baseUrl + `connection/delete?userId=${userId}&connectedUserId=${requestID}`);
  }
  /* Company Controller*/

  getCompanyInfo(userId): Observable<any> {
    return this.http.get(this.baseUrl + `company/getByUserId?userId=${userId}`);
  }
}
