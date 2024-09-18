import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenBettsService {

  apiUrl = 'https://api.betguru.net/game/inPlay';
  constructor(private http: HttpClient) { }
  getCricketBet():Observable<any>{
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof HttpErrorResponse) {
      console.error('Network error:', error.error.message);
      return throwError('Network error: Please check your internet connection.');
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      return throwError('Server error: Please try again later.');
    }
  }
}
