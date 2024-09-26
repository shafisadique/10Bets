export interface Bet {
    title: string;
    value: string;
  }
  
  export interface Match {
    title: string;
    team1: string;
    team2: string;
    team1Img: string;
    team2Img: string;
    matchcode: string;
    isLive: boolean;
    dateTime: string; // or Date if you're handling dates
    bets: { title: string; value: string }[];
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

      ]
    },
    {
      id: 'football',
      name: 'Football',
      logo: 'assets/football-logo.png',
      matches: [
        {
          title: 'Canada vs Colombia',
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
          title: 'Canada vs Colombia',
          team1: 'Player A',
          team2: 'Player B',
          matchcode: 'T34',
          team1Img: 'assets/elips.png',
          team2Img: 'assets/elips.png',
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