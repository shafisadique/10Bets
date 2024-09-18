import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, delay, map, Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());
  TOKEN_KEY:any;
  private url ='https://api.1exch.net/login';
  constructor(private http:HttpClient,private router:Router) { }
  
  private hasToken(): boolean {
    return !!sessionStorage.getItem('authToken'); // Check if token exists
  }

  login(data: any): Observable<any> {
    // return this.http.post<any>(this.url, data).pipe(
    //   map((response) => {
    //     let token = response.data.jwt.accessToken;
    //     sessionStorage.setItem('token', token);
    //     return response;
    //   }),
    //   catchError((error) => {
    //     console.error('Error during login:', error);
    //     return throwError(error);
    //   })
    // );

    if (data.code === 'Admin' && data.password === 'Admin') {
      // Simulate token storage and authentication state
      sessionStorage.setItem('authToken', 'mockAuthToken');
      this.isAuthenticated.next(true); // Set user as authenticated
      return of({ success: true, token: 'mockAuthToken' }).pipe(delay(1000));
    } else {
      return throwError('Invalid username or password').pipe(delay(1000));
    }
}

  getToken(): string | null {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('token');
    }
    return null;
  }

    // Synchronous check to see if the user is logged in
    isLoggedInSync(): boolean {
      return this.isAuthenticated.value;
    }
    
   logOut() {
    this.isAuthenticated.next(false);
    sessionStorage.clear();
    this.router.navigate(['/login']); 
    // sessionStorage.removeItem('token')
    // this.router.navigate(['/login']);
    // throw new Error('Method not implemented.');
  }

}
