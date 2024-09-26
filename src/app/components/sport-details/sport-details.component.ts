import { CommonModule } from '@angular/common';
import { Component, inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatchOdds } from './oddsModel';
import { Subscription } from 'rxjs';
import { fancyDetailsData, matchOddsData } from '../../shared/user.interface';
import { SessionBet, SessionData, sessions } from '../../shared/bets.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceBetsComponent } from './place-bets/place-bets.component';
import { SportService } from '../../services/sport.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-sport-details',
  standalone: true,
  imports: [CommonModule,LoadingComponent],
  templateUrl: './sport-details.component.html',
  styleUrl: './sport-details.component.css'
})
export class SportDetailsComponent implements OnInit, OnDestroy{
  activeTab: string = 'gameInfo'; // Default tab
  selectedTab: string = 'live-tv';
  posBetsArray: { id: string; value: number }[] = [];
  private subscriptions = new Subscription();
  public currentRoute:any;
  cricketData =false;
  private sanitizer =inject(DomSanitizer)
  isLoading:boolean =false;
  gamesName:string ='CRICKET';
  getBettingArrayData:any[]=[];
  fancyDetails:any[]=[];
  MatchOdds:any[] =[];
  showLiveTV: boolean = true; // Track visibility of Live TV
  showScore: boolean = false; // Track visibility of Score
  matchCode:any;
  eventSource!: EventSource
  isLiveScoreVisible: boolean = true;
  // sessions: SessionData[]= []; 
  // matchBets:SessionBet[] = [];
  sessions: any[]= []; 
  matchBets:any[] = [];
  
  streamLink:any='';
  sanitizedScoreDetails:any;  
  
  constructor(
    private modalService: NgbModal,
    private sportService:SportService,
    private route: ActivatedRoute,
    private toastr:ToastrService,
    private ngZone:NgZone,
  ){}
  ngOnInit(): void {
    this.matchCode = this.route.snapshot.paramMap.get('matchcode');
    this.initializeEventSource();
    // this.SportDetails();
    this.subscriptions.add(this.SportDetails());

  }
  visibilityStates:any = {
    mybet: false,
    gameInfo:false,
  };
  
  setActiveTab(tab: string) {
    this.activeTab = tab; // Switch active tab
    // Ensure Live TV or Score is shown when Game Info is active
    if (this.activeTab === 'gameInfo') {
      this.showLiveTV = false;  // Show Live TV when Game Info is active
      this.showScore = true;   // Hide Score
    }
    if (this.activeTab === 'mybet') {
      this.showLiveTV = false;  // Show Live TV when Game Info is active
      this.showScore = false;   // Hide Score
    }
  }
  back(){
    window.history.back()
  }

  initializeEventSource() {
    if (this.matchCode) {
      this.ngZone.runOutsideAngular(() => {
        this.eventSource = new EventSource(`https://stream.betguru247.net/sse/stream/${this.matchCode}`);
        this.eventSource.onmessage = (event) => {
          this.ngZone.run(() => {
            try {
              let obj = JSON.parse(event.data);
              this.MatchOdds = obj.matchOdds;
              this.fancyDetails = obj.sessionOdds;
            } catch (e) {
              console.log(e);
            }
          });
        };
      });
    }
  }

  
  SportDetails(){
    this.sportService.getPlaceCricketDetails(this.matchCode).subscribe({
      next: (res: any) => {
        this.getBettingArrayData = res.gameList;
        this.sessions = res.sessionBet;
        this.matchBets =res.matchBet;
        this.sportService.updateBalance(res.coin); 
        console.log(this.sessions,this.matchBets)
        this.posBetsArray = this.convertPosBetsToArray(res.bits);
        this.sanitizedScoreDetails = this.sanitizer.bypassSecurityTrustResourceUrl(res.scoreId);
        this.streamLink = this.sanitizer.bypassSecurityTrustResourceUrl(res.streamLink);

      }
      })
    }

    convertPosBetsToArray(posBets: any): { id: string, value: any }[] {
      return Object.entries(posBets).map(([key, value]) => ({ id: key, value }));
    }

      toggleLiveScore() {
        this.showLiveTV = !this.showScore;
      }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  // Opens the betting modal with specific data
  openBettingModal(mode: string, data: any): void {
    let rate;
    let run = 0;
    let type = 0;
    switch (mode) {
      case 'K':
        rate = data.krate;
        console.log(typeof rate)
        break;
      case 'L':
        rate = data.lrate;
        break;
      case 'YES':
        rate = data.yrate;
        run = data.yrun;
        type = 1;
        break;
      case 'NO':
        rate = data.nrate;
        run = data.nrun;
        type = 1;
        break;
    }
    if (rate > 0) {
      const modalRef = this.modalService.open(PlaceBetsComponent, {
        windowClass: 'custom-modal-content',
        centered: true
      });

      modalRef.componentInstance.data = {
        mode,
        rate,
        type,
        team: data.team ?? data.name,
        sid: data.id,
        run,
        match_code:this.matchCode
      };

      modalRef.result.then((result: any) => {
        if (result === true) {
          this.SportDetails();

        }
      });
    } else {
      console.error('Rate must be greater than zero');
      this.toastr.error('Server Error')
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

  toggleVisibility(sectionKey: string): void {
    const wasAlreadyVisible = this.visibilityStates[sectionKey];
    for (const key in this.visibilityStates) {
      if (this.visibilityStates.hasOwnProperty(key)) {
        this.visibilityStates[key] = false;
        this.initializeEventSource();
      }
    }
    this.visibilityStates[sectionKey] = !wasAlreadyVisible;
  }
  
  toggleVisibiltiyForLiveOrScore(section: 'liveTV' | 'score') {
    if (section === 'liveTV') {
      this.showLiveTV = true;
      this.showScore = false;
    } else if (section === 'score') {
      this.showLiveTV = false;
      this.showScore = true;
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    
  }

}
