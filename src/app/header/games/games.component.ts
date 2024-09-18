import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { CricketComponent } from '../../components/cricket/cricket.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Sport, sports } from './match.interface';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule,FooterComponent,CricketComponent,RouterOutlet,RouterModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  selectedTab: string = 'cricket'; // Default tab
  defaultImg: string = 'assets/elips.png';
  constructor(private router:Router){}
  sportsDetails:Sport[]=sports;

  isLive(index: number): boolean {
    return index < 2; // Example logic to show "LIVE" for the first two matches
  }

  changeTab(sport: string) {
    this.selectedTab = sport;
  }
  setDefaultImage(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.defaultImg;
  }
  matchDetails(code:any){
    this.router.navigate([`/sport-details/${code}`])
  }

}
