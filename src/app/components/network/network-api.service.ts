import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkApiService {
  baseUrl = environment.baseUrl;
  event: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  updateCountEvent() {
    this.event.next(null);
  }
  sendRequest(obj): Observable<any> {
    return this.http.post(this.baseUrl + `connection`, obj);
  }

  acceptRequest(obj): Observable<any> {
    return this.http.put(this.baseUrl + `connection`, obj);
  }

  // getMyNetwork(userId): Observable<any> {
  //   return this.http.get(this.baseUrl + `connection/userId?userId=${userId}`);
  // }

  getConnectionRequest(userId): Observable<any> {
    return this.http.get(this.baseUrl + `connection/user?userId=${userId}`);
  }
  getSugestionList(userId, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `connection/indsustry?page=${pageNo}&size=5&userId=${userId}`);
  }
  getPeopleYouKnow(userId): Observable<any> {
    return this.http.get(this.baseUrl + `connection/indsustry?page=${0}&size=5&userId=${userId}`);
  }
  followRequest(obj): Observable<any> {
    return this.http.post(this.baseUrl + `connection/follow`, obj);
  }
  /* =========== Followe============== */
  getFollowers(userId): Observable<any> {
    return this.http.get(this.baseUrl + `connection/followers?userId=${userId}`);
  }
  getFollowing(userId): Observable<any> {
    return this.http.get(this.baseUrl + `connection/following?userId=${userId}`);
  }
}
