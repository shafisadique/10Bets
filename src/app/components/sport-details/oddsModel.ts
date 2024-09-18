export interface OddsModel {

    matchOdds: MatchOdds[];
    sessionOdds: SessionOdds[];
    score: Score;
  
  }
  
  export interface SessionOdds {
    id: number;
    name: string;
    nrate: string;
    yrate: string;
    nrun: string;
    yrun: string;
    slimit: number;
  }
  
  export interface MatchOdds {
    id: number;
    team: string;
    krate: number;
    lrate: number;
  
  }
  
  export interface Score {
    score1: string;
    score2: string;
    team1: string;
    team2: string;
    bwl: string;
    msg: string;
    player1: string;
    player2: string;
    recentBall: string;
  }
  // Define this in a file like bet-data.model.ts
  export interface BetData {
    mode: string;
    rate: number;
    type: number;
    team: string;
    sid: number;
    run: number;
    match_code: string;
  }
  
  
  export const liveCricketMatch =[
    {_id:'123dsk',team1:'Afghanistan U19',team2:' USA U19 ',back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
    // {_id:'123dsk',team1:'India',team2:'Australia', back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
    // {_id:'123dsk',team1:'South Africa',team2:'England',back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
    // {_id:'123dsk',team1:'WestIndies',team2:'SriLanka',back:1.99,totalBetPlayerBack:'1cr+',lay:45,totalBetPlayerLay:'2cr+'},
  ]
  
  export const matchOdds=[
    {
        "bitteam": "INDIA",
        "bitamount": 1000,
        "bitrate": 0.85,
        "bitmode": "YES"
    },
    {
      "bitteam": "INDIA",
      "bitamount": 1000,
      "bitrate": 0.85,
      "bitmode": "YES"
  },
  ]
  export const sessionBets=[
    [
      {
          "title": "10 Over Run Nor",
          "amount": 1000,
          "rate": 0.80,
          "run": 62,
          "mode": "Yes"
      },
      {
          "title": "10 Over Run Nor",
          "bitamount": 750,
          "bitrate": 0.85,
          "run": 58,
          "bitmode": "No"
      }
  ]
  
  ]