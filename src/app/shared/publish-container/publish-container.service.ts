import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublishContainerService {
  baseUrl = environment.baseUrl;
  deleteEvent: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  updateEvent: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }


  addLikeOrDislikeToPublish(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'publish/like', obj);
  }
  addCommentOnPublish(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'publish/comment', obj);
  }

  getCommentListByPublish(userId, postId, pageNo): Observable<any> {
    return this.http.get(this.baseUrl + `publish/comments?page=${pageNo}&size=10&userId=${userId}&postId=${postId}`);
  }
}
