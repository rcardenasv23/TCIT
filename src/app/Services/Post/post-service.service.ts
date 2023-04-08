import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from 'src/app/Models/Post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  url = 'api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<ReadonlyArray<Post>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        throw error;
      })
    );
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<Post>(this.url, post).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        throw error;
      })
    );
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.url}/${postId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        throw error;
      })
    );
  }
}
