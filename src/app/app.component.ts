import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BottomNavComponent } from './header/bottom-nav/bottom-nav.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CommonModule, TopHeaderComponent, SidebarComponent,BottomNavComponent,MainBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  showHeader:boolean= true;
  showFooter:boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe({
        next: (event: NavigationEnd) => {
          this.showHeader = !(
            event.urlAfterRedirects.includes('/login') ||
            event.urlAfterRedirects.includes('/register') ||
            event.urlAfterRedirects.includes('/verify') ||
            event.urlAfterRedirects.includes('/reports') ||
            event.urlAfterRedirects.includes('/not-found')
          );
          this.showFooter =!(
            event.urlAfterRedirects.includes('/login') ||
            event.urlAfterRedirects.includes('/register') ||
            event.urlAfterRedirects.includes('/verify') ||
            event.urlAfterRedirects.includes('/not-found')
          );
        },
        error: (error) => {
          console.error('Router events error:', error);
        },
        complete: () => {
          console.log('Router events subscription completed.');
        }
      });
  }
}
