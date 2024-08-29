
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   private url = 'http://localhost:30001/mens';


//   constructor(private httpClient: HttpClient) { }


//   // deletePost(postId: string): Observable<any> {
//   //   const deleteUrl = `${this.url}/${postId}`;
//   //   return this.httpClient.delete<any>(deleteUrl).pipe(
//   //     catchError(this.handleError<any>('deletePost'))
//   //   );
//   // }

//   // createPost(newPost: any): Observable<any> {
//   //   return this.httpClient.post<any>(this.url, newPost).pipe(
//   //     catchError(this.handleError<any>('createPost'))
//   //   );
//   // }

//   // updatePost(postId: string, updatedPost: any): Observable<any> {
//   //   const updateUrl = `${this.url}/${postId}`;
//   //   return this.httpClient.patch<any>(updateUrl, updatedPost).pipe(
//   //     catchError(this.handleError<any>('updatePost'))
//   //   );
//   // }

//   // getPostById(postId: string): Observable<any> {
//   //   const getUrl = `${this.url}/${postId}`;
//   //   return this.httpClient.get<any>(getUrl).pipe(
//   //     catchError(this.handleError<any>('getPostById'))
//   //   );
//   // }
  

//   // private handleError<T>(operation = 'operation', result?: T) {
//   //   return (error: any): Observable<T> => {
//   //     console.error(`${operation} failed: ${error.message}`);
//   //     return of(result as T);
//   //   };
//   // }




//   // getPosts() {
//   //   return this.httpClient.get(this.url);
//   // }
//   getPosts(): Observable<any> {
//     return this.httpClient.get(this.url);
//   }
  
//   createPost(newPost: any) {
//     return this.httpClient.post(this.url, newPost);
//   }

//   deletePost(postId: string) {
//     const deleteUrl = `${this.url}/${postId}`; // Construct the URL for deleting a specific post
//     return this.httpClient.delete(deleteUrl);
//   }

  

//   updatePost(postId: string, updatedPost: any) {
//     const updateUrl = `${this.url}/${postId}`; // Construct the URL for updating a specific post
//     return this.httpClient.patch(updateUrl, updatedPost);
//   }

//   getPostById(postId: string) {
//     const getUrl = `${this.url}/${postId}`;
//     return this.httpClient.get(getUrl);
//   }


 
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service'; // Import your authentication service

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:30001/mens';

  constructor(private httpClient: HttpClient, private authService: ServiceService) { }

  private getHttpOptions() {
    const token = this.authService.getToken(); // Get the token from your auth service
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Set the Authorization header with the bearer token
      })
    };
  }

  getPosts(): Observable<any> {
    return this.httpClient.get(this.url, this.getHttpOptions());
  }

  createPost(newPost: any): Observable<any> {
    return this.httpClient.post(this.url, newPost, this.getHttpOptions());
  }

  deletePost(postId: string): Observable<any> {
    const deleteUrl = `${this.url}/${postId}`;
    return this.httpClient.delete(deleteUrl, this.getHttpOptions());
  }

  updatePost(postId: string, updatedPost: any): Observable<any> {
    const updateUrl = `${this.url}/${postId}`;
    return this.httpClient.patch(updateUrl, updatedPost, this.getHttpOptions());
  }

  getPostById(postId: string): Observable<any> {
    const getUrl = `${this.url}/${postId}`;
    return this.httpClient.get(getUrl, this.getHttpOptions());
  }
}

  




