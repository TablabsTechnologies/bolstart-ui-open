import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class postService {
    baseUrl = environment.baseUrl;
    deleteEvent: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    updateEvent: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor(private http: HttpClient) { }
    emitDeleteEvent(id) {
        this.deleteEvent.next(id);
    }
    emitUpdateEvent(obj) {
        this.updateEvent.next(obj);
    }
    addLikeOrDislikeToPost(obj): Observable<any> {
        return this.http.post(this.baseUrl + 'post/like', obj);
    }
    addLikeToComment(obj): Observable<any> {
        return this.http.post(this.baseUrl + 'comment/like', obj);
    }

    addCommentOnPost(obj): Observable<any> {
        return this.http.post(this.baseUrl + 'post/comment', obj);
    }

    getCommentListByPost(userId, postId, pageNo): Observable<any> {
        return this.http.get(this.baseUrl + `post/comments?page=${pageNo}&size=10&userId=${userId}&postId=${postId}`);
    }

    deletePost(postId): Observable<any> {
        return this.http.delete(this.baseUrl + `post/delete?postId=${postId}`);
    }

    updatePost(obj): Observable<any> {
        return this.http.put(this.baseUrl + `post`, obj);
    }


}