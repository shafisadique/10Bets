import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject, fromEvent, merge, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private userActivity: Subject<any> = new Subject();
  private isBrowser: boolean;

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.initListener();
      this.initTimer();
    }
  }

  initListener() {
    merge(
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'mousedown'),
      fromEvent(window, 'keypress'),
      fromEvent(window, 'touchstart'),
      fromEvent(window, 'scroll')
    ).subscribe(() => this.userActivity.next(null));
  }

  initTimer() {
    this.userActivity.pipe(
      switchMap(() => timer(30 * 60 * 1000)), // 30 minutes inactivity
      tap(() => {
        if (this.authService.getToken()) {
          this.authService.logOut();
          alert('You have been logged out due to inactivity.');
        }
      })
    ).subscribe();
  }
}
