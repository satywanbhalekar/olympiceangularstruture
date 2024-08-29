import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getUser(): any {
    throw new Error('Method not implemented.');
  }

  private authUrl = 'http://localhost:30001/api/user/login';
  private registerUrl = 'http://localhost:30001/api/user/register'; // Registration endpoint

  constructor(private httpClient: HttpClient) { }

  authenticateUser(credentials: { email: string, password: string }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>(this.authUrl, credentials, httpOptions)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  register(username: string, email: string, password: string) {
    const user = { username, email, password };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<any>(this.registerUrl, user, httpOptions)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
