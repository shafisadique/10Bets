import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TopHeaderComponent } from '../../header/top-header/top-header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { BottomNavComponent } from '../../header/bottom-nav/bottom-nav.component';
import { Sport, sports } from './inplay.interface';
import { SportService } from '../../services/sport.service';
import { Game, GameResponse } from '../../header/games/match.interface';

@Component({
  selector: 'app-inplay',
  standalone: true,
  imports: [CommonModule,TopHeaderComponent,SidebarComponent,BottomNavComponent],
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit{
  selectedTab: string = 'cricket'; 
  sports:any[] = [];
  constructor(private router:Router,private sportService:SportService) {}
  ngOnInit(): void {
    this.sports = sports;
    this.inPlayGameDetails()
  }

  inPlayGameDetails() {
    this.sportService.getGameList().subscribe({
      next: (res: GameResponse) => {
        console.log(res);
  
        const cricketMatches = res.gameList.map((match: any) => {
          const matchTitle = match.title || '';  // Fallback to empty string if title is undefined
          const teams = matchTitle.split(/ V |VS/i);  // Split the title into teams, case insensitive
          const team1 = teams[0] || 'Unknown Team 1';  // Fallback if teams[0] is undefined
          const team2 = teams[1] || 'Unknown Team 2';  // Fallback if teams[1] is undefined
  
          return {
            title: matchTitle,
            team1,  // Team 1 extracted from title
            team2,  // Team 2 extracted from title
            team1Img: match.img1 || 'assets/elips.png',  // Default image if img1 is null
            team2Img: match.img2 || 'assets/elips.png',  // Default image if img2 is null
            matchcode: match.matchcode,
            isLive: new Date(match.time) <= new Date(),  // Check if match is live based on time
            dateTime: match.time,  // Match date and time
            bets: [
              { title: 'MATCH BETS', value: match.matchType || 'N/A' },
              { title: 'MATCH TYPE', value: '0' || 'N/A' },
              { title: 'SESSION BETS', value: '0' || 'N/A' }
            ]
          };
        });
  
        console.log(cricketMatches);
  
        // Update the cricket sport object with the matches from the API
        const cricketSport = this.sports.find(sport => sport.id === 'cricket');
        if (cricketSport) {
          cricketSport.matches = cricketMatches;
        }
      },
      error: (err) => {
        console.error('Error fetching game list:', err);
      }
    });
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
