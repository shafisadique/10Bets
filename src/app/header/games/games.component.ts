import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { CricketComponent } from '../../components/cricket/cricket.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Game, GameResponse, Sport, sports } from './match.interface';
import { SportService } from '../../services/sport.service';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule,FooterComponent,CricketComponent,RouterOutlet,RouterModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit{

  selectedTab: string = 'cricket'; // Default tab
  defaultImg: string = 'assets/elips.png';
  sportsDetails:Sport[]=sports;
  getGameList :Game[]=[];
  
  constructor(private router:Router,private sportService:SportService){}
  
  ngOnInit(): void {
    this.getGame()
  }

  getGame(){
    this.sportService.getGameList().subscribe({
      next:(res:GameResponse)=>{
        this.getGameList =res.gameList;
        console.log(this.getGameList)
      }
    })
  }

  isLive(matchDateTimeStr: string, matchType: string): boolean {
    const currentTime = new Date();
    const matchDateTime = new Date(matchDateTimeStr);
    const matchEndTime = this.getMatchEndTime(matchDateTime, matchType);

    // Define a window where the match is considered live
    // For simplicity, we'll consider the match live from its start time until it ends
    return currentTime >= matchDateTime && currentTime <= matchEndTime;
  }


  isUpcoming(matchTime: string): boolean {
    const currentTime = new Date();
    const matchDateTime = new Date(matchTime);
  
    // Return true if the match is in the future
    return matchDateTime > currentTime;
  }

  getMatchEndTime(matchDateTime: Date, matchType: string): Date {
    let matchDurationMilliseconds = 0;
  
    // Adjust match duration based on the match type
    switch (matchType.toUpperCase()) {
      case 'TEST':
        // Test matches typically last for 5 days (5 * 24 hours)
        matchDurationMilliseconds = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
        break;
      case 'ODI':
        // ODI matches usually last for about 8 hours
        matchDurationMilliseconds = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
        break;
      case 'T-20':
        // T-20 matches typically last for 3-4 hours
        matchDurationMilliseconds = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
        break;
      default:
        // Default to a 4-hour duration for other types, or you can handle differently
        matchDurationMilliseconds = 4 * 60 * 60 * 1000;
        break;
    }
  
    return new Date(matchDateTime.getTime() + matchDurationMilliseconds);
  }
  

  // isLive(index: number): boolean {
  //   return index < 2; // Example logic to show "LIVE" for the first two matches
  // }

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
