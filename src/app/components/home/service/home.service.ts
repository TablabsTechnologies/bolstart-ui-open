import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.baseUrl;
  event: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }
  emitEvent() {
    this.event.next(null);
  }

  getFriendList(userId): Observable<any> {
    return this.http.get(this.baseUrl + `connection/userId?userId=${userId}`);
  }
  addNewPost(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'post', obj);
  }
  getPostListByUserId(userID, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `post/users?page=${pageNo}&size=10&userId=${userID}`);
  }

  getPostListByConnection(userID, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `post/connect/users?page=${pageNo}&size=10&userId=${userID}`);
  }
  /* ==================  Publish list ====================== */
  addNewPublish(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'publish/savePublishPost', obj);
  }
  getPublishListByUserId(userID, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `publish/publishPost/byUserId?page=${pageNo}&size=10&userId=${userID}`);
  }
  getPublishPostByConnection(userID, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `publish/connect/users?page=${pageNo}&size=10&userId=${userID}`);
  }
  createChart(obj): Observable<any> {
    return this.http.post(this.baseUrl + `chart/create`, obj);
  }
}
