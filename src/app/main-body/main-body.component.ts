import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from '../header/games/events/events.component';
import { GamesComponent } from '../header/games/games.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BottomNavComponent } from '../header/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [CommonModule,EventsComponent,GamesComponent,TopHeaderComponent,SidebarComponent,BottomNavComponent],
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})




export class MainBodyComponent implements OnInit {




  
  images = ['assets/fram1.jpg','assets/fram2.jpg','assets/fram3.jpg','assets/fram4.jpg','assets/fram5.jpg','assets/fram3.jpg','assets/fram4.jpg','assets/fram5.jpg','assets/fram5.jpg','assets/fram3.jpg','assets/fram4.jpg','assets/fram5.jpg','assets/fram5.jpg'];
  imagesDesktop= ['assets/fram1.jpg','assets/fram2.jpg','assets/fram3.jpg','assets/fram4.jpg','assets/fram5.jpg','assets/fram5.jpg','assets/fram3.jpg','assets/fram4.jpg','assets/fram5.jpg','assets/fram5.jpg','assets/fram3.jpg','assets/fram4.jpg','assets/fram5.jpg','assets/fram5.jpg'];
  isPaused: boolean = false;




  
  constructor() {}

  ngOnInit(): void {}
 
 
 
 
  onMouseEnter() {
    this.isPaused = true;
  }
 
  onMouseLeave() {
    this.isPaused = false;
  }

}