import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  constructor(private router:Router){}
  continue(){
    this.router.navigate(['/'])
  }
}
