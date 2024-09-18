import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TopHeaderComponent } from '../../header/top-header/top-header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { BottomNavComponent } from '../../header/bottom-nav/bottom-nav.component';
import { Sport, sports } from './inplay.interface';

@Component({
  selector: 'app-inplay',
  standalone: true,
  imports: [CommonModule,TopHeaderComponent,SidebarComponent,BottomNavComponent],
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit{
  selectedTab: string = 'cricket'; 
  sports: Sport[] = [];
  constructor(private router:Router) {}
  ngOnInit(): void {
    this.sports = sports;
  }

  
  inPlayDetails(code:string){
    this.router.navigate([`/sport-details/${code}`]);
  }
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
  goBack(){
    window.history.back()
  }
}
