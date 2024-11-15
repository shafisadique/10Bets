import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { User } from '../shared/login.interface';
import { environment } from '../environments/environments';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());
  private readonly TOKEN_KEY = 'token';
  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient,private router:Router) { }
  
   // Utility method to check if a token exists
   private hasToken(): boolean {
    return !!this.getToken();
  }

//   login(data: any): Observable<User[]> {
//     return this.http.post<User[]>(`${this.apiUrl}/login`, data).pipe(
//       map((response: any) => {
//         if (response && response.data.jwt.accessToken) {
//           sessionStorage.setItem('token', response.data.jwt.accessToken);
//           this.router.navigate(['/']);
//         }
//         return response;
//       }),
//       catchError(error => {
//         console.error('Error during login:', error);
//         return throwError(() => new Error('Login failed. Please try again.'));
//       })
//     );
// }

login(credentials: { code: string; password: string }): Observable<User[]> {
  return this.http.post<{ data: { jwt: { accessToken: string } } }>(`${this.apiUrl}/login`, credentials).pipe(
    map((response: any) => {
      const token = response?.data?.jwt?.accessToken;
      if (token) {
        sessionStorage.setItem(this.TOKEN_KEY, token);
        this.isAuthenticated.next(true);
      }
      return response;
    }),
    catchError(error => {
      console.error('Error during login:', error);
      return throwError(() => new Error('Login failed. Please check your credentials.'));
    })
  );
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
    sessionStorage.removeItem(this.TOKEN_KEY); // Clear only token
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  private isTokenExpired(token: string): boolean {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return (Math.floor(new Date().getTime() / 1000)) >= expiry;
  }

}
