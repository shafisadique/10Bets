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
    dateTime?: string;
    bets: Bet[];
  }

  export interface Sport {
    id: string;
    name: string;
    logo: string;
    matches: Match[];
  }


  export const sports = [
    {
      id: 'cricket',
      name: 'Cricket',
      logo: 'assets/cricket-logo.png',
      matches: [
        {
          team1: 'India',
          team2: 'Srilanka',
          matchcode: 'A32',
          team1Img: 'assets/india.png',
          team2Img: 'assets/srilanka.png',
          isLive: true,
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'ODI' }
          ]
        },
        {
            team1: 'England',
            team2: 'Australia',
            matchcode: 'A32',
            team1Img: 'assets/eng.png',
            team2Img: 'assets/aus.png',
            isLive: false,
            dateTime: '2024-09-19 07:00PM',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'ODI' }
            ]
          },
          {
            team1: 'South Africa',
            team2: 'Afghanistan',
            matchcode: 'A32',
            team1Img: 'assets/southafrica.png',
            team2Img: 'assets/afg.png',
            isLive: false,
            dateTime: '2024-09-20 03:00PM',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'ODI' }
            ]
          },
        // Add more cricket matches...
      ]
    },
    {
      id: 'football',
      name: 'Football',
      logo: 'assets/football-logo.png',
      matches: [
        {
          team1: 'Canada',
          team2: 'Colombia',
          matchcode: 'B12',
          team1Img: 'assets/canada.png',
          team2Img: 'assets/colombia.png',
          isLive: true,
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Friendly' }
          ]
        },
        // Add more football matches...
      ]
    },
    {
      id: 'tennis',
      name: 'Tennis',
      logo: 'assets/tennis-logo.png',
      matches: [
        {
          team1: 'Player A',
          team2: 'Player B',
          matchcode: 'T34',
          team1Img: 'assets/player_a.png',
          team2Img: 'assets/player_b.png',
          isLive: false,
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SET BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Grand Slam' }
          ]
        },
        // Add more tennis matches...
      ]
    }
  ];