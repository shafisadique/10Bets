
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { MatchData } from '../shared/sport.interface';
import { environment } from '../environments/environments';
import { Game, GameResponse } from '../header/games/match.interface';
import { BetPlace } from '../shared/bet-place.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private apiUrl = environment.oddApiUrl;
  private balanceSubject = new BehaviorSubject<number>(0);
  balance$ = this.balanceSubject.asObservable();
  // private oddBaseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  // getSportDetails(matchcode:string):Observable<any>{
  //   const url = `${this.baseUrl}/api/v2/get/${matchcode}`;
  //   return this.http.get(url)
  // }

  getGameList():Observable<GameResponse>{
    const url = `${this.apiUrl}/game/inPlay`;
    return this.http.get<GameResponse>(url).pipe(catchError(this.handleError));
  }

  getPlaceCricketDetails(matchcode:string):Observable<MatchData>{
    const url = `${this.apiUrl}/game/cricket/${matchcode}`
    return this.http.get<MatchData>(url);
  }

  myLedger(page:number):Observable<any>{
    const url = `${this.apiUrl}/game/ledger/${page}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  updateBalance(newBalance: number) {
    this.balanceSubject.next(newBalance);
  }

  getNotificationMsg():Observable<any>{
    const url = `${this.apiUrl}/dash/msg`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }
  getIndexMsg():Observable<any>{
    const url = `${this.apiUrl}/dash/index`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }
  placeBetPosition(data:any):Observable<BetPlace>{
    let url=`${this.apiUrl}/game/sessionBetPost`;
    return this.http.post<BetPlace>(url,data);
  }
  placeBetPositionForK(data:any):Observable<BetPlace>{
    let url=`${this.apiUrl}/game/Dymatchbetpost`;
    return this.http.post<BetPlace>(url,data);
  }
  // getplusMinuData(matchcode:string):Observable<MatchData>{
  //   const url =`${this.baseUrl}/game/cricket/${matchcode}`;
  //   return this.http.get<MatchData>(url);
  // }
  getProfileData(){
    const url = `${this.apiUrl}/dash/profile`;
    return this.http.get<any>(url);
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
