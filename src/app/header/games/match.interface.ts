export interface Bet {
    title: string;
    value: string;
  }
  
  export interface Match {
    team1: string;
    team2: string;
    team1Img: string;
    team2Img: string;
    isLive: boolean;
    matchcode: string;
    dateTime?: string;  // This will be optional, and used for upcoming matches
    bets: Bet[];
  }
  
  export interface Sport {
    id: string;
    name: string;
    logo: string;
    matches: Match[];
  }
  
  export const sports: Sport[] = [
   
    {
      id: 'football',
      name: 'Football',
      logo: 'assets/football.png',
      matches: [
        {
          team1: 'Canada',
          team2: 'Colombia',
          team1Img: 'assets/canada.png',
          team2Img: 'assets/colombia.png',
          isLive: true,
          matchcode: 'B12',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Friendly' },
          ],
        },
        {
          team1: 'France',
          team2: 'United State',
          team1Img: 'assets/france.png',
          team2Img: 'assets/us.png',
          isLive: false,
          matchcode: 'B34',
          dateTime: '2024-09-19 20:00',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Friendly' },
          ],
        },
        {
            team1: 'Australia',
            team2: 'New Zeland',
            team1Img: 'assets/aus.png',
            team2Img: 'assets/newzeland.png',
            isLive: false,
            matchcode: 'B34',
            dateTime: '2024-09-19 20:00',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Friendly' },
            ],
        },
        {
            team1: 'France',
            team2: 'Colombia',
            team1Img: 'assets/france.png',
            team2Img: 'assets/colombia.png',
            isLive: false,
            matchcode: 'B34',
            dateTime: '2024-09-19 20:00',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Friendly' },
            ],
        },
      ],
    },
    {
      id: 'tennis',
      name: 'Tennis',
      logo: 'assets/tennis.png',
      matches: [
        {
          team1: 'Player A',
          team2: 'Player B',
          team1Img: 'assets/player_a.png',
          team2Img: 'assets/player_b.png',
          isLive: true,
          matchcode: 'T34',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SET BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Grand Slam' },
            ],
        },
        {
            team1: 'France',
            team2: 'New Zeland',
            team1Img: 'assets/france.png',
            team2Img: 'assets/newzeland.png',
            isLive: false,
            matchcode: 'T34',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SET BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Grand Slam' },
              ],
          },
          {
            team1: 'Australi',
            team2: 'United State',
            team1Img: 'assets/aus.png',
            team2Img: 'assets/us.png',
            isLive: false,
            matchcode: 'T34',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SET BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Grand Slam' },
              ],
          },
          {
            team1: 'Australi',
            team2: 'United State',
            team1Img: 'assets/aus.png',
            team2Img: 'assets/us.png',
            isLive: false,
            matchcode: 'T34',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SET BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Grand Slam' },
              ],
          },
        ]
    }]
  


    export interface Game {
      matchcode: number;
      declare: number;
      matchType: string;
      mbet: number;
      sbet: number;
      time: string;
      title: string;
      type: string;
      wonBy: string;
      img1: string | null;
      img2: string | null;
    }
    
    export interface GameResponse {
      name: string;
      gameList: Game[];
      code: string;
      coin: number;
      status: boolean;
    }
    