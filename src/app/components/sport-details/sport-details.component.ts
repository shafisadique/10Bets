import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatchOdds } from './oddsModel';
import { Subscription } from 'rxjs';
import { fancyDetailsData, matchOddsData } from '../../shared/user.interface';
import { SessionBet, sessionBets, SessionData, sessions } from '../../shared/bets.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceBetsComponent } from './place-bets/place-bets.component';

@Component({
  selector: 'app-sport-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sport-details.component.html',
  styleUrl: './sport-details.component.css'
})
export class SportDetailsComponent implements OnInit{
  activeTab: string = 'game-info'; // Default tab
  selectedTab: string = 'live-tv';
  posBetsArray:any[]=[]
  private cricketBetSubscription!: Subscription;
  public currentRoute:any;
  cricketData =false;
  isLoading:boolean =false;
  gamesName:string ='CRICKET';
  getBettingArrayData:any[]=matchOddsData;
  fancyDetails:any[]=fancyDetailsData;
  MatchOdds =[];
  isLiveScoreVisible: boolean = true;
  sessions: SessionData[]= sessions; 
  sessionBets:SessionBet[] = sessionBets;
  setActiveTab(tab: string) {
    this.activeTab = tab; // Switch active tab
  }
  constructor(
    private modalService: NgbModal,
  ){}
  ngOnInit(): void {
    this.getBettingData();
  }
  getBettingData(){
    // this.cricketBetSubscription = this.BetService.getGamesBet().subscribe({
    //   next: (res: any) => {
    //     console.log(res)
    //     this.getBettingArrayData = res.gameList;})
      }

      toggleLiveScore() {
        this.isLiveScoreVisible = !this.isLiveScoreVisible;
      }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  open(mode:any,data:any){
    console.log('working',data)
      let rate;
      let run = 0;
      let type = 0;
      switch (mode) {
          case 'K':
              rate = data.kRate;
              type = 0;
              break;
          case 'L':
              rate = data.lRate;
              type = 0;
              break;
          case 'YES':
              rate = data.yRate;
              run = data.yRun;
              type = 1;
              break;
          case 'NO':
              rate = data.nRate;
              run = data.nRun;
              type = 1;
              break;
            }
            if (rate > 0) {
              console.log('working 1')
              const modalRef = this.modalService.open(PlaceBetsComponent, {
                windowClass: 'custom-modal-content',
                centered: true
              });
              (<PlaceBetsComponent> modalRef.componentInstance).data = {
                  mode,
                  rate: rate,
                  type: type, 
                  team: data.team ?? data.name,
                  sid: data.id,
                  run: run,
                  // match_code: this.matchCode,
              };
              modalRef.result.then((result: any) => {
                  if (result == 1) {
                      // this.position();
                  }
              });
          } else {
              // this.toastr.error('Rate must be grater than zero');
          }
  }

  truncateTitle(title: string | undefined | null): string {
    if (!title) {
      return ''; // or return a default value, like 'No Title'
    }
  
    if (title.length > 28) {
      return title.substring(0, 25) + '...';
    } else {
      return title;
    }
  }
}
